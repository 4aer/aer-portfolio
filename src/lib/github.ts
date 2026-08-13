import snapshot from "../../public/github-activity.json";

export type ContributionDay = {
  date: string; // ISO date
  count: number;
};

export type ContributionYear = {
  totalContributions: number;
  weeks: ContributionDay[][];
};

export type GithubSnapshot = {
  generatedAt: string;
  username: string;
  years: Record<string, ContributionYear>;
};

const typedSnapshot = snapshot as GithubSnapshot;

export function getSnapshot(): GithubSnapshot {
  return typedSnapshot;
}

export function getAvailableYears(): string[] {
  return Object.keys(typedSnapshot.years).sort((a, b) => Number(b) - Number(a));
}

export function getYearData(year: string): ContributionYear | undefined {
  return typedSnapshot.years[year];
}
