'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

/* ─────────────────────────────────────────────
   Navigation links – single source of truth
   ───────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Heritage', href: '#heritage' },
  { label: 'Quality', href: '#quality' },
  { label: 'Enhancement', href: '#enhancement' },
  { label: 'Trust', href: '#trust' },
  { label: 'Contact', href: '#contact' },
] as const;

/* ─────────────────────────────────────────────
   Navbar Component
   ───────────────────────────────────────────── */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* ── Scroll listener ─────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Check initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  /* ── Smooth scroll handler ───────────────── */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileOpen(false);
    },
    []
  );

  return (
    <>
      {/* ── Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-obsidian/90 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-12 lg:px-20"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3"
          >
            {/* Logo image */}
            <div className="relative w-9 h-9 md:w-11 md:h-11 flex-shrink-0">
              <Image
                src="/assets/media/Centered_golden_logo_no_background.png"
                alt="Emeralds by Tatiana De La Torre logo"
                fill
                className="object-contain"
                sizes="44px"
                priority
              />
            </div>
            {/* Brand text */}
            <div className="flex flex-col">
              <span className="font-cinzel text-lg tracking-luxury text-gold transition-colors duration-300 group-hover:text-gold-light sm:text-xl md:text-2xl">
                EMERALDS
              </span>
              <span className="font-montserrat text-[8px] tracking-wider text-pearl/50 sm:text-[9px] md:text-[10px]">
                by Tatiana De La Torre
              </span>
            </div>
          </a>

          {/* ── Desktop Links ── */}
          <ul className="hidden items-center gap-8 lg:gap-10 lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="nav-link group relative font-montserrat text-sm uppercase tracking-wider text-pearl/70 transition-colors duration-300 hover:text-gold"
                >
                  {label}
                  {/* Gold underline */}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Mobile Hamburger ── */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
          >
            <span className="block h-px w-6 bg-gold transition-all duration-300" />
            <span className="block h-px w-4 bg-gold transition-all duration-300" />
            <span className="block h-px w-6 bg-gold transition-all duration-300" />
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile Overlay Menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-obsidian/95 backdrop-blur-lg lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="absolute right-6 top-5 flex h-10 w-10 items-center justify-center text-gold"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile nav links */}
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-cinzel text-2xl uppercase tracking-luxury text-pearl/80 transition-colors duration-300 hover:text-gold"
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            {/* Decorative gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="gold-line mt-12 w-32"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
