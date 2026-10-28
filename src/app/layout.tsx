import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DRYNO — Engineering Water Solution",
  description:
    "Ground Water investigation, professional deep well drilling, well construction and ground water compliance support for projects across Bali and surrounding regions.",
  keywords: [
    "DRYNO",
    "Water Solution",
    "Deep Well Drilling",
    "Ground Water Investigation",
    "Bali Drilling",
    "Nusa Penida",
    "Nusa Lembongan",
    "NTB",
  ],
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} font-sans antialiased scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-warm-white text-charcoal flex flex-col"
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
