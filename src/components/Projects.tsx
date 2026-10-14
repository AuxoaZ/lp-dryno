"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight, HiArrowRight } from "react-icons/hi2";

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: "maison-horizon",
      title: "Maison Horizon Uluwatu",
      location: "Pecatu, Uluwatu, Bali",
      date: "Jan 2025",
      scope: "Ground Water Investigation & Deep Well Drilling",
      finalDepth: "220 m",
      waterEncounter: "±200 m",
      waterDischarge: "10 m³/h",
      image: "/images/project-maison.jpg",
    },
    {
      id: "fira-uluwatu",
      title: "Fira Uluwatu",
      location: "Bingin, Uluwatu, Bali",
      date: "Mar 2025",
      scope:
        "Ground Water Investigation, Deep Well Drilling & Well Installation",
      finalDepth: "170 m",
      waterEncounter: "±150 m",
      waterDischarge: "5 m³/h",
      image: "/images/project-fira.jpg",
    },
    {
      id: "bebas-villa",
      title: "Bebas Villa Uluwatu",
      location: "Bingin, Uluwatu, Bali",
      date: "Apr 2026",
      scope: "Ground Water Investigation & Deep Well Drilling",
      finalDepth: "105 m",
      waterEncounter: "±90 m",
      waterDischarge: "5 m³/h",
      image: "/images/project-bebas.jpg",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="relative py-12 sm:py-20 lg:py-24 bg-white text-deep-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-12 pb-4 sm:pb-6 border-b border-gray-100 gap-4">
          {/* Title Area */}
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase block mb-2">
              OUR PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-deep-navy tracking-tight">
              Selected Projects
            </h2>
          </div>

          {/* Controls & Action Link */}
          <div className="flex items-center gap-6">
            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous project"
                className="w-9 h-9 rounded-full border border-gray-200 text-gray-600 hover:bg-deep-navy hover:text-white hover:border-deep-navy flex items-center justify-center transition-all duration-300 active:scale-95 shadow-2xs"
              >
                <HiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next project"
                className="w-9 h-9 rounded-full border border-gray-200 text-gray-600 hover:bg-deep-navy hover:text-white hover:border-deep-navy flex items-center justify-center transition-all duration-300 active:scale-95 shadow-2xs"
              >
                <HiChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* View All Projects Link */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-engineering-blue tracking-widest uppercase transition-colors"
            >
              <span>VIEW ALL PROJECTS</span>
              <HiArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Slidable Cards Row / Responsive Grid */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] sm:min-w-[360px] lg:min-w-[380px] flex-1 snap-start group rounded-2xl bg-warm-white border border-gray-100/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-deep-navy/80 backdrop-blur-xs text-[10px] font-bold text-white tracking-wider">
                  {project.date}
                </div>
              </div>

              {/* Card Main Info */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-black text-deep-navy leading-snug mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-500 mb-3">
                    {project.location} &nbsp;|&nbsp;{" "}
                    <span className="text-gray-400">{project.date}</span>
                  </p>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-engineering-blue/10 text-engineering-blue text-[11px] font-semibold mb-4">
                    {project.scope}
                  </span>
                </div>

                {/* 3 Metric Columns (Matching Design Reference Image) */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200/60 text-center">
                  {/* Metric 1 */}
                  <div className="border-r border-gray-200/60 pr-1">
                    <span className="text-base sm:text-lg font-black text-deep-navy block leading-none mb-1">
                      {project.finalDepth}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">
                      Final Depth
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="border-r border-gray-200/60 px-1">
                    <span className="text-base sm:text-lg font-black text-deep-navy block leading-none mb-1">
                      {project.waterEncounter}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">
                      Water Encounter
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="pl-1">
                    <span className="text-base sm:text-lg font-black text-deep-navy block leading-none mb-1">
                      {project.waterDischarge}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">
                      Water Discharge
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
