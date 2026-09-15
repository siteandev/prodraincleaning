'use client';
import dynamic from 'next/dynamic';

// Client-only components that must be loaded with ssr: false
// Wrapped in a client component so ssr:false is valid
export const CouponPopup = dynamic(() => import('@/components/CouponPopup'), { ssr: false });
export const ScrollAnimator = dynamic(() => import('@/components/ScrollAnimator'), { ssr: false });
export const MobileActionBar = dynamic(() => import('@/components/MobileActionBar'), { ssr: false });
