import { Outlet } from 'react-router-dom';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

export function PortalLayout() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text font-sans overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[var(--noise-opacity)] pointer-events-none z-0" />
      
      {/* Premium Lion Filigrane SVG for Portal */}
      <div className="fixed right-[-10%] top-[-10%] pointer-events-none z-0 opacity-[0.02] sm:opacity-[0.03] select-none scale-150 rotate-12">
        <svg viewBox="0 0 400 400" className="w-[1200px] h-[1200px] fill-none stroke-brand-primary" xmlns="http://www.w3.org/2000/svg">
          <path d="M200,100 C180,100 160,110 150,130 C140,150 145,175 160,190 C165,195 175,200 185,202 C180,210 175,225 180,240 C185,255 215,255 220,240 C225,225 220,210 215,202 C225,200 235,195 240,190 C255,175 260,150 250,130 C240,110 220,100 200,100 Z M200,115 C215,115 225,125 230,135 C235,145 232,165 225,175 C218,185 208,188 200,188 C192,188 182,185 175,175 C168,165 165,145 170,135 C175,125 185,115 200,115 Z" strokeWidth="0.5"/>
          <path d="M180,240 Q150,250 130,280 Q110,310 120,340 L140,345 L150,320 L170,330 L165,350 L185,355 L200,320 L215,355 L235,350 L230,330 L250,320 L260,345 L280,340 Q290,310 270,280 Q250,250 220,240" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Minimal background pattern for Portal */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
           style={{ backgroundImage: 'radial-gradient(var(--color-brand-primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <main className="relative z-10 h-screen flex">
        <Outlet />
      </main>

      <div className="hidden lg:block">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
