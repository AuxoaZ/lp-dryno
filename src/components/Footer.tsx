"use client";

import React from "react";
import Logo from "./Logo";
import { HiMapPin, HiPhone, HiEnvelope } from "react-icons/hi2";

export default function Footer() {
  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "HOW WE WORK", href: "#how-we-work" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EQUIPMENT", href: "#equipment" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="bg-deep-navy-dark text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" />
            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-sm leading-relaxed pt-2">
              DRYNO — Engineering Water Solution is an integrated groundwater
              solution provider specializing in investigation, deep well
              drilling, well installation, technical consultation, and SIPA /
              NPWPD ABT permitting assistance across Bali & NTB.
            </p>
          </div>

          {/* Quick Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-engineering-blue-light uppercase mb-4">
              QUICK NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-engineering-blue-light transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-engineering-blue-light uppercase mb-4">
              REGIONAL SERVICE COVERAGE
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <HiMapPin className="w-4 h-4 text-engineering-blue-light shrink-0 mt-0.5" />
                <span>
                  Bali • Nusa Lembongan • Nusa Penida • NTB (Lombok & Sumbawa)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <HiPhone className="w-4 h-4 text-engineering-blue-light shrink-0" />
                <span>+62 857-9209-6854</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HiEnvelope className="w-4 h-4 text-engineering-blue-light shrink-0" />
                <span>info@dryno.co.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>
            © {new Date().getFullYear()} DRYNO — Engineering Water Solution. All
            rights reserved.{" "}
            <span className="text-gray-500 ml-1">
              In collaboration with{" "}
              <a
                href="https://autoneka.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-engineering-blue-light font-semibold"
              >
                autoneka.id
              </a>
            </span>
          </p>
          <p className="text-[11px] text-gray-400">
            Hydrogeology • Deep Well Drilling • Groundwater Permitting (SIPA &
            NPWPD ABT)
          </p>
        </div>
      </div>
    </footer>
  );
}
