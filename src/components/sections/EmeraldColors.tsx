'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const colorColumns = [
  {
    label: 'Light Green',
    description: 'Softer appearance, higher transparency, elegant character.',
    gradientFrom: '#2AAF6A',
    gradientTo: '#1A8F54',
  },
  {
    label: 'Medium Green',
    description: 'Balanced color and brilliance, highly desirable.',
    gradientFrom: '#116B3E',
    gradientTo: '#0A3B24',
  },
  {
    label: 'Deep Green',
    description: 'Rich, luxurious appearance, often considered most valuable.',
    gradientFrom: '#0A3B24',
    gradientTo: '#062117',
  },
];

export default function EmeraldColors() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Heading reveal
      gsap.from('.emerald-colors-heading', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.emerald-colors-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Staggered column reveal
      gsap.from('.color-column', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.color-columns-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Swatch bars grow in from the top
      gsap.from('.color-swatch', {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.color-columns-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-obsidian"
    >
      {/* Content */}
      <div className="relative z-10 px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 md:py-32 lg:py-40 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="emerald-colors-heading font-cinzel text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-wide text-center mb-6 lg:mb-8">
          <span className="text-gold-gradient">
            Why Some Emeralds Are Lighter Than Others
          </span>
        </h2>

        {/* Gold divider */}
        <div className="gold-line w-24 mx-auto mb-16 lg:mb-20" />

        {/* Three Columns */}
        <div className="color-columns-grid grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {colorColumns.map((col) => (
            <div
              key={col.label}
              className="color-column flex flex-col items-center text-center"
            >
              {/* Vertical Gradient Swatch */}
              <div
                className="color-swatch w-16 sm:w-20 h-48 sm:h-56 lg:h-64 rounded-lg mb-8 shadow-lg shadow-black/30"
                style={{
                  background: `linear-gradient(180deg, ${col.gradientFrom} 0%, ${col.gradientTo} 100%)`,
                }}
              />

              {/* Label */}
              <h3 className="font-cinzel text-xl sm:text-2xl text-gold mb-3 tracking-wide">
                {col.label}
              </h3>

              {/* Description */}
              <p className="font-montserrat text-sm sm:text-base text-pearl/80 leading-relaxed max-w-xs">
                {col.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
