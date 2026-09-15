'use client';

import React from 'react';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateServiceSchema,
  generateWebPageSchema,
  generateFAQPageSchema,
} from '@/lib/localServicesSchema';

interface LocalServicesSchemaMarkupProps {
  pageTitle?: string;
  pageDescription?: string;
}

/**
 * LocalServicesSchemaMarkup Component
 * Renders all Local Services Ads structured data as JSON-LD scripts
 * Place this component in the root layout for site-wide schema coverage
 */
export default function LocalServicesSchemaMarkup({
  pageTitle = 'Pro Drain Cleaning — 24/7 Winnipeg Drain & Sewer',
  pageDescription = 'Drain cleaning, sewer line unclogging & emergency plumbing in Winnipeg. Same-day service, upfront pricing, camera-verified.',
}: LocalServicesSchemaMarkupProps) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const serviceSchemas = generateServiceSchema();
  const webPageSchema = generateWebPageSchema(pageTitle, pageDescription);
  const faqPageSchema = generateFAQPageSchema();

  return (
    <>
      {/* LocalBusiness Schema - Core LSA eligibility */}
      <script
        id="schema-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Organization Schema - Verified business identity */}
      <script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Website Schema - Site-wide structure */}
      <script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* WebPage Schema - Page-level context */}
      <script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* FAQPage Schema - Answer Engine Optimization */}
      <script
        id="schema-faqpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />

      {/* Service Schemas - Explicit service definitions */}
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          id={`schema-service-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
