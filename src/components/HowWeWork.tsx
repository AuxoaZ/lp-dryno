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

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      desc: "Understand the project's requirements and site conditions.",
      icon: HiUserGroup,
    },
    {
      number: "02",
      title: "Investigate",
      desc: "Conduct ground water investigation when required.",
      icon: HiSparkles,
    },
    {
      number: "03",
      title: "Assess",
      desc: "Analyze data and actual site conditions.",
      icon: HiDocumentChartBar,
    },
    {
      number: "04",
      title: "Define",
      desc: "Determine an appropriate technical approach.",
      icon: HiCog6Tooth,
    },
    {
      number: "05",
      title: "Drill & Install",
      desc: "Execute deep well drilling and well installation.",
      icon: HiWrenchScrewdriver,
    },
    {
      number: "06",
      title: "Comply",
      desc: "Assist with SIPA and NPWPD ABT processes when required.",
      icon: HiShieldCheck,
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative py-5 sm:py-16  bg-deep-navy text-white overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-engineering-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-engineering-blue-light/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 pb-4 sm:pb-6 border-b border-white/10 gap-2">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-engineering-blue-light uppercase block mb-2">
              OUR PROCESS
            </span>
            <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              How We Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-md">
            From understanding your project to operational compliance.
          </p>
        </div>

        {/* 6-Step Workflow (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4 items-start">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.number} className="relative flex flex-col group">
                {/* Icon & Arrow Header Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Circular Glowing Icon Badge */}
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-engineering-blue to-deep-navy-dark border border-engineering-blue-light/40 shadow-lg shadow-engineering-blue/20 transition-transform duration-300 group-hover:scale-110 group-hover:border-engineering-blue-light">
                    <Icon className="w-6 h-6 text-engineering-blue-light" />
                  </div>

                  {/* Horizontal Connecting Arrow (Hidden on last step & mobile) */}
                  {!isLast && (
                    <div className="hidden xl:flex items-center text-engineering-blue-light/50 pl-2">
                      <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-engineering-blue-light" />
                    </div>
                  )}
                </div>

                {/* Step Number */}
                <span className="text-xs font-bold tracking-widest text-engineering-blue-light/80 block mb-1">
                  {step.number}
                </span>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
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
