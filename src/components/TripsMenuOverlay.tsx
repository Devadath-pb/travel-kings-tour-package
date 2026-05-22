"use client";

import { useEffect } from "react";
import Link from "next/link";
import { tripCategories } from "@/data/trips";
import { X } from "lucide-react";

export function TripsMenuOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[200] transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div
        className="absolute inset-0 bg-brand-bg/95 backdrop-blur-2xl"
        onClick={onClose}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close trips menu"
          className="absolute top-6 right-6 text-brand-muted hover:text-brand-text transition-colors"
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-muted mb-8">
          Choose Your Journey
        </p>

        <div className="flex flex-col items-center gap-4 md:gap-5">
          {tripCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              onClick={onClose}
              className="group flex items-center gap-4"
            >
              <span className="font-display text-3xl md:text-5xl font-light text-brand-text group-hover:text-brand-gold transition-colors duration-300">
                {cat.title}
              </span>
              <span className="font-body text-xs text-brand-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.duration} Day{cat.duration > 1 ? "s" : ""}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex gap-6">
          <Link
            href="/about"
            onClick={onClose}
            className="font-body text-sm text-brand-muted hover:text-brand-text transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="font-body text-sm text-brand-muted hover:text-brand-text transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
