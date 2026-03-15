import React, { useState } from 'react';
import { Search, UserCircle, X, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export function MemberWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setStatus('loading');
    
    // Simulate API Call
    setTimeout(() => {
      if (query.trim() === 'ACNU-123') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Closed State (FAB) */}
      <button 
        onClick={() => setIsOpen(true)}
        className={clsx(
          "bg-brand-primary text-white p-4 rounded-full shadow-2xl hover:scale-[1.03] active:scale-95 transition-all duration-300 ring-2 ring-transparent hover:ring-brand-accent/30",
          isOpen ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"
        )}
      >
        <Search className="w-6 h-6" />
      </button>

      {/* Open State (Drawer/Modal) */}
      <div 
        className={clsx(
          "absolute bottom-0 right-0 w-[calc(100vw-3rem)] sm:w-[360px] bg-brand-bg rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-brand-text/10 overflow-hidden transition-all duration-500 origin-bottom-right",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8 pointer-events-none"
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-lg text-brand-text flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-brand-accent" />
              <span>Vérifier un membre</span>
            </h3>
            <button 
              onClick={() => { setIsOpen(false); setStatus('idle'); setQuery(''); }}
              className="p-1 text-brand-text/50 hover:text-brand-text hover:bg-brand-text/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Entrez le matricule (ex: ACNU-123)"
                className="w-full bg-transparent border-2 border-brand-text/10 rounded-xl px-4 py-3 pb-[14px] text-sm font-sans focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-brand-text placeholder:text-brand-text/30"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-accent text-brand-primary px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'loading' ? '...' : 'Consulter'}
              </button>
            </div>
          </form>

          {/* Results Area */}
          <div className="min-h-[100px] flex items-center justify-center border-t border-brand-text/5 pt-4">
            {status === 'idle' && (
              <p className="text-xs text-brand-text/40 text-center px-4 font-medium">
                Saisissez un matricule ACNU pour consulter le profil public validé.
              </p>
            )}
            
            {status === 'loading' && (
              <div className="flex flex-col items-center gap-2">
                <div className="w-5 h-5 border-2 border-brand-text/10 border-t-brand-accent rounded-full animate-spin" />
                <span className="text-xs text-brand-text/50 font-bold uppercase tracking-widest">Recherche</span>
              </div>
            )}

            {status === 'success' && (
              <div className="w-full bg-brand-primary/5 rounded-xl p-4 flex items-start gap-4 border border-brand-primary/10">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                   <UserCircle className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm text-brand-text">Jean-Marie T.</h4>
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-xs text-brand-text/60 mb-2">Membre Valide • Section Yaoundé</p>
                  <span className="inline-block px-2 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-bold uppercase tracking-wider rounded">Actif</span>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="flex flex-col items-center gap-2 text-rose-500">
                <AlertCircle className="w-8 h-8 opacity-80" />
                <p className="text-xs font-medium text-center px-4">
                  Aucun membre trouvé. Vérifiez le matricule.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
