import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Radio, Heart } from 'lucide-react';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

const PROTOCOL_STEPS = [
  {
    id: '01',
    title: 'Maison des Jeunes',
    description: 'Créer, dans chaque région, un lieu permanent de rassemblement, d’apprentissage et d’innovation pour les jeunes.',
    icon: MapPin,
    animationType: 'circles'
  },
  {
    id: '02',
    title: 'Acnumedia',
    description: 'Donner aux jeunes les moyens de produire et diffuser une information citoyenne, accessible et engagée.',
    icon: Radio,
    animationType: 'laser'
  },
  {
    id: '03',
    title: 'Volontariat',
    description: 'Mobiliser des volontaires nationaux et internationaux pour des actions éducatives, sanitaires et environnementales.',
    icon: Heart,
    animationType: 'waveform'
  }
];

export function Protocol() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Create stacking effect for cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        const isLastCard = i === cardsRef.current.length - 1;
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: isLastCard ? "+=100%" : "top top", 
          endTrigger: isLastCard ? null : cardsRef.current[i + 1],
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        // Animation for the card getting covered
        if (!isLastCard) {
          gsap.to(card, {
            scale: 0.95, // Subtler scale
            opacity: 0.2,
            filter: 'blur(8px)',
            ease: "none",
            scrollTrigger: {
              trigger: cardsRef.current[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
              anticipatePin: 1,
            }
          });
        }
      });
      
      // Individual canvas/SVG animations
      // 01: Circles
      gsap.to('.anim-circle', {
        rotation: 360,
        origin: '50% 50%',
        ease: 'none',
        repeat: -1,
        duration: 20,
        stagger: {
          each: 2,
          from: 'center'
        }
      });
      
      // 02: Laser
      gsap.fromTo('.anim-laser', 
        { top: '0%' }, 
        { top: '100%', ease: 'linear', repeat: -1, duration: 3, yoyo: true }
      );
      
      // 03: Waveform
      gsap.to('.anim-wave', {
        strokeDashoffset: 0,
        repeat: -1,
        ease: 'none',
        duration: 2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projets" className="relative w-full bg-brand-bg pb-32">
      {PROTOCOL_STEPS.map((step, index) => {
        const Icon = step.icon;
        
        return (
          <div 
            key={step.id} 
            ref={el => cardsRef.current[index] = el}
            className={clsx(
              "w-full h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 border-t border-brand-text/5 overflow-hidden",
              index % 2 === 0 ? "bg-brand-bg text-brand-text" : "bg-brand-primary text-white"
            )}
            style={{ zIndex: index + 1 }}
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
              
              {/* Content Side */}
              <div className="flex-1 w-full order-2 md:order-1 relative z-10">
                <span className="font-mono text-sm md:text-base font-bold tracking-widest opacity-50 mb-6 block">
                  PROJET // {step.id}
                </span>
                
                <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8">
                  {step.title}
                </h2>
                
                <p className={clsx(
                  "font-sans text-lg md:text-xl lg:text-2xl pt-8 border-t max-w-xl leading-relaxed font-medium",
                  index % 2 === 0 ? "border-brand-text/10 text-brand-text/70" : "border-white/10 text-white/80"
                )}>
                  {step.description}
                </p>

                <button className={clsx(
                  "mt-12 group flex items-center gap-4 text-sm font-bold uppercase tracking-widest",
                  index % 2 === 0 ? "text-brand-accent hover:text-brand-text transition-colors" : "text-brand-accent hover:text-white transition-colors"
                )}>
                  <span>Explorer</span>
                  <div className={clsx(
                    "w-12 h-[1px] group-hover:w-16 transition-all duration-300",
                    index % 2 === 0 ? "bg-brand-accent group-hover:bg-brand-text" : "bg-brand-accent group-hover:bg-white"
                  )} />
                </button>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full order-1 md:order-2 flex justify-center items-center h-[300px] md:h-[500px]">
                {/* Conditional Graphic based on type */}
                
                {step.animationType === 'circles' && (
                  <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center opacity-80">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-brand-secondary/30">
                      <circle className="anim-circle" cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
                      <circle className="anim-circle" cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
                      <circle className="anim-circle" cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="16 16" />
                      <circle className="anim-circle" cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                    </svg>
                    <Icon className="absolute w-12 h-12 text-brand-primary" />
                  </div>
                )}

                {step.animationType === 'laser' && (
                  <div className="relative w-full max-w-[400px] aspect-square border border-white/10 rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm">
                    {/* Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    {/* Laser line */}
                    <div className="anim-laser absolute left-0 w-full h-[2px] bg-brand-accent shadow-[0_0_15px_var(--color-brand-accent)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Icon className="w-16 h-16 text-white drop-shadow-2xl opacity-90" />
                    </div>
                  </div>
                )}

                {step.animationType === 'waveform' && (
                  <div className="relative w-full max-w-[500px] h-[200px] flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <Icon className="w-[150px] h-[150px] text-brand-text" />
                    </div>
                    <svg viewBox="0 0 500 200" className="w-full h-full z-10">
                      <path 
                        className="anim-wave" 
                        d="M0,100 L100,100 L125,50 L150,150 L175,20 L200,180 L225,100 L300,100 L325,80 L350,120 L375,100 L500,100" 
                        fill="none" 
                        stroke="var(--color-brand-accent)" 
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="1500"
                        strokeDashoffset="1500"
                      />
                    </svg>
                  </div>
                )}

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
