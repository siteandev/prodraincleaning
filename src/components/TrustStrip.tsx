import React from 'react';

const trustItems = [
  'Answered 24/7 by a real person',
  'Licensed & insured',
  'Upfront flat-rate pricing',
  'Hydro jetting & HD camera',
  'Floors protected, mess cleaned up',
  'Locally owned in Winnipeg',
];

function CheckIcon() {
  return (
    <span className="trust-item-check" aria-hidden="true">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

export default function TrustStrip() {
  return (
    <div
      className="w-full border-y"
      style={{ borderColor: 'var(--line)', backgroundColor: 'var(--navy-100)' }}
      aria-label="Trust signals"
    >
      <div className="container-wide py-3">
        <ul className="flex flex-nowrap overflow-x-auto gap-x-6 gap-y-2 items-center scrollbar-hide">
          {/* Google Reviews badge */}
          <li className="flex items-center gap-2 flex-shrink-0 text-sm font-600" style={{ fontWeight: 600, color: 'var(--navy-900)', fontSize: '0.8125rem' }}>
            <span className="flex items-center gap-1" aria-label="4.9 stars on Google Reviews">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </span>
            <span>4.9 stars on Google</span>
          </li>
          {trustItems?.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 flex-shrink-0 text-sm font-600"
              style={{ fontWeight: 600, color: 'var(--navy-900)', fontSize: '0.8125rem' }}
            >
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}