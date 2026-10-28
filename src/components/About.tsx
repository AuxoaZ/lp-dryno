"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HiArrowRight,
  HiMapPin,
  HiBriefcase,
  HiCog6Tooth,
  HiSparkles,
  HiShieldCheck,
  HiBuildingOffice2,
  HiHomeModern,
  HiWrenchScrewdriver,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const clientTypes = [
    { label: "Villas & Private Estates", icon: HiHomeModern },
    { label: "Hotels & Resorts", icon: HiBuildingOffice2 },
    { label: "Residential & Commercial", icon: HiBuildingOffice2 },
    { label: "Contractors & Developers", icon: HiWrenchScrewdriver },
    { label: "Industrial Facilities", icon: HiBriefcase },
  ];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-20 lg:py-24 bg-white overflow-hidden text-deep-navy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-Column Top Layout Matching Design Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
          {/* Column 1: Main Header & Intro Text (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Category Tagline */}
              <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase block mb-3">
                ABOUT DRYNO
              </span>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-deep-navy leading-[1.12] tracking-tight mb-2 lg:mb-6">
                Integrated <br />
                Ground Water <br />
                Solution Provider
              </h2>

              {/* Core Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                DRYNO is an integrated ground water solution provider
                specializing in ground water investigation, deep well drilling,
                well installation, technical consultation, and ground
                water-related permit and administrative assistance.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="pt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-4 px-7 py-3.5 rounded-full bg-deep-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-engineering-blue hover:shadow-lg hover:scale-105 active:scale-95 group"
              >
                <span>{isExpanded ? "SHOW LESS" : "LEARN MORE"}</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  {isExpanded ? (
                    <HiChevronUp className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <HiArrowRight className="w-3.5 h-3.5 text-white" />
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Column 2: Highlights & Badges List (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-7 border-y lg:border-y-0 lg:border-x border-gray-100 py-6 lg:py-0 lg:px-8">
            {/* Highlight 1: 10+ Years */}
            <div className="flex items-start gap-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-deep-navy leading-none">
                10+
              </div>
              <div className="text-xs font-semibold text-gray-600 leading-tight">
                Years of <br /> Field Experience
              </div>
            </div>

            {/* Highlight 2: Service Coverage */}
            <div className="flex items-start gap-3.5 pt-2">
              <div className="p-2.5 rounded-xl bg-engineering-blue/10 text-engineering-blue shrink-0">
                <HiMapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-deep-navy">
                  Bali • Nusa Lembongan
                </div>
                <div className="text-xs font-medium text-gray-500">
                  Nusa Penida • NTB
                </div>
              </div>
            </div>

            {/* Highlight 3: Project-Based Approach */}
            <div className="flex items-start gap-3.5 pt-1">
              <div className="p-2.5 rounded-xl bg-engineering-blue/10 text-engineering-blue shrink-0">
                <HiBriefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-deep-navy">
                  Project-Based
                </div>
                <div className="text-xs font-medium text-gray-500">
                  Approach
                </div>
              </div>
            </div>

            {/* Highlight 4: Technical & Regulatory Support */}
            <div className="flex items-start gap-3.5 pt-1">
              <div className="p-2.5 rounded-xl bg-engineering-blue/10 text-engineering-blue shrink-0">
                <HiCog6Tooth className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-deep-navy">
                  Technical &
                </div>
                <div className="text-xs font-medium text-gray-500">
                  Regulatory Support
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Featured Coastal Image Container (lg:col-span-4) */}
          <div className="lg:col-span-4 relative min-h-[320px] lg:min-h-[380px] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/about-villa.jpg"
              alt="Supporting Development with Reliable Water Solutions in Bali"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/30 to-transparent" />

            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 text-white">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-3 drop-shadow-md">
                Supporting <br />
                Development <br />
                With Reliable <br />
                Water Solutions
              </h3>
              <div className="w-1/2 h-1 bg-engineering-blue-light rounded-full" />
            </div>
          </div>
        </div>

        {/* Expanded Details Section (Smoothly Toggled or Always Accessible) */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isExpanded
              ? "max-h-[2000px] opacity-100 mt-16 pt-12 border-t border-gray-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expanded Card 1: Sectors We Serve */}
            <div className="p-6 sm:p-8 rounded-2xl bg-warm-white border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-engineering-blue/10 flex items-center justify-center text-engineering-blue">
                    <HiBuildingOffice2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-deep-navy uppercase tracking-wider">
                    SECTORS WE SERVE
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  We work with villas, private estates, hotels, resorts,
                  residential and commercial developments, contractors,
                  developers, and industrial facilities requiring ground water
                  solutions for their projects.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {clientTypes.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-deep-navy shadow-2xs"
                  >
                    <item.icon className="w-3.5 h-3.5 text-engineering-blue" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Expanded Card 2: Systematic Approach */}
            <div className="p-6 sm:p-8 rounded-2xl bg-warm-white border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-engineering-blue/10 flex items-center justify-center text-engineering-blue">
                    <HiSparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-deep-navy uppercase tracking-wider">
                    Investigate, Drill, and Install
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  Our approach begins by understanding the project&apos;s water
                  requirements and site conditions. When required, ground water
                  investigation is conducted to obtain subsurface information
                  and identify potential ground water zones before determining
                  the appropriate drilling approach.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/80">
                <div className="text-xs font-bold text-deep-navy mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-engineering-blue-light" />
                  Data-Driven Drilling Strategy
                </div>
                <p className="text-xs text-gray-500">
                  Minimizing risk & optimizing long-term ground water yield.
                </p>
              </div>
            </div>

            {/* Expanded Card 3: Permitting & Legal Compliance */}
            <div className="p-6 sm:p-8 rounded-2xl bg-warm-white border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-engineering-blue/10 flex items-center justify-center text-engineering-blue">
                    <HiShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-deep-navy uppercase tracking-wider">
                    PERMITTING & COMPLIANCE
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  Beyond ground water investigation and drilling, DRYNO also
                  assists clients with SIPA and NPWPD ABT processing, providing
                  a more integrated solution from initial investigation to
                  ground water utilization compliance.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="px-3 py-1.5 rounded-lg bg-deep-navy text-white text-xs font-bold tracking-wider uppercase shadow-xs">
                  SIPA PERMIT
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-engineering-blue text-white text-xs font-bold tracking-wider uppercase shadow-xs">
                  NPWPD ABT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
