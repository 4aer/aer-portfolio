import type { ContributionYear } from "@/lib/github";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function levelForCount(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

const levelClass: Record<number, string> = {
  0: "bg-gray-100",
  1: "bg-gray-300",
  2: "bg-gray-500",
  3: "bg-gray-700",
  4: "bg-ink",
};

export function ContributionGraph({ year }: { year: ContributionYear | undefined }) {
  if (!year || year.weeks.length === 0) {
    return (
      <p className="font-technical text-[12px] text-gray-400">
        No snapshot data for this year yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 font-technical text-[10px] text-gray-400 pl-1">
        {MONTH_LABELS.map((m) => (
          <span key={m} className="flex-1">{m}</span>
        ))}
      </div>
      <div className="flex gap-[3px] overflow-x-auto">
        {year.weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day) => (
              <div
                key={day.date}
                title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                className={`w-[10px] h-[10px] rounded-[2px] ${levelClass[levelForCount(day.count)]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
