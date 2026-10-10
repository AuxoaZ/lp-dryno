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
    "Groundwater investigation, professional deep well drilling, well construction and groundwater compliance support for projects across Bali and surrounding regions.",
  keywords: [
    "DRYNO",
    "Water Solution",
    "Deep Well Drilling",
    "Groundwater Investigation",
    "Bali Drilling",
    "Nusa Penida",
    "Nusa Lembongan",
    "NTB",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans antialiased scroll-smooth`}>
      <body className="min-h-screen bg-warm-white text-charcoal flex flex-col">
        {children}
      </body>
    </html>
  );
}
