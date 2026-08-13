import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects — Mark Nathan B. Olmedo" };

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-12">
      <SectionHeader label="all projects" />
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
