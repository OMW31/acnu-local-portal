import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import gsap from 'gsap';

const THEME_DATA = {
  'savane': {
    image: '/IMGs/Hero1.jpg', 
    headlineLine1: 'Ensemble, former',
    headlineLine2: 'les leaders de demain.',
    ctaText: 'Soutenir maintenant'
  },
  'foret': {
    image: '/IMGs/Hero2.jpg', 
    headlineLine1: 'Bâtir un avenir',
    headlineLine2: 'plus durable.',
    ctaText: 'Rejoindre l\'impact'
  },
  'nuit': {
    image: '/IMGs/Hero3.jpg', 
    headlineLine1: 'Propulser la',
    headlineLine2: 'prochaine génération.',
    ctaText: 'Passer à l\'action'
  }
};

export function Hero() {
  const { theme } = useTheme();
  const data = THEME_DATA[theme] || THEME_DATA['nuit']; // Fallback to nuit theme
  
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  // Entrance animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from(imageRef.current, { scale: 1.1, duration: 2, ease: 'power2.out' })
        .from([line1Ref.current, line2Ref.current, subRef.current, ctaRef.current], {
          y: 40,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15
        }, "-=1.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Theme Switch Image Crossfade (Optional, GSAP can animate the img opacity, 
  // but using a key forces re-render/re-anim if preferred. Here we just swap src with css transition)

  return (
    <section ref={sectionRef} className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 lg:px-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src={data.image} 
          alt="Hero Background" 
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        {/* The heavy primary-to-black gradient overlay specific to the preset */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ backgroundImage: 'var(--hero-overlay)' }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl w-full mx-auto flex flex-col items-start text-white">
        
        <h1 className="flex flex-col gap-2 mb-6">
          <span ref={line1Ref} className="font-display font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-white/90">
            {data.headlineLine1}
          </span>
          <span ref={line2Ref} className="font-drama italic text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tight text-white drop-shadow-2xl">
            {data.headlineLine2}
          </span>
        </h1>

        <p ref={subRef} className="max-w-xl font-sans text-lg md:text-xl text-white/80 leading-relaxed mb-10">
          L'Association Camerounaise pour les Nations Unies (ACNU) mobilise, forme et connecte la jeunesse pour promouvoir la coopération internationale et la réalisation des Objectifs de Développement Durable.
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
          <button className="magnetic-btn bg-brand-accent text-brand-primary px-8 py-4 rounded-full font-bold text-base tracking-wide shadow-2xl hover:shadow-brand-accent/20">
            <span>{data.ctaText}</span>
          </button>
          
          <button className="flex items-center gap-2 group px-6 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-md">
            <span className="font-medium text-sm text-white">Découvrir nos actions</span>
            <div className="w-8 h-[1px] bg-brand-accent group-hover:w-12 transition-all duration-300" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
