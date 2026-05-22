"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getCategoryBySlug } from "../data/trips";
import { DestinationCard } from "../components/DestinationCard";
import { OptimizedImage } from "../components/OptimizedImage";
import { getTripSeo, useSEO } from "../lib/seo";
import { ContactSection } from "../sections/ContactSection";
import { FooterSection } from "../sections/FooterSection";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type TripPageProps = {
  slug?: string;
};

export default function TripPage({ slug }: TripPageProps) {
  const router = useRouter();
  const category = getCategoryBySlug(slug || "");
  useSEO(getTripSeo(slug));
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!category) return;

    const ctx = gsap.context(() => {
      // Hero parallax
      const heroImg = heroRef.current?.querySelector("img");
      if (heroImg) {
        gsap.fromTo(
          heroImg,
          { scale: 1.1 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }

      // Intro reveal
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 90%", // Trigger earlier
            toggleActions: "play none none none", // Simplify actions
          },
        }
      );

      // Cards stagger reveal
      const cards = cardsRef.current?.querySelectorAll(".destination-wrapper");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [category]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="text-center">
          <h1 className="font-display text-3xl text-brand-text mb-4">
            Page Not Found
          </h1>
          <button onClick={() => router.push("/")} className="btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-brand-bg">
      {/* Hero Carousel */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <OptimizedImage
          loading="eager"
          fetchPriority="high"
          src={category.bgImage}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-transparent to-transparent" />

        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-20 left-6 md:left-10 z-10 flex items-center gap-2 text-brand-text/80 hover:text-brand-text transition-colors"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          <span className="font-body text-sm">Back</span>
        </button>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-body text-xs uppercase tracking-[0.15em] text-brand-gold mb-2 block">
              {category.eyebrow}
            </span>
            <h1 className="font-display text-[clamp(36px,6vw,72px)] font-light text-brand-text leading-[1.05] mb-3">
              {category.title}
            </h1>
            <p className="font-body text-base md:text-lg text-brand-text/70 max-w-[600px]">
              {category.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section ref={introRef} className="py-12 md:py-16 px-6 md:px-[6vw]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-sm md:text-base text-brand-muted leading-relaxed max-w-[700px]">
            Explore our handpicked {category.duration}-day itineraries designed
            for unforgettable experiences across South India&apos;s most
            breathtaking destinations.
          </p>
        </div>
      </section>

      {/* Destination Cards */}
      <section ref={cardsRef} className="pb-12 md:pb-20 px-6 md:px-[6vw]">
        <div className="max-w-[1200px] mx-auto">
          {/* Mobile: horizontal snap scroll */}
          <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
            {category.destinations.map((dest) => (
              <div key={dest.name} className="destination-wrapper snap-center">
                <DestinationCard destination={dest} duration={category.duration} />
              </div>
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {category.destinations.map((dest) => (
              <div key={dest.name} className="destination-wrapper">
                <DestinationCard destination={dest} duration={category.duration} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared sections */}
      <div className="pb-16 md:pb-0">
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  );
}
