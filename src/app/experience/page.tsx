import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";

export const metadata = { title: "Experience — Mark Nathan B. Olmedo" };

export default function ExperiencePage() {
  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-12">
      <SectionHeader label="experience" />
      <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
        {experience.map((role) => (
          <div key={role.slug} className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-6">
            <span className="font-technical text-[11px] uppercase text-gray-400">
              {role.start} – {role.end}
            </span>
            <div>
              <h3 className="font-medium text-[15px]">{role.title}</h3>
              <p className="text-gray-500 text-[13px] mb-3">
                {role.org} · {role.location}
              </p>
              <ul className="flex flex-col gap-2">
                {role.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-gray-500 text-[14px] leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gray-300"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
