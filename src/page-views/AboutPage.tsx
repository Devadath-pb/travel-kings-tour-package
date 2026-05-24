"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactSection } from "../sections/ContactSection";
import { FooterSection } from "../sections/FooterSection";
import { OptimizedImage } from "../components/OptimizedImage";
import { seo } from "../lib/seo";
import { useSEO } from "../hooks/useSEO";
import { ArrowLeft, Heart, Globe, Shield, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const router = useRouter();
  useSEO(seo.about);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const h1 = heroRef.current?.querySelector("h1");
      const p = heroRef.current?.querySelector("p");

      if (h1) {
        gsap.fromTo(
          h1,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      }

      if (p) {
        gsap.fromTo(
          p,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.4,
          }
        );
      }

      const items = contentRef.current?.querySelectorAll(".about-block");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 90%", // Trigger earlier
              toggleActions: "play none none none", // Simplify actions
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Passionate About Travel",
      description:
        "Every trip we design comes from a genuine love for South India's landscapes, culture, and people.",
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description:
        "Our team knows the hidden gems, the best times to visit, and the authentic experiences most travelers miss.",
    },
    {
      icon: Shield,
      title: "Stress-Free Planning",
      description:
        "From transport to stays to itineraries, we handle everything so you can simply enjoy the journey.",
    },
    {
      icon: Star,
      title: "Curated Experiences",
      description:
        "We handpick every accommodation, route, and activity to ensure premium quality and unforgettable moments.",
    },
  ];

  return (
    <main className="bg-brand-bg">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[50vh] md:h-[55vh] flex items-end overflow-hidden"
      >
        <OptimizedImage
          loading="eager"
          fetchPriority="high"
          src="/images/munnar/card-1day.jpg"
          alt="South India landscapes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-transparent to-transparent" />

        <button
          onClick={() => router.push("/")}
          className="absolute top-20 left-6 md:left-10 z-10 flex items-center gap-2 text-brand-text/80 hover:text-brand-text transition-colors"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          <span className="font-body text-sm">Back</span>
        </button>

        <div className="relative z-10 p-6 md:p-12 max-w-[1200px] mx-auto w-full">
          <h1 className="font-display text-[clamp(36px,6vw,64px)] font-light text-brand-text leading-[1.05] mb-3">
            Our Story
          </h1>
          <p className="font-body text-base md:text-lg text-brand-text/70 max-w-[600px]">
            Crafting unforgettable journeys through South India since 2018.
          </p>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-16 md:py-24 px-6 md:px-[6vw]">
        <div className="max-w-[900px] mx-auto">
          {/* Intro */}
          <div className="about-block mb-16">
            <p className="font-body text-lg md:text-xl text-brand-text/90 leading-relaxed mb-6">
              Travel Kings was born from a simple belief: that the best travel
              experiences are those shared with good company, in extraordinary
              places, without the stress of planning.
            </p>
            <p className="font-body text-base text-brand-muted leading-relaxed mb-6">
              We are a team of passionate travelers, local experts, and
              meticulous planners who came together to create something
              different - a travel company that truly understands South India and
              knows how to showcase its wonders.
            </p>
            <p className="font-body text-base text-brand-muted leading-relaxed">
              From the misty tea plantations of Munnar to the ancient ruins of
              Hampi, from the serene backwaters of Kerala to the vibrant beaches
              of Goa, we design journeys that connect you with the soul of this
              incredible region.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-light text-brand-text mb-8">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="about-block p-5 md:p-6 bg-white/[0.02] border border-white/5 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                    <value.icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-brand-gold"
                    />
                  </div>
                  <h3 className="font-display text-lg font-medium text-brand-text mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-brand-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <div className="about-block text-center py-8">
            <p className="font-display text-xl md:text-2xl font-light text-brand-text italic mb-4">
              &ldquo;Travel is the only thing you buy that makes you richer.&rdquo;
            </p>
            <p className="font-body text-sm text-brand-muted">
              Let us help you create memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <FooterSection />
    </main>
  );
}
