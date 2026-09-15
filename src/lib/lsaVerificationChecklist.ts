/**
 * Local Services Ads Verification Checklist
 * Use this to verify LSA eligibility requirements are met
 */

export const lsaVerificationChecklist = {
  structuredData: {
    localBusiness: {
      required: true,
      description: 'LocalBusiness schema with verified business details',
      status: '✅ Implemented',
      location: 'src/lib/localServicesSchema.ts',
    },
    serviceArea: {
      required: true,
      description: 'GeoShape polygon defining service coverage area',
      status: '✅ Implemented',
      location: 'src/lib/localServicesSchema.ts - serviceAreaPolygon',
    },
    verifiedHours: {
      required: true,
      description: 'OpeningHoursSpecification with verified business hours',
      status: '✅ Implemented (24/7)',
      location: 'src/lib/localServicesSchema.ts - openingHoursSpecification',
    },
    phone: {
      required: true,
      description: 'Verified phone number in schema and on page',
      status: '✅ Implemented',
      phone: '+12042943629',
      location: 'src/lib/localServicesSchema.ts - telephone',
    },
    license: {
      required: true,
      description: 'Business license details in schema',
      status: '⚠️ Needs Verification',
      note: 'Update license identifier in src/lib/localServicesSchema.ts line 67',
      location: 'src/lib/localServicesSchema.ts - license',
    },
    aggregateRating: {
      required: true,
      description: 'Customer review aggregation with rating count',
      status: '✅ Implemented',
      rating: '4.9/5',
      reviewCount: '127',
      location: 'src/lib/localServicesSchema.ts - aggregateRating',
    },
  },
  onPage: {
    businessName: {
      required: true,
      status: '✅ Present',
      location: 'src/components/Footer.tsx, src/app/page.tsx',
    },
    phone: {
      required: true,
      status: '✅ Present',
      location: 'src/components/Footer.tsx, src/app/page.tsx',
    },
    address: {
      required: true,
      status: '✅ Present',
      location: 'src/components/Footer.tsx',
    },
    hours: {
      required: true,
      status: '✅ Present',
      location: 'src/components/Footer.tsx',
    },
    reviews: {
      required: true,
      status: '✅ Present',
      location: 'src/app/page.tsx - Review strip section',
    },
  },
  googleVerification: {
    googleBusinessProfile: {
      required: true,
      status: '⚠️ External - Verify in Google Business Profile',
      action: 'Ensure business info matches schema data',
    },
    serviceAreaVerification: {
      required: true,
      status: '⚠️ External - Verify in Google Business Profile',
      action: 'Add service areas matching GeoShape polygon',
    },
    licenseVerification: {
      required: true,
      status: '⚠️ External - Verify in Google Business Profile',
      action: 'Upload license documents',
    },
    phoneVerification: {
      required: true,
      status: '⚠️ External - Verify in Google Business Profile',
      action: 'Verify phone number via Google call',
    },
  },
  technicalSEO: {
    robots: {
      status: '✅ Implemented',
      note: 'Googlebot-Local allowed in robots.ts',
      location: 'src/app/robots.ts',
    },
    sitemap: {
      status: '✅ Present',
      location: 'src/app/sitemap.ts',
    },
    mobileOptimized: {
      status: '✅ Responsive design',
      note: 'Mobile-first approach with Tailwind CSS',
    },
  },
};

/**
 * Next Steps for LSA Eligibility
 * 1. Update license number in src/lib/localServicesSchema.ts (line 67)
 * 2. Verify phone number in Google Business Profile
 * 3. Add service areas to Google Business Profile matching GeoShape polygon
 * 4. Upload business license documents to Google Business Profile
 * 5. Wait for Google verification (typically 1-2 weeks)
 * 6. Monitor Local Services Ads eligibility in Google Business Profile
 */
