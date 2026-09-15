'use client';
import React from 'react';

/**
 * SwappableHeroImage — single-source upload placeholder.
 *
 * To replace with your own photo:
 *   1. Upload your image to /public/assets/images/
 *   2. Change the `src` prop on this component in the page file.
 *
 * That's the only change needed — width, height, alt, and loading
 * attributes are all controlled here.
 */
interface SwappableHeroImageProps {
  /** Path to the image — swap this one value to replace the photo */
  src: string;
  alt: string;
  /** Set to false for the page's own hero (above the fold) */
  lazy?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export default function SwappableHeroImage({
  src,
  alt,
  lazy = false,
  width = 1600,
  height = 900,
  className = 'w-full h-full object-cover',
}: SwappableHeroImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      className={className}
    />
  );
}
