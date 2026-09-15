import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import TrustStrip from '@/components/TrustStrip';
import FinalCTABand from '@/components/FinalCTABand';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import ContactForm from '@/components/ContactForm';
import ScrollAnimator from '@/components/ScrollAnimator';
import PhoneLink from '@/components/PhoneLink';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Contact Pro Drain Cleaning — Winnipeg, 24/7',
  description: 'Contact Pro Drain Cleaning Limited in Winnipeg. Call, WhatsApp or email 24/7. Drain cleaning, sewer line unclogging, emergency plumbing. +1 (204) 399-4413.',
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: {
    title: 'Contact Pro Drain Cleaning — Winnipeg, 24/7',
    description: 'Call, WhatsApp or email 24/7. Drain cleaning, sewer line unclogging, emergency plumbing in Winnipeg.',
    url: `${baseUrl}/contact`,
    siteName: 'Pro Drain Cleaning Limited',
    images: [{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c62568f9-1765420266038.png", width: 1200, height: 630, alt: 'Pro Drain Cleaning contact' }],
    locale: 'en_CA',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ContactPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${baseUrl}/contact` }]

  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ScrollAnimator />
      <AnnouncementBar />
      <Header />

      <main id="main-content" className="mobile-pb">
        {/* Breadcrumb */}
        <nav className="container-wide py-3 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2" style={{ color: 'var(--muted)' }}>
            <li><Link href="/" className="hover:underline" style={{ color: 'var(--orange-600)' }}>Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: 'var(--ink)' }}>Contact</li>
          </ol>
        </nav>

        {/* Page header */}
        <section
          className="py-14 relative overflow-hidden"
          style={{ backgroundColor: 'var(--navy-900)' }}
          aria-labelledby="contact-page-heading">
          
          <div className="grain-overlay" aria-hidden="true" />
          <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
            <h1 id="contact-page-heading" className="text-white mb-4">
              Contact Pro Drain Cleaning
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
              We answer every call, 24 hours a day, 7 days a week, 365 days a year. If water is rising right now —{' '}
              <PhoneLink className="font-700 underline" style={{ color: 'var(--orange-500)', fontWeight: 700 }}>
                call +1 (204) 399-4413 immediately
              </PhoneLink>.
            </p>
          </div>
        </section>

        <TrustStrip />

        {/* Contact section */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }} aria-labelledby="contact-form-heading">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10 animate-on-scroll opacity-100">
              <h2 id="contact-form-heading" className="mb-3" style={{ color: 'var(--navy-900)' }}>
                Tell Us What&apos;s Going On
              </h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Fill this in and we&apos;ll call you right back — day or night. Don&apos;t type if water is actively rising — call us directly.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Form */}
              <div className="bg-white rounded-brand p-8 shadow-brand animate-on-scroll opacity-100">
                <h3 className="text-xl font-700 mb-6" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                  Send a Message
                </h3>
                <ContactForm />
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-6 animate-on-scroll opacity-100" style={{ transitionDelay: '150ms' }}>
                {/* Direct contact card */}
                <div className="card-base p-7">
                  <h3 className="text-xl font-700 mb-6" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Reach Us Directly
                  </h3>

                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="text-xs font-700 uppercase tracking-wider mb-2" style={{ color: 'var(--muted)', fontWeight: 700 }}>
                        Call or Text — 24/7
                      </p>
                      <PhoneLink
                        className="text-2xl font-800 hover:underline"
                        style={{ color: 'var(--orange-600)', fontWeight: 800 }}
                        ariaLabel="Call +1 204 399 4413"
                      >
                        
                        +1 (204) 399-4413
                      </PhoneLink>
                    </div>

                    <div>
                      <p className="text-xs font-700 uppercase tracking-wider mb-2" style={{ color: 'var(--muted)', fontWeight: 700 }}>
                        WhatsApp
                      </p>
                      <Link
                        href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp inline-flex"
                        aria-label="WhatsApp Pro Drain Cleaning">
                        
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp +1 (204) 399-4413
                      </Link>
                    </div>

                    <div>
                      <p className="text-xs font-700 uppercase tracking-wider mb-2" style={{ color: 'var(--muted)', fontWeight: 700 }}>
                        Email
                      </p>
                      <Link
                        href="mailto:prodraincleaningcentre@gmail.com"
                        className="font-600 hover:underline break-all"
                        style={{ color: 'var(--navy-900)', fontWeight: 600 }}
                        aria-label="Email Pro Drain Cleaning">
                        
                        prodraincleaningcentre@gmail.com
                      </Link>
                    </div>

                    <div>
                      <p className="text-xs font-700 uppercase tracking-wider mb-2" style={{ color: 'var(--muted)', fontWeight: 700 }}>
                        Hours
                      </p>
                      <p className="font-700 text-lg" style={{ color: 'var(--success)', fontWeight: 700 }}>
                        Open 24 hours · 7 days a week · 365 days a year
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-700 uppercase tracking-wider mb-2" style={{ color: 'var(--muted)', fontWeight: 700 }}>
                        Service Area
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                        Winnipeg, Selkirk, St. Norbert and everywhere within 100 km of Winnipeg — including Headingley, Oak Bluff, Lorette, Île des Chênes, St. Adolphe, Niverville, Steinbach, Stonewall, Oakbank, Dugald, Beausejour, East and West St. Paul, Teulon, Gimli, Portage la Prairie, Morris, Carman.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div>
                  <div className="mb-2 text-right">
                    <a
                      href="https://www.google.com/maps/d/edit?mid=1WTMIUI_cNbAJVJeoTI-UZldqFW0dTZ8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs"
                      style={{ color: 'var(--brand-500)' }}>
                      
                      Open in Maps ↗
                    </a>
                  </div>
                  <div className="rounded-brand overflow-hidden border border-border mb-2" style={{ height: '400px' }}>
                    <style>{`
                      @media (max-width: 599px) {
                        .map-crop-contact { height: 340px !important; }
                        .map-crop-contact iframe { height: 440px !important; margin-top: -100px !important; }
                      }
                    `}</style>
                    <div className="map-crop-contact" style={{ overflow: 'hidden', height: '400px', position: 'relative' }}>
                      <iframe
                        loading="lazy"
                        title="Pro Drain Cleaning service area — Winnipeg, Manitoba"
                        src="https://www.google.com/maps/d/embed?mid=1WTMIUI_cNbAJVJeoTI-UZldqFW0dTZ8&ehbc=2E312F&noprof=1"
                        width="100%"
                        height="480"
                        style={{ border: 0, marginTop: '-80px', display: 'block' }}
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-label="Google map showing Winnipeg and 100km service area" />
                      
                    </div>
                  </div>
                  <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                    Serving Winnipeg and all communities within a 100 km radius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-10" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <p className="text-sm font-600 mb-4" style={{ color: 'var(--muted)', fontWeight: 600 }}>Our services:</p>
            <div className="flex flex-wrap gap-3">
              {[
              { label: 'Drain Cleaning Winnipeg', href: '/drain-cleaning-winnipeg' },
              { label: 'Main Sewer Line Unclogging', href: '/main-sewer-line-unclogging-winnipeg' },
              { label: 'Emergency Drain & Plumbing', href: '/emergency-drain-plumbing' },
              { label: 'Book Online', href: '/book-online' }].
              map((link) =>
              <Link
                key={link.href}
                href={link.href}
                className="text-sm px-4 py-2 rounded-full border font-600 transition-colors hover:text-white"
                style={{ borderColor: 'var(--navy-700)', color: 'var(--navy-700)', fontWeight: 600 }}>
                
                  {link.label}
                </Link>
              )}
            </div>
          </div>
        </section>

        <FinalCTABand />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );

}