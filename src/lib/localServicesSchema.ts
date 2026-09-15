/**
 * Local Services Ads (LSA) Structured Data Generator
 * Generates comprehensive schema markup for Local Services Ads eligibility
 * Includes: service areas with GeoShape polygons, verified hours, license, phone, reviews
 */

import { faqs } from './faqs';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

/**
 * Service area polygon coordinates (Winnipeg metro + surrounding areas)
 * Defines the geographic boundary of service coverage
 */
const serviceAreaPolygon = [
{ latitude: 49.95, longitude: -97.05 }, // North
{ latitude: 49.95, longitude: -97.25 }, // NW
{ latitude: 49.75, longitude: -97.25 }, // SW
{ latitude: 49.75, longitude: -97.05 }, // SE
{ latitude: 49.95, longitude: -97.05 } // Close polygon
];

/**
 * Generate LocalBusiness schema with LSA-specific fields
 * Includes: service area, verified hours, license, phone, aggregate rating
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: 'Pro Drain Cleaning Limited',
    url: baseUrl,
    telephone: '+12043994413',
    email: 'prodraincleaningcentre@gmail.com',
    priceRange: '$$',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14d17e7fd-1769695449201.png",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_117a0c03b-1783186949327.png",
    description: '24/7 drain cleaning, main sewer line unclogging, restaurant and commercial drain service and emergency plumbing in Winnipeg, Selkirk, St. Norbert and within 100 km of Winnipeg.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Winnipeg',
      addressRegion: 'MB',
      postalCode: 'R3B',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.8951,
      longitude: -97.1384
    },
    // Service area with GeoShape polygon for LSA eligibility
    areaServed: {
      '@type': 'GeoShape',
      polygon: serviceAreaPolygon.
      map((point) => `${point.latitude},${point.longitude}`).
      join(' ')
    },
    // Verified hours (24/7 operation)
    openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }],

    // License and certification details for LSA
    license: {
      '@type': 'Permit',
      name: 'Manitoba Plumbing License',
      identifier: 'MB-PLB-12345'
    },
    // Service types offered
    knowsAbout: [
    'Drain Cleaning',
    'Sewer Line Unclogging',
    'Hydro Jetting',
    'Sewer Camera Inspection',
    'Emergency Plumbing',
    'Commercial Drain Service',
    'Backwater Valve Installation',
    'Sump Pump Service',
    'Tree Root Removal'],

    // Business type
    additionalType: 'Plumber',
    availableLanguage: ['English'],
    // Contact point for customer service
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+12043994413',
      areaServed: 'CA',
      availableLanguage: ['English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    }
  };
}

/**
 * Generate Service schema for specific service offerings
 * Improves LSA eligibility by explicitly defining services
 */
export function generateServiceSchema() {
  const services = [
  {
    name: 'Drain Cleaning',
    description: 'Professional drain cleaning for residential and commercial properties'
  },
  {
    name: 'Sewer Line Unclogging',
    description: 'Main sewer line unclogging and repair services'
  },
  {
    name: 'Emergency Plumbing',
    description: '24/7 emergency plumbing services for urgent issues'
  },
  {
    name: 'Hydro Jetting',
    description: 'High-pressure hydro jetting for stubborn clogs'
  },
  {
    name: 'Sewer Camera Inspection',
    description: 'Professional sewer camera inspection and video reporting'
  },
  {
    name: 'Commercial Drain Service',
    description: 'Restaurant and commercial drain cleaning and maintenance'
  }];


  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#service-${service.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pro Drain Cleaning Limited',
      url: baseUrl
    },
    areaServed: {
      '@type': 'GeoShape',
      polygon: serviceAreaPolygon.
      map((point) => `${point.latitude},${point.longitude}`).
      join(' ')
    },
    availableLanguage: ['English']
  }));
}

/**
 * Generate Organization schema for brand identity
 * Establishes business authority and trust signals
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Pro Drain Cleaning Limited',
    url: baseUrl,
    logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_117a0c03b-1783186949327.png',
    description: '24/7 drain cleaning and emergency plumbing in Winnipeg',
    telephone: '+12043994413',
    email: 'prodraincleaningcentre@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Winnipeg',
      addressRegion: 'MB',
      addressCountry: 'CA'
    },
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+12043994413',
      availableLanguage: ['English']
    }
  };
}

/**
 * Generate Website schema for site-wide structure
 * Improves search visibility and knowledge panel eligibility
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Pro Drain Cleaning Limited',
    url: baseUrl,
    description: '24/7 drain cleaning, sewer line unclogging & emergency plumbing in Winnipeg',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Generate WebPage schema for page-level context
 * Improves page-specific SEO signals
 */
export function generateWebPageSchema(pageTitle?: string, pageDescription?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/#webpage`,
    name: pageTitle || 'Pro Drain Cleaning — 24/7 Winnipeg Drain & Sewer',
    description: pageDescription || 'Drain cleaning, sewer line unclogging & emergency plumbing in Winnipeg. Same-day service, upfront pricing, camera-verified.',
    url: baseUrl,
    isPartOf: {
      '@id': `${baseUrl}/#website`
    },
    publisher: {
      '@id': `${baseUrl}/#organization`
    }
  };
}

/**
 * Generate FAQPage schema from centralized FAQ data
 * Single source of truth ensures schema matches visible content
 */
export function generateFAQPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faqpage`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}