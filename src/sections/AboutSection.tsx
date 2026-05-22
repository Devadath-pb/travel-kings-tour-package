"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Car, Coffee, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40, rotateX: 8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Gold rule
      gsap.fromTo(
        ruleRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content items stagger
      const items = contentRef.current?.querySelectorAll(".about-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Car,
      text: "Private transport & experienced drivers",
    },
    {
      icon: Coffee,
      text: "Curated stays with breakfast",
    },
    {
      icon: MapPin,
      text: "Flexible pacing + local recommendations",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-bg py-20 md:py-32 px-6 md:px-[6vw]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
          {/* Left: Headline */}
          <div ref={headlineRef} className="md:w-[45%] mb-8 md:mb-0">
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-light text-brand-text leading-[1.05]">
              Travel
              <br />
              With Us
            </h2>
            <div
              ref={ruleRef}
              className="w-16 h-[2px] bg-brand-gold/70 mt-5 mb-4"
              style={{ transformOrigin: "left" }}
            />
            <p className="font-body text-sm md:text-base text-brand-muted">
              Small groups. Curated stays. Local flavors.
            </p>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="md:w-[55%]">
            <p className="about-item font-body text-base md:text-lg text-brand-text/90 leading-relaxed mb-8">
              We design South India trips that feel effortless—scenic drives,
              handpicked stays, and moments you&apos;ll talk about for years.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="about-item flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <feature.icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-brand-gold"
                    />
                  </div>
                  <span className="font-body text-sm md:text-base text-brand-text/80">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push("/contact")}
              className="about-item btn-primary"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
