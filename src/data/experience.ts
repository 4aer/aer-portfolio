export type Experience = {
  slug: string;
  title: string;
  org: string;
  location: string;
  start: string; // "Jan 2026"
  end: string; // "May 2026" | "Present"
  summary: string; // one line, for the skimmable landing view
  bullets: string[]; // full detail, for the dedicated page
};

export const experience: Experience[] = [
  {
    slug: "bank-of-makati",
    title: "Computer Support Operations Intern",
    org: "Bank of Makati",
    location: "Philippines",
    start: "Jan 2026",
    end: "May 2026",
    summary: "Desktop, Network, and Access department — SIEM deployment and hardware/software support.",
    bullets: [
      "Contributed to an enterprise-wide SIEM deployment, remotely installing and configuring Elastic Agent and Wazuh Agent across 100+ workstations, coordinating scheduling with branch departments independently.",
      "Resolved recurring SIEM enrollment failures through systematic troubleshooting, ensuring zero gaps in monitoring coverage across the deployment campaign.",
      "Diagnosed and resolved hardware and software support tickets alongside Technical Support Engineers, including root-causing BSOD errors via crash log analysis and SFC/DISM diagnostics.",
      "Performed component-level hardware diagnosis, isolating and replacing defective RAM, PSUs, and motherboards through systematic elimination testing.",
    ],
  },
];
