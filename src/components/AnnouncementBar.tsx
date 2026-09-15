import React from 'react';
import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div
      className="w-full text-white text-xs font-medium py-2.5 px-4 text-center"
      style={{ backgroundColor: 'var(--navy-900)', minHeight: '40px', contain: 'layout' }}
      role="banner"
      aria-label="Service announcement"
    >
      <div className="container-wide flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="var(--orange-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          24/7 Emergency Drain &amp; Sewer Service — Winnipeg, Selkirk, St. Norbert &amp; 100 km around
        </span>
        <span className="hidden sm:inline text-white/40">|</span>
        <Link
          href="tel:+12043994413"
          className="font-bold underline underline-offset-2"
          style={{ color: 'var(--orange-500)' }}
          aria-label="Call Pro Drain Cleaning at +1 204 399 4413"
        >
          Call +1 (204) 399-4413
        </Link>
        <Link
          href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold flex items-center gap-1"
          style={{ color: '#25D366' }}
          aria-label="WhatsApp Pro Drain Cleaning"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </Link>
      </div>
    </div>
  );
}