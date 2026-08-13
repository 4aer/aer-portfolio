"use client";

type YearSelectorProps = {
  years: string[];
  selected: string;
  onSelect: (year: string) => void;
};

export function YearSelector({ years, selected, onSelect }: YearSelectorProps) {
  return (
    <div className="flex items-center gap-1">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          onClick={() => onSelect(year)}
          aria-pressed={selected === year}
          className={`font-technical text-[11px] px-3 py-1.5 rounded-full border transition-colors ${
            selected === year
              ? "bg-ink text-background border-ink"
              : "border-gray-200 text-gray-500 hover:text-ink"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
