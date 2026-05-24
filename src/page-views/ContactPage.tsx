"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { useInquiry } from "../context/InquiryContext";
import { getAllDestinationOptions } from "../data/trips";
import { FooterSection } from "../sections/FooterSection";
import { seo } from "../lib/seo";
import { useSEO } from "../hooks/useSEO";
import {
  ArrowLeft,
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  ChevronDown,
} from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  useSEO(seo.contact);
  const { formData, formErrors, updateField, submitForm } = useInquiry();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const allOptions = getAllDestinationOptions();

  const filteredOptions = searchQuery
    ? allOptions.filter((opt) =>
        opt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allOptions;

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const heroH1 = heroRef.current?.querySelector("h1");
      if (heroH1) {
        gsap.fromTo(
          heroH1,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
        );
      }

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.4,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <main className="bg-brand-bg min-h-screen">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-28 md:pt-32 pb-12 md:pb-16 px-6 md:px-[6vw]"
      >
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          <span className="font-body text-sm">Back</span>
        </button>

        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-display text-[clamp(36px,6vw,64px)] font-light text-brand-text leading-[1.05] mb-3">
            Get in Touch
          </h1>
          <p className="font-body text-base md:text-lg text-brand-muted max-w-[600px]">
            Ready to start your South India adventure? We&apos;re here to help
            plan your perfect trip.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-32 px-6 md:px-[6vw]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: Contact info */}
            <div className="lg:w-[35%]">
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} strokeWidth={1.5} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-brand-muted mb-1">
                      Email
                    </p>
                    <p className="font-body text-sm text-brand-text">
                      travelkings50@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} strokeWidth={1.5} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-brand-muted mb-1">
                      Phone
                    </p>
                    <p className="font-body text-sm text-brand-text">
                      +91 94006 78245
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} strokeWidth={1.5} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-brand-muted mb-1">
                      Hours
                    </p>
                    <p className="font-body text-sm text-brand-text">
                      Mon-Sat, 9am-8pm IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} strokeWidth={1.5} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-brand-muted mb-1">
                      Location
                    </p>
                    <p className="font-body text-sm text-brand-text">
                      Thrissur, Kerala
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <p className="font-body text-xs uppercase tracking-wider text-brand-muted mb-4">
                  Popular Destinations
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Munnar", "Coorg", "Wayanad", "Goa", "Hampi", "Ooty"].map(
                    (dest) => (
                      <button
                        key={dest}
                        onClick={() => {
                          updateField("destination", dest);
                          document
                            .getElementById("destination-field")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-body text-xs text-brand-text/70 hover:bg-white/10 hover:text-brand-text transition-all"
                      >
                        {dest}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right: Full form */}
            <div ref={formRef} className="lg:w-[65%]">
              <div className="bg-brand-bg2/60 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-white/5">
                <h2 className="font-display text-xl font-light text-brand-text mb-6">
                  Send an Inquiry
                </h2>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                      <label htmlFor="contact-name" className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your full name"
                        aria-invalid={Boolean(formErrors.name)}
                        className="w-full px-4 py-3 bg-brand-bg/60 border border-white/10 rounded-xl font-body text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
                      />
                      {formErrors.name && <p className="mt-1 text-xs text-brand-gold">{formErrors.name}</p>}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-email" className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="your@email.com"
                        aria-invalid={Boolean(formErrors.email)}
                        className="w-full px-4 py-3 bg-brand-bg/60 border border-white/10 rounded-xl font-body text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
                      />
                      {formErrors.email && <p className="mt-1 text-xs text-brand-gold">{formErrors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+91"
                        aria-invalid={Boolean(formErrors.phone)}
                        className="w-full px-4 py-3 bg-brand-bg/60 border border-white/10 rounded-xl font-body text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
                      />
                      {formErrors.phone && <p className="mt-1 text-xs text-brand-gold">{formErrors.phone}</p>}
                    </div>
                  </div>

                  {/* Destination - Searchable Select */}
                  <div ref={dropdownRef} id="destination-field" className="relative">
                    <label htmlFor="contact-destination" className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
                      Destination Interest
                    </label>
                    <div className="relative">
                      <input
                        id="contact-destination"
                        type="text"
                        value={formData.destination}
                        onChange={(e) => {
                          updateField("destination", e.target.value);
                          setSearchQuery(e.target.value);
                          setDropdownOpen(true);
                        }}
                        onFocus={() => setDropdownOpen(true)}
                        placeholder="Search or type a destination..."
                        aria-invalid={Boolean(formErrors.destination)}
                        aria-expanded={dropdownOpen}
                        className="w-full px-4 py-3 pr-10 bg-brand-bg/60 border border-white/10 rounded-xl font-body text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-label="Toggle destination options"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {formErrors.destination && <p className="mt-1 text-xs text-brand-gold">{formErrors.destination}</p>}
                    {dropdownOpen && (
                      <div className="absolute z-20 top-full left-0 right-0 mt-1 max-h-52 overflow-y-auto bg-brand-bg border border-white/10 rounded-xl shadow-2xl">
                        {filteredOptions.length > 0 ? (
                          filteredOptions.map((option) => (
                            <button
                              type="button"
                              key={option}
                              onClick={() => {
                                updateField("destination", option);
                                setDropdownOpen(false);
                              }}
                              className="w-full px-4 py-2.5 text-left font-body text-sm text-brand-text hover:bg-white/5 transition-colors first:rounded-t-xl last:rounded-b-xl"
                            >
                              {option}
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-3 font-body text-sm text-brand-muted">
                            No matches. Type your own destination.
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Group Size + Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
                        Group Size <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.groupSize}
                        onChange={(e) => updateField("groupSize", e.target.value)}
                        placeholder="e.g., 4 people"
                        aria-invalid={Boolean(formErrors.groupSize)}
                        className="w-full px-4 py-3 bg-brand-bg/60 border border-white/10 rounded-xl font-body text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
                      />
                      {formErrors.groupSize && <p className="mt-1 text-xs text-brand-gold">{formErrors.groupSize}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
                        Travel Dates <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.dates}
                        onChange={(e) => updateField("dates", e.target.value)}
                        placeholder="e.g., Jan 2026"
                        aria-invalid={Boolean(formErrors.dates)}
                        className="w-full px-4 py-3 bg-brand-bg/60 border border-white/10 rounded-xl font-body text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
                      />
                      {formErrors.dates && <p className="mt-1 text-xs text-brand-gold">{formErrors.dates}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Tell us more about your dream trip..."
                      rows={4}
                      className="w-full px-4 py-3 bg-brand-bg/60 border border-white/10 rounded-xl font-body text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button type="button" onClick={submitForm} className="w-full btn-primary gap-2">
                    <Send size={16} strokeWidth={1.5} />
                    PLAN THIS TOUR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
