"use client";

import { useState } from "react";
import { TechMarquee } from "./TechMarquee";
import { TechStaticGrid } from "./TechStaticGrid";

export function TechStackToggle() {
  const [mode, setMode] = useState<"animated" | "static">("animated");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-1 self-start rounded-full border border-gray-200 p-1">
        {(["animated", "static"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setMode(option)}
            aria-pressed={mode === option}
            className={`font-technical text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-full transition-colors ${
              mode === option
                ? "bg-ink text-background"
                : "text-gray-500 hover:text-ink"
            }`}
          >
            {option === "animated" ? "Animated" : "Grouped"}
          </button>
        ))}
      </div>

      {mode === "animated" ? <TechMarquee /> : <TechStaticGrid />}
    </div>
  );
}
