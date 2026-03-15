import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageHero } from '../components/PageHero';
import { KPIBar } from '../components/KPIBar';
import { TestimonialBox } from '../components/TestimonialBox';

gsap.registerPlugin(ScrollTrigger);

export function AboutPage() {
  const timelineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item, idx) => {
        gsap.from(item, {
          x: idx % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });
      });
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 45, suffix: '+', label: 'Années d\'impact' },
    { value: 120, suffix: 'k', label: 'Jeunes sensibilisés' },
    { value: 10, suffix: '', label: 'Régions couvertes' },
    { value: 250, suffix: '+', label: 'Membres actifs' },
  ];

  const team = [
    { name: 'Dr. Jean-Baptiste N.', role: 'Président Exécutif', bio: 'Expert en relations internationales avec 20 ans d\'expérience.' },
    { name: 'Mme Marie-Claire T.', role: 'Secrétaire Générale', bio: 'Spécialiste en développement communautaire et droits humains.' },
    { name: 'M. Ibrahim K.', role: 'Trésorier', bio: 'Gestionnaire de projets passionné par l\'innovation sociale.' },
  ];

  return (
    <main className="pb-24">
      <PageHero 
        title="Bâtir un Cameroun Engagé" 
        subtitle="Héritage & Vision"
        description="L'Association Camerounaise pour les Nations Unies (ACNU) est le trait d'union entre les idéaux globaux de l'ONU et les réalités locales du Cameroun."
        backgroundImage="/IMGs/AboutUs.jpg"
      />

      {/* Stats Section */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <KPIBar stats={stats} />
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-brand-secondary/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                <div className="w-full h-full bg-brand-primary ndop-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <h2 className="text-6xl md:text-8xl font-display font-bold text-brand-primary/10 select-none">VISION</h2>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-accent rounded-full p-8 flex items-center justify-center text-center shadow-2xl">
                <span className="text-brand-primary font-display font-bold text-sm leading-tight">Engagé pour 2030</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Notre Raison d'Être</h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-brand-accent mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-sm">01</span>
                    La Vision
                  </h3>
                  <p className="text-lg text-brand-text-muted leading-relaxed">
                    Devenir l'acteur civil de référence pour la diplomatie citoyenne au Cameroun, en mobilisant la jeunesse autour des enjeux de paix et de développement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-accent mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-sm">02</span>
                    La Mission
                  </h3>
                  <p className="text-lg text-brand-text-muted leading-relaxed">
                    Promouvoir les objectifs des Nations Unies par l'éducation, le volontariat et la mise en œuvre de projets à fort impact social.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">Notre Histoire</h2>
        <div className="space-y-12 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-border -translate-x-1/2 hidden md:block" />
          
          {[
            { year: '1976', title: 'Fondation', desc: 'Création de l\'ACNU sous l\'impulsion des pionniers de la diplomatie camerounaise.' },
            { year: '1995', title: 'Reconnaissance', desc: 'L\'ACNU devient membre de la Fédération Mondiale des Associations pour les Nations Unies (WFUNA).' },
            { year: '2015', title: 'Cap ODD', desc: 'Pivot stratégique vers les Objectifs de Développement Durable.' },
            { year: '2024', title: 'ACNU Media', desc: 'Lancement du pôle média pour une meilleure éducation à la citoyenneté mondiale.' }
          ].map((item, idx) => (
            <div key={idx} className={`timeline-item flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 md:text-right">
                <div className={`p-8 rounded-[2rem] bg-brand-card border border-brand-border shadow-sm ${idx % 2 === 0 ? 'md:text-left' : ''}`}>
                  <span className="text-brand-accent font-mono font-bold text-2xl mb-2 block">{item.year}</span>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-brand-text-muted text-sm">{item.desc}</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-brand-accent relative z-10 shadow-[0_0_15px_rgba(var(--accent),0.5)]" />
              <div className="flex-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-brand-dark text-white rounded-[4rem] mx-4 md:mx-10 overflow-hidden relative">
        <div className="absolute inset-0 ndop-pattern opacity-5" />
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Le Bureau National</h2>
            <p className="text-brand-text-on-dark-muted max-w-2xl mx-auto">
              Une équipe d'experts et de passionnés engagés pour porter la voix du Cameroun au sein de la famille des Nations Unies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-accent/50 transition-all duration-500">
                <div className="w-24 h-24 rounded-full bg-brand-accent/20 mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
                  👤
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-6">{member.role}</p>
                <p className="text-brand-text-on-dark-muted text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 container mx-auto px-6 max-w-4xl">
        <TestimonialBox 
          quote="L'ACNU n'est pas seulement une association, c'est un laboratoire d'idées où la jeunesse camerounaise apprend à devenir citoyenne du monde."
          author="Dr. Jean-Baptiste N."
          role="Président de l'ACNU"
        />
      </section>
    </main>
  );
}
