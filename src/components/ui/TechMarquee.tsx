"use client";

import { techByCategory, type TechCategory } from "@/data/techStack";
import { TechPill } from "./TechPill";

const rows: { category: TechCategory; direction: "left" | "right" }[] = [
  { category: "frontend", direction: "left" },
  { category: "backend", direction: "right" },
  { category: "tools", direction: "left" },
];

export function TechMarquee() {
  return (
    <div className="flex flex-col gap-3">
      {rows.map((row) => {
        const items = techByCategory(row.category);
        // Duplicate the row so the loop is seamless regardless of item count.
        const looped = [...items, ...items];

        return (
          <div key={row.category} className="relative overflow-hidden">
            <div
              className={`flex gap-3 w-max ${
                row.direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
              }`}
            >
              {looped.map((tech, i) => (
                <TechPill key={`${tech.name}-${i}`} tech={tech} />
              ))}
            </div>
            {/* fade edges so the loop point isn't visible */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
          </div>
        );
      })}
    </div>
  );
}
