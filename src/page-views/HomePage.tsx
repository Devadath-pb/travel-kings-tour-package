"use client";

import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { HeroSection } from "../sections/HeroSection";
import { CategoryCardSection } from "../sections/CategoryCardSection";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { FooterSection } from "../sections/FooterSection";
import { tripCategories } from "../data/trips";
import { seo, useSEO } from "../lib/seo";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
ScrollTrigger.config({ ignoreMobileResize: true });

export default function HomePage() {
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  useSEO(seo.home);

  useEffect(() => {
    // Refresh ScrollTrigger after all elements are mounted
    // This ensures smooth pinning without aggressive snap hijacking scroll
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const scrollToFirstCard = useCallback(() => {
    const firstCard =
      firstCardRef.current ?? document.getElementById("first-trip-card");
    const firstSection = firstCard?.closest("section") as HTMLElement | null;
    if (!firstCard || !firstSection) return;

    const firstCardTrigger =
      ScrollTrigger.getById("first-trip-card-trigger") ??
      ScrollTrigger.getAll().find((trigger) => trigger.trigger === firstSection);
    const start = firstCardTrigger?.start ?? firstSection.offsetTop;
    const end = firstCardTrigger?.end ?? start + window.innerHeight;

    // The category card is fully visible after its ScrollTrigger entrance phase.
    const targetY = start + (end - start) * 0.36;
    if (window.scrollY < start) {
      window.scrollTo({ top: start + 1, left: 0, behavior: "auto" });
      ScrollTrigger.update();
    }

    const distance = Math.abs(window.scrollY - targetY);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: targetY, left: 0, behavior: "auto" });
      ScrollTrigger.update();
      return;
    }

    gsap.killTweensOf(window);
    gsap.to(window, {
      duration: gsap.utils.clamp(0.45, 0.95, distance / 1400),
      scrollTo: { y: targetY, autoKill: false },
      ease: "power2.out",
      overwrite: true,
      onUpdate: () => ScrollTrigger.update(),
      onComplete: () => ScrollTrigger.update(),
    });
  }, []);

  return (
    <main>
      <HeroSection onExploreTours={scrollToFirstCard} />
      {tripCategories.map((category, i) => (
        <CategoryCardSection
          key={category.slug}
          category={category}
          index={i}
          firstCardRef={i === 0 ? firstCardRef : undefined}
        />
      ))}
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
