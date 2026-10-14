"use client";

import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

export default function Equipment() {
  const equipmentList = [
    {
      id: "admt",
      category: "Ground Water Investigation",
      title: "Geoelectric Equipment",
      spec: "ADMT HT3 & Aerox",
      image: "/images/eq-1.jpg",
    },
    {
      id: "drilling-rig",
      category: "Drilling Equipment",
      title: "Heavy-Duty Drilling Rig",
      spec: "Heavy-Duty Drilling Rig",
      image: "/images/eq-2.jpg",
    },
    {
      id: "compressor",
      category: "Supporting Equipment",
      title: "High-Pressure Compressor",
      spec: "High-Pressure Compressor",
      image: "/images/eq-3.jpg",
    },
    {
      id: "dth-hammer",
      category: "Drilling Tools",
      title: "DTH Hammer",
      spec: '8" & 6"',
      image: "/images/eq-4.jpg",
    },
    {
      id: "pdc",
      category: "Drilling Tools",
      title: "PDC",
      spec: '8" & 6.7"',
      image: "/images/eq-5.jpg",
    },
    {
      id: "casing",
      category: "Casing",
      title: "Casing",
      spec: '6" / 5" / 4"',
      image: "/images/eq-6.jpg",
    },
  ];

  return (
    <section
      id="equipment"
      className="relative py-10 sm:py-16 lg:py-20 bg-deep-navy text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Title & CTA (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-engineering-blue-light uppercase block mb-2 sm:mb-3">
                EQUIPMENT & CAPABILITY
              </span>
              <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-3 sm:mb-4">
                Our Equipment <br />& Capability
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-md">
                Equipped with professional equipment and supported by an
                experienced team to deliver reliable ground water solutions.
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="glass-button inline-flex items-center gap-4 px-7 py-3.5 rounded-full text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-deep-navy group shadow-lg"
              >
                <span>VIEW EQUIPMENT</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-deep-navy/10">
                  <HiArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: 6 Equipment Cards Grid (lg:col-span-8 - 2 Row 3 Col) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 justify-center gap-2.5 sm:gap-3">
              {equipmentList.map((item) => (
                <div
                  key={item.id}
                  className="group  p-1 sm:p-2 transition-all duration-300 hover:scale-[1.03] flex flex-col justify-center"
                >
                  {/* Equipment Square Image */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 bg-white/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Caption & Specs */}
                  <div>
                    <h3 className="text-xs sm:text-xs font-bold text-white leading-snug line-clamp-1 text-center">
                      {item.title}
                    </h3>
                    <p className="text-center text-[11px] font-medium text-engineering-blue-light/90 tracking-wide mt-0.5 line-clamp-1">
                      {item.spec}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
