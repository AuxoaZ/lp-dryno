"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "6285792096854";
  const defaultMessage = encodeURIComponent(
    "Halo DRYNO, saya ingin berkonsultasi mengenai proyek air tanah / pengeboran sumur.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with DRYNO"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl shadow-green-600/30 transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      {/* <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span> */}
      <FaWhatsapp className="w-6 h-6 text-white transition-transform group-hover:rotate-12" />
      {/* <span className="text-xs font-extrabold tracking-wider uppercase hidden sm:inline-block">
        CHAT WHATSAPP
      </span> */}
    </a>
  );
}
