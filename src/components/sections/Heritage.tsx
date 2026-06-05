'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   Brand introduction copy – broken into lines
   for staggered scroll‑reveal
   ───────────────────────────────────────────── */
const brandLines = [
  'At Emeralds by Tatiana De La Torre, we specialize in sourcing exceptional Colombian emeralds directly from the world-renowned emerald region of Muzo, Colombia.',
  'For centuries, Colombian emeralds have been considered the finest emeralds in the world, admired for their extraordinary color, brilliance, and rarity.',
  'The unique geological conditions found in Muzo produce emeralds with a rich green hue that is unmatched by any other source on earth.',
  'Tatiana De La Torre brings these extraordinary gemstones directly from their origin, carefully selecting emeralds that meet her standards for beauty, authenticity, and value.',
  'Every emerald tells a story—a story formed over millions of years beneath the mountains of Colombia and personally selected by Tatiana De La Torre before becoming part of our collection.',
];

/* ─────────────────────────────────────────────
   Meet Tatiana copy – full text split by
   paragraph for reveal + read‑more
   ───────────────────────────────────────────── */
const tatianaParagraphs = [
  'At the heart of Emeralds by Tatiana De La Torre is a passion for beauty, authenticity, and Colombian heritage. Born and raised in Colombia, Tatiana De La Torre grew up in a country internationally recognized for producing the world\'s finest emeralds.',
  'As one of Colombia\'s most treasured natural resources and one of its most important exports, emeralds have long been part of the country\'s culture, history, and identity. From an early age, Tatiana developed an appreciation for the beauty and uniqueness of Colombian emeralds.',
  'Growing up surrounded by a culture that celebrates these extraordinary gemstones gave her a natural understanding of their colors, characteristics, and value. Today, Tatiana combines that lifelong appreciation with a disciplined professional background and an unwavering commitment to quality.',
  'Tatiana De La Torre is an Industrial Engineer with an MBA in Global Management, a successful entrepreneur, an accomplished designer, a wife, and a proud mother of two boys. Her professional experience, attention to detail, and passion for excellence are reflected in every aspect of her business.',
  'What makes Emeralds by Tatiana De La Torre unique is the combination of personal heritage and professional expertise. Tatiana\'s Colombian roots provide her with a deep connection to the source of the gemstones, while her business background allows her to apply rigorous quality standards throughout the selection process.',
  'For Tatiana, every emerald represents much more than a beautiful gemstone. It represents the richness of Colombia, the artistry of nature, and the opportunity to share a piece of her homeland with clients around the world.',
];

const VISIBLE_PARAGRAPHS = 2;

/* ═══════════════════════════════════════════════
   Heritage Component
   ═══════════════════════════════════════════════ */
