"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TripsMenuOverlay } from "./TripsMenuOverlay";
import { LogoBadge } from "./LogoBadge";

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 backdrop-blur-xl ${scrolled || !isHome
            ? "bg-brand-bg/95 border-b border-white/10 shadow-2xl shadow-black/20"
            : "bg-brand-bg/70 border-b border-white/5"
          }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-4">
          <Link href="/" className="inline-flex items-center gap-3 transition-all duration-300 hover:opacity-90">
            <LogoBadge compact />
            <span className="font-display text-sm md:text-base font-medium tracking-[0.22em] uppercase text-brand-text">
              TRAVEL KINGS
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open trips menu"
              className="font-body text-sm text-brand-muted hover:text-brand-text transition-colors"
            >
              Trips
            </button>
            <Link
              href="/about"
              className="font-body text-sm text-brand-muted hover:text-brand-text transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm text-brand-muted hover:text-brand-text transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <TripsMenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
