import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/projects"
        className="font-technical text-[11px] uppercase tracking-wide text-gray-400 hover:text-ink transition-colors"
      >
        ← All projects
      </Link>

      <div className="flex items-baseline justify-between gap-3 mt-6 border-b border-gray-200 pb-4">
        <h1 className="font-display text-2xl lowercase">{project.name}</h1>
        <span className="font-technical text-[11px] uppercase text-gray-400 whitespace-nowrap">
          {project.date}
        </span>
      </div>

      <p className="text-gray-500 text-[15px] leading-relaxed mt-6 max-w-lg">
        {project.oneLiner}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-technical text-[10px] uppercase tracking-wide text-gray-500 border border-gray-200 rounded-full px-2.5 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.writeup && (
        <p className="text-[15px] leading-relaxed mt-8 max-w-lg">{project.writeup}</p>
      )}

      <ul className="flex flex-col gap-2 mt-8 list-none">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-gray-500 text-[14px] leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gray-300">
            {h}
          </li>
        ))}
      </ul>

      <div className="flex gap-3 mt-8">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-technical text-[11px] uppercase tracking-wide border border-gray-200 rounded-[8px] px-4 py-2.5 hover:border-gray-300 transition-colors"
          >
            Repo →
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-technical text-[11px] uppercase tracking-wide bg-ink text-background rounded-[8px] px-4 py-2.5 hover:opacity-85 transition-opacity"
          >
            Live demo →
          </a>
        )}
      </div>
    </main>
  );
}
