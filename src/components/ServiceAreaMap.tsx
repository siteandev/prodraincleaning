'use client';

import React from 'react';

interface ServiceAreaMapProps {
  areaName: string;
  latitude: number;
  longitude: number;
  radius?: number; // in km
}

/**
 * ServiceAreaMap Component
 * Displays service area coverage with embedded map
 * Includes schema markup for GeoShape service area
 */
export default function ServiceAreaMap({
  areaName,
  latitude,
  longitude,
  radius = 100,
}: ServiceAreaMapProps) {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${radius * 1000}!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zPHNwYW4gY2xhc3M9J2dwLWxvY2FsLWJ1c2luZXNzJz5Qcm8gRHJhaW4gQ2xlYW5pbmcgTGltaXRlZDwvc3Bhbj4!5e0!3m2!1sen!2sca!4v1234567890`;

  return (
    <div
      className="service-area-map"
      itemScope
      itemType="https://schema.org/GeoShape"
    >
      {/* Hidden schema properties */}
      <meta itemProp="name" content={`Service Area: ${areaName}`} />
      <meta itemProp="latitude" content={String(latitude)} />
      <meta itemProp="longitude" content={String(longitude)} />

      {/* Map container */}
      <div className="w-full rounded-lg overflow-hidden shadow-md" style={{ height: '400px' }}>
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Pro+Drain+Cleaning+Limited+Winnipeg`}
          title={`Service area map for ${areaName}`}
        />
      </div>

      {/* Service area info */}
      <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--navy-100)' }}>
        <h3 className="font-bold mb-2" style={{ color: 'var(--navy-900)' }}>
          We Serve {areaName}
        </h3>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Pro Drain Cleaning Limited provides drain cleaning and emergency plumbing services throughout {areaName} and surrounding areas within {radius} km. Available 24/7 for your urgent needs.
        </p>
      </div>
    </div>
  );
}
