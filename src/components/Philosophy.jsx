import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const { theme } = useTheme();
  
  // Choose texture based on theme
  const getTextures = () => {
    switch (theme) {
      case 'nuit': return 'https://images.unsplash.com/photo-1541872703874-fa7252ce2fb8?q=80&w=2560&auto=format&fit=crop';
      case 'foret': return 'https://images.unsplash.com/photo-1501862700950-18382ba1f1cc?q=80&w=2560&auto=format&fit=crop';
      case 'savane': return 'https://images.unsplash.com/photo-1557939403-1760a0e475df?q=80&w=2560&auto=format&fit=crop';
      default: return 'https://images.unsplash.com/photo-1557939403-1760a0e475df?q=80&w=2560&auto=format&fit=crop';
    }
  };

  const sectionRef = useRef(null);
  const parallaxBgRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax Background
      gsap.to(parallaxBgRef.current, {
        yPercent: 30, // Move bg down slightly
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Text Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text2Ref.current,
          start: 'top 80%',
        }
      });

      tl.from(text1Ref.current, { y: 20, opacity: 0, duration: 1, ease: 'power3.out' })
        .from(text2Ref.current, { y: 40, opacity: 0, duration: 1.5, ease: 'power3.out' }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-32 px-6 md:px-16 overflow-hidden bg-brand-primary">
      
      {/* Background Parallax Texture */}
      <div 
        ref={parallaxBgRef}
        className="absolute top-[-20%] left-0 w-full h-[140%] z-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url(${getTextures()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-start text-white">
        <p ref={text1Ref} className="font-sans font-medium text-lg md:text-2xl text-white/50 mb-8 max-w-2xl leading-relaxed">
          La plupart des organisations se concentrent sur : <br className="hidden md:block"/> des débats théoriques sans application locale.
        </p>
        
        <h2 ref={text2Ref} className="font-display font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white/90 max-w-4xl">
          Nous nous concentrons sur : <br />
          <span className="font-drama italic text-brand-accent drop-shadow-lg pr-4">l'action concrète</span> et le terrain.
        </h2>
      </div>
    </section>
  );
}
