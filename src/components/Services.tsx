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

  const services: ServiceItem[] = [
    {
      id: "investigation",
      number: "01",
      title: "Ground Water Investigation",
      priceText: "Starting from",
      priceHighlight: "IDR 12,000,000",
      image: "/images/service-1.jpg",
      icon: HiChartBar,
      shortDesc:
        "Geoelectric & subsurface investigation to assess ground water zones before drilling.",
      fullDesc:
        "Ground Water investigation using geoelectric and ground water detection equipment to assess subsurface conditions and identify potential ground water zones before drilling. The investigation provides technical information to support drilling-point selection and planning of the next project stage.",
      includes: [
        "Site assessment",
        "Geoelectric / ground water investigation",
        "Ground Water potential assessment",
        "Interpretation of investigation results",
        "Recommended drilling point",
        "Preliminary depth indication",
        "Technical consultation",
      ],
      note: "Final price depends on project location, number of investigation points, site conditions, scope, and project requirements.",
      disclaimer:
        "Do not claim or guarantee exact ground water depth or ground water availability.",
    },
    {
      id: "drilling",
      number: "02",
      title: "Deep Well Drilling",
      priceText: "Price",
      priceHighlight: "Request Quotation",
      image: "/images/service-2.jpg",
      icon: HiWrenchScrewdriver,
      shortDesc:
        "Professional deep well drilling tailored to geological conditions and project needs.",
      fullDesc:
        "Professional deep well drilling according to project requirements, available investigation data, geological conditions, and actual field conditions. The drilling method, equipment, diameter, and target depth are determined according to the requirements and conditions of each project.",
      disclaimer:
        "Do not advertise a universal drilling depth or guarantee ground water availability.",
    },
    {
      id: "casing",
      number: "03",
      title: "Well Installation & Casing",
      priceText: "Price",
      priceHighlight: "Request Quotation",
      image: "/images/service-3.jpg",
      icon: HiSparkles,
      shortDesc:
        "Installation of high-grade casing and well components for long-term structural integrity.",
      fullDesc:
        "Installation of well casing and related well components according to drilling conditions and project requirements. The final configuration is determined according to actual technical requirements.",
      casingTypes: ["6 inch casing", "5 inch casing", "4 inch casing"],
    },
    {
      id: "consultation",
      number: "04",
      title: "Technical Consultation",
      priceText: "Price",
      priceHighlight: "Contact Us",
      image: "/images/service-4.jpg",
      icon: HiChatBubbleBottomCenterText,
      shortDesc:
        "Expert technical guidance and strategic project planning for ground water solutions.",
      fullDesc:
        "Technical consultation for projects requiring ground water solutions. Our experienced hydrogeological team provides end-to-end guidance for private, commercial, and industrial developments.",
      consultationTopics: [
        "Initial project assessment",
        "Water requirement discussion",
        "Site-condition assessment",
        "Ground Water investigation strategy",
        "Drilling strategy",
        "Technical recommendation",
        "Project planning",
      ],
    },
    {
      id: "sipa",
      number: "05",
      title: "SIPA Processing Assistance",
      priceText: "Starting from",
      priceHighlight: "IDR 50,000,000",
      image: "/images/service-5.jpg",
      icon: HiDocumentCheck,
      shortDesc:
        "Legal administrative assistance for Surat Izin Pengusahaan Air Tanah (SIPA).",
      fullDesc:
        "DRYNO provides assistance for the processing of SIPA (Surat Izin Pengusahaan Air Tanah) for projects requiring ground water utilization permits. Our service supports clients throughout the required administrative process, including document preparation and coordination according to applicable requirements and regulations.",
      note: "Final pricing depends on project location, document readiness, scope of work, technical requirements, and applicable regulatory requirements.",
      disclaimer: "Does not guarantee permit approval.",
    },
    {
      id: "npwpd",
      number: "06",
      title: "NPWPD ABT Processing",
      priceText: "Starting from",
      priceHighlight: "IDR 6,000,000",
      image: "/images/service-6.jpg",
      icon: HiDocumentText,
      shortDesc:
        "Registration & administrative support for NPWPD ABT ground water taxation compliance.",
      fullDesc:
        "DRYNO provides administrative assistance for the registration and processing of NPWPD ABT (Nomor Pokok Wajib Pajak Daerah Air Bawah Tanah) related to ground water taxation and administrative compliance. Our team assists clients throughout the required administrative process based on applicable requirements and document readiness.",
      note: "Final pricing may vary depending on project location, document readiness, administrative requirements, and scope of assistance.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-12 sm:py-20 lg:py-24 bg-warm-white text-deep-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase block mb-3">
            OUR SERVICES
          </span>
          <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-extrabold text-deep-navy leading-tight tracking-tight mb-3 sm:mb-4">
            Comprehensive Ground Water & Permitting Solutions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Integrated services from initial geoelectric investigation and
            precision deep well drilling to legal SIPA permitting and NPWPD ABT
            tax registration.
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
                  OVERVIEW & SCOPE
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Included Service Bullet Points */}
              {selectedService.includes && (
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">
                    SERVICE MAY INCLUDE:
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
                    AVAILABLE CASING OPTIONS:
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
                    CONSULTATION TOPICS INCLUDE:
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
                CLOSE
              </button>

              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-deep-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-engineering-blue hover:shadow-lg active:scale-95"
              >
                <span>INQUIRE ABOUT THIS SERVICE</span>
                <HiArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
