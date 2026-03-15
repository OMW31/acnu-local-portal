import React, { useState } from 'react';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

export function DonationWidget() {
  const [amount, setAmount] = useState(25000);
  const [custom, setCustom] = useState('');
  const [frequency, setFrequency] = useState('once'); // once, monthly

  const presets = [5000, 10000, 25000, 50000];

  return (
    <div className="card-premium p-8 md:p-12">
      <div className="flex justify-center gap-4 mb-10 p-1 bg-brand-secondary rounded-full max-w-xs mx-auto">
        <button 
          onClick={() => setFrequency('once')}
          className={`flex-1 py-2 px-4 rounded-full text-sm font-bold transition-all ${frequency === 'once' ? 'bg-brand-primary text-white shadow-md' : 'text-brand-text-muted hover:text-brand-text'}`}
        >
          Une fois
        </button>
        <button 
          onClick={() => setFrequency('monthly')}
          className={`flex-1 py-2 px-4 rounded-full text-sm font-bold transition-all ${frequency === 'monthly' ? 'bg-brand-primary text-white shadow-md' : 'text-brand-text-muted hover:text-brand-text'}`}
        >
          Mensuel
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {presets.map(p => (
          <button 
            key={p}
            onClick={() => { setAmount(p); setCustom(''); }}
            className={`py-4 rounded-2xl border-2 transition-all font-display font-bold text-lg ${amount === p && !custom ? 'border-brand-accent bg-brand-accent/5 text-brand-accent' : 'border-brand-border text-brand-text-muted hover:border-brand-accent/30'}`}
          >
            {p.toLocaleString()} FCFA
          </button>
        ))}
      </div>

      <div className="relative mb-10">
        <input 
          type="number" 
          placeholder="Montant personnalisé"
          className="w-full py-4 px-6 rounded-2xl bg-brand-secondary border-2 border-brand-border focus:border-brand-accent focus:outline-none font-bold text-lg transition-all"
          value={custom}
          onChange={(e) => { setCustom(e.target.value); setAmount(0); }}
        />
        <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-brand-text-muted">FCFA</span>
      </div>

      <button className="w-full py-5 rounded-full bg-brand-accent text-brand-primary font-display font-bold text-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all mb-8 flex items-center justify-center gap-3">
        <Heart size={20} className="fill-current" />
        <span>Soutenir l'ACNU</span>
      </button>

      <div className="grid grid-cols-2 gap-6 pt-8 border-t border-brand-border">
        <div className="flex items-center gap-3 text-brand-text-muted">
          <ShieldCheck size={18} className="text-green-500" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-bold">Paiement Sécurisé</span>
        </div>
        <div className="flex items-center gap-3 text-brand-text-muted">
          <Zap size={18} className="text-brand-accent" />
          <span className="text-[10px] font-mono uppercase tracking-wider font-bold">Impact Immédiat</span>
        </div>
      </div>
    </div>
  );
}
