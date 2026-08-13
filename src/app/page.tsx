import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { OutsideTheIdeSection } from "@/components/sections/OutsideTheIdeSection";
import { GithubActivitySection } from "@/components/sections/GithubActivitySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6">
      <div className="flex justify-end pt-6">
        <ThemeToggle />
      </div>
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <TechStackSection />
      <EducationSection />
      <OutsideTheIdeSection />
      <GithubActivitySection />
      <ContactSection />
    </main>
  );
}
