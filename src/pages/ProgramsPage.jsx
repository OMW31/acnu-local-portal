import React from 'react';
import { PageHero } from '../components/PageHero';
import { ProjectCard } from '../components/ProjectCard';

export function ProgramsPage() {
  const programs = [
    {
      title: 'Éducation à la Citoyenneté Mondiale',
      desc: 'Nous formons les leaders de demain aux enjeux des ODD, de la paix et de la diplomatie internationale à travers des ateliers et des simulations.',
      icon: '🎓',
      features: ['Ateliers ODD', 'Simulations ONU', 'Certifications']
    },
    {
      title: 'Volontariat & Impact Social',
      desc: 'Connecter les talents camerounais aux opportunités de développement communautaire pour un impact direct sur le terrain.',
      icon: '👐',
      features: ['Service Civique', 'Projets Locaux', 'Mentorat']
    },
    {
      title: 'Paix & Sécurité Humaine',
      desc: 'Promouvoir le dialogue interculturel et la résolution pacifique des conflits pour une société plus stable et solidaire.',
      icon: '🕊️',
      features: ['Médiation', 'Forums de Paix', 'Prévention']
    }
  ];

  return (
    <main className="pb-24">
      <PageHero 
        title="Nos Programmes" 
        subtitle="Nos Piliers d'Action"
        description="À travers nos piliers stratégiques, nous construisons des ponts entre les directives onusiennes et les réalités locales pour un impact durable."
      />

      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, idx) => (
            <div key={idx} className="card-premium p-10 flex flex-col group hover:border-brand-accent transition-all duration-500">
              <span className="text-6xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 inline-block">{p.icon}</span>
              <h3 className="text-2xl font-display font-bold mb-6">{p.title}</h3>
              <p className="text-brand-text-muted leading-relaxed mb-8 flex-1">{p.desc}</p>
              
              <ul className="space-y-3 pt-6 border-t border-brand-border">
                {p.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Vision Accent */}
      <section className="py-24 bg-brand-secondary/30 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-6">Une approche holistique</h2>
          <p className="text-lg text-brand-text-muted leading-relaxed">
            Nos programmes sont interconnectés pour répondre aux défis complexes du 21ème siècle, en plaçant l'humain et la dignité au centre de chaque initiative.
          </p>
        </div>
      </section>
    </main>
  );
}