export default function Heritage() {
  const sectionRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const parallaxImgRef = useRef<HTMLDivElement>(null);
  const tatianaRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const secondaryImgRef = useRef<HTMLDivElement>(null);
  const tatianaTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const [expanded, setExpanded] = useState(false);

  const setTatianaTextRef = useCallback(
    (el: HTMLParagraphElement | null, i: number) => {
      tatianaTextRefs.current[i] = el;
    },
    [],
  );

  /* ── GSAP animations ── */
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      /* ── Part 1: Brand lines staggered reveal ── */
      const lines = gsap.utils.toArray<HTMLElement>('.heritage-line');
      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 88%',
              end: 'top 55%',
              scrub: 0.6,
            },
          },
        );
      });

      /* ── Parallax on raw‑emerald image ── */
      if (parallaxImgRef.current) {
        gsap.to(parallaxImgRef.current.querySelector('img'), {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: parallaxImgRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      /* ── Part 2: Section heading reveal ── */
      const heading = sectionRef.current.querySelector('.tatiana-heading');
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 0.5,
            },
          },
        );
      }

      /* ── Tatiana text paragraphs stagger ── */
      tatianaTextRefs.current
        .filter(Boolean)
        .forEach((p) => {
          gsap.fromTo(
            p!,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: p!,
                start: 'top 90%',
                end: 'top 65%',
                scrub: 0.5,
              },
            },
          );
        });

      /* ── Portrait parallax ── */
      if (portraitRef.current) {
        gsap.to(portraitRef.current.querySelector('img'), {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: portraitRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      /* ── Secondary image parallax ── */
      if (secondaryImgRef.current) {
        gsap.to(secondaryImgRef.current.querySelector('img'), {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: secondaryImgRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      /* ── Gold divider scale‑in ── */
      const divider = sectionRef.current.querySelector('.gold-divider');
      if (divider) {
        gsap.fromTo(
          divider,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: divider,
              start: 'top 90%',
              end: 'top 70%',
              scrub: 0.4,
            },
          },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="heritage"
      aria-label="Heritage & Founder"
    >
      {/* ════════════════════════════════════════════
          PART 1 — Brand Introduction
          ════════════════════════════════════════════ */}
      <div className="relative bg-obsidian overflow-hidden">
        <div
          ref={brandRef}
          className="section-padding relative z-10 max-w-7xl mx-auto"
        >
          {/* Small label */}
          <p className="heritage-line font-montserrat text-gold/70 text-xs tracking-luxury uppercase mb-10 md:mb-14">
            Our Story
          </p>

          {/* Staggered display lines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-start">
            {/* Text column */}
            <div className="lg:col-span-7 space-y-8 md:space-y-10">
              {brandLines.map((line, i) => (
                <p
                  key={i}
                  className={`heritage-line font-montserrat leading-relaxed text-pearl/90 ${
                    i === 0
                      ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-light'
                      : 'text-sm sm:text-base md:text-lg lg:text-xl font-light'
                  }`}
                >
                  {/* Highlight key phrases with gold on the first line */}
                  {i === 0 ? (
                    <>
                      At{' '}
                      <span className="text-gold-gradient font-medium">
                        Emeralds by Tatiana De La Torre
                      </span>
                      , we specialize in sourcing exceptional Colombian
                      emeralds directly from the world-renowned emerald
                      region of{' '}
                      <span className="text-gold font-medium">
                        Muzo, Colombia
                      </span>
                      .
                    </>
                  ) : i === brandLines.length - 1 ? (
                    <>
                      <span className="italic text-gold-light/80">
                        Every emerald tells a story
                      </span>
                      —a story formed over millions of years beneath the
                      mountains of Colombia and personally selected by
                      Tatiana De La Torre before becoming part of our
                      collection.
                    </>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>

            {/* Parallax image column */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div
                ref={parallaxImgRef}
                className="parallax-container relative rounded-sm overflow-hidden aspect-[3/4] lg:aspect-[4/5]"
              >
                <Image
                  src="/assets/media/Raw emerald illuminated on rocks.png"
                  alt="Raw Colombian emerald illuminated on natural rocks"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover scale-110"
                  quality={90}
                />
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-obsidian/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          GOLD DIVIDER
          ════════════════════════════════════════════ */}
      <div className="relative py-4 bg-obsidian">
        <div
          className="gold-divider mx-auto w-full max-w-4xl origin-center"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.15) 15%, #D4AF37 50%, rgba(212,175,55,0.15) 85%, transparent 100%)',
          }}
        />
      </div>

      {/* ════════════════════════════════════════════
          PART 2 — Meet Tatiana De La Torre
          ════════════════════════════════════════════ */}
      <div className="relative bg-emerald-dark overflow-hidden">
        <div
          ref={tatianaRef}
          className="section-padding relative z-10 max-w-7xl mx-auto"
        >
          {/* Heading */}
          <h2 className="tatiana-heading font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pearl mb-10 sm:mb-14 md:mb-20 tracking-wide text-center lg:text-left">
            Meet{' '}
            <span className="text-gold-gradient">
              Tatiana De La Torre
            </span>
          </h2>

          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* ── Image column ── */}
            <div className="lg:col-span-5 space-y-6">
              {/* Portrait */}
              <div
                ref={portraitRef}
                className="parallax-container relative rounded-sm overflow-hidden aspect-[3/4]"
              >
                <Image
                  src="/assets/media/Meet_Tatiana_De_La_Torre_1.jpg"
                  alt="Tatiana De La Torre"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover scale-110"
                  quality={90}
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Secondary image */}
              <div
                ref={secondaryImgRef}
                className="parallax-container relative rounded-sm overflow-hidden aspect-[4/3] hidden lg:block"
              >
                <Image
                  src="/assets/media/Raw emerald on rocks.png"
                  alt="Raw emerald resting on natural rocks"
                  fill
                  sizes="40vw"
                  className="object-cover scale-110"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* ── Text column ── */}
            <div className="lg:col-span-7">
              {/* Always-visible paragraphs */}
              {tatianaParagraphs
                .slice(0, VISIBLE_PARAGRAPHS)
                .map((p, i) => (
                  <p
                    key={i}
                    ref={(el) => setTatianaTextRef(el, i)}
                    className="font-montserrat text-base md:text-lg leading-relaxed text-pearl/85 mb-6"
                  >
                    {p}
                  </p>
                ))}

              {/* Expandable paragraphs */}
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key="expanded-text"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    {tatianaParagraphs
                      .slice(VISIBLE_PARAGRAPHS)
                      .map((p, i) => (
                        <p
                          key={i + VISIBLE_PARAGRAPHS}
                          ref={(el) =>
                            setTatianaTextRef(el, i + VISIBLE_PARAGRAPHS)
                          }
                          className="font-montserrat text-base md:text-lg leading-relaxed text-pearl/85 mb-6"
                        >
                          {p}
                        </p>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Read More / Read Less button */}
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="group mt-4 inline-flex items-center gap-3 font-montserrat text-sm tracking-luxury uppercase text-gold/80 hover:text-gold transition-colors duration-300 cursor-pointer"
                aria-expanded={expanded}
              >
                <span>{expanded ? 'Read Less' : 'Read More'}</span>
                <span
                  className={`inline-block transition-transform duration-500 ${
                    expanded ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 2v10M7 12l4-4M7 12L3 8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {/* Secondary image (mobile only) */}
              <div className="mt-10 relative rounded-sm overflow-hidden aspect-[4/3] lg:hidden">
                <Image
                  src="/assets/media/Raw emerald on rocks.png"
                  alt="Raw emerald resting on natural rocks"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background glow */}
        <div
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(17,107,62,0.5) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.07] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
          }}
        />
      </div>
    </section>
  );
}
