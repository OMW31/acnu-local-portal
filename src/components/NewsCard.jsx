import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NewsCard({ title, date, tag, image, excerpt, slug }) {
  return (
    <article className="group flex flex-col md:flex-row gap-8 items-start p-6 rounded-[2.5rem] bg-brand-secondary/30 border border-brand-border hover:border-brand-accent/30 transition-all duration-500">
      <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-square rounded-[1.5rem] overflow-hidden">
        <img 
          src={image || '/placeholder.svg'} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      
      <div className="flex-1 py-2">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-tighter bg-brand-accent/10 px-2 py-1 rounded">
            {tag}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-brand-text-muted font-medium">
            <Calendar size={12} />
            <span>{date}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-4 leading-tight group-hover:text-brand-accent transition-colors">
          <Link to={`/actualites/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
          {excerpt}
        </p>
        
        <Link 
          to={`/actualites/${slug}`} 
          className="text-brand-text font-bold text-sm border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors"
        >
          Lire la suite
        </Link>
      </div>
    </article>
  );
}
