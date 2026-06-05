'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const trustPoints = [
  'Personal involvement in the sourcing process',
  'Direct relationships with trusted partners in Colombia',
  'Careful gemstone selection',
  'Transparency and integrity',
  'Colombian heritage and expertise',
  'A commitment to quality over quantity',
];

const lifestyleImages = [
  {
    src: '/assets/media/Golden hour emerald ring on natural hand.png',
    alt: 'Golden hour emerald ring on hand',
  },
  {
    src: '/assets/media/Golden hour emerald ring on natural hand 2.png',
    alt: 'Golden hour emerald ring close-up',
  },
  {
    src: '/assets/media/Golden hour emerald ring on natural hand 3.png',
    alt: 'Emerald ring in golden light',
  },
  {
    src: '/assets/media/Golden hour emerald ring on natural hand 4.png',
    alt: 'Emerald ring lifestyle shot',
  },
];

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const lifestyleTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      /* ───── Part A: Why Clients Trust ───── */

      // Section heading
      gsap.from('.trust-heading', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.trust-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Subtext
      gsap.from('.trust-subtext', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.trust-subtext',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Trust image reveal
      gsap.from('.trust-image-wrapper', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.4,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: '.trust-image-wrapper',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Staggered trust bullet items
      gsap.from('.trust-bullet-item', {
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.trust-bullets-list',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Gold diamond icons pop-in
      gsap.fromTo(
        '.trust-diamond',
        { scale: 0, rotate: -90 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.trust-bullets-list',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Gold divider between parts
      gsap.from('.trust-divider', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.trust-divider',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      /* ───── Part B: A Message from Tatiana ───── */

      // Message heading
      gsap.from('.message-heading', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.message-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Tatiana portrait image
      gsap.from('.message-portrait', {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.message-portrait',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Blockquote reveal
      gsap.from('.message-blockquote', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.message-blockquote',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Gold border animate in
      gsap.from('.blockquote-border', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.message-blockquote',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Attribution
      gsap.from('.message-attribution', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.message-blockquote',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      /* ───── Lifestyle Images Parallax Strip ───── */

      // Horizontal scroll-driven parallax for the image strip
      if (lifestyleTrackRef.current) {
        const track = lifestyleTrackRef.current;
        const scrollWidth = track.scrollWidth - track.clientWidth;

        gsap.to(track, {
          x: -scrollWidth * 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: '.lifestyle-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Lifestyle images fade-in stagger
      gsap.from('.lifestyle-img', {
        opacity: 0,
        scale: 0.92,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.lifestyle-section',
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
      id="trust"
      className="relative w-full bg-obsidian overflow-hidden"
      aria-label="Trust and Personal Message"
    >
      {/* ════════════════════════════════════════════
          PART A — Why Clients Trust
          ════════════════════════════════════════════ */}
      <div className="relative px-6 pt-24 pb-16 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 md:pt-32 md:pb-24">
        {/* Heading */}
        <h2 className="trust-heading font-cinzel text-3xl sm:text-4xl lg:text-5xl text-pearl leading-tight tracking-wide text-center mb-6">
          Why Clients Trust{' '}
          <span className="text-gold-gradient">Tatiana De La Torre</span>
        </h2>

        {/* Subtext */}
        <p className="trust-subtext font-montserrat text-base sm:text-lg text-pearl/70 leading-relaxed max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          Clients know there is a real person behind every gemstone. Her clients
          value:
        </p>

        {/* Two-column layout: Image + Trust Points */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="trust-image-wrapper relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm">
            <Image
              src="/assets/media/Emerald showcased on a GIA certificate.png"
              alt="Emerald showcased on a GIA certificate"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
              quality={90}
            />
            {/* Subtle gold border accent */}
            <div className="absolute inset-0 border border-gold/15 rounded-sm pointer-events-none" />
          </div>

          {/* Trust Bullets */}
          <ul className="trust-bullets-list flex flex-col gap-5 sm:gap-6">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="trust-bullet-item flex items-start gap-4 group"
              >
                {/* Gold Diamond Icon */}
                <span className="trust-diamond flex-shrink-0 mt-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="drop-shadow-[0_0_6px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.7)] transition-all duration-300"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 0L13.0622 7L7 14L0.937822 7L7 0Z"
                      fill="url(#gold-diamond-grad)"
                    />
                    <defs>
                      <linearGradient
                        id="gold-diamond-grad"
                        x1="0"
                        y1="0"
                        x2="14"
                        y2="14"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#D4AF37" />
                        <stop offset="0.5" stopColor="#E8D48B" />
                        <stop offset="1" stopColor="#D4AF37" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="font-montserrat text-base sm:text-lg text-pearl/85 leading-relaxed group-hover:text-gold-light transition-colors duration-300">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="trust-divider h-px w-full max-w-lg mx-auto bg-gold-gradient-horizontal origin-center" />

      {/* ════════════════════════════════════════════
          PART B — A Message from Tatiana
          ════════════════════════════════════════════ */}
      <div className="relative px-6 pt-16 pb-12 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 md:pt-24 md:pb-16">
        {/* Heading */}
        <h2 className="message-heading font-cinzel text-3xl sm:text-4xl lg:text-5xl text-pearl leading-tight tracking-wide text-center mb-16 lg:mb-20">
          A Message from{' '}
          <span className="text-gold-gradient">Tatiana De La Torre</span>
        </h2>

        {/* Portrait + Blockquote Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait Image */}
          <div className="message-portrait lg:col-span-2 relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-sm">
            <Image
              src="/assets/media/A_Message_from_Tatiana_De_La_Torre.jpg"
              alt="Tatiana De La Torre"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 35vw"
              quality={90}
            />
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/30" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/30" />
          </div>

          {/* Blockquote */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <blockquote className="message-blockquote relative pl-6 sm:pl-8 lg:pl-10">
              {/* Gold Left Border */}
              <div
                className="blockquote-border absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                style={{
                  background:
                    'linear-gradient(180deg, #D4AF37 0%, #E8D48B 40%, #D4AF37 70%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* Opening quote mark */}
              <span
                className="absolute -top-4 -left-1 font-cinzel text-6xl sm:text-7xl text-gold/20 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className="font-montserrat text-base sm:text-lg text-pearl/80 leading-relaxed italic tracking-wide">
                Emeralds have always been part of my Colombian heritage. Growing
                up in Colombia, I learned to appreciate the beauty, rarity, and
                significance of these extraordinary gemstones. Today, it is my
                privilege to personally select emeralds from the legendary Muzo
                region and share their beauty with clients around the world.
              </p>

              <p className="font-montserrat text-base sm:text-lg text-pearl/80 leading-relaxed italic tracking-wide mt-6">
                My promise is simple: every emerald I offer has been carefully
                chosen for its quality, beauty, and authenticity. I believe that
                purchasing an emerald should be a personal experience built on
                trust, transparency, and passion.
              </p>

              <p className="font-montserrat text-base sm:text-lg text-pearl/80 leading-relaxed italic tracking-wide mt-6">
                Thank you for allowing me to share a piece of Colombia with you.
              </p>
            </blockquote>

            {/* Attribution */}
            <p className="message-attribution font-cinzel text-lg sm:text-xl text-gold mt-8 pl-6 sm:pl-8 lg:pl-10 tracking-wide">
              — Tatiana De La Torre
            </p>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          Lifestyle Image Strip
          ════════════════════════════════════════════ */}
      <div className="lifestyle-section relative py-16 md:py-24 overflow-hidden">
        {/* Subtle gradient edges for scroll indication */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          ref={lifestyleTrackRef}
          className="flex gap-4 sm:gap-6 px-8 sm:px-16 will-change-transform"
        >
          {lifestyleImages.map((img) => (
            <div
              key={img.src}
              className="lifestyle-img flex-shrink-0 relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[4/3] overflow-hidden rounded-sm group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 384px"
                quality={85}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-emerald-dark/0 group-hover:bg-emerald-dark/20 transition-colors duration-500" />
              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 rounded-sm transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="h-px w-full max-w-lg mx-auto bg-gold-gradient-horizontal origin-center mb-4" />
    </section>
  );
}
