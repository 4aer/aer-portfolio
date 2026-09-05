import Link from "next/link";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  label: string; // e.g. "projects", "experience" — lowercase, sets the section's identity
  href?: string; // if present, renders the "View All" link
  linkText?: string; // defaults to "View all" — override with "See more" / "View details" etc.
  actions?: ReactNode; // optional inline control (e.g. a view toggle), rendered just before the "View All" link
};

export function SectionHeader({ label, href, linkText = "View all", actions }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-3 mb-8">
      <h2 className="font-display text-2xl lowercase tracking-tight">{label}</h2>
      <div className="flex items-center gap-3">
        {actions}
        {href && (
          <Link
            href={href}
            className="font-technical text-[11px] uppercase tracking-wider text-gray-400 hover:text-ink transition-colors whitespace-nowrap"
          >
            {linkText} →
          </Link>
        )}
      </div>
    </div>
  );
}
