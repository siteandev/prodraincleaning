'use client';
import React from 'react';

/**
 * SwappableHeroImage — blog post hero image with fixed dimensions and eager/lazy loading.
 */
interface SwappableHeroImageProps {
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
