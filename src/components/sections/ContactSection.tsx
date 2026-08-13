import { SectionHeader } from "@/components/ui/SectionHeader";

export function ContactSection() {
  return (
    <section className="py-12 border-t border-gray-200">
      <SectionHeader label="let's work together" />
      <p className="text-gray-500 text-[14px] leading-relaxed max-w-lg mb-6">
        Open to full-stack and flexible dev roles. Reach out by email or
        GitHub, both are checked regularly.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:mn.olmedo4@gmail.com"
          className="font-technical text-[12px] uppercase tracking-wide border border-gray-200 rounded-[8px] px-4 py-2.5 hover:border-gray-300 transition-colors"
        >
          Email →
        </a>
        <a
          href="https://github.com/4aer"
          target="_blank"
          rel="noopener noreferrer"
          className="font-technical text-[12px] uppercase tracking-wide border border-gray-200 rounded-[8px] px-4 py-2.5 hover:border-gray-300 transition-colors"
        >
          GitHub →
        </a>
      </div>
    </section>
  );
}
