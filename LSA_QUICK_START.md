/**
 * Quick Start: Adding LSA Schema to Your Pages
 * 
 * This file provides quick copy-paste examples for common use cases.
 */

// ============================================
// 1. HOMEPAGE - Already Implemented
// ============================================
// The homepage already includes LocalServicesSchemaMarkup in the layout.
// No additional action needed.

// ============================================
// 2. SERVICE AREA PAGES
// ============================================
// Example: src/app/areas/drain-cleaning-winnipeg/page.tsx

import { generateServiceAreaSchema, generateBreadcrumbSchema } from '@/lib/serviceAreaSchema';

export default function WinnipegDrainCleaningPage() {
  const serviceAreaSchema = generateServiceAreaSchema(
    'winnipeg',
    'Winnipeg',
    'https://prodraincleaning.ca/areas/drain-cleaning-winnipeg'
  );
  const breadcrumbSchema = generateBreadcrumbSchema(
    'Winnipeg',
    'https://prodraincleaning.ca/areas/drain-cleaning-winnipeg'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page content */}
    </>
  );
}

// ============================================
// 3. SERVICE PAGES (e.g., Drain Cleaning)
// ============================================
// Example: src/app/drain-cleaning-winnipeg/page.tsx

import { generateServiceSchema } from '@/lib/localServicesSchema';

export default function DrainCleaningPage() {
  const serviceSchemas = generateServiceSchema();

  return (
    <>
      {serviceSchemas.map((schema, index) => (
        <script
          key={`service-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* Page content */}
    </>
  );
}

// ============================================
// 4. USING REVIEW AGGREGATION COMPONENT
// ============================================
// Example: Display review aggregation on any page

import ReviewAggregation from '@/components/ReviewAggregation';

export default function PageWithReviews() {
  return (
    <section>
      <h2>Customer Reviews</h2>
      <ReviewAggregation
        ratingValue={4.9}
        ratingCount={127}
        showBreakdown={true}
      />
    </section>
  );
}

// ============================================
// 5. USING SERVICE AREA MAP COMPONENT
// ============================================
// Example: Display service area coverage

import ServiceAreaMap from '@/components/ServiceAreaMap';

export default function PageWithServiceAreaMap() {
  return (
    <section>
      <h2>Service Area</h2>
      <ServiceAreaMap
        areaName="Winnipeg"
        latitude={49.8951}
        longitude={-97.1384}
        radius={100}
      />
    </section>
  );
}

// ============================================
// 6. USING BUSINESS VERIFICATION BADGE
// ============================================
// Example: Display verification status

import BusinessVerificationBadge from '@/components/BusinessVerificationBadge';

export default function PageWithVerificationBadge() {
  return (
    <section>
      <h2>Why Choose Us</h2>
      <BusinessVerificationBadge
        licenseNumber="[VERIFY — Insert your license number]"
        verificationStatus="pending"
        showDetails={true}
      />
    </section>
  );
}

// ============================================
// 7. CUSTOM SCHEMA GENERATION
// ============================================
// Example: Generate custom schema for specific page

import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from '@/lib/localServicesSchema';

export default function CustomSchemaPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();
  const webPageSchema = generateWebPageSchema(
    'Page Title',
    'Page description for SEO'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Page content */}
    </>
  );
}

// ============================================
// 8. VERIFICATION CHECKLIST
// ============================================
// Check implementation status:

import { lsaVerificationChecklist } from '@/lib/lsaVerificationChecklist';

console.log('LSA Verification Status:', lsaVerificationChecklist);

// Output shows:
// - Implemented schemas ✅
// - Verification status ⚠️
// - Next steps for Google Business Profile

// ============================================
// 9. ENVIRONMENT VARIABLES
// ============================================
// Ensure .env has:

// NEXT_PUBLIC_SITE_URL=https://prodraincleaning.ca
// (or your actual domain)

// ============================================
// 10. DEPLOYMENT CHECKLIST
// ============================================
// Before going live:

// [ ] Update license number in src/lib/localServicesSchema.ts
// [ ] Test schema with Google Rich Results Test
// [ ] Deploy to production
// [ ] Verify phone number in Google Business Profile
// [ ] Add service areas to Google Business Profile
// [ ] Upload license documents
// [ ] Enable Local Services Ads
// [ ] Monitor LSA eligibility status
