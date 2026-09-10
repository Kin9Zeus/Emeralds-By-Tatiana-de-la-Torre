'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Promise() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      gsap.from('.promise-tag', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.promise-tag',
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.promise-heading', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.promise-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.promise-subheading', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.promise-subheading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.promise-divider', {
        scaleX: 0,
        duration: 1.4,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.promise-divider',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.promise-line', {
        y: 40,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.promise-statements',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.promise-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.promise-cta',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      aria-label="Our Promise"
    >
      {/* ── Cinematic Background Image ── */}
      <div className="absolute inset-0 h-[120%] -top-[10%]">
        <Image
          ref={bgImageRef}
          src="/assets/media/16.9 aspect ratio 90 degrees aereal view small emeralds on black cloth.webp"
          alt="Aerial view of emeralds on black cloth"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
          priority={false}
        />
      </div>

      {/* ── Dark Overlays ── */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/60 to-obsidian/75"
        aria-hidden="true"
      />

      {/* Vignette for cinematic depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(13,13,13,0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-32 md:py-32 lg:py-40 flex flex-col items-center text-center">
        {/* Tag */}
        <p className="promise-tag font-montserrat text-xs sm:text-sm uppercase tracking-luxury text-gold/80 mb-6 md:mb-8">
          Personally Selected in Muzo, Colombia.
        </p>

        {/* Main Heading */}
        <h2 className="promise-heading font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pearl leading-tight tracking-wide max-w-5xl mb-6 md:mb-8">
          The Emeralds by Tatiana De La Torre{' '}
          <span className="text-gold-gradient">Difference</span>
        </h2>

        {/* Subheading */}
        <p className="promise-subheading font-montserrat text-base sm:text-lg md:text-xl text-pearl/70 leading-relaxed max-w-3xl mb-12 md:mb-16">
          To bring the beauty of authentic Colombian emeralds directly from the
          source to discerning clients around the world.
        </p>

        {/* Gold Divider */}
        <div className="promise-divider h-px w-full max-w-xs sm:max-w-sm mx-auto bg-gold-gradient-horizontal origin-center mb-12 md:mb-16" />

        {/* Promise Statements */}
        <div className="promise-statements flex flex-col items-center gap-6 md:gap-8 max-w-4xl mb-16 md:mb-20">
          <p className="promise-line font-cinzel text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold-gradient leading-snug tracking-wide">
            Authentically Colombian. Personally Selected. Exceptionally
            Beautiful.
          </p>

          <p className="promise-line font-montserrat text-base sm:text-lg md:text-xl text-pearl/75 leading-relaxed italic">
            From the legendary mines of Muzo, Colombia, to the world&apos;s most
            discerning collectors.
          </p>

          <p className="promise-line font-cinzel text-lg sm:text-xl md:text-2xl text-pearl/90 leading-relaxed tracking-wide">
            Emeralds by Tatiana De La Torre —{' '}
            <span className="text-gold-gradient">
              Where Colombian Heritage Meets Timeless Luxury.
            </span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="promise-cta">
          <a
            href="#contact"
            className="btn-luxury group"
            aria-label="Begin your emerald journey"
          >
            <span className="font-montserrat text-sm sm:text-base tracking-luxury">
              Begin Your Journey
            </span>

            {/* Arrow icon */}
            <svg
              className="relative z-10 ml-3 w-4 h-4 text-gold group-hover:text-obsidian transition-colors duration-500 translate-x-0 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Fade-to-Dark Bottom Gradient (footer transition) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 lg:h-64 bg-gradient-to-b from-transparent to-obsidian pointer-events-none z-20"
        aria-hidden="true"
      />
    </section>
  );
}
