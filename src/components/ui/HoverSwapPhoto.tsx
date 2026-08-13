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
        className={`object-cover transition-opacity duration-500 ${active ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src={secondarySrc}
        alt=""
        fill
        sizes={`${size}px`}
        className={`object-cover absolute inset-0 transition-opacity duration-500 ${active ? "opacity-100" : "opacity-0"}`}
      />
    </button>
  );
}
