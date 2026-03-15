import React from 'react';
import { PageHero } from '../components/PageHero';
import { ProjectCard } from '../components/ProjectCard';

export function ProjectsPage() {
  const projects = [
    {
      title: 'Maison des Jeunes pour les ODD',
      category: 'Infrastructures',
      excerpt: 'Un espace de co-working et d\'incubation dédié aux projets à impact social portés par les jeunes.',
      slug: 'maison-des-jeunes',
      image: '/projects.jpg'
    },
    {
      title: 'ACNU Media',
      category: 'Communication',
      excerpt: 'Plateforme digitale d\'information et de sensibilisation sur la citoyenneté mondiale et les enjeux climatiques.',
      slug: 'acnumedia',
      image: '/IllustrationCartoon.jpg'
    },
    {
      title: 'Programme de Volontariat National',
      category: 'Engagement',
      excerpt: 'Mobilisation de 500 volontaires par an pour des missions de développement dans les zones rurales.',
      slug: 'volontariat',
      image: '/AboutUs.jpg'
    },
    {
      title: 'Diplomatie Junior',
      category: 'Éducation',
      excerpt: 'Programme d\'excellence pour initier les lycéens aux mécanismes de la négociation internationale.',
      slug: 'diplomatie-junior',
      image: '/Hero1.jpg'
    }
  ];

  return (
    <main className="pb-24">
      <PageHero 
        title="Projets & Initiatives" 
        subtitle="Impact sur le terrain"
        description="Découvrez nos réalisations concrètes. Chaque projet est une brique posée pour la construction d'un avenir plus juste et durable au Cameroun."
      />
      
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      {/* Map call to action */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="p-12 md:p-20 rounded-[4rem] bg-brand-dark text-white relative overflow-hidden text-center">
          <div className="absolute inset-0 ndop-pattern opacity-5" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 relative z-10">L'ACNU sur tout le territoire</h2>
          <p className="text-brand-text-on-dark-muted max-w-2xl mx-auto mb-10 relative z-10">
            De l'Extrême-Nord au Sud, nos antennes régionales déploient nos initiatives au plus près des populations.
          </p>
          <div className="inline-block px-8 py-4 rounded-full border border-brand-accent text-brand-accent font-bold relative z-10">
            Voir la carte de nos antennes
          </div>
        </div>
      </section>
    </main>
  );
}
