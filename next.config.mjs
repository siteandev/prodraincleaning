import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,

  productionBrowserSourceMaps: false,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // FIX 3: Inline critical CSS and load the rest asynchronously — eliminates render-blocking CSS
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react'],
  },

  // Target modern evergreen browsers — drops legacy polyfills (FIX 3)
  compiler: {
    // SWC already targets modern browsers; this ensures no legacy transfalse,
  },

  images: {
    unoptimized: true,
    remotePatterns: imageHosts,
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
    qualities: [40, 45, 55, 60, 75, 85, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Redirects and headers moved to public/_redirects and public/_headers
  // for Cloudflare Pages static export compatibility
};
export default nextConfig;
