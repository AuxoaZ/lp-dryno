import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Projects from "@/components/Projects";
import Equipment from "@/components/Equipment";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white flex flex-col font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <Projects />
      <Equipment />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}



