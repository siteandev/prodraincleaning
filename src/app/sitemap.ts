import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    // Core pages (8)
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/book-online`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas-we-serve`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

    // Service hub pages (5)
    { url: `${base}/drain-cleaning-winnipeg`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/main-sewer-line-unclogging-winnipeg`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/restaurant-commercial-drain-cleaning-winnipeg`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/plumbing-services-winnipeg`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/emergency-drain-plumbing-winnipeg`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // Location pages (10)
    { url: `${base}/areas/drain-cleaning-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas/drain-cleaning-st-norbert`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas/drain-cleaning-selkirk`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas/drain-cleaning-headingley`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas/drain-cleaning-oak-bluff`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas/drain-cleaning-lorette`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas/drain-cleaning-niverville`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas/drain-cleaning-steinbach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas/drain-cleaning-stonewall`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas/drain-cleaning-east-west-st-paul`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Glossary (1)
    { url: `${base}/glossary`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Compare pages (5)
    { url: `${base}/compare`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/compare/pro-drain-cleaning-vs-diy`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/compare/hydro-jetting-vs-rented-drain-machine`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/compare/camera-inspection-vs-guessing`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/compare/specialist-vs-general-plumber`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/compare/local-drain-cleaner-vs-national-chain`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Blog posts (31)
    { url: `${base}/blog/drain-cleaning-winnipeg-cost-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/signs-main-sewer-line-clogged`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/tree-roots-sewer-line-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/hydro-jetting-vs-snaking`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/kitchen-sink-keeps-clogging`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/sewer-backup-what-to-do`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/prevent-frozen-pipes-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/backwater-valve-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/sewer-camera-inspection-before-buying-house`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/basement-floor-drain-backing-up`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/restaurant-grease-trap-line-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/drain-smells-like-sewage`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/toilet-wont-flush-troubleshooting`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/sump-pump-maintenance-checklist`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/chemical-drain-cleaners-damage-pipes`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/emergency-plumber-winnipeg-when-to-call`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/clay-pipe-sewer-lines-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/bathtub-shower-draining-slowly`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/laundry-drain-overflowing`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/how-often-clean-drains`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/spring-thaw-basement-flooding-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/what-not-to-flush`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/drain-cleaning-selkirk`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/drain-cleaning-st-norbert`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/drain-cleaning-steinbach-niverville`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/septic-vs-city-sewer-manitoba`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/landlord-drain-maintenance-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/hard-water-scale-drains-manitoba`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/sewer-line-repair-vs-replacement`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/drain-cleaning-mistakes-homeowners-make`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/clogged-drain-cleaning-near-me-cost-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/24-hour-emergency-drain-cleaning-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/plumber-near-me-winnipeg-complete-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/drain-cleaning-near-me-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/clogged-drain-winnipeg-what-to-do`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/sewer-line-cleaning-near-me-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/sewer-line-cleaning-winnipeg-signs-you-need-it`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/basement-floor-drain-clogged-whats-wrong`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/backflow-valve-inspection-repair-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/plumbing-drain-cleaning-services-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/drain-cleaning-company-near-me-response-time-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/water-heater-repair-winnipeg`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // De-duplication safety net: remove any repeated <loc> values
  const seen = new Set<string>();
  const deduplicated = entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });

  return deduplicated;
}