import React from 'react';

export function Layout({ children }) {
  return (
    <div className="relative min-h-screen font-sans bg-brand-bg text-brand-text overflow-x-hidden selection:bg-brand-accent/30 selection:text-brand-text">
      {/* Global SVG Noise Overlay */}
      <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      
      {/* African Pattern Watermark (Subtle) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay z-0" 
           style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <main className="relative z-10 flex flex-col w-full">
        {children}
      </main>
    </div>
  );
}
