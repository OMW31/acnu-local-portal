import React from 'react';
import { ArrowRight, Globe, Heart, BookOpen } from 'lucide-react';
import clsx from 'clsx';

export function Membership() {
  const tiers = [
    {
      name: "Jeunesse",
      desc: "Accès aux formations ICNU et à la communauté locale.",
      price: "10 000 XAF",
      icon: BookOpen,
      featured: false,
    },
    {
      name: "Volontaire Actif",
      desc: "Participation aux simulations et projets de développement.",
      price: "25 000 XAF",
      icon: Heart,
      featured: true,
    },
    {
      name: "Partenaire / Donateur",
      desc: "Soutien institutionnel, mention dans les rapports, accès réseau.",
      price: "Don Libre",
      icon: Globe,
      featured: false,
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-brand-bg relative overflow-hidden">
      
      {/* Background flare */}
      <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-5xl tracking-tight mb-6 text-brand-text">
            Soutenez l'engagement des <br className="hidden md:block"/> leaders de demain
          </h2>
          <p className="font-sans text-brand-text/60 text-lg max-w-2xl mx-auto">
            Vos contributions financent les programmes ICNU, la création de la Maison des Jeunes et propulsent l'impact du volontariat national.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto relative z-10">
          {tiers.map((tier, idx) => (
            <div 
              key={tier.name}
              className={clsx(
                "relative rounded-[2rem] p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full",
                tier.featured 
                  ? "bg-brand-primary text-white shadow-2xl ring-4 ring-brand-accent/20 scale-105" 
                  : "bg-white dark:bg-brand-primary/5 text-brand-text shadow-xl border border-brand-text/5"
              )}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={clsx(
                  "p-3 rounded-2xl",
                  tier.featured ? "bg-white/10 text-brand-accent" : "bg-brand-primary/5 text-brand-primary"
                )}>
                  <tier.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl">{tier.name}</h3>
              </div>
              
              <p className={clsx(
                "font-sans text-sm mb-8 flex-grow",
                tier.featured ? "text-white/80" : "text-brand-text/60"
              )}>
                {tier.desc}
              </p>
              
              <div className="mt-auto pt-8 border-t border-current/10 flex flex-col">
                <div className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Contribution</div>
                <div className="font-display font-bold text-2xl lg:text-3xl mb-8">{tier.price}</div>
                
                <button className={clsx(
                  "w-full magnetic-btn py-4 rounded-full font-bold text-sm tracking-wide transition-colors",
                  tier.featured 
                    ? "bg-brand-accent text-brand-primary hover:bg-brand-accent/90" 
                    : "bg-brand-text text-brand-bg hover:bg-brand-text/90"
                )}>
                  <span className="relative z-10">Rejoindre</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
