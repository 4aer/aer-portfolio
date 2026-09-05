import { SectionHeader } from "@/components/ui/SectionHeader";
import { about } from "@/data/about";

export function AboutSection() {
  return (
    <section id="about" className="py-12">
      <SectionHeader label="about" />
      <p className="text-gray-500 text-[14px] leading-relaxed max-w-lg">{about.blurb}</p>
    </section>
  );
}
