import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="py-12">
      <SectionHeader label="experience" href="/experience" linkText="View details" />
      <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
        {experience.map((role) => (
          <div key={role.slug} className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-5">
            <span className="font-technical text-[11px] uppercase text-gray-400">
              {role.start} – {role.end}
            </span>
            <div>
              <h3 className="font-medium text-[15px]">{role.title}</h3>
              <p className="text-gray-500 text-[13px]">
                {role.org} · {role.location}
              </p>
              <p className="text-gray-500 text-[14px] mt-2 leading-relaxed">{role.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
