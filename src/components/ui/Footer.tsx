'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

/* ─────────────────────────────────────────────
   Footer navigation links
   ───────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: 'Heritage', href: '#heritage' },
  { label: 'Quality', href: '#quality' },
  { label: 'Enhancement Grades', href: '#enhancement' },
  { label: 'Trust', href: '#trust' },
  { label: 'Contact', href: '#contact' },
] as const;

/* ─────────────────────────────────────────────
   Social SVG Icons
   ───────────────────────────────────────────── */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Footer Component
   ───────────────────────────────────────────── */
export default function Footer() {
  const [email, setEmail] = useState('');

  /* ── Smooth scroll handler ───────────────── */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  /* ── Newsletter submit handler ───────────── */
  const handleSubscribe = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // TODO: integrate with newsletter service
      setEmail('');
    },
    []
  );

  return (
    <footer id="contact" className="relative bg-emerald-dark" aria-label="Site footer">
      {/* ── Top gold divider ── */}
      <div className="gold-line w-full" aria-hidden="true" />

      {/* ── Main Footer Content ── */}
      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* ── Column 1: About ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Logo + Brand */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/assets/media/Centered_golden_logo_no_background.png"
                  alt="Emeralds by Tatiana De La Torre logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="font-cinzel text-2xl tracking-luxury text-gold">
                  EMERALDS
                </h3>
                <p className="font-montserrat text-xs tracking-wider text-pearl/50">
                  by Tatiana De La Torre
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-xs font-montserrat text-sm leading-relaxed text-pearl/60">
              Where Colombian Heritage Meets Timeless Luxury
            </p>
          </motion.div>

          {/* ── Column 2: Quick Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <h4 className="font-cinzel text-sm uppercase tracking-luxury text-gold/80">
              Quick Links
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="font-montserrat text-sm text-pearl/60 transition-colors duration-300 hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 3: Contact & Newsletter ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <h4 className="font-cinzel text-sm uppercase tracking-luxury text-gold/80">
              Get In Touch
            </h4>

            <div className="mt-5 flex flex-col gap-3">
              {/* Email */}
              <a
                href="mailto:delatorre@emeraldsbytatiana.com"
                className="font-montserrat text-sm text-pearl/60 transition-colors duration-300 hover:text-gold"
              >
                delatorre@emeraldsbytatiana.com
              </a>
              {/* Phone */}
              <a
                href="tel:+13072517072"
                className="font-montserrat text-sm text-pearl/60 transition-colors duration-300 hover:text-gold"
              >
                +1 (307) 251-7072
              </a>
            </div>

            {/* Newsletter */}
            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex gap-2"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full min-w-0 border border-gold/30 bg-transparent px-4 py-2.5 font-montserrat text-sm text-pearl placeholder:text-pearl/30 outline-none transition-colors duration-300 focus:border-gold/60"
              />
              <button type="submit" className="btn-luxury shrink-0">
                <span>Subscribe</span>
              </button>
            </form>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-pearl/50 transition-colors duration-300 hover:text-gold"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-pearl/50 transition-colors duration-300 hover:text-gold"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/13072517072"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-pearl/50 transition-colors duration-300 hover:text-gold"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14">
          {/* Gold divider above copyright */}
          <div className="gold-line mb-6 w-full" aria-hidden="true" />

          <p className="text-center font-montserrat text-xs tracking-wider text-pearl/40">
            &copy; {new Date().getFullYear()} Emeralds by Tatiana De La Torre. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
