"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowRight, HiMapPin, HiChevronRight } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { language } = useLanguage();
  const t = translations[language].hero;

  const heroImages = [
    {
      id: "01",
      src: "/images/bg-hero-1.jpeg",
      alt: "DRYNO Deep Well Drilling Rig 1",
    },
    {
      id: "02",
      src: "/images/bg-hero-2.jpeg",
      alt: "DRYNO Deep Well Drilling Rig 2",
    },
    {
      id: "03",
      src: "/images/bg-hero-3.jpeg",
      alt: "DRYNO Deep Well Drilling Rig 3",
    },
  ];

  // Auto slide background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center pt-20 sm:pt-24 pb-8 sm:pb-16 overflow-hidden bg-deep-navy"
    >
      {/* Background Images Slider with Smooth Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                activeSlide === index ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
        {/* Gradients for readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-deep-navy-dark/95 via-deep-navy/80 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-deep-navy-dark via-transparent to-deep-navy/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between min-h-[calc(100vh-7rem)]">
        {/* Main Text Content (Static Headline & Description) */}
        <div className="max-w-2xl my-auto pt-4 sm:pt-8">
          {/* Subtitle Tagline */}
          <div className="flex items-center text-center md:text-start gap-2.5 mb-3 sm:mb-6">
            <span className="w-6 sm:w-8 h-[2px] bg-engineering-blue-light" />
            <span className="text-[11px] sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-warm-white/90 uppercase text-center md:text-start">
              {t.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-warm-white leading-[1.18] sm:leading-[1.15] tracking-tight mb-4 sm:mb-6 drop-shadow-md text-center md:text-start">
            {t.headline}
          </h1>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-lg text-warm-white/80 leading-relaxed font-light mb-6 sm:mb-10 max-w-xl text-center md:text-start">
            {t.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col mb-4 sm:flex-row items-center sm:items-center gap-2.5 sm:gap-5">
            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-between sm:justify-start gap-3 px-4 py-2.5 sm:px-7 sm:py-4 rounded-full bg-white text-deep-navy font-bold text-[11px] sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-warm-white hover:shadow-2xl hover:scale-105 active:scale-95 group shadow-lg max-w-fit"
            >
              <span>{t.ctaDiscuss}</span>
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-deep-navy flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="glass-button inline-flex items-center justify-between sm:justify-start gap-3 px-4 py-2.5 sm:px-7 sm:py-4 rounded-full text-warm-white font-bold text-[11px] sm:text-sm tracking-wider uppercase transition-all duration-300 hover:text-white group max-w-fit"
            >
              <span>{t.ctaServices}</span>
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:border-white">
                <HiChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-warm-white" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Location Bar & Slider Nav Controls */}
        <div className="pt-6 sm:pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-6 border-t border-white/10 mt-auto">
          {/* Location Pin Information */}
          <div className="flex items-center gap-2 text-[11px] sm:text-sm font-semibold tracking-wider sm:tracking-widest text-warm-white/90">
            <HiMapPin className="w-4 h-4 text-engineering-blue-light animate-bounce shrink-0" />
            <span>BALI • NUSA LEMBONGAN • NUSA PENIDA • NTB</span>
          </div>

          {/* Interactive Slide Controls */}
          <div className="flex items-center gap-5 sm:gap-6">
            {heroImages.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={`group flex items-center gap-2 text-xs font-bold transition-all ${
                  activeSlide === index
                    ? "text-warm-white"
                    : "text-warm-white/40 hover:text-warm-white/70"
                }`}
              >
                <span>{slide.id}</span>
                <span
                  className={`h-[2px] transition-all duration-300 ${
                    activeSlide === index
                      ? "w-8 bg-engineering-blue-light"
                      : "w-3 bg-white/20 group-hover:w-5"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Slider Navigation (Desktop Right Rail) */}
      {/* <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6">
        {heroImages.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(index)}
            className={`group relative flex items-center justify-center transition-all ${
              activeSlide === index
                ? "text-white scale-110"
                : "text-white/40 hover:text-white/80"
            }`}
          >
            <span className="text-xs font-bold tracking-wider">{slide.id}</span>
            {activeSlide === index && (
              <span className="absolute -left-3 w-1 h-6 bg-engineering-blue-light rounded-full" />
            )}
          </button>
        ))}
      </div> */}
    </section>
  );
}
