"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type ThemeChoice = "light" | "dark" | "system";

function applyTheme(choice: ThemeChoice) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = choice === "dark" || (choice === "system" && systemDark);
  root.classList.toggle("dark", isDark);
}

export function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as ThemeChoice | null) ?? "system";
  });

  useEffect(() => {
    applyTheme(choice);
  }, [choice]);

  function select(next: ThemeChoice) {
    setChoice(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  const options: { value: ThemeChoice; icon: typeof Sun }[] = [
    { value: "light", icon: Sun },
    { value: "system", icon: Monitor },
    { value: "dark", icon: Moon },
  ];

  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-200 p-1">
      {options.map(({ value, icon: Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => select(value)}
          aria-pressed={choice === value}
          aria-label={`Use ${value} theme`}
          className={`p-1.5 rounded-full transition-colors ${
            choice === value ? "bg-ink text-background" : "text-gray-400 hover:text-ink"
          }`}
        >
          <Icon size={13} />
        </button>
      ))}
    </div>
  );
}
