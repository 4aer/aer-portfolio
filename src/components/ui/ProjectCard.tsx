import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-3 rounded-[16px] border border-gray-200 p-5 hover:border-gray-300 transition-colors"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-medium text-[15px]">{project.name}</h3>
        <span className="font-technical text-[10px] uppercase text-gray-400 whitespace-nowrap">
          {project.date}
        </span>
      </div>
      <p className="text-gray-500 text-[14px] leading-relaxed">{project.oneLiner}</p>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="font-technical text-[9px] uppercase tracking-wide text-gray-500 border border-gray-200 rounded-full px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
      <span className="font-technical text-[11px] uppercase tracking-wide text-gray-400 group-hover:text-ink transition-colors mt-1">
        Details →
      </span>
    </Link>
  );
}
