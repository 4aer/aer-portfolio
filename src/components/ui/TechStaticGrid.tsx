import { techByCategory, type TechCategory } from "@/data/techStack";
import { TechPill } from "./TechPill";

const groups: { category: TechCategory; label: string }[] = [
  { category: "frontend", label: "Frontend" },
  { category: "backend", label: "Backend" },
  { category: "tools", label: "Tools" },
];

export function TechStaticGrid() {
  return (
    <div className="flex flex-col gap-6">
      {groups.map((group) => (
        <div key={group.category} className="flex flex-col gap-3">
          <span className="micro-label">{group.label}</span>
          <div className="flex flex-wrap gap-2">
            {techByCategory(group.category).map((tech) => (
              <TechPill key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
