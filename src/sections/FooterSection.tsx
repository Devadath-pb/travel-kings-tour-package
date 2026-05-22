import Link from "next/link";
import { LogoBadge } from "../components/LogoBadge";

export function FooterSection() {
  return (
    <footer className="relative bg-brand-bg py-16 md:py-20 px-6 md:px-[6vw] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto text-center">
        <Link href="/" className="inline-flex items-center justify-center mx-auto mb-4 rounded-full bg-black/10 p-2 shadow-[0_0_40px_rgba(255,207,101,0.12)] transition-all duration-300 hover:scale-[1.02]">
          <LogoBadge />
        </Link>

        <p className="font-body text-sm text-brand-muted mb-8">
          Premium South India group tours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6 mb-10">
          <Link
            href="/1-day-trips"
            className="font-body text-sm text-brand-muted hover:text-brand-text transition-colors"
          >
            Packages
          </Link>
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
          <Link
            href="/privacy"
            className="font-body text-sm text-brand-muted hover:text-brand-text transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="font-body text-sm text-brand-muted hover:text-brand-text transition-colors"
          >
            Terms
          </Link>
        </div>

        <p className="font-body text-xs text-brand-muted/60">
          &copy; 2026 Travel Kings.
        </p>
      </div>
    </footer>
  );
}
