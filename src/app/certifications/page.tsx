import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications } from "@/data/education";

export const metadata = { title: "Certifications — Mark Nathan B. Olmedo" };

export default function CertificationsPage() {
  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-12">
      <SectionHeader label="certifications" />
      <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
        {certifications.map((cert) => (
          <div key={cert.slug} className="grid sm:grid-cols-[8rem_1fr] gap-2 sm:gap-6 py-5">
            <span className="font-technical text-[11px] uppercase text-gray-400">{cert.date}</span>
            <div>
              <h4 className="font-medium text-[14px]">{cert.name}</h4>
              <p className="text-gray-500 text-[13px]">
                {cert.issuer}
                {cert.credentialId && ` · Credential ID ${cert.credentialId}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
