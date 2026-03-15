import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="p-10 md:p-16 rounded-[4rem] bg-brand-primary text-white overflow-hidden relative">
      {/* Visual Accents */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Restez au cœur de l'action</h2>
        <p className="text-white/80 mb-10 text-lg">
          Inscrivez-vous à notre newsletter pour recevoir nos rapports de terrain et nos actualités diplomatiques directement dans votre boîte mail.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl animate-in zoom-in duration-500">
            <p className="font-bold text-xl mb-2">Merci pour votre engagement ! ✨</p>
            <p className="text-white/70">Vous recevrez bientôt notre prochain bulletin d'information.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              required
              placeholder="votre-email@exemple.com"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              disabled={status === 'loading'}
              className="px-8 py-4 rounded-full bg-brand-accent text-brand-primary font-display font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
            >
              {status === 'loading' ? 'Envoi...' : (
                <>
                  <span>S'abonner</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        )}
        <p className="mt-6 text-xs text-white/50">
          En vous inscrivant, vous acceptez notre politique de confidentialité. Désinscription possible à tout moment.
        </p>
      </div>
    </div>
  );
}
