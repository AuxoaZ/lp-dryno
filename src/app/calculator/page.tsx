import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaterTankerCalculator from "@/components/WaterTankerCalculator";
import CalculatorBreadcrumb from "@/components/CalculatorBreadcrumb";

export const metadata: Metadata = {
  title: "Kalkulator Biaya Air Tangki vs Sumur Bor Bali | DRYNO",
  description:
    "Simulasikan dan hitung pengeluaran air truk tangki komersial 5, 10, hingga 25 tahun untuk villa, hotel, dan bisnis di Bali dibandingkan investasi sumur bor mandiri.",
  alternates: {
    canonical: "/calculator",
  },
  openGraph: {
    title: "Kalkulator Pengeluaran Air Tangki vs Sumur Bor | DRYNO Bali",
    description:
      "Hitung estimasi pengeluaran air truk tangki komersial untuk properti villa dan bisnis Anda di Bali dalam proyeksi 5, 10, hingga 25 tahun.",
    url: "https://dryno.co.id/calculator",
    type: "website",
  },
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-warm-white flex flex-col font-sans">
      <Navbar />

      <div className="pt-20 sm:pt-28">
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-1 sm:pb-2">
          <CalculatorBreadcrumb />
        </div>

        {/* Dedicated Calculator Component */}
        <WaterTankerCalculator />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
