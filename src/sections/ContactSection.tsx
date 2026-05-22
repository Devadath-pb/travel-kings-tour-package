"use client";

import { useEffect, useRef } from "react";
import { useInquiry } from "../context/InquiryContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const { openModal } = useInquiry();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: "-6vw", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { x: "6vw", opacity: 0, rotateY: 6 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-bg2 py-20 md:py-32 px-6 md:px-[6vw]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left: Contact info */}
          <div ref={leftRef} className="md:w-[40%]">
            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-light text-brand-text leading-tight mb-6">
              Let&apos;s Plan
              <br />
              Your Trip
            </h2>
            <p className="font-body text-sm md:text-base text-brand-muted leading-relaxed mb-8">
              Ready to explore South India? Get in touch and we&apos;ll craft a
              journey tailored just for you.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} strokeWidth={1.5} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-brand-muted mb-0.5">
                    Email
                  </p>
                  <p className="font-body text-sm text-brand-text">
                    travelkings50@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} strokeWidth={1.5} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-brand-muted mb-0.5">
                    Phone
                  </p>
                  <p className="font-body text-sm text-brand-text">
                    +91 94006 78245
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} strokeWidth={1.5} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-brand-muted mb-0.5">
                    Hours
                  </p>
                  <p className="font-body text-sm text-brand-text">
                    Mon-Sat, 9am-8pm IST
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} strokeWidth={1.5} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-brand-muted mb-0.5">
                    Based In
                  </p>
                  <p className="font-body text-sm text-brand-text">
                    Thrissur, Kerala
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA card */}
          <div ref={rightRef} className="md:w-[60%] perspective-1000">
            <div
              className="bg-brand-charcoal/50 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-white/5"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h3 className="font-display text-xl md:text-2xl font-light text-brand-text mb-3">
                Start Your Journey
              </h3>
              <p className="font-body text-sm text-brand-muted leading-relaxed mb-6">
                Share your travel dreams with us. We&apos;ll create a custom
                itinerary that matches your style, pace, and budget.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-gold text-xs font-body">1</span>
                  </div>
                  <p className="font-body text-sm text-brand-text/80">
                    Tell us your preferred destinations and dates
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-gold text-xs font-body">2</span>
                  </div>
                  <p className="font-body text-sm text-brand-text/80">
                    We&apos;ll design a curated itinerary for your group
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-gold text-xs font-body">3</span>
                  </div>
                  <p className="font-body text-sm text-brand-text/80">
                    Pack your bags and leave the rest to us
                  </p>
                </div>
              </div>

              <button type="button" onClick={() => openModal()} className="btn-primary w-full">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
