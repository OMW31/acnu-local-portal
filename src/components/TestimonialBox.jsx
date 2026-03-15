import React from 'react';
import { Quote } from 'lucide-react';

export function TestimonialBox({ quote, author, role, image }) {
  return (
    <div className="relative p-12 rounded-[3rem] bg-brand-secondary/40 border border-brand-border overflow-hidden">
      <Quote className="absolute top-8 right-12 w-16 h-16 text-brand-accent/10" />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
        {image && (
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-accent/30 shrink-0">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <p className="text-2xl md:text-3xl font-display italic font-medium text-brand-text mb-8 leading-relaxed">
            "{quote}"
          </p>
          <div>
            <h4 className="font-bold text-lg text-brand-text">{author}</h4>
            <p className="text-brand-text-muted font-mono text-xs uppercase tracking-widest">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
