"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type ThemeChoice = "light" | "dark" | "system";

const order: ThemeChoice[] = ["light", "dark", "system"];
const iconFor: Record<ThemeChoice, typeof Sun> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

function applyTheme(choice: ThemeChoice) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = choice === "dark" || (choice === "system" && systemDark);
  root.classList.toggle("dark", isDark);
}

export function ThemeToggle() {
  // Always start from "system" so server and client render identical
  // HTML on first paint — the real stored preference is picked up
  // client-only, after mount, to avoid a hydration mismatch.
  const [choice, setChoice] = useState<ThemeChoice>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as ThemeChoice | null) ?? "system";
    /* eslint-disable react-hooks/set-state-in-effect -- one-time client-only sync from localStorage, required for hydration-safe theme persistence */
    setMounted(true);
    setChoice(stored);
    /* eslint-enable react-hooks/set-state-in-effect */
    applyTheme(stored);
  }, []);

  function cycle() {
    const next = order[(order.indexOf(choice) + 1) % order.length];
    setChoice(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  const Icon = iconFor[choice];

  return (
    <button
      type="button"
      onClick={cycle}
      title={`Theme: ${choice} — click to change`}
      aria-label={`Theme is ${choice}, click to change`}
      suppressHydrationWarning
      className="relative flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-ink hover:bg-gray-50 transition-colors"
    >
      <span
        key={mounted ? choice : "system"}
        className="animate-theme-icon-in"
      >
        <Icon size={15} />
      </span>
    </button>
  );
}
