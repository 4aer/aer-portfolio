import { HoverSwapPhoto } from "@/components/ui/HoverSwapPhoto";

export function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-start gap-8 py-16">
      <HoverSwapPhoto
        primarySrc="/profile-primary.jpg"
        secondarySrc="/profile-secondary.jpg"
        alt="Mark Nathan B. Olmedo"
      />
      <div className="flex flex-col gap-4">
        <h1 className="font-display text-3xl lowercase leading-none">
          mark nathan b. olmedo
        </h1>
        <p className="text-[15px]">
          Full-stack developer <span className="text-gray-400">—</span>{" "}
          <span className="text-gray-500">
            Next.js, Python/FastAPI, React, with an IT infrastructure and
            support background.
          </span>
        </p>
        <p className="text-gray-500 text-[14px] leading-relaxed max-w-lg">
          Graduating BS Information Technology student building practical
          software across the stack, from production applications and REST
          APIs to hands-on infrastructure troubleshooting.
        </p>
        <a
          href="/resume.pdf"
          className="self-start font-technical text-[12px] uppercase tracking-wide bg-ink text-background rounded-[8px] px-4 py-2.5 mt-2 hover:opacity-85 transition-opacity"
        >
          View resume →
        </a>
      </div>
    </section>
  );
}
