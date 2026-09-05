import type { Tech } from "@/data/techStack";
import { techIcons } from "@/lib/icons";

// Brand color per icon slug — applied only to the icon glyph. The pill
// itself (fill, border, label text) stays monochrome per the
// minimal-design rule of no accent color; logos are the one deliberate
// exception since they're inherently branded.
const brandColor: Record<string, string> = {
  nextjs: "#000000",
  react: "#61DAFB",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  html5: "#E34F26",
  css3: "#1572B6",
  tailwindcss: "#38BDF8",
  vite: "#646CFF",
  nodejs: "#5FA04E",
  express: "#000000",
  fastapi: "#009688",
  flask: "#000000",
  python: "#3776AB",
  php: "#777BB4",
  codeigniter: "#EF4223",
  mysql: "#4479A1",
  postgresql: "#4169E1",
  sqlite: "#003B57",
  mariadb: "#C0765A",
  supabase: "#3ECF8E",
  git: "#F05032",
  github: "#181717",
  postman: "#FF6C37",
  docker: "#2496ED",
  vercel: "#000000",
  render: "#46E3B7",
};

export function TechPill({ tech }: { tech: Tech }) {
  const Icon = techIcons[tech.icon];
  const color = brandColor[tech.icon];

  return (
    <div className="flex items-center gap-2 shrink-0 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
      {Icon ? (
        <Icon
          className="text-[15px]"
          style={color ? { color } : undefined}
          aria-hidden
        />
      ) : (
        <span
          className="flex items-center justify-center w-[15px] h-[15px] rounded-full bg-gray-200 font-technical text-[8px] text-gray-500"
          aria-hidden
        >
          {tech.name.charAt(0)}
        </span>
      )}
      <span className="font-technical text-[11px] uppercase tracking-wide text-gray-500 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}
