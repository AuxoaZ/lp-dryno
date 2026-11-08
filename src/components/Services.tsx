"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  HiArrowRight,
  HiXMark,
  HiCheckCircle,
  HiExclamationTriangle,
  HiInformationCircle,
  HiWrenchScrewdriver,
  HiDocumentCheck,
  HiDocumentText,
  HiChartBar,
  HiChatBubbleBottomCenterText,
  HiSparkles,
} from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import type { ProductItem } from "@/types/cms";

function getCategoryIcon(category: string, id: string) {
  const key = `${category} ${id}`.toLowerCase();
  if (key.includes("investigation") || key.includes("geolistrik"))
    return HiChartBar;
  if (key.includes("drilling") || key.includes("bor"))
    return HiWrenchScrewdriver;
  if (key.includes("consultation") || key.includes("konsultasi"))
    return HiChatBubbleBottomCenterText;
  if (key.includes("sipa")) return HiDocumentCheck;
  if (key.includes("npwpd") || key.includes("permit")) return HiDocumentText;
  return HiSparkles;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ProductItem | null>(
    null
  );
  const { language, content } = useLanguage();
  const meta = content.servicesMeta;

  // Show Active & Featured products/services on public page
  const visibleProducts = content.products.filter(
    (item) => item.status !== "Draft"
  );

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <section
      id="services"
      className="relative py-8 sm:py-16 lg:py-24 bg-warm-white text-deep-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-5 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gray-400 uppercase block mb-1.5 sm:mb-3">
            {meta.eyebrow[language]}
          </span>
          <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-extrabold text-deep-navy leading-tight tracking-tight mb-2 sm:mb-4">
            {meta.title[language]}
          </h2>
          <p className="text-xs sm:text-base text-gray-600 font-normal">
            {meta.subtitle[language]}
          </p>
        </div>

        {/* Services / Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {visibleProducts.map((service) => {
            const Icon = getCategoryIcon(service.category, service.id);
            const title = service.name[language];
            const priceText = service.priceLabel[language];
            const priceHighlight = service.price[language];

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Thumbnail Image Container */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image || "/images/service-1.jpg"}
                    alt={title}
                    fill
                    unoptimized={
                      service.image?.startsWith("http") ||
                      service.image?.startsWith("/images/uploads/")
                    }
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-deep-navy/80 backdrop-blur-xs text-[10px] font-bold text-white tracking-widest">
                    {service.number}
                  </div>
                  {service.status === "Featured" && (
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-engineering-blue text-[10px] font-bold text-white uppercase tracking-wider shadow-xs">
                      {language === "EN" ? "Featured" : "Unggulan"}
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Icon + Title Header */}
                    <div className="flex items-start gap-2 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-engineering-blue/10 text-engineering-blue shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-deep-navy leading-snug">
                        {title}
                      </h3>
                    </div>
                    {service.shortDesc?.[language] && (
                      <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2 mb-2 pl-6 sm:pl-7">
                        {service.shortDesc[language]}
                      </p>
                    )}
                  </div>

                  {/* Price & Action Button Row */}
                  <div className="pt-2 sm:pt-3 border-t border-gray-100 flex items-end justify-between gap-2 mt-1 sm:mt-2">
                    <div>
                      <span className="text-[10px] font-semibold text-gray-400 block leading-tight">
                        {priceText}
                      </span>
                      <span className="text-xs lg:text-lg font-black text-engineering-blue tracking-tight block">
                        {priceHighlight}
                      </span>
                    </div>

                    <button
                      aria-label={`View details for ${title}`}
                      className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200 text-deep-navy flex items-center justify-center transition-all duration-300 group-hover:bg-deep-navy group-hover:text-white group-hover:border-deep-navy shrink-0"
                    >
                      <HiArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pop-up Modal Container */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop Click */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal Box */}
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
            {/* Modal Header Bar */}
            <div className="relative h-44 sm:h-52 w-full bg-deep-navy text-white overflow-hidden shrink-0">
              <Image
                src={selectedService.image || "/images/service-1.jpg"}
                alt={selectedService.name[language]}
                fill
                priority
                unoptimized={
                  selectedService.image?.startsWith("http") ||
                  selectedService.image?.startsWith("/images/uploads/")
                }
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/70 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors focus:outline-none"
              >
                <HiXMark className="w-5 h-5" />
              </button>

              {/* Header Title Info */}
              <div className="absolute bottom-5 left-6 right-6 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-engineering-blue text-[10px] font-extrabold tracking-widest text-white uppercase">
                    SERVICE {selectedService.number}
                  </span>
                  <span className="text-xs font-semibold text-gray-300">
                    DRYNO — Engineering Water Solution
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedService.name[language]}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
              {/* Price Highlight Banner */}
              <div className="p-4 rounded-2xl bg-warm-white border border-gray-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                    {selectedService.priceLabel[language]}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-engineering-blue">
                    {selectedService.price[language]}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-engineering-blue/10 text-engineering-blue">
                  {React.createElement(
                    getCategoryIcon(
                      selectedService.category,
                      selectedService.id
                    ),
                    { className: "w-6 h-6" }
                  )}
                </div>
              </div>

              {/* Detailed Text Description */}
              <div>
                <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">
                  {meta.modalScope[language]}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {selectedService.fullDesc[language] ||
                    selectedService.shortDesc[language]}
                </p>
              </div>

              {/* Included Service Bullet Points */}
              {((language === "EN" && selectedService.includesEN?.length > 0) ||
                (language === "ID" &&
                  selectedService.includesID?.length > 0)) && (
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                    {language === "EN"
                      ? "SERVICE MAY INCLUDE:"
                      : "CAKUPAN LAYANAN:"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(language === "EN"
                      ? selectedService.includesEN
                      : selectedService.includesID
                    ).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-deep-navy"
                      >
                        <HiCheckCircle className="w-4 h-4 text-engineering-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Casing Types */}
              {selectedService.casingTypes &&
                selectedService.casingTypes.length > 0 && (
                  <div>
                    <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                      {meta.modalCasing[language]}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.casingTypes.map((casing, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-deep-navy text-white text-xs font-bold tracking-wider uppercase shadow-xs"
                        >
                          {casing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {/* Pricing Note */}
              {selectedService.note?.[language] && (
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex items-start gap-3">
                  <HiInformationCircle className="w-5 h-5 text-engineering-blue shrink-0 mt-0.5" />
                  <p className="italic">{selectedService.note[language]}</p>
                </div>
              )}

              {/* Legal Disclaimer Box */}
              {selectedService.disclaimer?.[language] && (
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                  <HiExclamationTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="font-medium">
                    {selectedService.disclaimer[language]}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4 shrink-0">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full border border-gray-300 text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors uppercase"
              >
                {language === "EN" ? "CLOSE" : "TUTUP"}
              </button>

              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-deep-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-engineering-blue hover:shadow-lg active:scale-95"
              >
                <span>{meta.modalCta[language]}</span>
                <HiArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
