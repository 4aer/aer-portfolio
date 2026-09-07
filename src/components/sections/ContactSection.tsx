import { Mail, Calendar, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CALENDLY_URL = "https://calendly.com/mn-olmedo4/30min";
const EMAIL = "mn.olmedo4@gmail.com";

const contactCards = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Connect",
    value: "Schedule a call",
    href: CALENDLY_URL,
    icon: Calendar,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section className="py-12 border-t border-gray-200">
      <SectionHeader label="Get in Touch" />
      <p className="text-gray-500 text-[14px] leading-relaxed max-w-lg mb-6">
        Open to freelance commissions in my spare time — best suited to small-to-mid scoped projects.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {contactCards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-3 rounded-[16px] border border-gray-200 bg-gray-50 px-4 py-3.5 hover:border-gray-300 transition-colors"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-ink text-background shrink-0">
              <card.icon size={15} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="font-technical text-[9px] uppercase tracking-wide text-gray-400 block">
                {card.label}
              </span>
              <span className="text-[14px] font-medium truncate block">{card.value}</span>
            </span>
            <ArrowRight
              size={14}
              className="text-gray-300 group-hover:text-ink group-hover:translate-x-0.5 transition-all shrink-0"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
