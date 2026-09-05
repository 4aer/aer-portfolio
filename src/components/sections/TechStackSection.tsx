"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  TechStackModeControl,
  TechStackContent,
  type TechStackMode,
} from "@/components/ui/TechStackToggle";

export function TechStackSection() {
  const [mode, setMode] = useState<TechStackMode>("animated");

  return (
    <section className="py-12">
      <SectionHeader
        label="tech stack"
        href="/tech-stack"
        linkText="View all"
        actions={<TechStackModeControl mode={mode} onChange={setMode} />}
      />
      <TechStackContent mode={mode} />
    </section>
  );
}
