"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useInquiry } from "../context/InquiryContext";
import { getAllDestinationOptions } from "../data/trips";
import { X, ChevronDown, Send } from "lucide-react";

export function InquiryModal() {
  const { formData, formErrors, isOpen, closeModal, updateField, submitForm } = useInquiry();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const allOptions = getAllDestinationOptions();

  const filteredOptions = searchQuery
    ? allOptions.filter((opt) =>
      opt.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : allOptions;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow || "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-end md:items-center justify-center">
      <div
        className="modal-backdrop-cinematic absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />
      <div className="modal-panel-cinematic relative z-10 w-full md:w-[560px] max-h-[90vh] overflow-y-auto bg-brand-bg2 rounded-t-3xl md:rounded-2xl shadow-2xl border border-white/5">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="font-display text-2xl font-light text-brand-text">
            Plan Your Trip
          </h2>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close inquiry form"
            className="text-brand-muted hover:text-brand-text transition-colors p-1"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-8 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="modal-name" className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
              Name
            </label>
            <input
              id="modal-name"
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
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="modal-email" className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
                Email
              </label>
              <input
                id="modal-email"
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
              <label htmlFor="modal-phone" className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
                Phone
              </label>
              <input
                id="modal-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="e.g. +91 94006 78245"
                aria-invalid={Boolean(formErrors.phone)}
                className="w-full px-4 py-3 bg-brand-bg/60 border border-white/10 rounded-xl font-body text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
              />
              {formErrors.phone && <p className="mt-1 text-xs text-brand-gold">{formErrors.phone}</p>}
            </div>
          </div>

          {/* Destination Interest - Searchable Select */}
          <div ref={dropdownRef} className="relative">
            <label htmlFor="modal-destination" className="block font-body text-xs uppercase tracking-wider text-brand-muted mb-2">
              Destination Interest
            </label>
            <div className="relative">
              <input
                id="modal-destination"
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

            {/* Dropdown */}
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
          <div className="grid grid-cols-2 gap-3">
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
              rows={3}
              className="w-full px-4 py-3 bg-brand-bg/60 border border-white/10 rounded-xl font-body text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <p className="font-body text-xs text-brand-muted mb-2">
            Your enquiry will be sent to WhatsApp at <span className="text-brand-text">+91 94006 78245</span>. We&apos;ll include your phone number so our travel team can contact you directly.
          </p>
          <button
            type="submit"
            className="w-full btn-primary gap-2 mt-2"
          >
            <Send size={16} strokeWidth={1.5} />
            PLAN THIS TOUR
          </button>
        </form>
      </div>
    </div>
  );
}
