/**
 * Service Area Page Schema Generator
 * Creates LSA-optimized schema for individual service area pages
 * Includes: reference to the main #business entity with the area served, and breadcrumbs
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

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
 * Generate the service-area reference for an area page.
 *
 * This is a service-area business with one real entity (#business). Area pages
 * must NOT declare a separate "Pro Drain Cleaning - <Town>" LocalBusiness with
 * its own address/geo — that reads as a fake branch location. Instead we point
 * at the main entity by @id and add the town to areaServed.
 */
export function generateServiceAreaSchema(
areaKey: string,
areaName: string,
_pageUrl: string)
{
  const area = serviceAreas[areaKey as keyof typeof serviceAreas];
  if (!area) {
    console.warn(`Service area ${areaKey} not found`);
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${baseUrl}/#business`,
    name: 'Pro Drain Cleaning',
    telephone: '+12043994413',
    areaServed: {
      '@type': 'City',
      name: area.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Manitoba' }
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