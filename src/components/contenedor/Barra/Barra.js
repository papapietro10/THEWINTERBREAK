import React from 'react';

export function Barra() {
  return (
    <div style={{ height: '150px', overflow: 'hidden' }}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
        <path d="M-1.97,108.06 C227.71,266.95 253.10,-90.28 500.84,130.76 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#ccc' }}></path>
      </svg>
    </div>
  );
}