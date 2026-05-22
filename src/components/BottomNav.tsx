"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Users, Phone } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();
  const isTripsPage = pathname.includes("day-trips") && pathname !== "/";

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path === "/trips") return isTripsPage;
    return pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-brand-bg/90 backdrop-blur-xl border-t border-white/5 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around py-2">
        <Link
          href="/"
          className={`flex flex-col items-center gap-0.5 py-1 px-3 transition-colors ${isActive("/") ? "text-brand-gold" : "text-brand-muted"
            }`}
        >
          <img
            src="/favicon-32x32.png"
            alt="Travel Kings"
            className="h-5 w-5 object-contain"
            decoding="async"
            loading="eager"
          />
          <span className="text-[10px] font-body">Home</span>
        </Link>
        <Link
          href="/1-day-trips"
          className={`flex flex-col items-center gap-0.5 py-1 px-3 transition-colors ${isActive("/trips") ? "text-brand-gold" : "text-brand-muted"
            }`}
        >
          <Compass size={20} strokeWidth={1.5} />
          <span className="text-[10px] font-body">Trips</span>
        </Link>
        <Link
          href="/about"
          className={`flex flex-col items-center gap-0.5 py-1 px-3 transition-colors ${isActive("/about") ? "text-brand-gold" : "text-brand-muted"
            }`}
        >
          <Users size={20} strokeWidth={1.5} />
          <span className="text-[10px] font-body">About</span>
        </Link>
        <Link
          href="/contact"
          className={`flex flex-col items-center gap-0.5 py-1 px-3 transition-colors ${isActive("/contact") ? "text-brand-gold" : "text-brand-muted"
            }`}
        >
          <Phone size={20} strokeWidth={1.5} />
          <span className="text-[10px] font-body">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
