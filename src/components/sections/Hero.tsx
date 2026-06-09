'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ─── Blur-to-Focus Text Reveal Timeline (on load) ───
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-brand',
        { filter: 'blur(20px)', opacity: 0 },
        { filter: 'blur(0px)', opacity: 1, duration: 1.4 }
      )
        .fromTo(
          '.hero-subtitle',
          { filter: 'blur(20px)', opacity: 0 },
          { filter: 'blur(0px)', opacity: 1, duration: 1.2 },
          '-=0.7'
        )
        .fromTo(
          '.hero-tagline',
          { filter: 'blur(20px)', opacity: 0 },
          { filter: 'blur(0px)', opacity: 1, duration: 1.2 },
          '-=0.6'
        )
        .fromTo(
          '.hero-scroll-indicator',
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );

      // ─── Video Parallax: scale down + fade on scroll ───
      gsap.fromTo(
        videoContainerRef.current,
        { scale: 1, opacity: 1 },
        {
          scale: 0.85,
          opacity: 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background Video Container ── */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0"
        dangerouslySetInnerHTML={{
          __html: `
            <video
              class="h-full w-full object-cover"
              src="/assets/media/hero-bg-perfect-ios.mp4"
              poster="/assets/media/Raw%20emeralds%20with%20lighting%20on%20a%20dark%20background%20and%20logo%20of%20the%20brand.webp"
              autoplay
              muted
              loop
              playsinline
              webkit-playsinline="true"
              aria-hidden="true"
            ></video>
          `
        }}
      />

      {/* ── Dark Gradient Overlay ── */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian/80"
        aria-hidden="true"
      />

      {/* ── Text Content ── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Brand Name */}
        <h1 className="hero-brand font-cinzel text-5xl leading-tight tracking-luxury text-gold-gradient sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          EMERALDS
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle mt-4 font-montserrat text-sm tracking-luxury text-pearl/80 sm:text-base md:mt-6 md:text-lg">
          by Tatiana De La Torre
        </p>

        {/* Tagline */}
        <p className="hero-tagline mt-6 max-w-xl font-montserrat text-xs italic leading-relaxed tracking-wide text-gold-light/70 sm:text-sm md:mt-8 md:max-w-2xl md:text-base">
          Where Colombian Heritage Meets Timeless Luxury
        </p>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-12">
        {/* Chevron */}
        <svg
          className="h-6 w-6 animate-scroll-hint text-gold/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>

        <span className="font-montserrat text-[10px] uppercase tracking-luxury text-pearl/50 sm:text-xs">
          Scroll to Discover
        </span>
      </div>
    </section>
  );
}
