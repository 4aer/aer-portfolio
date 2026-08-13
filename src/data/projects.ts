export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  date: string; // e.g. "March 2026"
  stack: string[];
  highlights: string[]; // resume-style bullets, always available
  writeup?: string; // longer "why I built it / what was hard" narrative, optional
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean; // true = appears on landing page grid
};

export const projects: Project[] = [
  {
    slug: "cinelyt",
    name: "Cinelyt",
    oneLiner: "AI-powered streaming discovery platform with personalized recommendations.",
    date: "March 2026",
    stack: ["Next.js", "TypeScript", "FastAPI", "Python", "Supabase", "Gemini AI", "TMDB API"],
    highlights: [
      "Built a full-stack platform combining Gemini AI and TMDB API to generate personalized movie/TV recommendations with media playback.",
      "Implemented global state management using Zustand with persistent storage.",
      "Deployed on a split architecture (Vercel frontend, Render backend), configuring CORS and environment variables for production.",
    ],
    featured: true,
  },
  {
    slug: "jotter",
    name: "Jotter",
    oneLiner: "Infinite-canvas whiteboard app built from scratch on raw HTML5 Canvas.",
    date: "June 2026",
    stack: ["React", "TypeScript", "Vite", "Zustand", "HTML5 Canvas"],
    highlights: [
      "Built an infinite-canvas whiteboard from scratch on raw HTML5 Canvas rather than a canvas library, supporting paste-to-canvas and pen/highlighter/shape tools.",
      "Designed a unified element data model (shared position, size, rotation, z-index across images, text, strokes, and shapes) so rendering, hit-detection, and undo/redo all operate on one predictable structure.",
    ],
    featured: true,
  },
  {
    slug: "sargo",
    name: "SARGO",
    oneLiner: "Smart Assisted Rental Game Operation — IoT rental system with live dashboard.",
    date: "November 2025",
    stack: ["Raspberry Pi", "ESP32", "Python", "JavaScript", "IoT", "MQTT"],
    highlights: [
      "Led development of a Raspberry Pi-based rental system integrating sensor inputs, relay-controlled hardware, and MQTT communication.",
      "Built a billing module that computes rental cost from session duration and auto-triggers settlement, removing manual billing.",
      "Developed a web-based dashboard for live session tracking and usage logs, giving operators full visibility without manual checks.",
    ],
    featured: true,
  },
  {
    slug: "lememory",
    name: "LeMemory",
    oneLiner: "LeBron James themed memory card game, built fully client-side with zero dependencies.",
    date: "January 2025",
    stack: ["Vanilla JS", "HTML5", "CSS", "Web Audio API"],
    highlights: [
      "Architected a fully client-side memory card game with zero dependencies, using separate classes for state, controls, cards, audio, and UI.",
      "Supports 4 difficulty modes and score persistence.",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
