'use client';

import React, { useState, useRef } from 'react';

import Image from 'next/image';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import FinalCTABand from '@/components/FinalCTABand';
import TrustStrip from '@/components/TrustStrip';
import ScrollAnimator from '@/components/ScrollAnimator';
import PhoneLink from '@/components/PhoneLink';

// Credential chips
const credentialChips = [
{ label: 'Licence #12345' },
{ label: 'Insured by XYZ Insurance' },
{ label: 'WCB Covered' },
{ label: '10+ years in the trade' }];


// Photo gallery images — replace URLs with real photos when available
const galleryImages = [
{
  src: "/assets/images/man1-1787308009216.jpeg",
  alt: 'Manpreet Chahal, owner of Pro Drain Cleaning, on a job site in Winnipeg'
},
{
  src: "/assets/images/man7-1787308541465.jpeg",
  alt: 'Pro Drain Cleaning technician ready for a drain service call in Winnipeg'
},
{
  src: "/assets/images/man3-1787308261944.jpeg",
  alt: 'Pro Drain Cleaning technician on a drain service job in Winnipeg'
},
{
  src: "/assets/images/man4-1787308261362.jpeg",
  alt: 'Pro Drain Cleaning crew member ready for a residential drain cleaning call'
},
{
  src: "/assets/images/man5-1787308397229.jpeg",
  alt: 'Pro Drain Cleaning technician on a residential drain cleaning job in Winnipeg'
},
{
  src: "/assets/images/man6-1787308397319.jpeg",
  alt: 'Pro Drain Cleaning crew member completing a drain service call in Winnipeg'
}];


