"use client";

import React, { useState } from "react";
import {
  HiPlus,
  HiMinus,
  HiQuestionMarkCircle,
  HiChatBubbleLeftEllipsis,
} from "react-icons/hi2";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Why is a groundwater investigation recommended before drilling?",
      answer:
        "Groundwater investigation (geoelectric survey) provides critical subsurface information to identify potential groundwater-bearing zones, estimate depth indications, and assess geological formations before drilling. This minimizes financial risk and helps select the most optimal drilling point.",
    },
    {
      question: "How deep do you usually drill for deep wells in Bali & NTB?",
      answer:
        "Drilling depths vary significantly based on location and regional hydrogeology. For instance, cliff terrain in Uluwatu or Pecatu may require depths between 100m to 220m+, whereas coastal plains or inland areas may require different depths. We do not guarantee a universal depth and determine drilling depth according to site conditions.",
    },
    {
      question: "How long does a typical deep well drilling project take?",
      answer:
        "On average, field drilling and well casing installation take between 2 to 4 weeks, depending on target depth, subsurface rock hardness, site accessibility, and weather conditions.",
    },
    {
      question:
        "What is SIPA and why is it necessary for my commercial project?",
      answer:
        "SIPA (Surat Izin Pengusahaan Air Tanah) is the official government permit required for groundwater extraction and utilization. Having a valid SIPA ensures your villa, resort, or commercial project remains legally compliant with environmental regulations.",
    },
    {
      question: "Which areas in Indonesia does DRYNO cover?",
      answer:
        "DRYNO provides integrated groundwater solutions across Bali, Nusa Lembongan, Nusa Penida, and West Nusa Tenggara (NTB) including Lombok and surrounding regions.",
    },
    {
      question: "How do I request an accurate quotation for my project?",
      answer:
        "You can contact our engineering team directly via WhatsApp or our contact form. We will review your project location, estimated water requirements, and site accessibility to provide a detailed project proposal.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-12 sm:py-20 lg:py-24 bg-warm-white text-deep-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split Layout: Headline Left, FAQ Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          {/* Column 1: Left Headline & CTA (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy tracking-tight leading-tight mb-4">
                Got Questions? <br /> We Have Answers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                Find answers to common questions about groundwater
                investigation, deep well drilling, permit compliance (SIPA &
                NPWPD ABT), and project timelines across Bali & NTB.
              </p>
            </div>

            {/* Left Contact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-deep-navy to-deep-navy-dark text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-engineering-blue/20 flex items-center justify-center text-engineering-blue-light shrink-0">
                  <HiChatBubbleLeftEllipsis className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Have a specific project question?
                  </h3>
                  <p className="text-xs text-gray-300 font-light">
                    Our hydrogeology team is ready to consult.
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-deep-navy text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-warm-white hover:scale-[1.02] active:scale-95 shadow-md"
              >
                <span>TALK TO AN EXPERT</span>
              </a>
            </div>
          </div>

          {/* Column 2: Right FAQ Accordion List (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-engineering-blue/30 shadow-md"
                      : "bg-white/80 border-gray-200/80 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none gap-4"
                  >
                    <span className="text-base font-bold text-deep-navy leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-deep-navy text-white"
                          : "bg-gray-100 text-deep-navy group-hover:bg-gray-200"
                      }`}
                    >
                      {isOpen ? (
                        <HiMinus className="w-4 h-4" />
                      ) : (
                        <HiPlus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed font-normal border-t border-gray-100/60 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
