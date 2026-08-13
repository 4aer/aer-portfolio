import { SectionHeader } from "@/components/ui/SectionHeader";
import { outsideIde } from "@/data/outsideIde";

export function OutsideTheIdeSection() {
  if (!outsideIde.blurb) {
    // No content supplied yet — render nothing rather than placeholder copy.
    return null;
  }

  return (
    <section className="py-12">
      <SectionHeader label="outside the ide" />
      <p className="text-gray-500 text-[14px] leading-relaxed max-w-lg">{outsideIde.blurb}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {outsideIde.interests.map((interest) => (
          <span
            key={interest}
            className="font-technical text-[11px] border border-gray-200 rounded-full px-3 py-1 text-gray-500"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}
