import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaterTankerCalculator from "@/components/WaterTankerCalculator";
import { HiArrowLeft } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Water Tanker Cost Calculator | DRYNO - Ground Water Solution Bali",
  description:
    "Estimate your property's 5, 10, and 25-year water tanker delivery expenditures versus independent deep well water infrastructure in Bali.",
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-warm-white flex flex-col font-sans">
      <Navbar />

      <div className="pt-24 sm:pt-28">
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-deep-navy transition-colors tracking-wider uppercase group"
          >
            <HiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home Overview</span>
          </a>
        </div>

        {/* Dedicated Calculator Component */}
        <WaterTankerCalculator />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
