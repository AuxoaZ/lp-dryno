"use client";

import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

export default function CalculatorBreadcrumb() {
  const { language } = useLanguage();
  const t = translations[language].calculator;

  return (
    <a
      href="/"
      className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-deep-navy transition-colors tracking-wider uppercase group"
    >
      <HiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      <span>{t.backLink}</span>
    </a>
  );
}
