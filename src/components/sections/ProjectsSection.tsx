import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="py-12">
      <SectionHeader label="projects" href="/projects" linkText="View all" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
