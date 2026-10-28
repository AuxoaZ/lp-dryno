"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { HiArrowRight, HiBars3, HiXMark } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("HOME");
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "home", name: t.nav.home, href: "#home" },
    { key: "about", name: t.nav.about, href: "#about" },
    { key: "services", name: t.nav.services, href: "#services" },
    { key: "contact", name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="focus:outline-none">
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setActiveNav(link.key)}
                className={`relative py-1 text-xs font-bold tracking-widest transition-colors duration-200 ${
                  activeNav === link.key
                    ? "text-deep-navy"
                    : "text-gray-600 hover:text-engineering-blue"
                }`}
              >
                {link.name}
                {activeNav === link.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-engineering-blue rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Elegant Language Switcher Pill */}
            <div className="flex items-center p-1 rounded-full bg-gray-100 border border-gray-200/90 text-xs font-bold shadow-2xs">
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                className={`px-3 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                  language === "EN"
                    ? "bg-deep-navy text-white shadow-sm"
                    : "text-gray-500 hover:text-deep-navy"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ID")}
                className={`px-3 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                  language === "ID"
                    ? "bg-deep-navy text-white shadow-sm"
                    : "text-gray-500 hover:text-deep-navy"
                }`}
                aria-label="Ganti ke Bahasa Indonesia"
              >
                ID
              </button>
            </div>

            {/* Discuss Project CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-deep-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-engineering-blue hover:shadow-lg hover:shadow-engineering-blue/20 hover:-translate-y-0.5 group"
            >
              <span>{t.nav.discussProject}</span>
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                <HiArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </a>
          </div>

          {/* Mobile Right Controls: Compact Language Switcher & Hamburger */}
          <div className="flex items-center space-x-2.5 lg:hidden">
            {/* Mobile Header Quick Language Pill */}
            <div className="flex items-center p-0.5 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                className={`px-2.5 py-0.5 rounded-full transition-all ${
                  language === "EN"
                    ? "bg-deep-navy text-white font-extrabold shadow-2xs"
                    : "text-gray-500 hover:text-deep-navy"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ID")}
                className={`px-2.5 py-0.5 rounded-full transition-all ${
                  language === "ID"
                    ? "bg-deep-navy text-white font-extrabold shadow-2xs"
                    : "text-gray-500 hover:text-deep-navy"
                }`}
              >
                ID
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-deep-navy hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiBars3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-deep-navy text-warm-white border-t border-white/10 shadow-2xl animate-fadeIn">
          <div className="px-6 py-6 space-y-4">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.key);
                  setMobileMenuOpen(false);
                }}
                className={`block py-2 text-sm font-bold tracking-widest transition-colors ${
                  activeNav === link.key
                    ? "text-engineering-blue-light"
                    : "text-warm-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Language Switcher in Drawer */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Language / Bahasa
              </span>
              <div className="flex items-center p-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setLanguage("EN")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === "EN"
                      ? "bg-engineering-blue text-white shadow-sm"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("ID")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === "ID"
                      ? "bg-engineering-blue text-white shadow-sm"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  ID
                </button>
              </div>
            </div>

            {/* Mobile Discuss Project CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-engineering-blue text-white text-xs font-bold tracking-wider uppercase shadow-md active:scale-95 transition-transform"
              >
                <span>{t.nav.discussProject}</span>
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
