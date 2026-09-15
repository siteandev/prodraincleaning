import React from 'react';

const areas = [
  'Winnipeg','St. Norbert','Selkirk','Headingley','Oak Bluff','Lorette',
  'Île des Chênes','St. Adolphe','Niverville','Steinbach','Stonewall',
  'Oakbank','Dugald','Beausejour','East & West St. Paul','Teulon',
  'Gimli','Portage la Prairie','Morris','Carman',
];

export default function ServiceAreaStrip() {
  return (
    <div className="w-full py-4 overflow-hidden" style={{ backgroundColor: 'var(--navy-100)' }}>
      <div className="container-wide">
        <p className="text-xs font-700 mb-2 uppercase tracking-wider" style={{ color: 'var(--navy-700)', fontWeight: 700 }}>
          Serving:
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          {areas?.map((area, i) => (
            <span
              key={i}
              className="text-sm"
              style={{ color: 'var(--muted)' }}
            >
              {area}{i < areas?.length - 1 ? ' ·' : ''}
            </span>
          ))}
          <span className="text-sm" style={{ color: 'var(--muted)' }}>
            — and every community within 100 km of Winnipeg.
          </span>
        </div>
      </div>
    </div>
  );
}