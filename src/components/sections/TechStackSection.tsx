import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechStackToggle } from "@/components/ui/TechStackToggle";

export function TechStackSection() {
  return (
    <section className="py-12">
      <SectionHeader label="tech stack" href="/tech-stack" linkText="View all" />
      <TechStackToggle />
    </section>
  );
}
