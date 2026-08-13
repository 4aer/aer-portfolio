export type Education = {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  coursework?: string[];
};

export const education: Education = {
  degree: "Bachelor of Science in Information Technology",
  school: "National Teachers College, Manila",
  location: "Manila, Philippines",
  start: "Sept 2022",
  end: "Aug 2026",
  coursework: ["Software Engineering", "Databases", "Web Development", "Networking", "InfoSec"],
};

export type Certification = {
  slug: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  featured: boolean; // true = appears on landing page
};

export const certifications: Certification[] = [
  {
    slug: "ibm-coursera",
    name: "Back-End Apps with Node.js/Express, Front-End Apps with React, Intro to Software Engineering",
    issuer: "IBM (Coursera)",
    date: "2025",
    featured: true,
  },
  {
    slug: "cisco-networking",
    name: "Python Essentials 1 & 2, JavaScript Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    date: "2024",
    featured: true,
  },
  {
    slug: "oldst-labs-hackathon",
    name: "Emerging Technology Award",
    issuer: "Old.St Labs Hackathon",
    date: "Nov 2025",
    featured: false,
  },
  {
    slug: "dost-yif",
    name: "Gold Medal, Young Inventors Forum",
    issuer: "Expo & Trade Fair - DOST",
    date: "Feb 2019",
    featured: false,
  },
];

export const featuredCertifications = certifications.filter((c) => c.featured);
