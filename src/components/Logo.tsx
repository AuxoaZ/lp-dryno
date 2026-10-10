"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`flex items-center gap-3 group cursor-pointer ${className}`}
    >
      {/* Icon Graphic */}
      <div className="relative h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo.png"
          alt="Dryno Logo"
          width={160}
          height={40}
          className={`h-10 lg:h-14 w-auto object-contain ${
            isLight ? "brightness-0 invert" : ""
          }`}
          priority
        />
      </div>
    </div>
  );
}
