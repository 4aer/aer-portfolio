"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type ThemeChoice = "light" | "dark";

function applyTheme(choice: ThemeChoice) {
  document.documentElement.classList.toggle("dark", choice === "dark");
}

export function ThemeToggle() {
  // Always start from "light" so server and client render identical HTML
  // on first paint — the real stored preference is picked up client-only,
  // after mount, to avoid a hydration mismatch.
  const [choice, setChoice] = useState<ThemeChoice>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeChoice | null;
    // No stored preference yet — fall back to the system's current
    // preference once, on first load, rather than always defaulting light.
    const initial = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    /* eslint-disable react-hooks/set-state-in-effect -- one-time client-only sync from localStorage/system preference, required for hydration-safe theme persistence */
    setMounted(true);
    setChoice(initial);
    /* eslint-enable react-hooks/set-state-in-effect */
    applyTheme(initial);
  }, []);

  function toggle() {
    const next: ThemeChoice = choice === "light" ? "dark" : "light";
    setChoice(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  const Icon = choice === "light" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggle}
      title={`Theme: ${choice} — click to switch`}
      aria-label={`Theme is ${choice}, click to switch`}
      suppressHydrationWarning
      className="relative flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-ink hover:bg-gray-50 transition-colors"
    >
      <span key={mounted ? choice : "light"} className="animate-theme-icon-in">
        <Icon size={15} />
      </span>
    </button>
  );
}
