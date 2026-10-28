"use client";

import React from "react";
import Image from "next/image";
import {
  HiArrowRight,
  HiExclamationCircle,
  HiArrowTopRightOnSquare,
  HiNewspaper,
  HiAcademicCap,
  HiMegaphone,
} from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

const articleIcons = [HiNewspaper, HiAcademicCap, HiMegaphone];

export default function WaterChallenges() {
  const { language } = useLanguage();
  const t = translations[language].waterChallenges;

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
            <span>{t.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-extrabold text-deep-navy leading-[1.15] tracking-tight">
            {t.headlinePart1}
            <span className="text-engineering-blue block sm:inline">
              {t.headlinePart2}
            </span>
          </h2>

          {/* Body Copy */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-normal max-w-3xl">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/calculator"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-deep-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-engineering-blue hover:shadow-lg active:scale-95 group"
            >
              <span>{t.ctaCalculator}</span>
              <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 text-deep-navy text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 shadow-2xs"
            >
              <span>{t.ctaSolutions}</span>
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

        {/* Reference Articles & Reports List */}
        <div className="mt-8 sm:mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-engineering-blue uppercase block mb-1">
                {t.referencesEyebrow}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-deep-navy">
                {t.referencesTitle}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {t.articles.map((article, index) => {
              const Icon = articleIcons[index] || HiNewspaper;
              return (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-engineering-blue/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${article.badgeColor}`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span>{article.type}</span>
                      </span>
                      <span className="text-[11px] font-medium text-gray-400">
                        {article.date}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-deep-navy group-hover:text-engineering-blue transition-colors leading-snug">
                      {article.publisher}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {article.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-engineering-blue group-hover:text-engineering-blue-hover">
                    <span className="text-[11px] text-gray-400 font-mono truncate max-w-[150px]">
                      {article.domain}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span>{t.readArticle}</span>
                      <HiArrowTopRightOnSquare className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
