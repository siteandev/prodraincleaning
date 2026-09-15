/**
 * Example: Service Area Page with LSA Schema
 * 
 * This file demonstrates how to implement LSA schema on individual service area pages.
 * Copy this pattern to src/app/areas/[slug]/page.tsx or similar service area pages.
 */

import React from 'react';
import type { Metadata } from 'next';
import { generateServiceAreaSchema, generateBreadcrumbSchema } from '@/lib/serviceAreaSchema';

// Example for Winnipeg service area page
const areaKey = 'winnipeg';
const areaName = 'Winnipeg';
const pageUrl = 'https://prodraincleaning.ca/areas/drain-cleaning-winnipeg';

export const metadata: Metadata = {
  title: `Drain Cleaning in ${areaName} | Pro Drain Cleaning Limited`,
  description: `Professional drain cleaning and emergency plumbing services in ${areaName}. 24/7 availability, upfront pricing, camera-verified results. Call +1 (204) 294-3629.`,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Drain Cleaning in ${areaName} | Pro Drain Cleaning Limited`,
    description: `Professional drain cleaning and emergency plumbing services in ${areaName}. 24/7 availability.`,
    url: pageUrl,
    type: 'website',
  },
};

export default function ServiceAreaPage() {
  const serviceAreaSchema = generateServiceAreaSchema(areaKey, areaName, pageUrl);
  const breadcrumbSchema = generateBreadcrumbSchema(areaName, pageUrl);

  return (
    <>
      {/* Service Area Schema - LSA Eligibility */}
      {serviceAreaSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceAreaSchema),
          }}
        />
      )}

      {/* Breadcrumb Schema - Navigation Structure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main>
        <section>
          <h1>Drain Cleaning in {areaName}</h1>
          <p>
            Pro Drain Cleaning Limited provides professional drain cleaning and emergency plumbing
            services throughout {areaName} and surrounding areas. Available 24/7 for your urgent
            needs.
          </p>

          {/* Service Area Coverage */}
          <div>
            <h2>Service Area Coverage</h2>
            <p>
              We serve {areaName} and all communities within 100 km of Winnipeg. Our service area
              includes:
            </p>
            <ul>
              <li>Residential drain cleaning</li>
              <li>Commercial drain service</li>
              <li>Emergency plumbing</li>
              <li>Sewer line unclogging</li>
              <li>Hydro jetting</li>
              <li>Sewer camera inspection</li>
            </ul>
          </div>

          {/* Verified Hours */}
          <div>
            <h2>Hours of Operation</h2>
            <p>Available 24/7, including nights, weekends, and holidays.</p>
          </div>

          {/* Contact Information */}
          <div>
            <h2>Contact Us</h2>
            <p>
              Call us anytime at <strong>+1 (204) 294-3629</strong> for immediate assistance.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

/**
 * Implementation Notes:
 * 
 * 1. Replace 'winnipeg' with actual area key from serviceAreas object
 * 2. Update areaName to match the service area
 * 3. Update pageUrl to match the actual page URL
 * 4. Add this schema to every service area page
 * 5. Customize content for each area while maintaining schema structure
 * 
 * Service Area Keys Available:
 * - winnipeg
 * - st-norbert
 * - selkirk
 * - headingley
 * 
 * To add new service areas:
 * 1. Add entry to serviceAreas object in src/lib/serviceAreaSchema.ts
 * 2. Define polygon coordinates for the area
 * 3. Create page using this template
 * 4. Update service area links in Footer component
 */
