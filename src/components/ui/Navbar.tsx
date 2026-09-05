import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-background/90 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-base lowercase">
          4aer
        </Link>

        <div className="flex items-center gap-6">
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
        </div>
      </div>
    </header>
  );
}
