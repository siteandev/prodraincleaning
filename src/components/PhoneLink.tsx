'use client';
import React from 'react';
import Link from 'next/link';

interface PhoneLinkProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  ariaLabel?: string;
  [key: string]: unknown;
}

export default function PhoneLink({ className, style, children, ariaLabel, ...rest }: PhoneLinkProps) {
  const handleClick = () => {
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion('tel:+12043994413');
    }
  };

  return (
    <Link
      href="tel:+12043994413"
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Link>
  );
}
