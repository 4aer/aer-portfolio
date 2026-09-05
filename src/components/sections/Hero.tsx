import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { HoverSwapPhoto } from "@/components/ui/HoverSwapPhoto";

const socials = [
  { label: "GitHub", href: "https://github.com/4aer", icon: SiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mark-nathan-olmedo-5353ba370/", icon: FaLinkedin },
  { label: "Email", href: "mailto:mn.olmedo4@gmail.com", icon: Mail },
];

export function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-start gap-8 py-16">
      <HoverSwapPhoto
        primarySrc="/profile-primary.jpg"
        secondarySrc="/profile-secondary.jpg"
        alt="Mark Olmedo"
      />
      <div className="flex flex-col gap-4">
        <h1 className="font-display text-3xl lowercase leading-none">
          Mark Olmedo
        </h1>
        <p className="text-[15px]">
          Software Developer <span className="text-gray-400">—</span>{" "}
          <span className="text-gray-500">
            Backend, Python, SQL
          </span>
        </p>
        <p className="text-gray-500 text-[14px] leading-relaxed max-w-lg">
          A passionate BS Information Technology graduate building practical
          applications across the stack, with a focus on efficiency and maintanable solutions.
        </p>
        <div className="flex items-center gap-4 mt-1">
          <a
            href="/resume.pdf"
            className="font-technical text-[12px] uppercase tracking-wide bg-ink text-background rounded-[8px] px-4 py-2.5 hover:opacity-85 transition-opacity"
          >
            View resume →
          </a>
          <div className="flex items-center gap-1">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                title={label}
                className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-ink hover:bg-gray-50 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
