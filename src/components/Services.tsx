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
import { translations } from "@/context/translations";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  priceText: string;
  priceHighlight: string;
  image: string;
  icon: React.ElementType;
  shortDesc: string;
  fullDesc: string;
  includes?: string[];
  casingTypes?: string[];
  consultationTopics?: string[];
  note?: string;
  disclaimer?: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );
  const { language } = useLanguage();
  const t = translations[language].services;

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

  const servicesConfig = [
    {
      id: "investigation",
      number: "01",
      priceText: t.startingFrom,
      priceHighlight: "IDR 12,000,000",
      image: "/images/service-1.jpg",
      icon: HiChartBar,
      includes:
        language === "EN"
          ? [
              "Site assessment",
              "Geoelectric / ground water investigation",
              "Ground Water potential assessment",
              "Interpretation of investigation results",
              "Recommended drilling point",
              "Preliminary depth indication",
              "Technical consultation",
            ]
          : [
              "Survei lokasi lapangan",
              "Investigasi geolistrik air tanah",
              "Penilaian potensi akuifer air",
              "Interpretasi data hasil investigasi",
              "Rekomendasi titik bor optimal",
              "Indikasi estimasi kedalaman",
              "Konsultasi teknis awal",
            ],
    },
    {
      id: "drilling",
      number: "02",
      priceText: t.priceLabel,
      priceHighlight: t.requestQuotation,
      image: "/images/service-2.jpg",
      icon: HiWrenchScrewdriver,
    },
    {
      id: "casing",
      number: "03",
      priceText: t.priceLabel,
      priceHighlight: t.requestQuotation,
      image: "/images/service-3.jpg",
      icon: HiSparkles,
      casingTypes: ["6 inch casing", "5 inch casing", "4 inch casing"],
    },
    {
      id: "consultation",
      number: "04",
      priceText: t.priceLabel,
      priceHighlight: t.contactUs,
      image: "/images/service-4.jpg",
      icon: HiChatBubbleBottomCenterText,
      consultationTopics:
        language === "EN"
          ? [
              "Initial project assessment",
              "Water requirement discussion",
              "Site-condition assessment",
              "Ground Water investigation strategy",
              "Drilling strategy",
              "Technical recommendation",
              "Project planning",
            ]
          : [
              "Penilaian awal proyek",
              "Analisis kebutuhan debit air",
              "Evaluasi kondisi geologi tapak",
              "Strategi investigasi geolistrik",
              "Perencanaan metode pemboran",
              "Rekomendasi teknis komprehensif",
              "Perencanaan jadwal & anggaran",
            ],
    },
    {
      id: "sipa",
      number: "05",
      priceText: t.startingFrom,
      priceHighlight: "IDR 50,000,000",
      image: "/images/service-5.jpg",
      icon: HiDocumentCheck,
    },
    {
      id: "npwpd",
      number: "06",
      priceText: t.startingFrom,
      priceHighlight: "IDR 6,000,000",
      image: "/images/service-6.jpg",
      icon: HiDocumentText,
    },
  ];

  const services: ServiceItem[] = servicesConfig.map((cfg, idx) => {
    const item = t.items[idx] || t.items[0];
    return {
      ...cfg,
      title: item.title,
      shortDesc: item.shortDesc,
      fullDesc: item.fullDesc,
      note: item.note,
      disclaimer: item.disclaimer,
    };
  });

  return (
    <section
      id="services"
      className="relative py-12 sm:py-20 lg:py-24 bg-warm-white text-deep-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase block mb-3">
            {t.eyebrow}
          </span>
          <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-extrabold text-deep-navy leading-tight tracking-tight mb-3 sm:mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid (6 Cards Matching Design Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Thumbnail Image Container */}
                <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-deep-navy/80 backdrop-blur-xs text-[10px] font-bold text-white tracking-widest">
                    {service.number}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Icon + Title Header */}
                    <div className="flex items-start gap-2.5 mb-3">
                      <div className="p-1.5 rounded-lg bg-engineering-blue/10 text-engineering-blue shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-deep-navy leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Price & Action Button Row */}
                  <div className="pt-3 border-t border-gray-100 flex items-end justify-between gap-2 mt-2">
                    <div>
                      <span className="text-[10px] font-semibold text-gray-400 block leading-tight">
                        {service.priceText}
                      </span>
                      <span className="text-xs lg:text-lg font-black text-engineering-blue tracking-tight block">
                        {service.priceHighlight}
                      </span>
                    </div>

                    <button
                      aria-label={`View details for ${service.title}`}
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
                src={selectedService.image}
                alt={selectedService.title}
                fill
                priority
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
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
              {/* Price Highlight Banner */}
              <div className="p-4 rounded-2xl bg-warm-white border border-gray-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                    {selectedService.priceText}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-engineering-blue">
                    {selectedService.priceHighlight}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-engineering-blue/10 text-engineering-blue">
                  <selectedService.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Detailed Text Description */}
              <div>
                <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">
                  {t.modalScope}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Included Service Bullet Points */}
              {selectedService.includes && (
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                    {language === "EN" ? "SERVICE MAY INCLUDE:" : "CAKUPAN LAYANAN:"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.includes.map((item, idx) => (
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
              {selectedService.casingTypes && (
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                    {t.modalCasing}:
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

              {/* Consultation Topics */}
              {selectedService.consultationTopics && (
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                    {t.modalConsultation}:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.consultationTopics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-deep-navy"
                      >
                        <HiCheckCircle className="w-4 h-4 text-engineering-blue shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing Note */}
              {selectedService.note && (
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex items-start gap-3">
                  <HiInformationCircle className="w-5 h-5 text-engineering-blue shrink-0 mt-0.5" />
                  <p className="italic">{selectedService.note}</p>
                </div>
              )}

              {/* Legal Disclaimer Box */}
              {selectedService.disclaimer && (
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                  <HiExclamationTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="font-medium">{selectedService.disclaimer}</p>
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
                <span>{t.modalCta}</span>
                <HiArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
