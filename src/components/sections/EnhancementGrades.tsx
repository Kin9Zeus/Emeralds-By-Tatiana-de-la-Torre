'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────── */

interface GradeCard {
  badge: string;
  subtitle: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  isPremium?: boolean;
}

const grades: GradeCard[] = [
  {
    badge: 'F1',
    subtitle: 'Minor Enhancement',
    bullets: [
      'Higher transparency',
      'Greater rarity',
      'Fewer visible inclusions',
      'Highly collectible',
      'Premium investment quality',
    ],
    image: '/assets/media/9.16 aspect ratio emerald on white bakcground.webp',
    imageAlt: 'F1 minor enhancement emerald with high transparency',
    isPremium: true,
  },
  {
    badge: 'F2',
    subtitle: 'Moderate Enhancement',
    bullets: [
      'Excellent beauty',
      'Good transparency',
      'Visible natural inclusions',
      'Strong value and affordability',
    ],
    image: '/assets/media/3.4 aspect ratio with logo emerald on a black cloth.webp',
    imageAlt: 'F2 moderate enhancement emerald on black cloth',
  },
  {
    badge: 'F3',
    subtitle: 'Significant Enhancement',
    bullets: [
      'Beautiful natural color',
      'More visible internal characteristics',
      'Ideal for larger stones at accessible prices',
    ],
    image: '/assets/media/3.4 aspect ratio with logo emerald on a black surface.webp',
    imageAlt: 'F3 significant enhancement emerald on black surface',
  },
];

/* ─── 3D Tilt Card ─────────────────────────────────── */

function TiltCard({
  grade,
}: {
  grade: GradeCard;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices to disable tilt
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const MAX_ROTATION = 8;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isTouchDevice) return;
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalise cursor position to -1…1
      const normalX = (e.clientX - centerX) / (rect.width / 2);
      const normalY = (e.clientY - centerY) / (rect.height / 2);

      setTilt({
        rotateX: -normalY * MAX_ROTATION, // tilt up/down
        rotateY: normalX * MAX_ROTATION,  // tilt left/right
      });
    },
    [isTouchDevice],
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`enhancement-card glass-card group relative flex flex-col overflow-hidden
        hover:scale-[1.02] hover:shadow-[0_12px_48px_rgba(212,175,55,0.18)]
        hover:border-gold/50
        ${grade.isPremium ? 'border-gold/30' : ''}
      `}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.15s ease-out, box-shadow 0.4s ease, border-color 0.4s ease, scale 0.4s ease',
        willChange: 'transform',
      }}
    >
      {/* Premium label for F1 */}
      {grade.isPremium && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gold/20 border border-gold/50 backdrop-blur-sm">
          <span className="font-montserrat text-[10px] font-semibold tracking-luxury uppercase text-gold-light">
            Premium
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[15px]">
        <Image
          src={grade.image}
          alt={grade.imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
          quality={85}
        />
        {/* Dark gradient overlay on bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/90 via-emerald-dark/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-7 lg:p-8">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-cinzel text-lg font-bold tracking-wide
              ${grade.isPremium
                ? 'bg-gold/20 text-gold border border-gold/50 shadow-[0_0_18px_rgba(212,175,55,0.25)]'
                : 'bg-emerald-deep/60 text-gold-light border border-gold/20'
              }
            `}
          >
            {grade.badge}
          </span>
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl text-pearl leading-tight">
              {grade.badge}
            </h3>
            <p className="font-montserrat text-sm text-gold-light/80 tracking-wide">
              {grade.subtitle}
            </p>
          </div>
        </div>

        {/* Thin gold divider */}
        <div className="h-px w-16 bg-gradient-to-r from-gold/60 to-transparent mb-5" />

        {/* Bullet list */}
        <ul className="flex flex-col gap-3 flex-1">
          {grade.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 group/item">
              <span className="mt-[7px] flex-shrink-0 w-2 h-2 rotate-45 bg-gold/70 group-hover/item:bg-gold group-hover/item:shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-300" />
              <span className="font-montserrat text-sm sm:text-base text-pearl/85 leading-relaxed group-hover/item:text-pearl transition-colors duration-300">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Gold glow border effect on premium card */}
      {grade.isPremium && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-gold/10 shadow-[inset_0_0_30px_rgba(212,175,55,0.04)]" />
      )}
    </div>
  );
}

/* ─── Main Section ─────────────────────────────────── */

export default function EnhancementGrades() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Heading entrance
      gsap.from('.enhancement-heading', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.enhancement-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Subheading entrance
      gsap.from('.enhancement-subheading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.enhancement-subheading',
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });

      // Cards staggered entrance
      gsap.from('.enhancement-card', {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.enhancement-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Bottom divider
      gsap.from('.enhancement-divider', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.enhancement-divider',
          start: 'top 92%',
          toggleActions: 'play none none reverse',
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="enhancement"
      className="relative w-full overflow-hidden bg-gradient-to-b from-obsidian to-emerald-dark"
      aria-label="Emerald Enhancement Grades"
    >
      {/* Subtle radial glow behind cards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full bg-emerald-deep/30 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="enhancement-heading font-cinzel text-3xl sm:text-4xl lg:text-5xl text-pearl leading-tight tracking-wide text-center mb-5">
          Emerald Clarity{' '}
          <span className="text-gold-gradient">Enhancement Grades</span>
        </h2>

        {/* Subheading */}
        <p className="enhancement-subheading font-montserrat text-base sm:text-lg text-pearl/70 leading-relaxed max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          Transparency and disclosure are important values at Emeralds by
          Tatiana De La Torre.
        </p>

        {/* Cards Grid */}
        <div className="enhancement-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-10">
          {grades.map((grade) => (
            <TiltCard key={grade.badge} grade={grade} />
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="enhancement-divider h-px w-full max-w-md mx-auto bg-gold-gradient-horizontal origin-center mt-20 lg:mt-28" />
      </div>
    </section>
  );
}
