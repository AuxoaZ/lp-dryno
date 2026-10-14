import React from "react";
import Image from "next/image";
import { HiArrowRight, HiExclamationCircle } from "react-icons/hi2";

export default function WaterChallenges() {
  return (
    <section
      id="water-challenges"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-warm-white to-warm-white text-deep-navy overflow-hidden"
    >
      {/* Decorative architectural background accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-engineering-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-engineering-blue-light/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Eyebrow, Main Headline, Copy & CTAs (Atas Bawah) */}
        <div className="max-w-4xl mb-8 sm:mb-12 space-y-5">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold tracking-wider uppercase">
            <HiExclamationCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Water Supply Challenges in Bali</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-extrabold text-deep-navy leading-[1.15] tracking-tight">
            Water scarcity is more than an environmental issue.{" "}
            <span className="text-engineering-blue block sm:inline">
              It’s a business challenge.
            </span>
          </h2>

          {/* Body Copy */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-normal max-w-3xl">
            As development continues across southern Bali, reliable water supply
            remains an important consideration for villas, resorts and
            commercial properties. Reported distribution challenges in Pecatu
            and surrounding areas highlight the value of evaluating long-term
            water supply strategies early in project planning. DRYNO supports
            property owners and developers through site-specific ground water
            investigation, deep well drilling and regulatory assistance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/calculator"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-deep-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-engineering-blue hover:shadow-lg active:scale-95 group"
            >
              <span>calculate your spending water</span>
              <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 text-deep-navy text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 shadow-2xs"
            >
              <span>Explore Solutions</span>
            </a>
          </div>
        </div>

        {/* 1/2 Height Image Showcase (Posisi Bawah Text) */}
        <div className="relative w-full min-h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
          <Image
            src="https://images.unsplash.com/photo-1535868118629-f37bcd69ff59?q=80&w=1176&auto=format&fit=crop"
            alt="Water Supply Challenges in Southern Bali and Pecatu"
            fill
            priority
            unoptimized
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
