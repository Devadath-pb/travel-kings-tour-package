"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OptimizedImage } from "../components/OptimizedImage";
import { trackEvent } from "../lib/analytics";
import type { TripCategory } from "../data/trips";

gsap.registerPlugin(ScrollTrigger);

export function CategoryCardSection({
  category,
  index,
  firstCardRef,
}: {
  category: TripCategory;
  index: number;
  firstCardRef?: RefObject<HTMLDivElement | null>;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const zIndex = 20 + index * 10; // 20, 30, 40, 50, 60, 70
  const isVertical = category.layout === "vertical";

  const setCardRefs = (node: HTMLDivElement | null) => {
    cardRef.current = node;
    if (firstCardRef) {
      firstCardRef.current = node;
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const bg = bgRef.current;
    const panel = panelRef.current;

    if (!section || !card || !bg || !panel) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          id: index === 0 ? "first-trip-card-trigger" : undefined,
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: true,
          onEnter: () => {
            document.documentElement.style.overscrollBehavior = 'none';
          },
          onLeave: () => {
            document.documentElement.style.overscrollBehavior = 'auto';
          },
        },
      });

      // Panel content elements
      const eyebrow = panel.querySelector(".panel-eyebrow");
      const title = panel.querySelector(".panel-title");
      const body = panel.querySelector(".panel-body");
      const cta = panel.querySelector(".panel-cta");

      // ENTRANCE (0% - 30%)
      if (isVertical) {
        // Vertical layout: enter from bottom with rotateX
        scrollTl.fromTo(
          card,
          { y: "70vh", rotateX: -18, z: -220, opacity: 0 },
          { y: 0, rotateX: 0, z: 0, opacity: 1, ease: "none" },
          0
        );
      } else {
        // Horizontal layout: enter from right with rotateY
        scrollTl.fromTo(
          card,
          { x: "55vw", rotateY: 28, z: -220, opacity: 0 },
          { x: 0, rotateY: 0, z: 0, opacity: 1, ease: "none" },
          0
        );
      }

      // Background parallax entrance
      scrollTl.fromTo(bg, { scale: 1.08 }, { scale: 1, ease: "none" }, 0);

      // Panel content staggered entrance (5% - 30%)
      if (eyebrow) {
        scrollTl.fromTo(
          eyebrow,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, ease: "none" },
          0.05
        );
      }
      if (title) {
        scrollTl.fromTo(
          title,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, ease: "none" },
          0.1
        );
      }
      if (body) {
        scrollTl.fromTo(
          body,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, ease: "none" },
          0.14
        );
      }
      if (cta) {
        scrollTl.fromTo(
          cta,
          { y: 14, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, ease: "none" },
          0.18
        );
      }

      // SETTLE (30% - 70%): Hold - nothing changes

      // EXIT (70% - 100%)
      if (isVertical) {
        scrollTl.fromTo(
          card,
          { y: 0, rotateX: 0, z: 0, opacity: 1 },
          { y: "-60vh", rotateX: 18, z: -260, opacity: 0, ease: "power2.in" },
          0.65
        );
      } else {
        scrollTl.fromTo(
          card,
          { x: 0, rotateY: 0, z: 0, opacity: 1 },
          { x: "-60vw", rotateY: -32, z: -260, opacity: 0, ease: "power2.in" },
          0.65
        );
      }

      // Background parallax exit - keep background stable and smooth during section release
      scrollTl.fromTo(bg, { scale: 1 }, { scale: 1.06, ease: "none" }, 0.65);

      // Panel content exit (CTA first, then rest)
      if (cta) {
        scrollTl.fromTo(cta, { opacity: 1 }, { opacity: 0, ease: "none" }, 0.68);
      }
      if (body) {
        scrollTl.fromTo(body, { opacity: 1 }, { opacity: 0, ease: "none" }, 0.72);
      }
      if (title) {
        scrollTl.fromTo(title, { opacity: 1 }, { opacity: 0, ease: "none" }, 0.76);
      }
      if (eyebrow) {
        scrollTl.fromTo(eyebrow, { opacity: 1 }, { opacity: 0, ease: "none" }, 0.80);
      }

      // Keep card and background transitions smooth without an overlay wipe
      scrollTl.fromTo(
        bg,
        { opacity: 1 },
        { opacity: 1, ease: "none" },
        0.65
      );
    }, section);

    return () => ctx.revert();
  }, [index, isVertical]);

  return (
    <section
      id={index === 0 ? "first-trip-category" : undefined}
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden"
      style={{ zIndex }}
    >
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0 scale-[1.08] gpu-accelerate">
        <OptimizedImage
          src={category.bgImage}
          alt=""
          className="w-full h-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
        />
        <div className="absolute inset-0 bg-brand-bg/50" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        <div
          id={index === 0 ? "first-trip-card" : undefined}
          ref={setCardRefs}
          className={`relative w-[88vw] md:w-[78vw] max-w-[1100px] shadow-card preserve-3d gpu-accelerate ${isVertical ? "h-[70vh] md:h-[62vh]" : "h-[55vh] md:h-[62vh]"
            }`}
          style={{
            borderRadius: "18px",
            transform: isVertical
              ? "translateY(70vh) rotateX(-18deg) translateZ(-220px)"
              : "translateX(55vw) rotateY(28deg) translateZ(-220px)",
            opacity: 0,
          }}
        >
          {/* Card inner layout */}
          <div
            className={`w-full h-full rounded-card overflow-hidden flex ${isVertical ? "flex-col" : "flex-col md:flex-row"
              }`}
          >
            {/* Image area */}
            <div
              className={`relative overflow-hidden ${isVertical
                  ? "h-[55%] w-full"
                  : "h-[45%] md:h-full md:w-[58%]"
                }`}
            >
              <OptimizedImage
                src={category.cardImage}
                alt={category.title}
                className="w-full h-full object-cover"
                loading="lazy"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-bg/20" />
            </div>

            {/* Panel area */}
            <div
              ref={panelRef}
              className={`relative bg-brand-charcoal/70 backdrop-blur-xl flex flex-col justify-center p-5 md:p-8 ${isVertical
                  ? "h-[45%] w-full"
                  : "h-[55%] md:h-full md:w-[42%]"
                }`}
              style={{
                background: "rgba(11,15,14,0.72)",
                backdropFilter: "blur(20px)",
              }}
            >
              <span className="panel-eyebrow font-body text-[11px] md:text-xs uppercase tracking-[0.15em] text-brand-gold mb-2 md:mb-3">
                {category.eyebrow}
              </span>
              <h2 className="panel-title font-display text-2xl md:text-4xl font-light text-brand-text leading-tight mb-2 md:mb-3">
                {category.title}
              </h2>
              <p className="panel-body font-body text-sm md:text-base text-brand-muted leading-relaxed mb-4 md:mb-6">
                {category.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  trackEvent("package_click", {
                    package: category.eyebrow,
                    slug: category.slug,
                  });
                  router.push(`/${category.slug}`);
                }}
                className="panel-cta btn-primary self-start text-xs md:text-sm py-2.5 md:py-3.5 px-5 md:px-8"
              >
                Explore {category.duration} Day Trips
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Caption outside card */}
      <div className="absolute bottom-[10vh] md:bottom-[6vh] left-6 md:left-[6vw] z-10">
        <p className="font-body text-xs md:text-sm text-brand-muted">
          {category.destinations.map((d) => d.name).join(" \u2022 ")}
        </p>
      </div>
    </section>
  );
}
