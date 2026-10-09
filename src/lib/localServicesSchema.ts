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
  // ~100 km service radius around Winnipeg (clockwise from north)
  { latitude: 50.80, longitude: -97.15 },  // Gimli area (N)
  { latitude: 50.60, longitude: -96.40 },  // Beausejour area (NE)
  { latitude: 49.85, longitude: -96.20 },  // Steinbach area (E)
  { latitude: 49.30, longitude: -96.60 },  // Morris area (SE)
  { latitude: 49.10, longitude: -97.15 },  // south limit
  { latitude: 49.30, longitude: -97.90 },  // Carman area (SW)
  { latitude: 49.85, longitude: -98.20 },  // Portage area (W)
  { latitude: 50.30, longitude: -97.70 },  // Stonewall/Teulon (NW)
  { latitude: 50.80, longitude: -97.15 },  // close polygon
];

/**
 * Generate LocalBusiness schema with LSA-specific fields
 * Includes: service area, verified hours, license, phone, aggregate rating
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${baseUrl}/#business`,
    name: 'Pro Drain Cleaning',
    url: baseUrl,
    telephone: '+12043994413',
    email: 'prodraincleaningcentre@gmail.com',
    priceRange: '$$',
    image: "https://prodraincleaning.ca/assets/images/remote/rocket_gen_img_14d17e7fd-1769695449201.jpg",
    logo: "https://prodraincleaning.ca/assets/images/remote/rocket_gen_img_117a0c03b-1783186949327.jpg",
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

    availableLanguage: ['English'],
    hasMap: 'https://www.google.com/maps/place/Pro+Drain+Cleaning',
    sameAs: [
      'https://www.google.com/maps/place/Pro+Drain+Cleaning',
      'https://www.facebook.com/prodraincleaning',
      'https://www.instagram.com/prodraincleaning',
    ],
    // OfferCatalog: machine-readable pricing policy for AI agent decision-making
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Drain Cleaning Services — Winnipeg',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Drain Cleaning',
            description: 'Kitchen sink, bathroom, toilet, laundry and floor drain cleaning for homeowners. Same-day service in Winnipeg.'
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'CAD',
            description: 'Flat-rate price quoted in writing on site before work begins. Phone estimate provided on booking.'
          },
          eligibleRegion: { '@type': 'Place', name: 'Winnipeg, MB, Canada' }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Main Sewer Line Unclogging',
            description: 'Full main sewer line clearing with sectional machine or hydro jetting. Camera verification included.'
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'CAD',
            description: 'Flat-rate quote provided on site before work begins. Camera inspection included on main line jobs.'
          },
          eligibleRegion: { '@type': 'Place', name: 'Winnipeg and surrounding 100 km radius' }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Plumbing',
            description: '24/7 emergency drain and sewer response. Real technician answers every call.'
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'CAD',
            description: 'Emergency rates disclosed on the phone. Flat-rate quote in writing before any work starts.'
          },
          eligibleRegion: { '@type': 'Place', name: 'Winnipeg, MB, Canada' }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Restaurant Drain Service',
            description: 'Grease trap cleaning, kitchen floor drain and commercial sewer line service for restaurants and food service businesses.'
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'CAD',
            description: 'Commercial accounts eligible for net terms and maintenance plans. Quote provided before work begins.'
          },
          eligibleRegion: { '@type': 'Place', name: 'Winnipeg, MB, Canada' }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HD Sewer Camera Inspection',
            description: 'High-definition camera inspection of drain and sewer lines with recorded video report sent to customer.'
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'CAD',
            description: 'Flat-rate camera inspection fee. Included at no extra cost on main line clearing jobs.'
          },
          eligibleRegion: { '@type': 'Place', name: 'Winnipeg and surrounding 100 km radius' }
        }
      ]
    },
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
      '@type': 'Plumber',
      name: 'Pro Drain Cleaning',
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
    name: 'Pro Drain Cleaning',
    legalName: 'Pro Drain Cleaning Limited',
    url: baseUrl,
    logo: 'https://prodraincleaning.ca/assets/images/remote/rocket_gen_img_117a0c03b-1783186949327.jpg',
    description: '24/7 drain cleaning and emergency plumbing in Winnipeg. Locally owned and operated by Manpreet Chahal. Licensed, insured and WCB covered.',
    telephone: '+12043994413',
    email: 'prodraincleaningcentre@gmail.com',
    founder: {
      '@type': 'Person',
      name: 'Manpreet Chahal',
      jobTitle: 'Owner & Lead Technician',
      worksFor: { '@id': `${baseUrl}/#organization` }
    },
    knowsAbout: [
      'Drain Cleaning',
      'Sewer Line Unclogging',
      'Hydro Jetting',
      'HD Sewer Camera Inspection',
      'Emergency Plumbing',
      'Commercial Restaurant Drain Service',
      'Backwater Valve Installation',
      'Sump Pump Service',
      'Tree Root Removal from Sewer Lines',
      'Winnipeg Drain Services'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Winnipeg',
      addressRegion: 'MB',
      addressCountry: 'CA'
    },
    hasMap: 'https://www.google.com/maps/place/Pro+Drain+Cleaning',
    sameAs: [
      'https://www.google.com/maps/place/Pro+Drain+Cleaning',
      'https://www.facebook.com/prodraincleaning',
      'https://www.instagram.com/prodraincleaning',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+12043994413',
      availableLanguage: ['English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
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
    name: 'Pro Drain Cleaning',
    url: baseUrl,
    description: '24/7 drain cleaning, sewer line unclogging & emergency plumbing in Winnipeg',
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