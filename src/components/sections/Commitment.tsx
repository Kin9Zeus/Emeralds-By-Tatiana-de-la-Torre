'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const evaluationCriteria = [
  'Color',
  'Clarity',
  'Transparency',
  'Cut potential',
  'Natural characteristics',
  'Overall beauty and brilliance',
];

export default function Commitment() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      // Parallax effect on the background image
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
      gsap.from('.commitment-heading', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.commitment-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Paragraph 1 reveal
      gsap.from('.commitment-para-1', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.commitment-para-1',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Criteria intro text
      gsap.from('.commitment-criteria-intro', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.commitment-criteria-intro',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Staggered criteria list items
      gsap.from('.criterion-item', {
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.commitment-criteria-list',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Gold bullet shimmer after items appear
      gsap.fromTo(
        '.criterion-bullet',
        { scale: 0, rotate: -90 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.commitment-criteria-list',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Paragraph 3 reveal
      gsap.from('.commitment-para-3', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.commitment-para-3',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Gold divider line animation
      gsap.from('.commitment-divider', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.commitment-divider',
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
    >
      {/* Cinematic Parallax Background Image */}
      <div className="absolute inset-0 h-[120%] -top-[10%]">
        <Image
          ref={imageRef}
          src="/assets/media/21.9 aspect ratio 90 degrees aereal view small emeralds on black cloth.webp"
          alt="Aerial view of small emeralds on black cloth"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
          priority={false}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/80 via-emerald-dark/70 to-emerald-dark/85" />

      {/* Content */}
      <div className="relative z-10 px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="commitment-heading font-cinzel text-3xl sm:text-4xl lg:text-5xl text-pearl leading-tight tracking-wide text-center mb-12 lg:mb-16">
          A Personal Commitment{' '}
          <span className="text-gold">to Authenticity</span>
        </h2>

        {/* Paragraph 1 */}
        <p className="commitment-para-1 font-montserrat text-base sm:text-lg text-pearl/85 leading-relaxed max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          Unlike traditional jewelry retailers, Emeralds by Tatiana De La Torre
          is personally involved in the sourcing and selection process. Tatiana
          De La Torre travels to Colombia and works directly with trusted mining,
          cutting, and sourcing partners in the Muzo region, where she oversees
          the selection and quality control of every gemstone considered for our
          collection.
        </p>

        {/* Evaluation Criteria Section */}
        <div className="max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="commitment-criteria-intro font-montserrat text-lg sm:text-xl text-pearl/90 leading-relaxed mb-8 text-center">
            Before an emerald is approved, Tatiana evaluates:
          </p>

          {/* Criteria List */}
          <ul className="commitment-criteria-list grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-5 max-w-xl mx-auto">
            {evaluationCriteria.map((criterion) => (
              <li
                key={criterion}
                className="criterion-item flex items-center gap-4 group"
              >
                {/* Gold Diamond Bullet */}
                <span className="criterion-bullet flex-shrink-0 w-3 h-3 rotate-45 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_14px_rgba(212,175,55,0.7)] transition-shadow duration-300" />
                <span className="font-montserrat text-base sm:text-lg text-pearl/90 tracking-wide group-hover:text-gold-light transition-colors duration-300">
                  {criterion}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Paragraph 3 */}
        <p className="commitment-para-3 font-montserrat text-base sm:text-lg text-pearl/85 leading-relaxed max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          This hands-on approach allows her to maintain exceptional standards and
          ensure that every emerald offered reflects the quality and authenticity
          that define the brand.
        </p>

        {/* Gold Divider Line */}
        <div className="commitment-divider h-px w-full max-w-md mx-auto bg-gold-gradient-horizontal origin-center" />
      </div>
    </section>
  );
}
