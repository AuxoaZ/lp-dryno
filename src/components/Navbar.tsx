"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { HiArrowRight, HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"EN" | "ID">("EN");
  const [activeNav, setActiveNav] = useState("HOME");

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
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "CALCULATOR", href: "/calculator" },
    // { name: "EQUIPMENT", href: "#equipment" },
    // { name: "GALLERY", href: "#gallery" },
    // { name: "FAQ", href: "#faq" },
    { name: "CONTACT", href: "#contact" },
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
                key={link.name}
                href={link.href}
                onClick={() => setActiveNav(link.name)}
                className={`relative py-1 text-xs font-bold tracking-widest transition-colors duration-200 ${
                  activeNav === link.name
                    ? "text-deep-navy"
                    : "text-gray-600 hover:text-engineering-blue"
                }`}
              >
                {link.name}
                {activeNav === link.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-engineering-blue rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Selector */}
            {/* <div className="flex items-center text-xs font-bold tracking-wider text-gray-700 select-none">
              <button
                onClick={() => setActiveLang("EN")}
                className={`transition-colors ${
                  activeLang === "EN"
                    ? "text-deep-navy font-extrabold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                EN
              </button>
              <span className="mx-1.5 text-gray-300">|</span>
              <button
                onClick={() => setActiveLang("ID")}
                className={`transition-colors ${
                  activeLang === "ID"
                    ? "text-deep-navy font-extrabold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                ID
              </button>
            </div> */}

            {/* Discuss Project CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-deep-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-engineering-blue hover:shadow-lg hover:shadow-engineering-blue/20 hover:-translate-y-0.5 group"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                <HiArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Language Switch Mobile */}
            {/* <div className="flex items-center text-xs font-bold text-gray-700 mr-2">
              <button
                onClick={() => setActiveLang("EN")}
                className={activeLang === "EN" ? "text-deep-navy font-black" : "text-gray-400"}
              >
                EN
              </button>
              <span className="mx-1 text-gray-300">|</span>
              <button
                onClick={() => setActiveLang("ID")}
                className={activeLang === "ID" ? "text-deep-navy font-black" : "text-gray-400"}
              >
                ID
              </button>
            </div> */}

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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`block py-2 text-sm font-bold tracking-widest transition-colors ${
                  activeNav === link.name
                    ? "text-engineering-blue-light"
                    : "text-warm-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-engineering-blue text-white text-xs font-bold tracking-wider uppercase shadow-md active:scale-95 transition-transform"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
