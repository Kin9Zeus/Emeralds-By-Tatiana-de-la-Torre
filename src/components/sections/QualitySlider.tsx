'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Panel Data ─── */
const panels = [
  {
    number: '01',
    title: 'Color',
    details: [
      'Rich green color',
      'Medium to medium-dark tone',
      'Strong color saturation',
      'Even color distribution',
    ],
    image:
      '/assets/media/3.4 aspect ratio with logo small emeralds on a green cloth showcase surface.webp',
  },
  {
    number: '02',
    title: 'Clarity',
    details: [
      'Almost all natural emeralds contain inclusions. Tatiana inspects each stone to ensure inclusions do not detract from its beauty.',
    ],
    image: '/assets/media/Emerald on gray bakcground.webp',
  },
  {
    number: '03',
    title: 'Transparency',
    details: [
      'Prioritizing emeralds with excellent transparency to reveal depth and brilliance.',
    ],
    image: '/assets/media/Emerald on gray bakcground semi-side view.webp',
  },
  {
    number: '04',
    title: 'Cut',
    details: [
      'Evaluated individually to maximize color, brilliance, transparency, and size retention.',
    ],
    image: '/assets/media/3.4 aspect ratio with logo emerald.webp',
  },
];

/* ─── Component ─── */
export default function QualitySlider() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile for stacked layout fallback */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(
    () => {
      if (isMobile) return; // Skip horizontal scroll on mobile
      const track = trackRef.current;
      if (!track) return;

      const panelEls = gsap.utils.toArray<HTMLElement>('.quality-panel');
      const totalPanels = panelEls.length;

      /* Horizontal scroll animation
         key fix: end = (totalPanels - 1) * viewportWidth
         This ensures no blank space after the last panel */
      const tween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (totalPanels - 1),
            duration: { min: 0.2, max: 0.5 },
            ease: 'power1.inOut',
          },
          end: () => '+=' + (track.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (totalPanels - 1));
            setActiveIndex(idx);
          },
        },
      });

      /* Stagger-in animations for each panel's content */
      panelEls.forEach((panel) => {
        const number = panel.querySelector('.panel-number');
        const title = panel.querySelector('.panel-title');
        const detail = panel.querySelector('.panel-detail');
        const image = panel.querySelector('.panel-image');
        const line = panel.querySelector('.panel-line');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            containerAnimation: tween,
            start: 'left 75%',
            end: 'left 25%',
            toggleActions: 'play none none reverse',
          },
        });

        if (number) {
          tl.from(number, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: 'power2.out',
          });
        }
        if (line) {
          tl.from(
            line,
            {
              scaleX: 0,
              transformOrigin: 'left center',
              duration: 0.5,
              ease: 'power2.out',
            },
            '-=0.3'
          );
        }
        if (title) {
          tl.from(
            title,
            {
              opacity: 0,
              y: 30,
              duration: 0.6,
              ease: 'power2.out',
            },
            '-=0.3'
          );
        }
        if (detail) {
          tl.from(
            detail,
            {
              opacity: 0,
              y: 20,
              duration: 0.5,
              ease: 'power2.out',
            },
            '-=0.2'
          );
        }
        if (image) {
          tl.from(
            image,
            {
              opacity: 0,
              scale: 1.08,
              duration: 0.8,
              ease: 'power2.out',
            },
            '-=0.5'
          );
        }
      });
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  /* ── Mobile: stacked vertical layout ── */
  if (isMobile) {
    return (
      <section
        id="quality"
        className="relative bg-emerald-dark py-16 px-5"
        aria-label="Emerald Quality Characteristics"
      >
        {/* Intro */}
        <div className="mb-12 text-center">
          <p className="font-montserrat text-xs tracking-luxury uppercase text-gold mb-4">
            Understanding Emerald Quality
          </p>
          <p className="font-montserrat text-sm leading-relaxed text-pearl/70 max-w-md mx-auto">
            Every natural emerald is unique. Unlike diamonds, emeralds naturally
            contain internal characteristics known as inclusions. Tatiana
            evaluates every emerald according to four primary characteristics:
          </p>
        </div>

        {/* Stacked panels */}
        <div className="space-y-12">
          {panels.map((panel) => (
            <div
              key={panel.number}
              className="relative border border-gold/10 rounded-lg overflow-hidden bg-emerald-deep/30"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={panel.image}
                  alt={`${panel.title} — emerald quality characteristic`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/80 via-transparent to-transparent" />
                {/* Number overlay */}
                <span className="absolute bottom-3 left-4 font-cinzel text-5xl font-bold text-gold/20">
                  {panel.number}
                </span>
              </div>

              {/* Text */}
              <div className="p-5">
                <div className="h-px w-10 bg-gold/40 mb-3" />
                <h3 className="font-cinzel text-2xl text-gold-gradient mb-3">
                  {panel.title}
                </h3>
                {panel.details.map((d, i) => (
                  <p
                    key={i}
                    className="font-montserrat text-sm text-pearl/80 leading-relaxed"
                  >
                    {d}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Borders */}
        <div className="absolute top-0 left-0 w-full gold-line" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-full gold-line" aria-hidden="true" />
      </section>
    );
  }

  /* ── Desktop: horizontal scroll ── */
  return (
    <section
      ref={containerRef}
      id="quality"
      className="relative overflow-hidden bg-emerald-dark"
      aria-label="Emerald Quality Characteristics"
    >
      {/* Horizontal Track */}
      <div
        ref={trackRef}
        className="flex flex-nowrap will-change-transform"
      >
        {panels.map((panel, i) => (
          <article
            key={panel.number}
            className="quality-panel relative flex flex-shrink-0 w-screen h-screen items-center"
          >
            {/* Giant outline number */}
            <span
              className="panel-number pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 select-none
                         font-cinzel text-[10rem] lg:text-[14rem] xl:text-[16rem] leading-none font-bold
                         opacity-[0.05]"
              style={{
                WebkitTextStroke: '2px rgba(212,175,55,0.3)',
                WebkitTextFillColor: 'transparent',
              }}
              aria-hidden="true"
            >
              {panel.number}
            </span>

            {/* Content grid */}
            <div className="relative z-10 grid w-full grid-cols-2 gap-12 lg:gap-20 px-12 md:px-16 lg:px-24 xl:px-32">
              {/* Text side */}
              <div className="flex flex-col justify-center">
                {/* Intro text — only on first panel */}
                {i === 0 && (
                  <div className="mb-8 lg:mb-12">
                    <p className="font-montserrat text-xs md:text-sm tracking-luxury uppercase text-gold mb-4">
                      Understanding Emerald Quality
                    </p>
                    <p className="font-montserrat text-sm md:text-base leading-relaxed text-pearl/70 max-w-md">
                      Every natural emerald is unique. Unlike diamonds, emeralds
                      naturally contain internal characteristics known as
                      inclusions. These inclusions are often referred to as the
                      gemstone&apos;s &ldquo;garden&rdquo; because they create
                      unique patterns within the stone. Tatiana evaluates every
                      emerald according to four primary characteristics:
                    </p>
                  </div>
                )}

                {/* Gold accent line */}
                <div
                  className="panel-line h-px w-16 bg-gold-gradient-horizontal mb-5"
                  aria-hidden="true"
                />

                {/* Title */}
                <h3 className="panel-title text-gold-gradient font-cinzel text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5">
                  {panel.title}
                </h3>

                {/* Details */}
                <div className="panel-detail space-y-1.5">
                  {panel.details.map((d, idx) => (
                    <p
                      key={idx}
                      className="font-montserrat text-sm md:text-base lg:text-lg leading-relaxed text-pearl/80 max-w-md"
                    >
                      {d}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="panel-image flex items-center justify-center">
                <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={panel.image}
                    alt={`${panel.title} — emerald quality characteristic`}
                    fill
                    className="object-cover"
                    sizes="45vw"
                    priority={i === 0}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, transparent 50%, rgba(6,33,23,0.4) 100%)',
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {panels.map((panel, i) => (
          <span
            key={panel.number}
            className={`block rounded-full transition-all duration-500 ${
              i === activeIndex
                ? 'w-8 h-2 bg-gold'
                : 'w-2 h-2 bg-pearl/30'
            }`}
            aria-label={`Panel ${i + 1}: ${panel.title}${i === activeIndex ? ' (active)' : ''}`}
          />
        ))}
      </div>

      {/* Top/bottom border lines */}
      <div className="absolute top-0 left-0 w-full gold-line" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-full gold-line" aria-hidden="true" />
    </section>
  );
}
