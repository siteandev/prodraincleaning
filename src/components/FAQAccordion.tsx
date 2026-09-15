'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  id?: string;
}

export default function FAQAccordion({ items, id = 'faq' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="flex flex-col gap-3" id={id}>
      {items.map((item, i) => (
        <div key={i} className="accordion-item">
          <button
            className="accordion-trigger"
            aria-expanded={openIndex === i}
            aria-controls={`faq-content-${id}-${i}`}
            id={`faq-trigger-${id}-${i}`}
            onClick={() => toggle(i)}
          >
            <span>{item.question}</span>
            <svg
              className="accordion-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div
            id={`faq-content-${id}-${i}`}
            role="region"
            aria-labelledby={`faq-trigger-${id}-${i}`}
            className={`accordion-content ${openIndex === i ? 'open' : ''}`}
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const homepageFAQItems: FAQItem[] = [
  {
    question: 'Do you really answer 24/7?',
    answer: (
      <p>Yes. Nights, weekends, statutory holidays and −35°C January mornings. Call or WhatsApp <Link href="tel:+12042943629" className="underline font-600" style={{ color: 'var(--orange-600)', fontWeight: 600 }}>+1 (204) 294-3629</Link> and a technician answers — it isn&apos;t an answering service that takes a message and calls you back in the morning.</p>
    ),
  },
  {
    question: 'How much does drain cleaning cost in Winnipeg?',
    answer: (
      <p>It depends on the line, the access and the blockage — a bathroom sink and a rooted main sewer line are not the same job. We give you a realistic range on the phone and a firm flat price in writing on site, before we start. You approve the number first, always.</p>
    ),
  },
  {
    question: 'How fast can you get to me?',
    answer: (
      <p>Same-day for most Winnipeg calls, with priority dispatch when water is actively coming up. Communities inside the 100 km radius — Selkirk, Steinbach, Stonewall, Niverville, Portage — depend on distance and time of day, and we&apos;ll tell you honestly on the phone.</p>
    ),
  },
  {
    question: 'Snaking or hydro jetting — which one do I need?',
    answer: (
      <p>Snaking is right for a sudden single-fixture blockage: hair, soap, paper, a first root intrusion. Hydro jetting is right when the pipe wall itself is coated — grease lines, restaurant kitchens, repeat clogs, root regrowth. Snaking makes a hole through the blockage; jetting removes it and restores the pipe&apos;s full diameter. We&apos;ll tell you which one your line actually needs.</p>
    ),
  },
  {
    question: 'My toilet, tub and sink are all slow at once. What does that mean?',
    answer: (
      <p>Multiple fixtures backing up together — especially on the lowest floor — almost always means the blockage is in your main sewer line, not the fixtures. Stop running water and call us. Continuing to use the plumbing pushes more waste into a line that has nowhere to send it.</p>
    ),
  },
  {
    question: 'Do you do sewer camera inspections?',
    answer: (
      <p>Yes — HD, self-levelling, recorded. We use them to diagnose repeat backups, verify a cleared line, document damage for insurance, and inspect sewers before people buy older Winnipeg homes. You get the footage.</p>
    ),
  },
  {
    question: 'Do you work outside Winnipeg?',
    answer: (
      <p>Yes. Selkirk, St. Norbert, Headingley, Oak Bluff, Lorette, Île des Chênes, St. Adolphe, Niverville, Steinbach, Stonewall, Oakbank, Dugald, Beausejour, East and West St. Paul, Teulon, Gimli, Portage la Prairie, Morris, Carman — and every community within 100 km of Winnipeg.</p>
    ),
  },
  {
    question: 'Is a sewer backup my problem or the City\'s?',
    answer: (
      <p>In Winnipeg, homeowners own the sewer pipe from their building to the City main — including the section under City property — and are responsible for maintaining and cleaning it. The City generally isn&apos;t responsible for a backup unless it was negligent. If your home is more than 20 years old, has a history of roots, or has large trees near the line, regular cleaning is on you. We can inspect, clear and document it.</p>
    ),
  },
  {
    question: 'Will you make a mess?',
    answer: (
      <p>No. Mats, boot covers, drop sheets and containment go down first, and we wipe down and disinfect the work area before we leave. If you can tell we were there, we didn&apos;t finish the job.</p>
    ),
  },
  {
    question: 'Do you offer maintenance plans for restaurants?',
    answer: (
      <p>Yes — scheduled overnight or pre-open jetting of grease lines, floor drains and 3-compartment sink lines, on a frequency that matches your volume, with written reports for your records. Ask us about a maintenance program.</p>
    ),
  },
];
// FAQItem interface exported above