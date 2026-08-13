/**
 * Fetches GitHub contribution data via the GraphQL API and writes it to
 * public/github-activity.json in the shape src/lib/github.ts expects.
 *
 * Requires GITHUB_TOKEN (a token with read:user scope) and
 * GITHUB_USERNAME as env vars — both supplied by the workflow.
 */
const fs = require("fs");
const path = require("path");

const USERNAME = process.env.GITHUB_USERNAME || "4aer";
const TOKEN = process.env.GH_SNAPSHOT_TOKEN;

if (!TOKEN) {
  console.error("GH_SNAPSHOT_TOKEN is not set.");
  process.exit(1);
}

const QUERY = `
  query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

async function fetchYear(year) {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY, variables: { login: USERNAME, from, to } }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }

  const calendar = json.data.user.contributionsCollection.contributionCalendar;
  return {
    totalContributions: calendar.totalContributions,
    weeks: calendar.weeks.map((w) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount }))
    ),
  };
}

async function main() {
  const currentYear = new Date().getUTCFullYear();
  const yearsToFetch = [currentYear, currentYear - 1, currentYear - 2];

  const years = {};
  for (const year of yearsToFetch) {
    years[year] = await fetchYear(year);
  }

  const snapshot = {
    generatedAt: new Date().toISOString(),
    username: USERNAME,
    years,
  };

  const outPath = path.join(__dirname, "..", "public", "github-activity.json");
  fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2) + "\n");
  console.log(`Wrote snapshot to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
