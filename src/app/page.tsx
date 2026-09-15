import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import AppImage from '@/components/ui/AppImage';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import TrustStrip from '@/components/TrustStrip';
import ContactForm from '@/components/ContactForm';
import { CouponPopup, ScrollAnimator, MobileActionBar } from '@/components/ClientOnlyComponents';
import PhoneLink from '@/components/PhoneLink';

// Below-the-fold server-renderable components — code-split to reduce initial JS
const FAQAccordion = dynamic(() => import('@/components/FAQAccordion'));
const CouponInlineForm = dynamic(() => import('@/components/CouponInlineForm'));
const ServiceAreaStrip = dynamic(() => import('@/components/ServiceAreaStrip'));
const FinalCTABand = dynamic(() => import('@/components/FinalCTABand'));
const Footer = dynamic(() => import('@/components/Footer'));

import { homepageFAQItems } from '@/components/FAQAccordion';


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca'),
  title: 'Pro Drain Cleaning — 24/7 Winnipeg Drain & Sewer',
  description: 'Drain cleaning, sewer line unclogging & emergency plumbing in Winnipeg. Same-day service, upfront pricing, camera-verified. Call +1 (204) 399-4413 anytime.',
  alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca' },
  openGraph: {
    title: 'Pro Drain Cleaning — 24/7 Winnipeg Drain & Sewer',
    description: 'Drain cleaning, sewer line unclogging & emergency plumbing in Winnipeg. Same-day service, upfront pricing, camera-verified.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca',
    siteName: 'Pro Drain Cleaning Limited',
    images: [{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_171eeaeb9-1772665883159.png", width: 1200, height: 630, alt: 'Pro Drain Cleaning technician clearing a blocked drain in Winnipeg' }],
    locale: 'en_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Drain Cleaning — 24/7 Winnipeg Drain & Sewer',
    description: 'Drain cleaning, sewer line unclogging & emergency plumbing in Winnipeg. Call +1 (204) 399-4413.'
  },
  robots: { index: true, follow: true }
};

// LCP hero image — preload hint so browser fetches it immediately
const LCP_IMAGE_URL = 'https://img.rocket.new/generatedImages/rocket_gen_img_17b757e33-1771885503955.png';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  '@id': 'https://prodraincleaning.ca/#business',
  name: 'Pro Drain Cleaning Limited',
  url: 'https://prodraincleaning.ca',
  telephone: '+12043994413',
  email: 'prodraincleaningcentre@gmail.com',
  priceRange: '$$',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_117a0c03b-1783186949327.png",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_117a0c03b-1783186949327.png",
  description: '24/7 drain cleaning, main sewer line unclogging, restaurant and commercial drain service and emergency plumbing in Winnipeg, Selkirk, St. Norbert and within 100 km of Winnipeg.',
  address: { '@type': 'PostalAddress', addressLocality: 'Winnipeg', addressRegion: 'MB', addressCountry: 'CA' },
  geo: { '@type': 'GeoCoordinates', latitude: 49.8951, longitude: -97.1384 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
  availableLanguage: ['English']
};

const authorityPoints = [
{ icon: null, title: 'Drains & sewers only', body: 'Not a sideline between furnace calls. Specialists solve in one visit what generalists solve in three.' },
{ icon: null, title: 'Answered 24/7 by a real person', body: 'Nights, weekends, Christmas, −35°C. No answering service, no callback queue.' },
{ icon: null, title: 'Upfront flat-rate pricing', body: 'You approve the number before we start. No hourly meter running while we diagnose.' },
{ icon: null, title: 'Commercial-grade equipment', body: 'Sectional and drum augers, hydro jetter, HD camera, line locator. We don\'t leave and come back.' },
{ icon: null, title: 'Camera-verified results', body: 'We show you the cleared line on screen and send you the video. Proof, not promises.' },
{ icon: null, title: 'Licensed, insured & WCB covered', body: 'Fully licensed in Manitoba, insured, and WCB covered on every job.' },
{ icon: null, title: 'We protect your home', body: 'Boot covers, floor mats, drop sheets and containment on every job. Cleaned up before we leave.' },
{ icon: null, title: 'Locally owned in Winnipeg', body: 'We work in these neighbourhoods, know these pipes, and our reputation here is the whole business.' }];


const processSteps = [
{ num: '01', title: 'You call or WhatsApp — 24/7', body: 'A real technician picks up. Tell us what you\'re seeing: which fixtures, how fast, whether water is currently rising. Average answer time: under 2 minutes.' },
{ num: '02', title: 'We diagnose over the phone first', body: 'Which drains are affected tells us whether it\'s one fixture or your main line. You get a realistic price range before we roll a truck, not after.' },
{ num: '03', title: 'We arrive fully equipped', body: 'Same-day for most calls, priority dispatch for active flooding. Mats and boot covers go down before anything else does.' },
{ num: '04', title: 'On-site inspection & upfront quote', body: 'We locate the cleanout, assess the line, and give you a flat price in writing. You approve it before any work starts. No surprises on the invoice.' },
{ num: '05', title: 'We clear it — and verify it', body: 'The right machine for the pipe. Then a full-flow water test and, where useful, a camera pass so you can see the line is genuinely clear.' },
{ num: '06', title: 'Cleanup, video and a prevention plan', body: 'Everything wiped down, debris removed, camera footage sent to you, and honest advice on what to do so it doesn\'t come back.' }];


const audienceCards = [
{ title: 'Homeowners', icon: null, body: 'One slow sink or three feet of water in the basement. Straight answers, upfront pricing, and no upsell to a repair you don\'t need.', tags: ['Kitchen & bath drains', 'Toilets', 'Floor drains', 'Main lines'] },
{ title: 'Landlords & Property Managers', icon: null, body: 'Fast turnaround so tenants stop calling you, clean documented invoices you can forward, and one number that covers your whole portfolio.', tags: ['Multi-unit', 'After-hours', 'Emailed reports', 'Net terms available'] },
{ title: 'Restaurants & Kitchens', icon: null, body: 'Grease trap lines, floor drains and 3-compartment sink lines cleaned overnight or before open, so you never lose a service.', tags: ['Grease lines', 'Overnight service', 'Maintenance programs'] },
{ title: 'Realtors & Home Buyers', icon: null, body: 'A pre-purchase sewer camera inspection with recorded video, before you waive conditions on a 70-year-old Winnipeg house.', tags: ['Camera inspection', 'Video report', 'Same-week booking'] },
{ title: 'Builders & Renovators', icon: null, body: 'New drain installs, rough-in cleanouts, backwater valve installation, construction debris flushing, and inspection-ready lines.', tags: ['Rough-ins', 'Backwater valves', 'Debris flushing'] },
{ title: 'Condo Boards & Facility Managers', icon: null, body: 'Stack cleaning, common-area floor drains, storm drains and documented preventive programs that reduce claims.', tags: ['Stack cleaning', 'Storm drains', 'Written reports'] }];


export default function HomePage() {
  return (
    <>
      {/* LCP image preload — tells browser to fetch hero image at highest priority */}
      <link
        rel="preload"
        as="image"
        href={`/_next/image?url=${encodeURIComponent(LCP_IMAGE_URL)}&w=828&q=40`}
        imageSrcSet={`/_next/image?url=${encodeURIComponent(LCP_IMAGE_URL)}&w=640&q=40 640w, /_next/image?url=${encodeURIComponent(LCP_IMAGE_URL)}&w=750&q=40 750w, /_next/image?url=${encodeURIComponent(LCP_IMAGE_URL)}&w=828&q=40 828w, /_next/image?url=${encodeURIComponent(LCP_IMAGE_URL)}&w=1080&q=50 1080w, /_next/image?url=${encodeURIComponent(LCP_IMAGE_URL)}&w=1200&q=55 1200w, /_next/image?url=${encodeURIComponent(LCP_IMAGE_URL)}&w=1920&q=60 1920w`}
        imageSizes="100vw"
        fetchPriority="high"
      />
      
      <ScrollAnimator />
      <CouponPopup />

      <AnnouncementBar />
      <Header />

      <main id="main-content" className="mobile-pb">
        {/* ===== HERO ===== */}
        <section
          id="hero"
          className="relative w-full flex items-center overflow-hidden"
          style={{ minHeight: 'clamp(600px, 100vh, 900px)' }}
          aria-labelledby="hero-heading"
          aria-label="Hero section with service overview">
          
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_17b757e33-1771885503955.png"
              alt="Pro Drain Cleaning technician clearing a blocked drain in a Winnipeg basement"
              fill
              priority
              fetchPriority="high"
              quality={40}
              sizes="100vw"
              className="object-cover" />
            
            {/* Hero overlay — brand-900 to brand-700 gradient */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(11,79,108,0.92) 0%, rgba(24,120,168,0.75) 60%, rgba(24,120,168,0.65) 100%)' }}
              aria-hidden="true" />
            
            <div className="grain-overlay" aria-hidden="true" />
          </div>

          <div className="container-wide relative z-10 w-full py-20 pt-24 lg:py-24">
            <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-center">
              {/* Hero text */}
              <div>
                <p
                  className="text-xs font-700 uppercase tracking-widest mb-4"
                  style={{ color: 'var(--orange-500)', fontWeight: 700, letterSpacing: '0.15em' }}>
                  
                  WINNIPEG · SELKIRK · ST. NORBERT · 100 KM AROUND — OPEN 24/7
                </p>

                <h1 id="hero-heading" className="text-white mb-5 leading-tight">
                  Drain Cleaning, Sewer Line Unclogging &amp; Emergency Plumbing in Winnipeg — 24/7
                </h1>

                <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '640px' }}>
                  Clogged kitchen sink? Toilet won&apos;t flush? Sewage coming up the basement floor drain? Pro Drain Cleaning Limited clears blocked sinks, tubs, showers, toilets, laundry and floor drains, main sewer lines and grease lines — using drain snaking, high-pressure hydro jetting and HD camera inspections. Same-day service across Winnipeg, Selkirk, St. Norbert and every community within 100 km. Upfront pricing before we start. Every time.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-5">
                  <PhoneLink
                    className="btn-primary shimmer-btn w-full sm:w-auto text-base"
                    ariaLabel="Call Pro Drain Cleaning 24/7"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    Call Now — +1 (204) 399-4413
                  </PhoneLink>
                  <Link
                    href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full sm:w-auto text-base">
                    
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </Link>
                  <Link href="#contact" className="btn-secondary-white w-full sm:w-auto text-base">
                    Get a Free Estimate
                  </Link>
                </div>

                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  No call centre. No hold music. A real technician answers — day, night, weekend, holiday.
                </p>
              </div>

              {/* Hero form card */}
              <div
                className="hidden lg:block bg-white rounded-brand p-7 shadow-2xl"
                style={{ boxShadow: '0 24px 64px rgba(11,79,108,0.35)' }}>
                
                <h2 className="text-xl font-700 mb-1" style={{ color: 'var(--navy-900)', fontWeight: 700, fontSize: '1.25rem' }}>
                  Get Help Now
                </h2>
                <p className="text-sm mb-5" style={{ color: 'var(--muted)' }}>
                  We&apos;ll call you right back — 24/7.
                </p>
                <ContactForm compact={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <TrustStrip />

        {/* Mobile form (below trust strip) */}
        <div className="lg:hidden container-wide py-10">
          <div className="bg-white rounded-brand p-6 border border-border shadow-brand">
            <h2 className="text-xl font-700 mb-1" style={{ color: 'var(--navy-900)', fontWeight: 700, fontSize: '1.25rem' }}>
              Get Help Now
            </h2>
            <p className="text-sm mb-5" style={{ color: 'var(--muted)' }}>We&apos;ll call you right back — 24/7.</p>
            <ContactForm compact={true} />
          </div>
        </div>

        {/* ===== PROBLEM SECTION ===== */}
        <section
          id="problems"
          className="section-padding"
          style={{ backgroundColor: 'var(--white)' }}
          aria-labelledby="problem-heading"
          aria-label="Common drain and plumbing problems">
          
          <div className="container-wide max-w-5xl mx-auto">
            <div className="animate-on-scroll opacity-100">
              <h2 id="problem-heading" className="mb-4" style={{ color: 'var(--navy-900)' }}>
                A Blocked Drain Doesn&apos;t Wait for Business Hours
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--muted)', maxWidth: '680px' }}>
                It never starts as an emergency. It starts as a sink that drains a little slower than it used to. Then one night you&apos;re standing in an inch of water with a plunger, watching it rise, and every plumber in Winnipeg is closed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-12 animate-on-scroll opacity-100">
              {[
              { bold: 'The kitchen sink fills up every time you run the tap', body: '— and the dishwasher backs up into it. That\'s grease and food waste hardened onto the pipe wall, not a "little clog."' },
              { bold: 'You flush the toilet and the bathtub gurgles', body: '— that isn\'t a toilet problem. That\'s your main sewer line telling you it\'s blocked downstream.' },
              { bold: 'There\'s a sewage smell in the basement you can\'t find', body: '— usually a dry trap, a failed vent, or a cracked line quietly leaking gas into your house.' },
              { bold: 'The floor drain is bubbling and water is spreading toward the furnace', body: '— you now have minutes, not hours.' },
              { bold: 'Your restaurant\'s floor drain backed up during service', body: '— that\'s lost covers tonight and a health inspection you don\'t want tomorrow.' },
              { bold: 'The laundry drain overflows every wash cycle', body: '— lint and detergent scale have narrowed the line to a straw.' }].
              map((item, i) =>
              <div
                key={i}
                className="card-base p-5 flex gap-4"
                style={{ animationDelay: `${i * 80}ms` }}>
                
                  <div>
                    <strong className="text-base" style={{ color: 'var(--navy-900)' }}>{item.bold}</strong>
                    <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.body}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Winnipeg-specific paragraph */}
            <div
              className="rounded-brand p-7 mb-8 animate-on-scroll opacity-100"
              style={{ backgroundColor: 'var(--navy-100)', borderLeft: '4px solid var(--navy-700)' }}>
              
              <h3 className="text-lg font-700 mb-3" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                Why Winnipeg Drains Fail More Than You Think
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
                Winnipeg is genuinely hard on drains. Huge parts of this city — River Heights, Wolseley, St. Boniface, Elmwood, West End, North End, St. Vital, Norwood, older St. James — still run on clay or cast-iron sewer pipe that was laid 40 to 80 years ago. Roots from elms and maples find every hairline crack and grow into a solid mat inside the pipe. Our freeze-thaw cycle shifts joints and opens them further. Spring melt and summer storms push water into a system that&apos;s already restricted. That&apos;s why so many &quot;sudden&quot; Winnipeg backups aren&apos;t sudden at all — they&apos;ve been building quietly for months, and the storm just finished the job.
              </p>
            </div>

            {/* Cost of waiting box */}
            <div
              className="rounded-brand p-7 mb-10 animate-on-scroll opacity-100"
              style={{ backgroundColor: 'var(--orange-100)', border: '1.5px solid var(--orange-600)' }}>
              
              <h3 className="text-lg font-700 mb-3" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                What waiting actually costs
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                Water sitting on a basement floor doesn&apos;t stay on the floor. Drywall wicks it up within hours. Laminate and engineered flooring lift. Contaminated water from a sewer backup means removing anything porous it touched. A cleared line is a service call. A flooded basement is a restoration project, an insurance claim, and weeks of your life. <strong>The fix is cheap. The delay is expensive.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 animate-on-scroll opacity-100">
              <PhoneLink className="btn-primary">
                Call +1 (204) 399-4413 — 24/7
              </PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Message Us on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SOLUTION SECTION ===== */}
        <section
          id="solution"
          className="section-padding"
          style={{ backgroundColor: 'var(--navy-100)' }}
          aria-labelledby="solution-heading"
          aria-label="Our drain cleaning and inspection solutions">
          
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll opacity-100">
              <h2 id="solution-heading" className="mb-4" style={{ color: 'var(--navy-900)' }}>
                We Clear the Clog — Then We Show You Exactly What Caused It
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                Anyone can push a cable down a pipe and make the water go away for a month. We&apos;re a drain and sewer specialist company — it&apos;s all we do — and our job is to get your line flowing at full diameter and then prove it on camera so you&apos;re not calling someone again in six weeks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Card 1 — Snaking */}
              <div className="card-base p-7 flex flex-col animate-on-scroll opacity-100 group relative overflow-hidden">
                <div className="scan-line" aria-hidden="true" />
                <div className="mb-5 rounded-xl overflow-hidden" style={{ height: '180px' }}>
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1783d1e7f-1787879812627.png"
                    alt="Drain snaking a blocked line with a sectional auger machine"
                    width={600}
                    height={180}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                </div>
                <h3 className="mb-2" style={{ color: 'var(--navy-900)' }}>Drain Snaking &amp; Augering</h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--muted)' }}>
                  High-torque cable machines with the right cutting head for the line: hair and soap in a bathroom sink, grease and food in a kitchen line, roots in a 4-inch main. We size the machine to the pipe instead of forcing one machine down everything — which is how pipes get damaged.
                </p>
                <div
                  className="text-xs font-600 px-3 py-1.5 rounded-full inline-block self-start"
                  style={{ backgroundColor: 'var(--orange-100)', color: 'var(--orange-600)', fontWeight: 600 }}>
                  
                  Best for: single fixtures, sudden blockages, hair &amp; paper clogs, first-time roots
                </div>
              </div>

              {/* Card 2 — Hydro Jetting */}
              <div className="card-base p-7 flex flex-col animate-on-scroll opacity-100 group relative overflow-hidden" style={{ transitionDelay: '100ms' }}>
                <div className="scan-line" aria-hidden="true" />
                <div className="mb-5 rounded-xl overflow-hidden" style={{ height: '180px' }}>
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1286f3008-1787879813048.png"
                    alt="High-pressure hydro jetting a grease-coated drain line"
                    width={600}
                    height={180}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                </div>
                <h3 className="mb-2" style={{ color: 'var(--navy-900)' }}>High-Pressure Hydro Jetting</h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--muted)' }}>
                  Up to 4,000 PSI of water on a rotating nozzle that scours the pipe wall back to bare pipe and flushes the debris out of the system entirely. A cable punches a hole through a blockage. Jetting removes the blockage. That&apos;s the difference between three months of relief and three years.
                </p>
                <div
                  className="text-xs font-600 px-3 py-1.5 rounded-full inline-block self-start"
                  style={{ backgroundColor: 'var(--orange-100)', color: 'var(--orange-600)', fontWeight: 600 }}>
                  
                  Best for: grease lines, restaurants, repeat clogs, root regrowth
                </div>
              </div>

              {/* Card 3 — Camera */}
              <div className="card-base p-7 flex flex-col animate-on-scroll opacity-100 group relative overflow-hidden" style={{ transitionDelay: '200ms' }}>
                <div className="scan-line" aria-hidden="true" />
                <div className="mb-5 rounded-xl overflow-hidden" style={{ height: '180px' }}>
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_17c9714d7-1772203492561.png"
                    alt="HD sewer camera inspection showing tree roots inside a Winnipeg sewer line"
                    width={600}
                    height={180}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                </div>
                <h3 className="mb-2" style={{ color: 'var(--navy-900)' }}>HD Sewer Camera Inspection</h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--muted)' }}>
                  We push a self-levelling camera down the line and record the whole run. You watch the screen with us — the root mass, the belly holding water, the offset joint, the crack. Then we surface-locate the exact spot and depth, so if a repair is ever needed, nobody digs up your yard guessing.
                </p>
                <div
                  className="text-xs font-600 px-3 py-1.5 rounded-full inline-block self-start"
                  style={{ backgroundColor: 'var(--orange-100)', color: 'var(--orange-600)', fontWeight: 600 }}>
                  
                  Best for: repeat backups, pre-purchase inspections, insurance docs
                </div>
              </div>
            </div>

            <div
              className="rounded-brand p-6 text-center animate-on-scroll opacity-100"
              style={{ backgroundColor: 'var(--navy-900)' }}>
              
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Then we run water for a full test cycle, camera-verify the flow, pull our mats and boot covers, wipe down the area, and tell you honestly whether you need anything else — including when the answer is <strong style={{ color: 'white' }}>&quot;no, you&apos;re fine, see you in two years.&quot;</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ===== AUDIENCE FIT SECTION ===== */}
        <section
          className="section-padding"
          style={{ backgroundColor: 'var(--white)' }}
          aria-labelledby="audience-heading">
          
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll opacity-100">
              <h2 id="audience-heading" className="mb-4" style={{ color: 'var(--navy-900)' }}>
                Who We Show Up For
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                A blocked floor drain in a 1952 bungalow and a grease line in a 200-seat kitchen are two completely different jobs. We do both — with the right equipment and the right approach for each.
              </p>
            </div>

            {/* Audience grid — 3×2 */}
            {/* BENTO AUDIT: 6 cards, grid-cols-3 on md+, 2 rows */}
            {/* Row 1: [col-1: Homeowners] [col-2: Landlords] [col-3: Restaurants] */}
            {/* Row 2: [col-1: Realtors] [col-2: Builders] [col-3: Condo Boards] */}
            {/* Placed 6/6 ✓ */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {audienceCards.map((card, i) =>
              <div
                key={i}
                className="card-base p-6 flex flex-col animate-on-scroll opacity-100"
                style={{ transitionDelay: `${i * 80}ms` }}>
                
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{card.icon}</span>
                    <h3 className="text-lg" style={{ color: 'var(--navy-900)', fontSize: '1.1rem' }}>{card.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--muted)' }}>
                    {card.body}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag) =>
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full font-600"
                    style={{ backgroundColor: 'var(--navy-100)', color: 'var(--navy-700)', fontWeight: 600 }}>
                    
                        {tag}
                      </span>
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== AUTHORITY SECTION ===== */}
        <section
          id="authority"
          className="section-padding relative overflow-hidden"
          style={{ backgroundColor: 'var(--navy-900)' }}
          aria-labelledby="authority-heading"
          aria-label="Why Pro Drain Cleaning is the trusted choice">
          
          <div className="grain-overlay" aria-hidden="true" />
          <div className="container-wide relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll opacity-100">
              <h2 id="authority-heading" className="text-white mb-4">
                Why Winnipeg Calls Pro Drain Cleaning
              </h2>
            </div>

            {/* Authority grid — 4×2 */}
            {/* BENTO AUDIT: 8 cards, grid-cols-4 on lg, 2 rows */}
            {/* Row 1: [col-1: Specialists] [col-2: 24/7] [col-3: Flat Rate] [col-4: Equipment] */}
            {/* Row 2: [col-1: Camera] [col-2: Licensed] [col-3: Home Protection] [col-4: Local] */}
            {/* Placed 8/8 ✓ */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {authorityPoints.map((point, i) =>
              <div
                key={i}
                className="p-6 rounded-brand border transition-all duration-300 hover:border-orange-600 animate-on-scroll opacity-100"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  transitionDelay: `${i * 60}ms`
                }}>
                
                  <span className="text-3xl block mb-3">{point.icon}</span>
                  <h3 className="text-white font-700 mb-2 text-base" style={{ fontWeight: 700, fontSize: '1rem' }}>{point.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{point.body}</p>
                </div>
              )}
            </div>

            {/* Guarantee callout */}
            <div
              className="rounded-brand p-7 mb-12 text-center animate-on-scroll opacity-100"
              style={{ backgroundColor: 'var(--orange-600)' }}>
              
              <h3 className="text-white font-700 text-xl mb-2" style={{ fontWeight: 700 }}>Our Guarantee</h3>
              <p className="text-white/90 leading-relaxed max-w-2xl mx-auto">
                If the same line blocks again within 30 days of our service, we come back and re-clear it at no charge.*
              </p>
            </div>

            {/* Review strip */}
            <div className="animate-on-scroll opacity-100">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="flex gap-0.5" aria-label="5 stars">
                  {[...Array(5)].map((_, i) =>
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                </span>
                <span className="text-white font-600 text-lg" style={{ fontWeight: 600 }}>
                  4.9 stars · 60+ Google reviews
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                { initials: 'MK', name: 'Michael K.', area: 'River Heights', quote: '"Called at 11 p.m. on a Sunday — technician picked up immediately, was at my door within the hour. Main line was completely clear before midnight. Unbelievable service."' },
                { initials: 'SR', name: 'Sandra R.', area: 'St. Vital', quote: '"They showed me the camera footage before and after. I could see exactly what was in the pipe and exactly what they cleared. First time I\'ve actually understood what I was paying for."' },
                { initials: 'DJ', name: 'David J.', area: 'Elmwood', quote: '"Used them twice now. Same tech both times. Flat price, no surprises, zero mess. They put down mats and cleaned up better than I would have. Will never call anyone else."' }].
                map((t, i) =>
                <div
                  key={i}
                  className="p-6 rounded-brand"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  
                    <p className="text-sm leading-relaxed mb-5 italic" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {t.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-700"
                      style={{ backgroundColor: 'var(--orange-600)', color: 'white', fontWeight: 700 }}>
                      
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-white font-600 text-sm" style={{ fontWeight: 600 }}>{t.name}</p>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{t.area}, Winnipeg</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROCESS SECTION ===== */}
        <section
          id="process"
          className="section-padding"
          style={{ backgroundColor: 'var(--navy-100)' }}
          aria-labelledby="process-heading"
          aria-label="Our six-step drain cleaning process">
          
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll opacity-100">
              <h2 id="process-heading" className="mb-3" style={{ color: 'var(--navy-900)' }}>
                How It Works — From Your Call to a Clear Line
              </h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Most jobs are done in a single visit. Here&apos;s exactly what happens.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {processSteps.map((step, i) =>
              <div
                key={i}
                className="card-base p-7 animate-on-scroll opacity-100"
                style={{ transitionDelay: `${i * 80}ms` }}>
                
                  <div className="step-number mb-3">{step.num}</div>
                  <h3 className="text-lg font-700 mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700, fontSize: '1.05rem' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {step.body}
                  </p>
                </div>
              )}
            </div>

            <div className="text-center animate-on-scroll opacity-100">
              <PhoneLink className="btn-primary shimmer-btn text-base">
                Start Step 1 — Call +1 (204) 399-4413
              </PhoneLink>
            </div>
          </div>
        </section>

        {/* ===== OFFER SECTION ===== */}
        <section
          id="offer"
          className="section-padding"
          style={{ backgroundColor: 'var(--orange-100)' }}
          aria-labelledby="offer-heading"
          aria-label="New customer discount offer">
          
          <div className="container-wide max-w-3xl mx-auto">
            <div className="text-center mb-8 animate-on-scroll opacity-100">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-700 mb-4"
                style={{ backgroundColor: 'var(--orange-600)', color: 'white', fontWeight: 700 }}>
                
                New Customer Offer
              </div>
              <h2 id="offer-heading" className="mb-4" style={{ color: 'var(--navy-900)' }}>
                Up to 10% Off Your First Service
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                First time calling Pro Drain Cleaning Limited? Take up to 10% off your first job — drain cleaning, sewer line unclogging, camera inspection or plumbing repair. Residential or commercial, daytime or 3 a.m.
              </p>
            </div>

            <div
              className="bg-white rounded-brand p-8 shadow-brand mb-6 animate-on-scroll opacity-100">
              
              <CouponInlineForm />
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center text-center animate-on-scroll opacity-100">
              {[
              '✓ Free estimate over the phone',
              '✓ No extra charge to come out for a quote',
              '✓ Ask about restaurant maintenance plans'].
              map((item, i) =>
              <span key={i} className="text-sm font-600" style={{ color: 'var(--navy-700)', fontWeight: 600 }}>
                  {item}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* ===== QUOTABLE STATEMENTS SECTION ===== */}
        <section
          id="quotable"
          className="section-padding"
          style={{ backgroundColor: 'var(--navy-900)', color: 'white' }}
          aria-labelledby="quotable-heading"
          aria-label="Key facts and statistics">
          
          <div className="container-wide max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll opacity-100">
              <h2 id="quotable-heading" className="mb-4" style={{ color: 'white' }}>
                Why Winnipeg Homeowners & Businesses Choose Pro Drain Cleaning
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 animate-on-scroll opacity-100">
              <div className="card-base p-7" style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="text-3xl font-700 mb-3" style={{ color: 'var(--orange-500)', fontWeight: 700 }}>127+</div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  5-star reviews from homeowners, landlords, restaurants and realtors across Winnipeg and surrounding areas
                </p>
              </div>

              <div className="card-base p-7" style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="text-3xl font-700 mb-3" style={{ color: 'var(--orange-500)', fontWeight: 700 }}>24/7</div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Real technician answers every call — nights, weekends, holidays and −35°C January mornings. No answering service, no callback queue
                </p>
              </div>

              <div className="card-base p-7" style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="text-3xl font-700 mb-3" style={{ color: 'var(--orange-500)', fontWeight: 700 }}>100km</div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Service area covers Winnipeg, Selkirk, St. Norbert, Headingley, Steinbach, Stonewall and every community within 100 km radius
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section
          id="faq"
          className="section-padding"
          style={{ backgroundColor: 'var(--white)' }}
          aria-labelledby="faq-heading"
          aria-label="Frequently asked questions">
          
          <div className="container-wide max-w-3xl mx-auto">
            <div className="text-center mb-10 animate-on-scroll opacity-100">
              <h2 id="faq-heading" className="mb-3" style={{ color: 'var(--navy-900)' }}>
                Winnipeg Drain &amp; Sewer Questions, Answered Straight
              </h2>
            </div>
            <div className="animate-on-scroll opacity-100">
              <FAQAccordion items={homepageFAQItems} id="homepage-faq" />
            </div>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section
          id="contact"
          className="section-padding"
          style={{ backgroundColor: 'var(--navy-100)' }}
          aria-labelledby="contact-heading"
          aria-label="Contact Pro Drain Cleaning">
          
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10 animate-on-scroll opacity-100">
              <h2 id="contact-heading" className="mb-3" style={{ color: 'var(--navy-900)' }}>
                Tell Us What&apos;s Going On — We&apos;ll Call You Right Back
              </h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Fill this in and we&apos;ll respond fast, day or night. If water is rising right now, don&apos;t type —{' '}
                <Link href="tel:+12043994413" className="font-700 underline" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>
                  call +1 (204) 399-4413
                </Link>.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Form */}
              <div className="bg-white rounded-brand p-8 shadow-brand animate-on-scroll opacity-100 min-w-0">
                <ContactForm />
              </div>

              {/* Contact card */}
              <div className="flex flex-col gap-6 animate-on-scroll opacity-100 min-w-0 overflow-hidden" style={{ transitionDelay: '150ms' }}>
                <div className="card-base p-7 flex flex-col gap-5">
                  <h3 className="text-xl font-700" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Reach Us Directly
                  </h3>

                  <PhoneLink href="tel:+12043994413" className="flex items-center gap-3 group" ariaLabel="Call +1 204 399 4413">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--orange-100)' }}>
                      
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="var(--orange-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-600 uppercase tracking-wider mb-0.5" style={{ color: 'var(--muted)', fontWeight: 600 }}>Call or Text</p>
                      <p className="font-700 text-lg group-hover:underline" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>+1 (204) 399-4413</p>
                    </div>
                  </PhoneLink>

                  <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#dcfce7' }}>
                      
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
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--navy-100)' }}>
                      
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
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#dcfce7' }}>
                      
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
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'var(--navy-100)' }}>
                      
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

                {/* Map */}
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
                <div className="rounded-brand overflow-hidden border border-border w-full" style={{ height: '400px' }}>
                  <div style={{ overflow: 'hidden', height: '400px' }}>
                    <style>{`
                      @media (max-width: 599px) {
                        .map-crop-home { height: 340px !important; }
                        .map-crop-home iframe { height: 440px !important; margin-top: -100px !important; }
                      }
                    `}</style>
                    <div className="map-crop-home" style={{ overflow: 'hidden', height: '400px', position: 'relative' }}>
                      <iframe
                        loading="lazy"
                        title="Pro Drain Cleaning service area — Winnipeg, Manitoba"
                        src="https://www.google.com/maps/d/embed?mid=1WTMIUI_cNbAJVJeoTI-UZldqFW0dTZ8&ehbc=2E312F&noprof=1"
                        width="100%"
                        height="480"
                        style={{ border: 0, display: 'block', marginTop: '-80px' }}
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-label="Google map showing Winnipeg and 100km service area" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                  Serving Winnipeg and all communities within 100 km radius
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaStrip />
        <FinalCTABand />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}