'use client';
import React from 'react';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import type { FAQItem } from '@/components/FAQAccordion';

const bookingFAQItems: FAQItem[] = [
  {
    question: 'How quickly will someone call me back after I submit this form?',
    answer: (
      <p>
        We aim to call back within minutes during normal hours, and within a few minutes overnight for emergencies. If water is actively rising, don&apos;t fill in a form —{' '}
        <Link href="tel:+12042943629" className="underline font-600" style={{ color: 'var(--orange-600)', fontWeight: 600 }}>
          call +1 (204) 294-3629
        </Link>{' '}
        immediately.
      </p>
    ),
  },
  {
    question: 'Can I book same-day service?',
    answer: (
      <p>
        Yes — for most Winnipeg addresses we can get there the same day. For active flooding or sewage backup we dispatch with priority. Select &quot;Emergency – happening now&quot; or &quot;Today&quot; in the urgency field and we&apos;ll prioritize your call.
      </p>
    ),
  },
  {
    question: 'Do you confirm bookings by email?',
    answer: (
      <p>
        We confirm by phone — a technician will call you at the number you provide to give you an arrival window and answer any questions.
      </p>
    ),
  },
  {
    question: 'What if I need service outside of Winnipeg?',
    answer: (
      <p>
        We serve all communities within 100 km of Winnipeg — Selkirk, Steinbach, Stonewall, Niverville, Portage la Prairie, and many more. Select your city in the form and we&apos;ll confirm availability on the phone.
      </p>
    ),
  },
];

export default function BookOnlineFAQ({ id }: { id?: string }) {
  return <FAQAccordion items={bookingFAQItems} id={id ?? 'booking-faq'} />;
}
