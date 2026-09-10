'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function OilTreatment() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.oil-heading', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.oil-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.oil-body', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.oil-body',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.oil-callout', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.oil-callout',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.fromTo(
        '.oil-callout-border',
        { opacity: 0.4 },
        {
          opacity: 1,
          duration: 1.5,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: '.oil-callout',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.from('.oil-divider', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.oil-divider',
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
      className="relative w-full overflow-hidden bg-emerald-dark"
      aria-label="Emerald Oil Treatment"
    >
      {/* Content */}
      <div className="relative z-10 px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 md:py-32 lg:py-40 max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="oil-heading font-cinzel text-3xl sm:text-4xl lg:text-5xl text-pearl leading-tight tracking-wide text-center mb-12 lg:mb-16">
          What Is Emerald{' '}
          <span className="text-gold">Oil Treatment</span>?
        </h2>

        {/* Body Copy */}
        <p className="oil-body font-montserrat text-base sm:text-lg text-pearl/85 leading-relaxed max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          Because emeralds naturally contain microscopic fractures, most receive
          a traditional treatment using natural cedarwood oil. This improves
          appearance, enhances transparency, and reduces the visibility of
          fractures. Oil treatment is standard practice.
        </p>

        {/* Gold-Bordered Callout Box */}
        <div className="oil-callout relative max-w-3xl mx-auto mb-16 lg:mb-20">
          {/* Gold border wrapper */}
          <div className="oil-callout-border absolute inset-0 rounded-lg border border-gold/50" />

          <div className="relative px-8 py-10 sm:px-12 sm:py-12">
            {/* Decorative quote mark */}
            <span className="absolute top-4 left-6 sm:left-8 font-cinzel text-5xl sm:text-6xl text-gold/20 leading-none select-none">
              &ldquo;
            </span>

            <p className="font-montserrat text-base sm:text-lg text-pearl/90 leading-relaxed text-center italic">
              Tatiana believes in complete transparency regarding the treatment
              status of every gemstone.
            </p>

            {/* Decorative closing quote */}
            <span className="absolute bottom-4 right-6 sm:right-8 font-cinzel text-5xl sm:text-6xl text-gold/20 leading-none select-none">
              &rdquo;
            </span>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="oil-divider h-px w-full max-w-md mx-auto bg-gold-gradient-horizontal origin-center" />
      </div>
    </section>
  );
}
