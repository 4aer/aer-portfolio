import type { Tech } from "@/data/techStack";
import { techIcons } from "@/lib/icons";

export function TechPill({ tech }: { tech: Tech }) {
  const Icon = techIcons[tech.icon];

  return (
    <div className="flex items-center gap-2 shrink-0 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
      {Icon ? (
        <Icon className="text-[15px] text-gray-500" aria-hidden />
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
