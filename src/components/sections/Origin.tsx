'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Origin() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      // Parallax on background image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Heading reveal
      gsap.from('.origin-heading', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.origin-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Body text reveal
      gsap.from('.origin-body', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.origin-body',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Gold divider reveal
      gsap.from('.origin-divider', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.origin-divider',
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
      className="relative w-full overflow-hidden min-h-[60vh]"
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0 h-[130%] -top-[15%]">
        <Image
          ref={imageRef}
          src="/assets/media/Raw emerald on rocks.png"
          alt="Raw emerald nestled on natural rock formations"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
          priority={false}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/75 via-obsidian/65 to-emerald-dark/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 md:py-32 lg:py-40">
        {/* Heading */}
        <h2 className="origin-heading font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide text-center mb-8 lg:mb-12">
          <span className="text-gold-gradient">
            The Importance of Origin
          </span>
        </h2>

        {/* Body */}
        <p className="origin-body font-montserrat text-base sm:text-lg md:text-xl text-pearl/90 leading-relaxed max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          Origin matters. The emeralds selected by Tatiana come from the
          legendary Muzo region of Colombia, internationally recognized for
          producing some of the world&apos;s most valuable and sought-after
          gemstones.
        </p>

        {/* Gold Divider */}
        <div className="origin-divider h-px w-full max-w-md mx-auto bg-gold-gradient-horizontal origin-center" />
      </div>
    </section>
  );
}
