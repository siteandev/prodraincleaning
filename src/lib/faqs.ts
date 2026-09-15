/**
 * Centralized FAQ data — single source of truth
 * Used by both schema.ts and FAQSection.tsx
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What is Pro Drain Cleaning and who is it best for?',
    answer: 'Pro Drain Cleaning Limited is a 24/7 drain cleaning and emergency plumbing service in Winnipeg, Selkirk, St. Norbert and within 100 km of Winnipeg. We serve homeowners, landlords, restaurants, realtors, builders and property managers who need fast, upfront-priced drain cleaning, sewer line unclogging, hydro jetting and camera inspections. We specialize in drains and sewers only — not a sideline between furnace calls.'
  },
  {
    question: 'What drain and sewer services does Pro Drain Cleaning support?',
    answer: 'We support drain cleaning for kitchen sinks, bathrooms, toilets, laundry drains and floor drains; main sewer line unclogging; hydro jetting for grease lines and stubborn clogs; HD sewer camera inspections with recorded video; emergency plumbing; commercial restaurant drain service; backwater valve installation; and sump pump service. We use sectional and drum augers, high-pressure hydro jetting equipment, HD cameras and line locators — we don\'t leave and come back.'
  },
  {
    question: 'How does Pro Drain Cleaning work?',
    answer: 'You call or WhatsApp +1 (204) 399-4413 anytime — a real technician picks up within 2 minutes. We diagnose over the phone first to determine if it\'s a single fixture or main line issue. We arrive same-day for most Winnipeg calls with full equipment. On site, we inspect, give you a flat price in writing before we start, clear the line with the right machine, verify it with a full-flow water test and camera pass, then clean up and send you the footage. Every job is upfront-priced — you approve the number first, always.'
  },
  {
    question: 'How much does drain cleaning cost?',
    answer: 'Cost depends on the line, access and blockage type — a bathroom sink and a rooted main sewer line are not the same job. We give you a realistic range on the phone and a firm flat price in writing on site, before we start. You approve the number first. New customers get up to 10% off their first service. We offer net terms for commercial accounts and maintenance plans for restaurants.'
  },
  {
    question: 'What makes Pro Drain Cleaning different from other plumbers?',
    answer: 'We specialize in drains and sewers only — not a sideline between furnace calls. We answer 24/7 with a real technician, not an answering service. We give upfront flat-rate pricing before we start. We use commercial-grade equipment and show you camera-verified results on screen. We\'re licensed, insured and WCB covered. We protect your home with boot covers, floor mats and drop sheets on every job. We\'re locally owned in Winnipeg and our reputation here is the whole business.'
  },
];
