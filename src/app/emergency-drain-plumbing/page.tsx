import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import TrustStrip from '@/components/TrustStrip';
import FinalCTABand from '@/components/FinalCTABand';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollAnimator from '@/components/ScrollAnimator';
import type { FAQItem } from '@/components/FAQAccordion';
import PhoneLink from '@/components/PhoneLink';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Emergency Drain & Plumbing Winnipeg — 24/7 Response',
  description: 'Emergency drain cleaning and plumbing in Winnipeg, 24/7. Sewage backup, basement flooding, burst pipes — we dispatch immediately. Call +1 (204) 399-4413.',
  alternates: { canonical: `${baseUrl}/emergency-drain-plumbing` },
  openGraph: {
    title: 'Emergency Drain & Plumbing Winnipeg — 24/7 Response',
    description: 'Emergency drain cleaning and plumbing in Winnipeg, 24/7. We dispatch immediately.',
    url: `${baseUrl}/emergency-drain-plumbing`,
    siteName: 'Pro Drain Cleaning Limited',
    images: [{ url: 'https://prodraincleaning.ca/images/og-default.jpg', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

const emergencyFAQItems: FAQItem[] = [
{
  question: 'How fast can you respond to an emergency in Winnipeg?',
  answer: <p>For active flooding or sewage backup, we prioritize your call and dispatch as fast as possible. Call <PhoneLink className="underline font-600" style={{ color: 'var(--orange-600)', fontWeight: 600 }}>+1 (204) 399-4413</PhoneLink> right now — a technician answers 24/7. We&apos;ll give you an honest arrival window on the phone based on current dispatch.</p>
},
{
  question: 'Is there an extra charge for after-hours or weekend emergency calls?',
  answer: <p>We give you a flat price on site before any work starts. We&apos;ll tell you honestly on the phone if emergency timing affects the rate. No surprise charges on the invoice — you approve the number first.</p>
},
{
  question: 'Should I shut off my water during a sewer backup?',
  answer: <p>Yes — if sewage is coming up through floor drains or toilets, stop all water use immediately. Don&apos;t flush, run the dishwasher, or use any drains. This prevents more waste from entering a line that has nowhere to go. Then call us at <PhoneLink className="underline font-600" style={{ color: 'var(--orange-600)', fontWeight: 600 }}>+1 (204) 399-4413</PhoneLink>.</p>
},
{
  question: 'What counts as a drain and plumbing emergency?',
  answer: <p>Sewage or water actively coming up through floor drains or toilets. A drain that is completely blocked and water is rising. A burst or leaking pipe causing water damage. A sump pump failure during spring melt. Sewage smell without an obvious source (possible cracked line). If you&apos;re unsure — call us. We&apos;d rather you call and it not be an emergency than not call and have it become one.</p>
},
{
  question: 'Do you handle burst pipes and plumbing emergencies, not just drains?',
  answer: <p>Yes — we handle emergency drain clearing, sewer backups, and plumbing emergencies including burst pipes and water shut-offs. If your emergency is beyond our scope, we&apos;ll tell you on the phone and point you in the right direction.</p>
}];


const emergencyTypes = [
{ icon: null, title: 'Sewage Backup', desc: 'Sewage coming up through basement floor drains, toilets, or tubs. Stop all water use and call immediately — this is a health hazard.' },
{ icon: null, title: 'Basement Flooding', desc: 'Water actively spreading across the floor. We locate the source, clear the blockage, and stop the flow before it reaches your walls and furnace.' },
{ icon: null, title: 'Complete Drain Blockage', desc: 'Every fixture on the lowest floor is backed up. This is a main sewer line failure — not a plunger situation. It needs a machine now.' },
{ icon: null, title: 'Burst or Leaking Pipes', desc: 'Water spraying or pooling from a failed pipe. Shut off your main water valve and call us. We stabilize the situation and make the repair.' },
{ icon: null, title: 'Sump Pump Failure', desc: 'During spring melt or heavy rain, a failed sump pump can flood a finished basement in hours. We diagnose and address the situation.' },
{ icon: null, title: 'Commercial Emergency', desc: 'Restaurant or commercial kitchen drain failure during service. We dispatch with priority — lost service time costs more than an emergency call.' }];


export default function EmergencyPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prodraincleaning.ca' },
    { '@type': 'ListItem', position: 2, name: 'Emergency Drain & Plumbing', item: 'https://prodraincleaning.ca/emergency-drain-plumbing' }]

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
            <li aria-current="page" style={{ color: 'var(--ink)' }}>Emergency Drain &amp; Plumbing</li>
          </ol>
        </nav>

        {/* Hero */}
        <section
          className="relative w-full flex items-center overflow-hidden"
          style={{ minHeight: 'clamp(500px, 80vh, 800px)' }}
          aria-labelledby="emergency-hero-heading">
          
          <div className="absolute inset-0 z-0">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1d3bbfc55-1766173835971.png"
              alt="Emergency sewer backup response in a Winnipeg basement"
              fill
              priority
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
              className="object-cover" />
            
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(11,79,108,0.93) 0%, rgba(24,120,168,0.80) 60%, rgba(24,120,168,0.70) 100%)' }}
              aria-hidden="true" />
            
            <div className="grain-overlay" aria-hidden="true" />
          </div>

          <div className="container-wide relative z-10 py-20 pt-10">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-700 mb-5"
                style={{ backgroundColor: 'rgba(220,38,38,0.9)', color: 'white', fontWeight: 700 }}>
                
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
                EMERGENCY SERVICE — WE ANSWER NOW
              </div>
              <h1 id="emergency-hero-heading" className="text-white mb-5">
                Emergency Drain &amp; Plumbing Service — Winnipeg, 24/7
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Sewage coming up? Basement flooding? Pipe burst? We dispatch immediately — nights, weekends, holidays, −35°C. A real technician answers every call. Upfront pricing before we touch anything.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <PhoneLink className="btn-primary shimmer-btn text-lg px-8 py-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Call Now — +1 (204) 399-4413
                </PhoneLink>
                <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20have%20a%20drain%20emergency" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                  WhatsApp Emergency
                </Link>
                <Link href="/book-online" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.6)', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Book Online
                </Link>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                No hold music. No answering service. A technician picks up — right now.
              </p>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Emergency types */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }} aria-labelledby="emergency-types-heading">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll opacity-100">
              <h2 id="emergency-types-heading" className="mb-4" style={{ color: 'var(--navy-900)' }}>
                What Counts as a Drain Emergency
              </h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                If water is rising, sewage is surfacing, or a pipe has failed — that&apos;s an emergency. Don&apos;t wait until morning.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {emergencyTypes.map((item, i) =>
              <div
                key={i}
                className="card-base p-6 animate-on-scroll opacity-100"
                style={{ transitionDelay: `${i * 70}ms` }}>
                
                  <h3 className="text-lg font-700 mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{item.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What to do right now */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }} aria-labelledby="what-to-do-heading">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 id="what-to-do-heading" className="mb-8 text-center animate-on-scroll opacity-100" style={{ color: 'var(--navy-900)' }}>
              What to Do Right Now
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div
                className="rounded-brand p-7 animate-on-scroll opacity-100"
                style={{ backgroundColor: 'var(--navy-900)', border: '2px solid var(--orange-600)' }}>
                
                <h3 className="text-white font-700 text-lg mb-4" style={{ fontWeight: 700 }}>
                  If sewage is coming up or water is rising:
                </h3>
                <ol className="flex flex-col gap-3">
                  {[
                  'Stop all water use immediately — no flushing, no running taps, no dishwasher',
                  'Move valuables off the floor if water is spreading',
                  'Do not use electrical appliances near the water',
                  'Call +1 (204) 399-4413 right now — we\'ll walk you through what to do while we\'re en route'].
                  map((step, i) =>
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-700"
                      style={{ backgroundColor: 'var(--orange-600)', color: 'white', fontWeight: 700 }}>
                      
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  )}
                </ol>
              </div>
              <div
                className="rounded-brand p-7 animate-on-scroll opacity-100"
                style={{ backgroundColor: 'var(--white)', border: '1px solid var(--line)' }}>
                
                <h3 className="font-700 text-lg mb-4" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                  If a pipe has burst:
                </h3>
                <ol className="flex flex-col gap-3">
                  {[
                  'Locate your main water shut-off valve and turn it off',
                  'Turn on the lowest tap in the house to drain remaining pressure',
                  'If water is near electrical panels — do not touch them, leave the area',
                  'Call +1 (204) 399-4413 — we\'ll dispatch and advise on next steps'].
                  map((step, i) =>
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                      <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-700"
                      style={{ backgroundColor: 'var(--navy-700)', color: 'white', fontWeight: 700 }}>
                      
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  )}
                </ol>
              </div>
            </div>

            <div className="text-center animate-on-scroll opacity-100">
              <PhoneLink className="btn-primary shimmer-btn text-lg px-10">
                Call Now — +1 (204) 399-4413
              </PhoneLink>
            </div>
          </div>
        </section>

        {/* Why us for emergencies */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-900)' }} aria-labelledby="why-emergency-heading">
          <div className="grain-overlay" aria-hidden="true" />
          <div className="container-wide relative z-10">
            <h2 id="why-emergency-heading" className="text-white text-center mb-10 animate-on-scroll opacity-100">
              Why Call Pro Drain Cleaning for an Emergency
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
              { icon: null, title: 'Real technician answers', body: 'Not an answering service. A person who can diagnose your problem on the phone picks up — every time.' },
              { icon: null, title: 'Dispatched fully equipped', body: 'Every truck carries the equipment for drain emergencies: auger, hydro jetter, camera, pump. No second trips.' },
              { icon: null, title: 'Price before we start', body: 'Even at 2 a.m. you get a flat price in writing before we do anything. No emergency surprises on the invoice.' },
              { icon: null, title: 'We clean up completely', body: 'Mats, boot covers, disinfectant. We don\'t leave a disaster area after clearing one.' }].
              map((item, i) =>
              <div
                key={i}
                className="p-6 rounded-brand animate-on-scroll opacity-100"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', transitionDelay: `${i * 70}ms` }}>
                
                  <h3 className="text-white font-700 mb-2 text-base" style={{ fontWeight: 700 }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.body}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Emergency FAQ */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }} aria-labelledby="emergency-faq-heading">
          <div className="container-wide max-w-3xl mx-auto">
            <h2 id="emergency-faq-heading" className="mb-8 text-center animate-on-scroll opacity-100" style={{ color: 'var(--navy-900)' }}>
              Emergency Service Questions
            </h2>
            <div className="animate-on-scroll opacity-100">
              <FAQAccordion items={emergencyFAQItems} id="emergency-faq" />
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }} aria-labelledby="emergency-contact-heading">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10 animate-on-scroll opacity-100">
              <h2 id="emergency-contact-heading" className="mb-3" style={{ color: 'var(--navy-900)' }}>
                Request Emergency Service
              </h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                If water is actively rising — <PhoneLink className="font-700 underline" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>call +1 (204) 399-4413 right now</PhoneLink>. Otherwise, fill this in and we&apos;ll call you back immediately.
              </p>
              <div className="mt-5">
                <Link href="/book-online" className="btn-primary shimmer-btn text-base px-8 py-3 inline-flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Book Now
                </Link>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Form */}
              <div className="bg-white rounded-brand p-8 shadow-brand animate-on-scroll opacity-100 min-w-0">
                <ContactForm prefilledUrgency="emergency" />
              </div>

              {/* Contact card */}
              <div className="flex flex-col gap-6 animate-on-scroll opacity-100 min-w-0 overflow-hidden" style={{ transitionDelay: '150ms' }}>
                <div className="card-base p-7 flex flex-col gap-5">
                  <h3 className="text-xl font-700" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Reach Us Directly
                  </h3>

                  <PhoneLink className="flex items-center gap-3 group" ariaLabel="Call +1 204 399 4413">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--orange-100)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="var(--orange-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-600 uppercase tracking-wider mb-0.5" style={{ color: 'var(--muted)', fontWeight: 600 }}>Call or Text</p>
                      <p className="font-700 text-lg group-hover:underline" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>+1 (204) 399-4413</p>
                    </div>
                  </PhoneLink>

                  <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20have%20a%20drain%20emergency" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#dcfce7' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-600 uppercase tracking-wider mb-0.5" style={{ color: 'var(--muted)', fontWeight: 600 }}>WhatsApp</p>
                      <p className="font-700 text-lg group-hover:underline" style={{ color: '#25D366', fontWeight: 700 }}>+1 (204) 399-4413</p>
                    </div>
                  </Link>

                  <Link href="mailto:prodraincleaningcentre@gmail.com" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--navy-100)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="var(--navy-700)" strokeWidth="2" />
                        <polyline points="22,6 12,13 2,6" stroke="var(--navy-700)" strokeWidth="2" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-600 uppercase tracking-wider mb-0.5" style={{ color: 'var(--muted)', fontWeight: 600 }}>Email</p>
                      <p className="font-600 group-hover:underline break-all" style={{ color: 'var(--navy-900)', fontWeight: 600 }}>prodraincleaningcentre@gmail.com</p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#dcfce7' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="var(--success)" strokeWidth="2" />
                        <polyline points="12,6 12,12 16,14" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-600 uppercase tracking-wider mb-0.5" style={{ color: 'var(--muted)', fontWeight: 600 }}>Hours</p>
                      <p className="font-600" style={{ color: 'var(--success)', fontWeight: 600 }}>Open 24 hours · 7 days · 365 days</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'var(--navy-100)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="var(--navy-700)" strokeWidth="2" />
                        <circle cx="12" cy="10" r="3" stroke="var(--navy-700)" strokeWidth="2" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-600 uppercase tracking-wider mb-0.5" style={{ color: 'var(--muted)', fontWeight: 600 }}>Service Area</p>
                      <p className="text-sm" style={{ color: 'var(--ink)' }}>Winnipeg, Selkirk, St. Norbert and everywhere within 100 km of Winnipeg</p>
                    </div>
                  </div>
                </div>

                <div className="card-base p-7 animate-on-scroll opacity-100" style={{ transitionDelay: '200ms' }}>
                  <h3 className="text-base font-700 mb-4" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Prefer to book online?
                  </h3>
                  <Link href="/book-online" className="btn-primary shimmer-btn w-full text-center py-3 flex items-center justify-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-10" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <p className="text-sm font-600 mb-4" style={{ color: 'var(--muted)', fontWeight: 600 }}>Related services:</p>
            <div className="flex flex-wrap gap-3">
              {[
              { label: 'Drain Cleaning Winnipeg', href: '/drain-cleaning-winnipeg' },
              { label: 'Main Sewer Line Unclogging', href: '/main-sewer-line-unclogging-winnipeg' },
              { label: 'Restaurant & Commercial Drains', href: '/restaurant-commercial-drain-cleaning-winnipeg' },
              { label: 'Plumbing Services Winnipeg', href: '/plumbing-services-winnipeg' },
              { label: '24/7 Emergency Service', href: '/emergency-drain-plumbing-winnipeg' },
              { label: 'Book Online', href: '/book-online' }].
              map((link) =>
              <Link
                key={link.href}
                href={link.href}
                className="text-sm px-4 py-2 rounded-full border font-600 hover:bg-navy-900 hover:text-white transition-colors"
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
    </>);

}