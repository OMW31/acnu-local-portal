import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ArrowLeft, CheckCircle2, Calendar, MapPin, Users, Zap } from 'lucide-react';

const PROJECTS_DATA = {
  'maison-des-jeunes': {
    title: 'Maison des Jeunes pour les ODD',
    subtitle: 'Innovation Sociale',
    desc: 'Un centre d\'excellence pour l\'incubation de projets jeunesse.',
    fullDesc: `La Maison des Jeunes pour les Objectifs de Développement Durable (ODD) est un projet phare de l'ACNU visant à offrir aux jeunes camerounais un cadre d'expression, de formation et d'innovation. Située au cœur de Yaoundé, elle accueille quotidiennement des dizaines de porteurs de projets.`,
    stats: [
      { label: 'Bénéficiaires', value: '2500+', icon: Users },
      { label: 'Projets incubés', value: '45', icon: Zap },
      { label: 'Localisation', value: 'Yaoundé', icon: MapPin },
    ],
    milestones: [
      'Lancement de la phase pilote en 2022',
      'Ouverture de l\'espace de co-working en 2023',
      'Inauguration du studio média ODD en 2024'
    ]
  },
  'acnumedia': {
    title: 'ACNU Media',
    subtitle: 'Éducation Digitale',
    desc: 'La voix de la citoyenneté mondiale au Cameroun.',
    fullDesc: `ACNU Media est la branche éditoriale de notre organisation. Nous produisons du contenu multimédia pour sensibiliser le public aux enjeux climatiques, aux droits de l'homme et à la paix.`,
    stats: [
      { label: 'Audience', value: '50k+', icon: Users },
      { label: 'Articles/Vidéos', value: '500+', icon: Calendar },
      { label: 'Impact', value: 'National', icon: MapPin },
    ],
    milestones: [
      'Lancement de la plateforme web',
      'Création du podcast "Voix du Futur"',
      'Partenariat avec les radios communautaires'
    ]
  }
};

// Simple Fallback for missing projects
const DEFAULT_PROJECT = {
  title: 'Détails du Projet',
  subtitle: 'Initiative ACNU',
  desc: 'Chargement des détails du projet...',
  fullDesc: 'Les informations détaillées sur ce projet sont en cours de mise à jour par notre équipe de terrain.',
  stats: [],
  milestones: []
};

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS_DATA[slug] || DEFAULT_PROJECT;

  return (
    <main className="pb-24">
      <PageHero 
        title={project.title}
        subtitle={project.subtitle}
        description={project.desc}
      />

      <section className="container mx-auto px-6 max-w-7xl -mt-10 relative z-20">
        <Link to="/projets" className="inline-flex items-center gap-2 text-brand-text font-bold mb-10 hover:text-brand-accent transition-colors">
          <ArrowLeft size={20} /> Retour aux projets
        </Link>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-6">Présentation du projet</h2>
            <div className="text-lg text-brand-text-muted leading-relaxed mb-10 whitespace-pre-line">
              {project.fullDesc}
            </div>

            <h3 className="text-2xl font-display font-bold mb-6">Objectifs & Réalisations</h3>
            <div className="space-y-4 mb-12">
              {project.milestones.map((m, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-brand-secondary/30 border border-brand-border items-center">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={24} />
                  <span className="font-medium">{m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="card-premium p-8 sticky top-28">
              <h4 className="text-xl font-display font-bold mb-8">Chiffres Clés</h4>
              <div className="space-y-6">
                {project.stats.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                      <s.icon size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-brand-text">{s.value}</div>
                      <div className="text-xs font-mono uppercase tracking-wider text-brand-text-muted">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 rounded-full bg-brand-primary text-white font-bold shadow-lg hover:scale-105 transition-transform">
                Soutenir ce projet
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
