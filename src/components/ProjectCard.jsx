import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProjectCard({ title, category, excerpt, image, slug }) {
  return (
    <div className="card-premium group overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image || '/placeholder.svg'} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-brand-accent text-brand-primary font-mono text-[10px] uppercase font-bold tracking-widest shadow-lg">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">
          {title}
        </h3>
        <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">
          {excerpt}
        </p>
        
        <Link 
          to={`/projets/${slug}`} 
          className="flex items-center gap-2 text-brand-primary font-bold text-sm group/btn"
        >
          <span>Découvrir le projet</span>
          <div className="w-8 h-8 rounded-full border border-brand-primary/20 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-white transition-all">
            <ArrowUpRight size={14} />
          </div>
        </Link>
      </div>
    </div>
  );
}
