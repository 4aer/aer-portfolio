"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { YearSelector } from "@/components/ui/YearSelector";
import { ContributionGraph } from "@/components/ui/ContributionGraph";
import { getAvailableYears, getYearData } from "@/lib/github";

export function GithubActivitySection() {
  const years = getAvailableYears();
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const yearData = getYearData(selectedYear);

  return (
    <section className="py-12">
      <SectionHeader label="github activity" />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="font-technical text-[12px] text-gray-500">
            {yearData?.totalContributions ?? 0} contributions in {selectedYear}
          </span>
          <YearSelector years={years} selected={selectedYear} onSelect={setSelectedYear} />
        </div>
        <ContributionGraph year={yearData} />
      </div>
    </section>
  );
}
