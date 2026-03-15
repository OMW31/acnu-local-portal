import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { NewsCard } from '../components/NewsCard';
import { Search, Filter } from 'lucide-react';

const NEWS_MOCK = [
  {
    title: "L'ACNU célèbre la Journée Internationale de la Paix à Yaoundé",
    date: "21 Sep 2025",
    tag: "Événement",
    excerpt: "Une journée marquée par des échanges intenses sur la diplomatie citoyenne et le rôle de la jeunesse dans la prévention des conflits.",
    slug: "journee-paix-2025",
    image: "/Hero4.jpg"
  },
  {
    title: "Rapport d'impact : 10 000 jeunes formés aux ODD en un an",
    date: "15 Ago 2025",
    tag: "Rapport",
    excerpt: "Notre bilan annuel démontre une progression fulgurante de l'engagement civique des lycéens camerounais.",
    slug: "rapport-impact-2025",
    image: "/Hero2.jpg"
  },
  {
    title: "Nouvel espace de co-working ouvert à la Maison des Jeunes",
    date: "05 Juil 2025",
    tag: "Infrastructure",
    excerpt: "Un environnement moderne et connecté pour propulser les startups à impact social de la capitale.",
    slug: "nouveau-coworking",
    image: "/Portail1.jpg"
  },
  {
    title: "Partenariat stratégique entre l'ACNU et le Ministère de la Jeunesse",
    date: "12 Jui 2025",
    tag: "Diplomatie",
    excerpt: "Signature d'une convention cadre pour l'intégration des ODD dans les programmes de volontariat national.",
    slug: "partenariat-minjec",
    image: "/Hero7.jpg"
  }
];

export function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="pb-24">
      <PageHero 
        title="Actualités & Média" 
        subtitle="Le Pouls de l'ACNU"
        description="Restez informés sur nos actions, nos analyses et les grands rendez-vous de la diplomatie citoyenne au Cameroun."
      />
      
      <section className="py-12 container mx-auto px-6 max-w-7xl">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-16 p-6 rounded-3xl bg-brand-secondary/30 border border-brand-border">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher un article..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-brand-bg border border-brand-border focus:border-brand-accent focus:outline-none text-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {['Tous', 'Événement', 'Rapport', 'Diplomatie', 'Projets'].map(cat => (
              <button key={cat} className="px-5 py-2 rounded-full border border-brand-border text-sm font-medium hover:border-brand-accent hover:text-brand-accent transition-all whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="space-y-10">
          {NEWS_MOCK.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map((item, idx) => (
            <NewsCard key={idx} {...item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center gap-2">
          {[1, 2, 3].map(p => (
            <button key={p} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${p === 1 ? 'bg-brand-primary text-white shadow-lg' : 'bg-brand-secondary text-brand-text-muted hover:bg-brand-border'}`}>
              {p}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
