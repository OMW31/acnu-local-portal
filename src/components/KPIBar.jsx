import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function KPIBar({ stats }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const counters = containerRef.current.querySelectorAll('.kpi-number');
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        gsap.to(counter, {
          innerText: target,
          duration: 2.5,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%'
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-8 rounded-[3rem] bg-brand-dark text-white shadow-2xl overflow-hidden relative">
      {/* Background Ndop accent */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="ndop-pattern w-full h-full" />
      </div>

      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center text-center relative z-10">
          <div className="flex items-baseline gap-1 mb-2">
            <span 
              className="kpi-number text-5xl md:text-6xl font-display font-bold text-brand-accent"
              data-target={stat.value}
            >
              0
            </span>
            <span className="text-2xl font-bold text-brand-accent">{stat.suffix}</span>
          </div>
          <span className="text-sm font-mono uppercase tracking-widest text-brand-text-on-dark-muted">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
