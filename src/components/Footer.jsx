import React from 'react';
import { Link } from 'react-router-dom';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
    <footer className="bg-brand-bg pt-24 pb-12 border-t border-brand-border rounded-t-[4rem] relative overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-brand-accent" fill="currentColor">
          <circle cx="100" cy="150" r="150" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Newsletter Section Transverse */}
        <div className="mb-24">
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center border border-brand-accent/30">
                <span className="text-white font-display font-bold text-xs tracking-tighter">UN</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">ACNU</span>
            </Link>
            <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
              Association Camerounaise pour les Nations Unies. Porter les idéaux de paix et de développement au cœur de notre nation.
            </p>
            {/* Status Indicator */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-brand-secondary/50 border border-brand-border w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-brand-text-muted">Système Opérationnel</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-brand-accent">L'Association</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-text-muted">
              <li><Link to="/a-propos" className="hover:text-brand-accent transition-colors">À Propos</Link></li>
              <li><Link to="/programmes" className="hover:text-brand-accent transition-colors">Programmes</Link></li>
              <li><Link to="/projets" className="hover:text-brand-accent transition-colors">Projets</Link></li>
              <li><Link to="/actualites" className="hover:text-brand-accent transition-colors">Actualités</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-brand-accent">Engagement</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-text-muted">
              <li><Link to="/don" className="hover:text-brand-accent transition-colors">Soutenir l'ACNU</Link></li>
              <li><Link to="/connexion" className="hover:text-brand-accent transition-colors">Espace Membre</Link></li>
              <li><Link to="/projets/volontariat" className="hover:text-brand-accent transition-colors">Devenir Volontaire</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-brand-accent">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-text-muted">
              <li>Yaoundé, Cameroun</li>
              <li>contact@acnu-cameroon.org</li>
              <li>+237 6XX XXX XXX</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-brand-text-muted uppercase tracking-widest">
          <p>© 2026 ACNU CAMEROUN — TOUS DROITS RÉSERVÉS</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-accent transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Mentions Légales</a>
          </div>
          {/* Cameroon Tricolor ribbon */}
          <div className="flex w-24 h-1 rounded-full overflow-hidden opacity-30">
            <div className="w-1/3 bg-[#007A5E]" />
            <div className="w-1/3 bg-[#CE1126]" />
            <div className="w-1/3 bg-[#FCD116]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
