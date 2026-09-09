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
        className={`object-cover hover-swap-photo ${active ? "hover-swap-photo--hidden" : "hover-swap-photo--visible"}`}
      />
      <Image
        src={secondarySrc}
        alt=""
        fill
        sizes={`${size}px`}
        className={`object-cover absolute inset-0 hover-swap-photo ${active ? "hover-swap-photo--visible" : "hover-swap-photo--hidden-alt"}`}
      />
    </button>
  );
}
