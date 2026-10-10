"use client";

import React, { useState } from "react";
import {
  HiPaperAirplane,
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiCheckCircle,
  HiSparkles,
} from "react-icons/hi2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    location: "",
    projectType: "Villa / Private Estate",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const projectTypes = [
    "Villa / Private Estate",
    "Hotel / Resort",
    "Residential & Commercial",
    "Contractor / Developer",
    "Industrial Facility",
    "Other",
  ];

  return (
    <section id="contact" className="relative py-12 sm:py-20 lg:py-24 bg-white text-deep-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navy Card Container (White Section, Navy Card) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-deep-navy via-deep-navy-dark to-charcoal text-white p-6 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Decorative Glowing Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-engineering-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-engineering-blue-light/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Side: Header & Info (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8 flex flex-col justify-between h-full">
              <div>
                {/* Category Tagline */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="w-6 sm:w-8 h-[2px] bg-engineering-blue-light" />
                  <span className="text-xs font-bold tracking-[0.25em] text-engineering-blue-light uppercase">
                    GET IN TOUCH
                  </span>
                </div>

                {/* Main CTA Heading */}
                <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight mb-4 sm:mb-6">
                  DISCUSS YOUR PROJECT
                </h2>

                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                  Have a new groundwater project or need assistance with deep well drilling, geoelectric investigation, or SIPA permitting? Our team is ready to evaluate your site.
                </p>
              </div>

              {/* Direct Info Badges */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-engineering-blue-light shrink-0">
                    <HiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      OPERATIONAL COVERAGE
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      Bali • Nusa Lembongan • Nusa Penida • NTB
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-engineering-blue-light shrink-0">
                    <HiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      DIRECT WHATSAPP & PHONE
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      +62 857-9209-6854
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-engineering-blue-light shrink-0">
                    <HiEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      EMAIL INQUIRIES
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      info@dryno.co.id
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <HiSparkles className="w-5 h-5 text-engineering-blue-light shrink-0" />
                <p className="text-xs text-gray-300">
                  <strong className="text-white">10+ Years Field Experience</strong> in hydrogeology, drilling & regulatory compliance.
                </p>
              </div>
            </div>

            {/* Right Side: Contact Form (lg:col-span-7) */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 sm:p-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-engineering-blue-light/20 text-engineering-blue-light flex items-center justify-center mx-auto">
                    <HiCheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    We have received your project inquiry. Our hydrogeology team will review your requirements and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-white text-deep-navy text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-engineering-blue-light focus:bg-white/15 transition-all text-sm"
                      />
                    </div>

                    {/* Company / Project Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Company / Project Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Maison Resort Uluwatu"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-engineering-blue-light focus:bg-white/15 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Location */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Pecatu, Uluwatu, Bali"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-engineering-blue-light focus:bg-white/15 transition-all text-sm"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-deep-navy border border-white/15 text-white focus:outline-none focus:border-engineering-blue-light transition-all text-sm cursor-pointer"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-deep-navy text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your water requirements, site conditions, or specific service needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-engineering-blue-light focus:bg-white/15 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-engineering-blue hover:bg-engineering-blue-light text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-engineering-blue/30 active:scale-[0.99] group cursor-pointer"
                  >
                    <span>DISCUSS YOUR PROJECT</span>
                    <HiPaperAirplane className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
