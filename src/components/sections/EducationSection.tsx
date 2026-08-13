import { SectionHeader } from "@/components/ui/SectionHeader";
import { education, featuredCertifications } from "@/data/education";

export function EducationSection() {
  return (
    <section className="py-12">
      <SectionHeader label="education" />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-8">
        <div>
          <h3 className="font-medium text-[15px]">{education.degree}</h3>
          <p className="text-gray-500 text-[14px]">
            {education.school} · {education.location}
          </p>
        </div>
        <span className="font-technical text-[11px] uppercase text-gray-400 whitespace-nowrap">
          {education.start} – {education.end}
        </span>
      </div>

      <SectionHeader label="certifications" href="/certifications" linkText="View all" />
      <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
        {featuredCertifications.map((cert) => (
          <div key={cert.slug} className="grid sm:grid-cols-[8rem_1fr] gap-2 sm:gap-6 py-4">
            <span className="font-technical text-[11px] uppercase text-gray-400">{cert.date}</span>
            <div>
              <h4 className="font-medium text-[14px]">{cert.name}</h4>
              <p className="text-gray-500 text-[13px]">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
