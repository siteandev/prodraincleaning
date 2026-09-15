'use client';

import React from 'react';

interface ReviewAggregationProps {
  ratingValue?: number;
  ratingCount?: number;
  bestRating?: number;
  worstRating?: number;
  showBreakdown?: boolean;
}

/**
 * ReviewAggregation Component
 * Displays customer review aggregation data for LSA credibility
 * Renders rating stars, count, and optional breakdown
 */
export default function ReviewAggregation({
  ratingValue = 4.9,
  ratingCount = 127,
  bestRating = 5,
  worstRating = 1,
  showBreakdown = false,
}: ReviewAggregationProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <span key={`full-${i}`} className="text-yellow-400" aria-hidden="true">
              ★
            </span>
          ))}
        {hasHalfStar && (
          <span className="text-yellow-400" aria-hidden="true">
            ⭐
          </span>
        )}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-300" aria-hidden="true">
              ☆
            </span>
          ))}
      </div>
    );
  };

  return (
    <div
      className="review-aggregation"
    >
      {/* Visual display */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          {renderStars(ratingValue)}
          <div className="flex flex-col">
            <span
              className="font-bold text-lg"
              style={{ color: 'var(--navy-900)' }}
            >
              {ratingValue}
            </span>
            <span
              className="text-sm"
              style={{ color: 'var(--muted)' }}
            >
              {ratingCount} reviews
            </span>
          </div>
        </div>

        {showBreakdown && (
          <div className="mt-4 space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-2">
                <span className="text-sm font-medium w-8">{stars}★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div
                    className="h-full bg-yellow-400 rounded"
                    style={{
                      width: `${(stars === 5 ? 95 : stars === 4 ? 4 : stars === 3 ? 1 : 0) * 100 / 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
