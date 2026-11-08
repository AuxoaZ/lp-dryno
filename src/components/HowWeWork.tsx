"use client";

import React from "react";
import {
  HiUserGroup,
  HiSparkles,
  HiDocumentChartBar,
  HiCog6Tooth,
  HiWrenchScrewdriver,
  HiShieldCheck,
  HiArrowRight,
} from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

const stepIcons = [
  HiUserGroup,
  HiSparkles,
  HiDocumentChartBar,
  HiCog6Tooth,
  HiWrenchScrewdriver,
  HiShieldCheck,
];

export default function HowWeWork() {
  const { language } = useLanguage();
  const t = translations[language].howWeWork;

  return (
    <section
      id="how-we-work"
      className="relative py-8 sm:py-16 bg-deep-navy text-white overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-engineering-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-engineering-blue-light/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-14 pb-3 sm:pb-6 border-b border-white/10 gap-2">
          <div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-engineering-blue-light uppercase block mb-1 sm:mb-2">
              {t.eyebrow}
            </span>
            <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-xs sm:text-base text-gray-300 font-light max-w-md">
            {t.subtitle}
          </p>
        </div>

        {/* 6-Step Workflow: 2 cols on mobile for compact view */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-6 lg:gap-4 items-start">
          {t.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || HiUserGroup;
            const isLast = idx === t.steps.length - 1;

            return (
              <div key={step.number} className="relative flex flex-col group p-2.5 sm:p-0 rounded-xl bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0">
                {/* Icon & Arrow Header Row */}
                <div className="flex items-center justify-between mb-2.5 sm:mb-6">
                  {/* Circular Glowing Icon Badge */}
                  <div className="relative flex items-center justify-center w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-engineering-blue to-deep-navy-dark border border-engineering-blue-light/40 shadow-md sm:shadow-lg shadow-engineering-blue/20 transition-transform duration-300 group-hover:scale-110 group-hover:border-engineering-blue-light">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-engineering-blue-light" />
                  </div>

                  {/* Horizontal Connecting Arrow (Hidden on last step & mobile) */}
                  {!isLast && (
                    <div className="hidden xl:flex items-center text-engineering-blue-light/50 pl-2">
                      <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-engineering-blue-light" />
                    </div>
                  )}
                </div>

                {/* Step Number */}
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-engineering-blue-light/80 block mb-0.5 sm:mb-1">
                  {step.number}
                </span>

                {/* Step Title */}
                <h3 className="text-xs sm:text-lg font-bold text-white mb-1 sm:mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[11px] sm:text-sm text-gray-300 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
