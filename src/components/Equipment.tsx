"use client";

import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";

export default function Equipment() {
  const { language, content } = useLanguage();
  const eq = content.equipment;

  return (
    <section
      id="equipment"
      className="relative py-8 sm:py-16 lg:py-20 bg-deep-navy text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center">
          {/* Left Column: Title & CTA (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3 sm:space-y-6">
            <div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-engineering-blue-light uppercase block mb-1.5 sm:mb-3">
                {eq.eyebrow[language]}
              </span>
              <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-2 sm:mb-4">
                {eq.titleLine1[language]} <br />
                {eq.titleLine2[language]}
              </h2>
              <p className="text-xs sm:text-base text-gray-300 font-light leading-relaxed max-w-md">
                {eq.desc[language]}
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="glass-button inline-flex items-center gap-3 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-deep-navy group shadow-lg"
              >
                <span>{eq.cta[language]}</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-deep-navy/10">
                  <HiArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Equipment Cards Grid (lg:col-span-8) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 justify-center gap-2.5 sm:gap-3">
              {eq.items.map((item) => (
                <div
                  key={item.id}
                  className="group p-1 sm:p-2 transition-all duration-300 hover:scale-[1.03] flex flex-col justify-center"
                >
                  {/* Equipment Square Image */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 bg-white/5">
                    <Image
                      src={item.image || "/images/eq-1.jpg"}
                      alt={item.title[language]}
                      fill
                      unoptimized={
                        item.image?.startsWith("http") ||
                        item.image?.startsWith("/images/uploads/")
                      }
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Caption & Specs */}
                  <div>
                    <h3 className="text-xs sm:text-xs font-bold text-white leading-snug line-clamp-1 text-center">
                      {item.title[language]}
                    </h3>
                    <p className="text-center text-[11px] font-medium text-engineering-blue-light/90 tracking-wide mt-0.5 line-clamp-1">
                      {item.spec[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
