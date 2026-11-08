"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowRight, HiMapPin, HiChevronRight } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { language, content } = useLanguage();
  const hero = content.hero;

  const portraitImages = [
    "/images/hero-potrait/bg-hero-potrait-1.webp",
    "/images/hero-potrait/bg-hero-potrait-2.webp",
    "/images/hero-potrait/bg-hero-potrait-3.webp",
  ];

  const heroImages =
    hero.images && hero.images.length > 0
      ? hero.images
      : [
          {
            id: "01",
            src: "/images/bg-hero-1.jpeg",
            alt: "DRYNO Deep Well Drilling Rig 1",
          },
        ];

  // Auto slide background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const safeSlide = activeSlide >= heroImages.length ? 0 : activeSlide;

  return (
    <section
      id="home"
      className="relative h-screen sm:min-h-screen w-full flex items-center pt-16 sm:pt-24 pb-4 sm:pb-16 overflow-hidden bg-deep-navy"
    >
      {/* Background Images Slider with Smooth Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id || index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              safeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Mobile Portrait Background */}
            <div className="sm:hidden absolute inset-0">
              <Image
                src={portraitImages[index % portraitImages.length]}
                alt={image.alt || "Hero background portrait"}
                fill
                priority={index === 0}
                className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  safeSlide === index ? "scale-105" : "scale-100"
                }`}
              />
            </div>

            {/* Desktop Landscape Background */}
            <div className="hidden sm:block absolute inset-0">
              <Image
                src={image.src}
                alt={image.alt || "Hero background"}
                fill
                priority={index === 0}
                unoptimized={
                  image.src.startsWith("http") ||
                  image.src.startsWith("/images/uploads/")
                }
                className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  safeSlide === index ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          </div>
        ))}
        {/* Gradients for readability */}
        {/* Mobile Gradient Overlay */}
        <div className="sm:hidden absolute inset-0 z-20 bg-gradient-to-t from-deep-navy-dark via-deep-navy/75 to-deep-navy/45" />
        {/* Desktop Gradient Overlay */}
        <div className="hidden sm:block absolute inset-0 z-20 bg-gradient-to-r from-deep-navy-dark/95 via-deep-navy/80 to-transparent lg:w-3/4" />
        <div className="hidden sm:block absolute inset-0 z-20 bg-gradient-to-t from-deep-navy-dark via-transparent to-deep-navy/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between sm:min-h-[calc(100vh-7rem)]">
        {/* Main Text Content (Static Headline & Description) */}
        <div className="max-w-2xl my-auto pt-2 sm:pt-8">
          {/* Subtitle Tagline */}
          <div className="flex items-center text-center md:text-start gap-2.5 mb-2 sm:mb-6">
            <span className="w-5 sm:w-8 h-[2px] bg-engineering-blue-light" />
            <span className="text-[10px] sm:text-sm font-semibold tracking-[0.18em] sm:tracking-[0.25em] text-warm-white/90 uppercase text-center md:text-start">
              {hero.tagline[language]}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-warm-white leading-[1.16] sm:leading-[1.15] tracking-tight mb-2.5 sm:mb-6 drop-shadow-md text-center md:text-start">
            {hero.headline[language]}
          </h1>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-lg text-warm-white/80 leading-relaxed font-light mb-4 sm:mb-10 max-w-xl text-center md:text-start">
            {hero.description[language]}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center md:justify-start gap-2.5 sm:gap-5 mb-4 sm:mb-4">
            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-between sm:justify-start gap-3 px-5 py-2.5 sm:px-7 sm:py-4 rounded-full bg-white text-deep-navy font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-warm-white hover:shadow-2xl hover:scale-105 active:scale-95 group shadow-lg w-full max-w-[270px] sm:w-auto sm:max-w-none"
            >
              <span>{hero.ctaDiscuss[language]}</span>
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-deep-navy flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="glass-button inline-flex items-center justify-between sm:justify-start gap-3 px-5 py-2.5 sm:px-7 sm:py-4 rounded-full text-warm-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:text-white group w-full max-w-[270px] sm:w-auto sm:max-w-none"
            >
              <span>{hero.ctaServices[language]}</span>
              <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:border-white">
                <HiChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-warm-white" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Location Bar & Slider Nav Controls */}
        <div className="pt-3 sm:pt-12 flex flex-row items-center justify-between gap-2 sm:gap-6 border-t border-white/10 mt-3 sm:mt-auto">
          {/* Location Pin Information */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-sm font-semibold tracking-wider sm:tracking-widest text-warm-white/90">
            <HiMapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-engineering-blue-light animate-bounce shrink-0" />
            <span className="truncate max-w-[200px] sm:max-w-none">
              {hero.location}
            </span>
          </div>

          {/* Interactive Slide Controls */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            {heroImages.map((slide, index) => (
              <button
                key={slide.id || index}
                onClick={() => setActiveSlide(index)}
                className={`group flex items-center gap-2 text-xs font-bold transition-all ${
                  safeSlide === index
                    ? "text-warm-white"
                    : "text-warm-white/40 hover:text-warm-white/70"
                }`}
              >
                <span>{slide.id || String(index + 1).padStart(2, "0")}</span>
                <span
                  className={`h-[2px] transition-all duration-300 ${
                    safeSlide === index
                      ? "w-8 bg-engineering-blue-light"
                      : "w-3 bg-white/20 group-hover:w-5"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
