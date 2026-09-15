'use client';

import React from 'react';

interface BusinessVerificationBadgeProps {
  licenseNumber?: string;
  verificationStatus?: 'verified' | 'pending' | 'unverified';
  showDetails?: boolean;
}

/**
 * BusinessVerificationBadge Component
 * Displays business verification status for LSA credibility
 * Shows license, insurance, and verification details
 */
export default function BusinessVerificationBadge({
  licenseNumber = 'MB-PLB-12345',
  verificationStatus = 'pending',
  showDetails = true,
}: BusinessVerificationBadgeProps) {
  const statusConfig = {
    verified: {
      icon: '✓',
      label: 'Verified',
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
    },
    pending: {
      icon: '⏳',
      label: 'Verification Pending',
      color: '#f59e0b',
      bgColor: 'rgba(245, 158, 11, 0.1)',
    },
    unverified: {
      icon: '⚠',
      label: 'Unverified',
      color: '#ef4444',
      bgColor: 'rgba(239, 68, 68, 0.1)',
    },
  };

  const config = statusConfig[verificationStatus];

  return (
    <div
      className="business-verification-badge p-4 rounded-lg border"
      style={{
        backgroundColor: config.bgColor,
        borderColor: config.color,
        borderWidth: '1px',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-2xl font-bold"
          style={{ color: config.color }}
          aria-hidden="true"
        >
          {config.icon}
        </span>
        <div>
          <h3
            className="font-bold text-sm"
            style={{ color: config.color }}
          >
            {config.label}
          </h3>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Pro Drain Cleaning Limited
          </p>
        </div>
      </div>

      {showDetails && (
        <div className="space-y-2 text-xs" style={{ color: 'var(--muted)' }}>
          <div className="flex items-center gap-2">
            <span>📋</span>
            <span>License: {licenseNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🛡️</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>Verified Phone: +1 (204) 294-3629</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🕐</span>
            <span>24/7 Availability Verified</span>
          </div>
        </div>
      )}
    </div>
  );
}
