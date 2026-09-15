/**
 * Service Area Page Schema Generator
 * Creates LSA-optimized schema for individual service area pages
 * Includes: LocalBusiness with specific area, service types, and reviews
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincl2489.builtwithrocket.new';

/**
 * Service area definitions with coordinates and coverage zones
 */
export const serviceAreas = {
  winnipeg: {
    name: 'Winnipeg',
    polygon: [
    { latitude: 49.95, longitude: -97.05 },
    { latitude: 49.95, longitude: -97.25 },
    { latitude: 49.75, longitude: -97.25 },
    { latitude: 49.75, longitude: -97.05 },
    { latitude: 49.95, longitude: -97.05 }],

    center: { latitude: 49.8951, longitude: -97.1384 }
  },
  'st-norbert': {
    name: 'St. Norbert',
    polygon: [
    { latitude: 49.82, longitude: -97.15 },
    { latitude: 49.82, longitude: -97.05 },
    { latitude: 49.72, longitude: -97.05 },
    { latitude: 49.72, longitude: -97.15 },
    { latitude: 49.82, longitude: -97.15 }],

    center: { latitude: 49.77, longitude: -97.1 }
  },
  selkirk: {
    name: 'Selkirk',
    polygon: [
    { latitude: 50.15, longitude: -97.05 },
    { latitude: 50.15, longitude: -96.95 },
    { latitude: 50.05, longitude: -96.95 },
    { latitude: 50.05, longitude: -97.05 },
    { latitude: 50.15, longitude: -97.05 }],

    center: { latitude: 50.1, longitude: -97.0 }
  },
  headingley: {
    name: 'Headingley',
    polygon: [
    { latitude: 49.85, longitude: -97.35 },
    { latitude: 49.85, longitude: -97.25 },
    { latitude: 49.75, longitude: -97.25 },
    { latitude: 49.75, longitude: -97.35 },
    { latitude: 49.85, longitude: -97.35 }],

    center: { latitude: 49.8, longitude: -97.3 }
  }
};

/**
 * Generate LocalBusiness schema for a specific service area
 */
export function generateServiceAreaSchema(
areaKey: string,
areaName: string,
pageUrl: string)
{
  const area = serviceAreas[areaKey as keyof typeof serviceAreas];
  if (!area) {
    console.warn(`Service area ${areaKey} not found`);
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${pageUrl}#business`,
    name: `Pro Drain Cleaning Limited - ${areaName}`,
    url: pageUrl,
    telephone: '+12043994413',
    email: 'prodraincleaningcentre@gmail.com',
    priceRange: '$$',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11c8c04d2-1772209925689.png",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11c8c04d2-1772209925689.png",
    description: `Professional drain cleaning and emergency plumbing services in ${areaName} and surrounding areas. 24/7 availability, upfront pricing, camera-verified results.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: areaName,
      addressRegion: 'MB',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: area.center.latitude,
      longitude: area.center.longitude
    },
    // Service area polygon for LSA
    areaServed: {
      '@type': 'GeoShape',
      polygon: area.polygon.
      map((point) => `${point.latitude},${point.longitude}`).
      join(' ')
    },
    // 24/7 hours
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

    // Service types
    knowsAbout: [
    'Drain Cleaning',
    'Sewer Line Unclogging',
    'Emergency Plumbing',
    'Hydro Jetting',
    'Sewer Camera Inspection'],

    additionalType: 'Plumber',
    availableLanguage: ['English'],
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
 * Generate BreadcrumbList schema for service area pages
 */
export function generateBreadcrumbSchema(areaName: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Service Areas',
      item: `${baseUrl}/areas`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: `Drain Cleaning in ${areaName}`,
      item: pageUrl
    }]

  };
}