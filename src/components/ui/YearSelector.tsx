"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type YearSelectorProps = {
  years: string[]; // sorted newest first, per getAvailableYears()
  selected: string;
  onSelect: (year: string) => void;
};

export function YearSelector({ years, selected, onSelect }: YearSelectorProps) {
  const index = years.indexOf(selected);
  const canGoNewer = index > 0; // years[0] is the newest
  const canGoOlder = index < years.length - 1;

  // Tracks which direction the year just moved, purely to pick the
  // slide-in direction for the animation below.
  const [direction, setDirection] = useState<"older" | "newer" | null>(null);

  function goOlder() {
    if (!canGoOlder) return;
    setDirection("older");
    onSelect(years[index + 1]);
  }

  function goNewer() {
    if (!canGoNewer) return;
    setDirection("newer");
    onSelect(years[index - 1]);
  }

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={goOlder}
        disabled={!canGoOlder}
        aria-label="Show an earlier year"
        className="flex items-center justify-center w-7 h-7 rounded-full text-gray-400 hover:text-ink disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
      >
        <ChevronLeft size={15} />
      </button>

      <div className="relative w-14 h-7 overflow-hidden">
        <span
          key={selected}
          className={`absolute inset-0 flex items-center justify-center font-technical text-[13px] tabular-nums ${
            direction === "older"
              ? "animate-year-in-from-right"
              : direction === "newer"
                ? "animate-year-in-from-left"
                : ""
          }`}
        >
          {selected}
        </span>
      </div>

      <button
        type="button"
        onClick={goNewer}
        disabled={!canGoNewer}
        aria-label="Show a later year"
        className="flex items-center justify-center w-7 h-7 rounded-full text-gray-400 hover:text-ink disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
      >
        <ChevronRight size={15} />
      </button>
    </div>
  );
}
