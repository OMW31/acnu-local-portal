import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';

const NEWS_DATA = {
  'journee-paix-2025': {
    title: "L'ACNU célèbre la Journée Internationale de la Paix à Yaoundé",
    subtitle: "Rassemblement pour la Paix",
    date: "21 Sep 2025",
    tag: "Événement",
    desc: "Un plaidoyer vibrant pour la cohésion sociale au Cameroun.",
    content: `Yaoundé a vibré ce 21 septembre au rythme de la Journée Internationale de la Paix. Sous l'égide de l'ACNU, des centaines de jeunes, d'experts et de diplomates se sont réunis pour discuter des enjeux de la cohésion nationale.

L'événement, qui s'est tenu au Palais des Congrès, a été marqué par une série de tables rondes thématiques. "La paix n'est pas un vain mot, mais un comportement", a rappelé le Président Exécutif de l'ACNU lors de son allocution d'ouverture.

Les participants ont pu découvrir les initiatives locales de médiation portées par les antennes régionales de l'ACNU, prouvant une fois de plus que la base est le moteur de la stabilité.`,
    image: "/Hero4.jpg"
  }
};

const DEFAULT_NEWS = {
  title: "Article de l'ACNU",
  subtitle: "Actualités",
  date: "Date à venir",
  tag: "Info",
  desc: "Chargement du contenu de l'article...",
  content: "Le contenu détaillé de cet article est en cours de publication.",
  image: "/Hero1.jpg"
};

export function NewsDetailPage() {
  const { slug } = useParams();
  const article = NEWS_DATA[slug] || DEFAULT_NEWS;

  return (
    <main className="pb-24">
      <PageHero 
        title={article.title}
        subtitle={article.tag}
        description={article.desc}
        backgroundImage={article.image}
      />

      <section className="container mx-auto px-6 max-w-4xl -mt-10 relative z-20">
        <div className="flex justify-between items-center mb-12">
          <Link to="/actualites" className="inline-flex items-center gap-2 text-brand-text font-bold hover:text-brand-accent transition-colors">
            <ArrowLeft size={20} /> Retour aux actualités
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-brand-text-muted">{article.date}</span>
            <div className="h-4 w-px bg-brand-border" />
            <button className="text-brand-text-muted hover:text-brand-accent transition-colors"><Share2 size={18} /></button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-brand-text-muted leading-relaxed whitespace-pre-line mb-20">
          {article.content}
        </div>

        {/* Social Share Bar */}
        <div className="p-8 rounded-[2rem] bg-brand-secondary/30 border border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display font-bold text-lg">Partager cet article</span>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, MessageSquare].map((Icon, idx) => (
              <button key={idx} className="w-12 h-12 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
