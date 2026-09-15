'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Drain Cleaning', href: '/drain-cleaning-winnipeg' },
  { label: 'Sewer Line', href: '/main-sewer-line-unclogging-winnipeg' },
  { label: 'Emergency', href: '/emergency-drain-plumbing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Glossary', href: '/glossary' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Online', href: '/book-online' },
];

const mobileMenuSections = [
  {
    label: 'SERVICES',
    items: [
      { label: 'Drain Cleaning Winnipeg', href: '/drain-cleaning-winnipeg' },
      { label: 'Main Sewer Line Unclogging', href: '/main-sewer-line-unclogging-winnipeg' },
      { label: 'Restaurant & Commercial Drain Cleaning', href: '/restaurant-commercial-drain-cleaning-winnipeg' },
      { label: 'Plumbing Services', href: '/plumbing-services-winnipeg' },
      { label: 'Emergency Drain & Plumbing', href: '/emergency-drain-plumbing-winnipeg' },
    ],
  },
  {
    label: 'POPULAR',
    items: [
      { label: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
      { label: 'Sewer Camera Inspection', href: '/drain-cleaning-winnipeg#camera-drain-inspections' },
      { label: 'Tree Root Removal', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
      { label: 'Backwater Valve Installation', href: '/plumbing-services-winnipeg#backwater-valve-installation' },
      { label: 'Sump Pump Service', href: '/plumbing-services-winnipeg#sump-pump-installation-repair' },
    ],
  },
  {
    label: 'COMPANY',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book Online', href: '/book-online' },
    ],
  },
];

// Parent page fallbacks for back button
const parentMap: Record<string, string> = {
  '/drain-cleaning-winnipeg': '/',
  '/main-sewer-line-unclogging-winnipeg': '/',
  '/restaurant-commercial-drain-cleaning-winnipeg': '/',
  '/plumbing-services-winnipeg': '/',
  '/emergency-drain-plumbing-winnipeg': '/',
  '/emergency-drain-plumbing': '/',
  '/contact': '/',
  '/book-online': '/',
  '/blog': '/',
  '/about': '/',
  '/privacy-policy': '/',
  '/terms': '/',
};

function getParent(pathname: string): string {
  if (parentMap[pathname]) return parentMap[pathname];
  // blog posts → /blog
  if (pathname.startsWith('/blog/')) return '/blog';
  // area pages → home
  if (pathname.startsWith('/areas/')) return '/';
  return '/';
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasPrevHistory, setHasPrevHistory] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === '/';

  useEffect(() => {
    // Check if there's browser history to go back to
    setHasPrevHistory(window.history.length > 1);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => { if (menuOpen) setMenuOpen(false); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  function handleBack() {
    if (hasPrevHistory) {
      router.back();
    } else {
      router.push(getParent(pathname));
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-brand' : 'shadow-none border-b border-border'}`}
      role="banner"
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 btn-primary text-sm">
        Skip to main content
      </a>
      <div className="container-wide flex items-center justify-between h-16 lg:h-20 gap-4">
        {/* Back button — hidden on home page */}
        {!isHome && (
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="flex items-center gap-1 flex-shrink-0 focus-ring rounded-md"
            style={{
              minWidth: 48,
              minHeight: 48,
              color: 'var(--brand-900)',
              padding: '0 8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-600 hidden sm:inline" style={{ fontWeight: 600 }}>Back</span>
          </button>
        )}

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          aria-label="Pro Drain Cleaning Limited — Home"
          style={isHome ? {} : { marginLeft: 0 }}
        >
          <AppLogo size={36} />
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-base tracking-tight" style={{ color: 'var(--brand-900)', letterSpacing: '-0.02em' }}>
              PRO DRAIN CLEANING
            </span>
            <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>LIMITED</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-600 transition-colors duration-200 relative group"
              style={{ color: 'var(--ink)', fontWeight: 600 }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: 'var(--brand-700)' }}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex flex-col items-end gap-0.5 flex-shrink-0">
          <span className="text-xs font-600" style={{ color: 'var(--success)', fontWeight: 600 }}>Open 24/7</span>
          <Link
            href="tel:+12043994413"
            className="btn-primary shimmer-btn text-sm px-5 py-2.5"
            aria-label="Call Pro Drain Cleaning 24/7 at +1 204 399 4413"
            onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Call +1 (204) 399-4413
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          ref={hamburgerRef}
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md focus-ring ml-auto"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} style={{ color: 'var(--brand-900)' }} />
          <span className={`block w-6 h-0.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: 'var(--brand-900)' }} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} style={{ color: 'var(--brand-900)' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--brand-900)' }}
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel — scrollable */}
        <div className="relative h-full flex flex-col overflow-hidden">
          {/* Close button — fixed top right */}
          <div className="flex-shrink-0 flex justify-end px-5 pt-5 pb-3">
            <button
              className="text-white p-2 focus-ring rounded"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Scrollable nav content */}
          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 pb-4">
            {/* Home */}
            <Link
              href="/"
              className="block py-3 px-2 text-xl font-700 text-white border-b hover:text-orange-400 transition-colors"
              style={{ fontWeight: 700, borderColor: 'rgba(255,255,255,0.1)' }}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            {/* Sections */}
            {mobileMenuSections.map((section) => (
              <div key={section.label} className="mt-5">
                <p
                  className="text-xs font-700 uppercase tracking-widest mb-2 px-2"
                  style={{ color: 'var(--orange-500)', fontWeight: 700, letterSpacing: '0.12em' }}
                >
                  {section.label}
                </p>
                <ul className="flex flex-col">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block py-2.5 px-2 text-base font-600 text-white border-b hover:text-orange-400 transition-colors"
                        style={{ fontWeight: 600, borderColor: 'rgba(255,255,255,0.08)' }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* CTA buttons — pinned at bottom */}
          <div className="flex-shrink-0 px-5 pb-6 pt-4 flex flex-col gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            <Link
              href="tel:+12043994413"
              className="btn-primary w-full text-base justify-center"
              onClick={() => { setMenuOpen(false); if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Call Now — +1 (204) 399-4413
            </Link>
            <Link
              href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full text-base justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}