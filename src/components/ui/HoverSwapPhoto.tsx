"use client";

import { useState } from "react";
import Image from "next/image";

type HoverSwapPhotoProps = {
  primarySrc: string;
  secondarySrc: string;
  alt: string;
  size?: number;
};

export function HoverSwapPhoto({
  primarySrc,
  secondarySrc,
  alt,
  size = 140,
}: HoverSwapPhotoProps) {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      className="relative rounded-full overflow-hidden border border-gray-200 shrink-0"
      style={{ width: size, height: size }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((v) => !v)}
      aria-label="Toggle profile photo"
    >
      <Image
        src={primarySrc}
        alt={alt}
        fill
        sizes={`${size}px`}
        className={`object-cover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active ? "opacity-0 scale-95 -rotate-2" : "opacity-100 scale-100 rotate-0"
        }`}
      />
      <Image
        src={secondarySrc}
        alt=""
        fill
        sizes={`${size}px`}
        className={`object-cover absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-105 rotate-2"
        }`}
      />
    </button>
  );
}
