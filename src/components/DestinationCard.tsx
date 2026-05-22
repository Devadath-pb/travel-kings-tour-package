"use client";

import { useInquiry } from "../context/InquiryContext";
import { OptimizedImage } from "./OptimizedImage";
import { trackEvent } from "../lib/analytics";
import type { Destination } from "../data/trips";

export function DestinationCard({
  destination,
  duration,
}: {
  destination: Destination;
  duration: number;
}) {
  const { openModal } = useInquiry();

  return (
    <div className="group relative flex-shrink-0 w-[85vw] md:w-[420px] snap-center">
      <div className="relative overflow-hidden rounded-card shadow-card">
        {/* Image */}
        <div className="relative h-[55vh] md:h-[520px] overflow-hidden">
          <OptimizedImage
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <h3 className="font-display text-2xl md:text-3xl font-light text-brand-text mb-2">
              {destination.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {destination.atmosphere.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-full font-body text-[11px] text-brand-text/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                const packageName = `${duration} Day - ${destination.name}`;
                trackEvent("package_click", { package: packageName });
                openModal(packageName);
              }}
              className="btn-primary text-xs py-2.5 px-6"
            >
              Plan This Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
