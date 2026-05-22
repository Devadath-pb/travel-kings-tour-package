"use client";

import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInquiry } from "../context/InquiryContext";
import { OptimizedImage } from "../components/OptimizedImage";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection({ onExploreTours }: { onExploreTours: () => void }) {
  const { openModal } = useInquiry();
  const [videoEnabled, setVideoEnabled] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const microRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  // Scroll-driven exit animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%", // Shorten scroll distance
          pin: true,
          scrub: true,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set(
              [headlineRef.current, captionRef.current, microRef.current],
              {
                opacity: 1,
                y: 0,
              }
            );
            gsap.set(videoRef.current, { scale: 1, opacity: 1 });
            gsap.set(flashRef.current, { opacity: 0 });
          },
        },
      });

      // EXIT: begin immediately so CTA-driven scrolling never feels frozen.

      // Headline exit
      scrollTl.fromTo(
        headlineRef.current,
        { y: 0, opacity: 1 },
        { y: "-22vh", opacity: 0, ease: "power2.in" },
        0
      );

      // Rule exit
      scrollTl.fromTo(
        ruleRef.current,
        { scaleX: 1, opacity: 1 },
        { scaleX: 0, opacity: 0, ease: "power2.in" },
        0.02
      );

      // Caption exit
      scrollTl.fromTo(
        captionRef.current,
        { y: 0, opacity: 1 },
        { y: -30, opacity: 0, ease: "power2.in" },
        0.04
      );

      // Micro exit
      scrollTl.fromTo(
        microRef.current,
        { opacity: 1 },
        { opacity: 0, ease: "power2.in" },
        0.06
      );

      // Video scale and fade
      scrollTl.fromTo(
        videoRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.02, opacity: 0.5, ease: "power2.out" }, // Smoother scale
        0
      );

      // Flash overlay (scene change effect)
      scrollTl.fromTo(
        flashRef.current,
        { opacity: 0 },
        { opacity: 0.18, ease: "power2.out" },
        0.16
      );
      scrollTl.to(flashRef.current, { opacity: 0, ease: "power2.in" }, 0.28);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const enableVideo = () => setVideoEnabled(true);
    window.addEventListener("pointermove", enableVideo, { once: true, passive: true });
    window.addEventListener("pointerdown", enableVideo, { once: true, passive: true });
    window.addEventListener("touchstart", enableVideo, { once: true, passive: true });
    window.addEventListener("scroll", enableVideo, { once: true, passive: true });
    window.addEventListener("keydown", enableVideo, { once: true });

    return () => {
      window.removeEventListener("pointermove", enableVideo);
      window.removeEventListener("pointerdown", enableVideo);
      window.removeEventListener("touchstart", enableVideo);
      window.removeEventListener("scroll", enableVideo);
      window.removeEventListener("keydown", enableVideo);
    };
  }, []);

  useEffect(() => {
    if (!videoEnabled || !videoRef.current) return;
    videoRef.current.load();
    void videoRef.current.play().catch(() => undefined);
  }, [videoEnabled]);

  // Add seamless looping logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoop = () => {
      if (video.currentTime >= video.duration - 0.2) {
        gsap.to(video, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            video.currentTime = 0;
            video.play();
            gsap.to(video, { opacity: 1, duration: 0.3 });
          },
        });
      }
    };

    video.addEventListener("timeupdate", handleLoop);
    return () => video.removeEventListener("timeupdate", handleLoop);
  }, []);

  const headlineWords = ["Escape", "To", "Your", "Dream", "Place"];

  const runExploreTours = () => {
    onExploreTours();
  };

  const handleExploreToursPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (!event.isPrimary) return;
    event.preventDefault();
    runExploreTours();
  };

  const handleExploreToursClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.detail === 0) {
      runExploreTours();
    }
  };

  const handlePlanTrip = () => {
    openModal("Custom South India Journey");
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden z-10"
    >
      {/* Video background */}
      <OptimizedImage
        src="/images/munnar/card-1day.jpg"
        alt=""
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoEnabled ? "opacity-80" : "opacity-0"
        }`}
        poster="/images/munnar/card-1day.webp"
      >
        {videoEnabled && <source src="/videos/hero/hero-optimized.mp4" type="video/mp4" />}
      </video>

      {/* Atmosphere overlays */}
      <div className="absolute inset-0 overlay-gradient-top pointer-events-none" />
      <div className="absolute inset-0 overlay-gradient-bottom pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(11,15,14,0.4) 100%)",
        }}
      />

      {/* Flash overlay for scene transition */}
      <div
        ref={flashRef}
        className="absolute inset-0 bg-white pointer-events-none opacity-0"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Headline */}
        <div
          ref={headlineRef}
          className="text-center px-6"
          style={{ marginTop: "-2vh" }}
        >
          <h1 className="font-display font-light tracking-[0.02em] text-brand-text">
            <span className="text-[clamp(32px,6vw,80px)] leading-[1.05]">
              {headlineWords.map((word, i) => (
                <span
                  key={i}
                  className="hero-word inline-block mr-[0.25em]"
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          {/* Gold rule */}
          <div
            ref={ruleRef}
            className="w-[12vw] min-w-[80px] max-w-[160px] h-[2px] mx-auto mt-5 bg-brand-gold/70"
            style={{ transformOrigin: "center" }}
          />

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onPointerDown={handleExploreToursPointerDown}
              onClick={handleExploreToursClick}
              className="hero-cta hero-cta-primary"
              aria-label="Explore tour categories"
            >
              <span>Explore Tours</span>
            </button>
            <button
              type="button"
              onClick={handlePlanTrip}
              className="hero-cta hero-cta-secondary"
              aria-label="Open trip planning inquiry"
            >
              <span>Plan My Trip</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom-left caption */}
      <div
        ref={captionRef}
        className="absolute left-6 md:left-[6vw] bottom-[8vh] md:bottom-[6vh] z-10 max-w-[280px] md:max-w-[340px]"
      >
        <p className="font-body text-sm md:text-base text-brand-text/80 leading-relaxed">
          Premium South India group tours. Curated stays, local flavors, zero
          stress.
        </p>
      </div>

      {/* Bottom-right micro label */}
      <div
        ref={microRef}
        className="absolute right-6 md:right-[6vw] bottom-[8vh] md:bottom-[6vh] z-10 text-right hidden md:block"
      >
        <p className="font-body text-[11px] uppercase tracking-[0.15em] text-brand-muted">
          Scroll to Explore
        </p>
      </div>
    </section>
  );
}
