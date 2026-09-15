'use client';
import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const serviceLinks = [
  { label: 'Drain Cleaning Winnipeg', href: '/drain-cleaning-winnipeg' },
  { label: 'Main Sewer Line Unclogging', href: '/main-sewer-line-unclogging-winnipeg' },
  { label: 'Commercial Drain Cleaning', href: '/restaurant-commercial-drain-cleaning-winnipeg' },
  { label: 'Plumbing Services', href: '/plumbing-services-winnipeg' },
  { label: 'Emergency Drain & Plumbing', href: '/emergency-drain-plumbing-winnipeg' },
  { label: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { label: 'Sewer Camera Inspection', href: '/drain-cleaning-winnipeg#camera-drain-inspections' },
  { label: 'Tree Root Removal', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { label: 'Backwater Valve Installation', href: '/plumbing-services-winnipeg#backwater-valve-installation' },
  { label: 'Sump Pump Service', href: '/plumbing-services-winnipeg#sump-pump-installation-repair' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Glossary', href: '/glossary' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Online', href: '/book-online' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

const areaLinks = [
  { label: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
  { label: 'St. Norbert', href: '/areas/drain-cleaning-st-norbert' },
  { label: 'Selkirk', href: '/areas/drain-cleaning-selkirk' },
  { label: 'Headingley', href: '/areas/drain-cleaning-headingley' },
  { label: 'Oak Bluff', href: '/areas/drain-cleaning-oak-bluff' },
  { label: 'Lorette', href: '/areas/drain-cleaning-lorette' },
  { label: 'Niverville', href: '/areas/drain-cleaning-niverville' },
  { label: 'Steinbach', href: '/areas/drain-cleaning-steinbach' },
  { label: 'Stonewall', href: '/areas/drain-cleaning-stonewall' },
  { label: 'East & West St. Paul', href: '/areas/drain-cleaning-east-west-st-paul' },
];

export default function Footer() {
  const handlePhoneClick = () => {
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion('tel:+12043994413');
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--navy-900)' }} role="contentinfo">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — NAP */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AppLogo size={36} />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-sm text-white tracking-tight">PRO DRAIN CLEANING</span>
                <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>LIMITED</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Drain cleaning, sewer line unclogging, commercial drain service and emergency plumbing across Winnipeg and 100 km around.
            </p>
            <div className="flex flex-col gap-2.5">
              <Link
                href="tel:+12043994413"
                className="flex items-center gap-2 text-sm font-600 hover:text-white transition-colors"
                style={{ color: 'var(--orange-500)', fontWeight: 600 }}
                aria-label="Call +1 204 399 4413"
                onClick={handlePhoneClick}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +1 (204) 399-4413
              </Link>
              <Link
                href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-600 hover:text-white transition-colors"
                style={{ color: '#25D366', fontWeight: 600 }}
                aria-label="WhatsApp Pro Drain Cleaning"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Link>
              <Link
                href="mailto:prodraincleaningcentre@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.65)' }}
                aria-label="Email Pro Drain Cleaning"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                prodraincleaningcentre@gmail.com
              </Link>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Open 24 hours, 7 days a week
              </p>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-white font-700 text-sm uppercase tracking-wider mb-5" style={{ fontWeight: 700 }}>Services</h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Areas */}
          <div>
            <h3 className="text-white font-700 text-sm uppercase tracking-wider mb-5" style={{ fontWeight: 700 }}>Areas We Serve</h3>
            <ul className="flex flex-col gap-2">
              {areaLinks?.map((area) => (
                <li key={area?.href}>
                  <Link
                    href={area?.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {area?.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>+ 100 km around Winnipeg</span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Company */}
          <div>
            <h3 className="text-white font-700 text-sm uppercase tracking-wider mb-5" style={{ fontWeight: 700 }}>Company</h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderColor: 'rgba(255,255,255,0.1)',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            paddingTop: '28px',
          }}
        >
          {/* Mobile: stacked centered rows. Desktop (640px+): horizontal flex with gaps */}
          <div
            style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: '1.6',
            }}
          >
            {/* Row 1 — copyright */}
            <p
              style={{
                textAlign: 'center',
                marginBottom: '10px',
              }}
              className="sm:hidden"
            >
              © 2026 Pro Drain Cleaning Limited. All rights reserved.
            </p>

            {/* Row 2 — location */}
            <p
              style={{
                textAlign: 'center',
                marginBottom: '10px',
              }}
              className="sm:hidden"
            >
              Winnipeg, Manitoba
            </p>

            {/* Row 3 — phone + email (mobile) */}
            <div
              style={{
                textAlign: 'center',
                marginBottom: '10px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '4px',
              }}
              className="sm:hidden flex"
            >
              <Link
                href="tel:+12043994413"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                onClick={handlePhoneClick}
              >
                +1 (204) 399-4413
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
              <Link
                href="mailto:prodraincleaningcentre@gmail.com"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                prodraincleaningcentre@gmail.com
              </Link>
            </div>

            {/* Row 4 — sitemap + llms.txt (mobile) */}
            <div
              style={{
                textAlign: 'center',
                marginBottom: '10px',
                justifyContent: 'center',
                gap: '4px',
              }}
              className="sm:hidden flex"
            >
              <Link
                href="/sitemap.xml"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                Sitemap
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
              <Link
                href="/llms.txt"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                aria-label="llms.txt — structured site summary for AI assistants"
              >
                llms.txt
              </Link>
            </div>

            {/* Desktop (640px+): single horizontal row */}
            <div
              className="hidden sm:flex flex-wrap items-center gap-4"
              style={{ marginBottom: '10px' }}
            >
              <span>© 2026 Pro Drain Cleaning Limited. All rights reserved.</span>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span>Winnipeg, Manitoba</span>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
              <Link
                href="tel:+12043994413"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                onClick={handlePhoneClick}
              >
                +1 (204) 399-4413
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
              <Link
                href="mailto:prodraincleaningcentre@gmail.com"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                prodraincleaningcentre@gmail.com
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
              <Link
                href="/sitemap.xml"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                Sitemap
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
              <Link
                href="/llms.txt"
                className="hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                aria-label="llms.txt — structured site summary for AI assistants"
              >
                llms.txt
              </Link>
            </div>

            {/* Row 5 / Credit line — centered on all screen sizes */}
            <p
              style={{
                textAlign: 'center',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.35)',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '12px',
                marginTop: '4px',
              }}
            >
              Built and managed by{' '}
              <a
                href="https://webuildpro.online"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors"
                style={{ color: '#ffffff', fontSize: '12px' }}
              >
                WeBuildPro Global
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}