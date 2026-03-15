import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function PageHero({ title, description, subtitle, backgroundImage }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });
      
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[50vh] flex items-end pb-16 pt-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage || '/hero.png'} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl">
          {subtitle && (
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent font-mono text-xs uppercase tracking-widest">
              {subtitle}
            </span>
          )}
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-display font-bold text-brand-text mb-6 leading-[1.1]">
            {title}
          </h1>
          <p ref={contentRef} className="text-xl text-brand-text-muted font-body max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Ndop pattern accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none translate-x-1/2 translate-y-1/2">
        <div className="ndop-pattern w-full h-full rounded-full" />
      </div>
    </section>
  );
}
