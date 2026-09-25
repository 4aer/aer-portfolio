"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-background/90 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-base lowercase">
          aer
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden sm:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-technical text-[12px] uppercase tracking-wide text-gray-500 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-ink hover:bg-gray-50 transition-colors"
          >
            <span className="relative w-4 h-4 grid place-items-center">
              <Menu
                size={17}
                className={`nav-menu-icon absolute ${open ? "nav-menu-icon--hidden-open" : "nav-menu-icon--visible"}`}
              />
              <X
                size={17}
                className={`nav-menu-icon absolute ${open ? "nav-menu-icon--visible" : "nav-menu-icon--hidden-closed"}`}
              />
            </span>
          </button>
        </div>
      </div>

      </header>

    <div
      className={`sm:hidden fixed inset-0 top-14 z-50 nav-overlay ${
        open ? "nav-overlay--open" : "nav-overlay--closed"
      }`}
      aria-hidden={!open}
    >
      <nav className="flex flex-col px-4 pt-2">
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{ transitionDelay: open ? `${70 + i * 60}ms` : "0ms" }}
            className={`nav-overlay-item font-display text-2xl lowercase py-4 border-b border-gray-200 ${
              open ? "nav-overlay-item--in" : "nav-overlay-item--out"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      </div>
    </>
  );
}