export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const visibleChips = credentialChips;

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, galleryImages.length - 1));
    setCurrentIndex(clamped);
    if (galleryRef.current) {
      const child = galleryRef.current.children[clamped] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
        <ScrollAnimator />

        {/* ── Page intro ── */}
        <section
          className="py-16 md:py-20"
          style={{ backgroundColor: 'var(--brand-100)' }}>
          
          <div className="container-wide">
            <div className="max-w-2xl">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--brand-700)' }}>
                
                About Us
              </p>
              <h1
                className="text-4xl md:text-5xl font-extrabold leading-tight mb-5"
                style={{ color: 'var(--brand-900)' }}>
                
                Pro Drain Cleaning Limited
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                A locally owned drain and sewer specialist serving Winnipeg, Selkirk, St. Norbert, and every community within 100 km — 24 hours a day, 7 days a week. No answering service. No national call centre. A real technician picks up the phone.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who You're Actually Calling ── */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--brand-100)' }}>
          <div className="container-wide">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-3"
              style={{ color: 'var(--brand-900)' }}>
              
              Who You&apos;re Actually Calling
            </h2>
            <p className="text-base mb-10" style={{ color: 'var(--muted)' }}>
              No call centre, no dispatcher reading a script. When you call or WhatsApp us, this is who picks up.
            </p>

            {/* Two-column card */}
            <div
              className="rounded-2xl overflow-hidden shadow-md border"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--line)'
              }}>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left — photo gallery */}
                <div
                  className="p-6 md:p-8 flex flex-col gap-5"
                  style={{ backgroundColor: 'var(--brand-100)' }}>
                  
                  {/* Scrollable photo gallery */}
                  <div className="flex flex-col gap-3">
                    {/* Gallery track */}
                    <div
                      ref={galleryRef}
                      className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth"
                      style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                      }}
                      onScroll={(e) => {
                        const el = e.currentTarget;
                        const scrollLeft = el.scrollLeft;
                        const itemWidth = el.scrollWidth / galleryImages.length;
                        const newIndex = Math.round(scrollLeft / itemWidth);
                        setCurrentIndex(newIndex);
                      }}>
                      
                      {galleryImages.map((img, i) =>
                      <div
                        key={i}
                        className="flex-shrink-0 snap-center rounded-xl overflow-hidden"
                        style={{
                          width: '100%',
                          aspectRatio: '4/3',
                          position: 'relative',
                          backgroundColor: 'var(--line)'
                        }}>
                        
                          <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          priority={i === 0}
                          loading={i === 0 ? undefined : 'lazy'} />
                        
                        
                        </div>
                      )}
                    </div>

                    {/* Navigation controls */}
                    <div className="flex items-center justify-between">
                      {/* Prev / Next arrows */}
                      <button
                        onClick={() => scrollToIndex(currentIndex - 1)}
                        disabled={currentIndex === 0}
                        aria-label="Previous photo"
                        className="flex items-center justify-center w-9 h-9 rounded-full border transition-opacity"
                        style={{
                          borderColor: 'var(--line)',
                          backgroundColor: 'white',
                          color: 'var(--brand-700)',
                          opacity: currentIndex === 0 ? 0.35 : 1,
                          cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
                        }}>
                        
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Dot indicators */}
                      <div className="flex gap-1.5">
                        {galleryImages.map((_, i) =>
                        <button
                          key={i}
                          onClick={() => scrollToIndex(i)}
                          aria-label={`Go to photo ${i + 1}`}
                          className="rounded-full transition-all"
                          style={{
                            width: i === currentIndex ? '20px' : '8px',
                            height: '8px',
                            backgroundColor: i === currentIndex ? 'var(--brand-700)' : 'var(--line)',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                          }} />

                        )}
                      </div>

                      <button
                        onClick={() => scrollToIndex(currentIndex + 1)}
                        disabled={currentIndex === galleryImages.length - 1}
                        aria-label="Next photo"
                        className="flex items-center justify-center w-9 h-9 rounded-full border transition-opacity"
                        style={{
                          borderColor: 'var(--line)',
                          backgroundColor: 'white',
                          color: 'var(--brand-700)',
                          opacity: currentIndex === galleryImages.length - 1 ? 0.35 : 1,
                          cursor: currentIndex === galleryImages.length - 1 ? 'not-allowed' : 'pointer'
                        }}>
                        
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right — bio card */}
                <div className="p-6 md:p-10 flex flex-col justify-between gap-8">
                  <div>
                    <p
                      className="text-xl font-extrabold mb-0.5"
                      style={{ color: 'var(--brand-900)' }}>
                      
                      Manpreet Chahal
                    </p>
                    <p
                      className="text-sm font-semibold mb-6"
                      style={{ color: 'var(--brand-700)' }}>
                      
                      Owner &amp; Lead Technician
                    </p>

                    <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                      <p>
                        Manpreet has been clearing drains and sewer lines across Winnipeg for years, from century-old clay pipe in the city&apos;s older neighbourhoods to brand-new construction in Niverville and Steinbach. He started Pro Drain Cleaning Limited on a simple rule: give people an honest price before touching anything, and don&apos;t leave until the job is actually done — not just quieter for a few weeks.
                      </p>
                      <p>
                        Manpreet and the team still answer the emergency line personally on most nights, which is why when you call at 2 a.m., you&apos;re usually talking to the person who&apos;ll be standing in your basement an hour later.
                      </p>
                    </div>

                                        {/* Credential chips */}
                    {visibleChips.length > 0 &&
                    <div className="flex flex-wrap gap-2 mt-6">
                        {visibleChips.map((chip) =>
                      <span
                        key={chip.label}
                        className="text-xs font-semibold px-3 py-1 rounded-full border"
                        style={{
                          borderColor: 'var(--brand-700)',
                          color: 'var(--brand-900)',
                          backgroundColor: 'var(--brand-100)'
                        }}>
                        
                            {chip.label}
                          </span>
                      )}
                      </div>
                    }
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <PhoneLink
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--accent-600)' }}
                    >
                      
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </PhoneLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ── */}
        <TrustStrip />

        {/* ── Why we exist ── */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'white' }}>
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-6"
                style={{ color: 'var(--brand-900)' }}>
                
                Why We Exist
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: 'var(--ink)' }}>
                Most drain calls in Winnipeg go to a dispatch centre that routes you to whoever is available. You don&apos;t know who&apos;s coming, and neither does the person who answered. We built this company around the opposite idea: one technician, one phone number, one standard of work.
              </p>
              <p className="text-lg leading-relaxed mb-5" style={{ color: 'var(--ink)' }}>
                We serve Winnipeg, Selkirk, St. Norbert, Headingley, and every community within 100 km — 24 hours a day, every day of the year. Not because it&apos;s a marketing line, but because drains don&apos;t back up on a schedule.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--ink)' }}>
                Every job gets a flat price before work starts, camera verification after, and a cleanup before we leave. That&apos;s the whole model.
              </p>
            </div>
          </div>
        </section>

        {/* ── How we work ── */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--brand-100)' }}>
          <div className="container-wide">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-10 text-center"
              style={{ color: 'var(--brand-900)' }}>
              
              How We Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
              {
                num: '01',
                title: 'Upfront flat-rate pricing',
                body: 'You approve the number before we start. No hourly meter running while we diagnose.'
              },
              {
                num: '02',
                title: 'Drain and sewer specialists only',
                body: 'Not a sideline between furnace calls. Specialists solve in one visit what generalists solve in three.'
              },
              {
                num: '03',
                title: 'Camera-verified results',
                body: 'We show you the cleared line on screen and send you the video. Proof, not promises.'
              },
              {
                num: '04',
                title: 'Commercial-grade equipment',
                body: "Sectional and drum augers, hydro jetter, HD camera, line locator. We don't leave and come back."
              },
              {
                num: '05',
                title: 'We protect your home',
                body: 'Boot covers, floor mats, drop sheets and containment on every job. Cleaned up before we leave.'
              },
              {
                num: '06',
                title: 'Locally owned in Winnipeg',
                body: 'We work in these neighbourhoods, know these pipes, and our reputation here is the whole business.'
              }].
              map((item) =>
              <div
                key={item.num}
                className="rounded-xl p-6 border h-full"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'var(--line)'
                }}>
                
                  <span
                  className="text-3xl font-extrabold block mb-3"
                  style={{ color: 'var(--brand-500)' }}>
                  
                    {item.num}
                  </span>
                  <h3
                  className="font-bold text-base mb-2"
                  style={{ color: 'var(--brand-900)' }}>
                  
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {item.body}
                  </p>
                </div>
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