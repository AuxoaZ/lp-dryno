"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HiMagnifyingGlassPlus,
  HiXMark,
  HiChevronLeft,
  HiChevronRight,
  HiCamera,
} from "react-icons/hi2";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const galleryImages = [
    {
      id: "gallery-1",
      src: "/images/gallery/gallery-1.jpeg",
      title: "Deep Well Drilling Site Setup",
      location: "Uluwatu, Bali",
      aspectRatio: "aspect-[4/3]",
    },
    {
      id: "gallery-2",
      title: "Ground Water Investigation & Survey",
      location: "Pecatu, Bali",
      src: "/images/gallery/gallery-2.jpeg",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: "gallery-3",
      title: "Heavy Drilling Rig Operation",
      location: "Bingin, Uluwatu",
      src: "/images/gallery/gallery-3.jpeg",
      aspectRatio: "aspect-[16/10]",
    },
    {
      id: "gallery-4",
      title: "Well Casing Installation",
      location: "Nusa Penida, Bali",
      src: "/images/gallery/gallery-4.jpeg",
      aspectRatio: "aspect-[4/3]",
    },
    {
      id: "gallery-5",
      title: "Water Discharge Testing",
      location: "Canggu, Bali",
      src: "/images/gallery/gallery-5.jpeg",
      aspectRatio: "aspect-[16/9]",
    },
    {
      id: "gallery-6",
      title: "Hydrogeology Field Consultation",
      location: "Lombok, NTB",
      src: "/images/gallery/gallery-6.jpeg",
      aspectRatio: "aspect-[16/9]",
    },
    {
      id: "gallery-7",
      title: "Water Discharge Testing",
      location: "Canggu, Bali",
      src: "/images/gallery/gallery-5.jpeg",
      aspectRatio: "aspect-[16/9]",
    },
    {
      id: "gallery-8",
      title: "Hydrogeology Field Consultation",
      location: "Lombok, NTB",
      src: "/images/gallery/gallery-6.jpeg",
      aspectRatio: "aspect-[16/9]",
    },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : (prev as number) - 1,
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : (prev as number) + 1,
      );
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-12 sm:py-20 lg:py-24 bg-warm-white text-deep-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase block mb-2 sm:mb-3">
            FIELD PORTFOLIO
          </span>
          <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-bold text-deep-navy leading-tight tracking-tight mb-3 sm:mb-4">
            Project Gallery & Field Operations
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Real field documentation of our hydrogeology surveys, heavy deep
            well drilling operations, and well installations across Bali & NTB.
          </p>
        </div>

        {/* CSS Masonry Columns Layout */}
        <div className="columns-2 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/80 shadow-xs hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div
                className={`relative w-full ${image.aspectRatio} overflow-hidden`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  {/* Top Zoom Icon Badge */}
                  <div className="self-end w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                    <HiMagnifyingGlassPlus className="w-5 h-5" />
                  </div>

                  {/* Bottom Caption */}
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-engineering-blue-light uppercase block mb-1">
                      {image.location}
                    </span>
                    <h3 className="text-base font-extrabold text-white leading-snug">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Full-Screen Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
          >
            <HiXMark className="w-6 h-6" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Image & Caption Card */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain object-center"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center">
              <span className="text-xs font-bold tracking-widest text-engineering-blue-light uppercase block mb-1">
                {galleryImages[selectedImageIndex].location}
              </span>
              <h3 className="text-xl font-bold text-white">
                {galleryImages[selectedImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
