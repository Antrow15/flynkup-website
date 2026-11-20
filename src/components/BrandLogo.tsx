"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Variant = "icon" | "wordmark" | "tagline";

const sources = {
  icon: {
    light: "/brand/icon-main.png",
    dark: "/brand/icon-reverse.png",
  },
  wordmark: {
    light: "/brand/logo-main.png",
    dark: "/brand/logo-reverse.png",
  },
  tagline: {
    light: "/brand/logo-tagline-main.png",
    dark: "/brand/logo-tagline-reverse.png",
  },
} as const;

const sizes = {
  icon: { width: 48, height: 48 },
  wordmark: { width: 220, height: 44 },
  tagline: { width: 520, height: 140 },
} as const;

type BrandLogoProps = {
  variant?: Variant;
  className?: string;
  priority?: boolean;
  alt?: string;
};

export default function BrandLogo({
  variant = "icon",
  className = "",
  priority = false,
  alt = "Flynk Up",
}: BrandLogoProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains("dark"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const src = dark ? sources[variant].dark : sources[variant].light;
  const { width, height } = sizes[variant];

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
