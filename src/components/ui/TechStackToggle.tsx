import { LayoutGrid, Rows3 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { TechMarquee } from "./TechMarquee";
import { TechStaticGrid } from "./TechStaticGrid";

export type TechStackMode = "animated" | "static";

// Small icon button meant to sit in a SectionHeader's actions slot, next
// to "View All". State is owned by the parent section so this button
// and the content below always agree on the current mode.
export function TechStackModeControl({
  mode,
  onChange,
}: {
  mode: TechStackMode;
  onChange: Dispatch<SetStateAction<TechStackMode>>;
}) {
  const nextMode = mode === "animated" ? "static" : "animated";
  return (
    <button
      type="button"
      onClick={() => onChange(nextMode)}
      aria-label={mode === "animated" ? "Switch to grouped view" : "Switch to animated view"}
      title={mode === "animated" ? "Switch to grouped view" : "Switch to animated view"}
      className="flex items-center justify-center w-7 h-7 rounded-[6px] text-gray-400 hover:text-ink transition-colors"
    >
      {mode === "animated" ? <LayoutGrid size={13} /> : <Rows3 size={13} />}
    </button>
  );
}

export function TechStackContent({ mode }: { mode: TechStackMode }) {
  return mode === "animated" ? <TechMarquee /> : <TechStaticGrid />;
}
