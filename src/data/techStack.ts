export type TechCategory = "frontend" | "backend" | "tools";

export type Tech = {
  name: string;
  category: TechCategory;
  icon: string; // slug used to resolve an icon component/asset — every entry must have one
};

// Add a new tool by adding one entry here (with an icon slug). Both the
// animated marquee (grouped into 3 rows by category) and the static
// grouped view (grouped the same way, just laid out differently) read
// from this single list — no layout code needs to change.
export const techStack: Tech[] = [
  // frontend
  { name: "Next.js", category: "frontend", icon: "nextjs" },
  { name: "React", category: "frontend", icon: "react" },
  { name: "TypeScript", category: "frontend", icon: "typescript" },
  { name: "JavaScript", category: "frontend", icon: "javascript" },
  { name: "HTML5", category: "frontend", icon: "html5" },
  { name: "CSS3", category: "frontend", icon: "css3" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss" },
  { name: "Vite", category: "frontend", icon: "vite" },
  { name: "Zustand", category: "frontend", icon: "zustand" },

  // backend
  { name: "Node.js", category: "backend", icon: "nodejs" },
  { name: "Express", category: "backend", icon: "express" },
  { name: "FastAPI", category: "backend", icon: "fastapi" },
  { name: "Flask", category: "backend", icon: "flask" },
  { name: "Python", category: "backend", icon: "python" },
  { name: "PHP", category: "backend", icon: "php" },
  { name: "CodeIgniter 4", category: "backend", icon: "codeigniter" },
  { name: "MySQL", category: "backend", icon: "mysql" },
  { name: "PostgreSQL", category: "backend", icon: "postgresql" },
  { name: "SQLite", category: "backend", icon: "sqlite" },
  { name: "MariaDB", category: "backend", icon: "mariadb" },
  { name: "Supabase", category: "backend", icon: "supabase" },

  // tools
  { name: "Git", category: "tools", icon: "git" },
  { name: "GitHub", category: "tools", icon: "github" },
  { name: "Postman", category: "tools", icon: "postman" },
  { name: "Docker", category: "tools", icon: "docker" },
  { name: "Vercel", category: "tools", icon: "vercel" },
  { name: "Render", category: "tools", icon: "render" },
];

export const techByCategory = (category: TechCategory) =>
  techStack.filter((t) => t.category === category);
