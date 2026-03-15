import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  BookOpen, 
  Mic2, 
  Globe, 
  Calendar,
  MousePointer2 as Cursor,
  ChevronRight,
  PlusCircle,
  Trophy,
  Award
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// -------------------------------------------------------------
// Component: ProgramCard (Level 2 Detail)
// -------------------------------------------------------------
function ProgramCard({ icon: Icon, title, subtitle, description, features, cta }) {
  return (
    <div className="card-premium p-10 flex flex-col h-full hover:border-brand-accent transition-all duration-500">
      <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-accent mb-8">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-display font-bold mb-2">{title}</h3>
      <p className="text-brand-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-6">{subtitle}</p>
      <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-grow">{description}</p>
      <ul className="space-y-3 mb-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-xs font-medium text-brand-text/80">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            {f}
          </li>
        ))}
      </ul>
      <button className="w-full py-4 rounded-full border border-brand-border font-bold text-sm hover:bg-brand-accent hover:border-brand-accent hover:text-brand-primary transition-all duration-300">
        {cta}
      </button>
    </div>
  );
}

// -------------------------------------------------------------
// Artifact 1: ICNU Curriculum Shuffler (Hyper-Personalized)
// -------------------------------------------------------------
function ICNUShuffler() {
  const [cards, setCards] = useState([
    { 
      code: 'ICNU-101',
      label: 'Leadership Transformationnel',
      status: 'En cours',
      participants: 45,
      icon: Users,
      progress: 67,
      color: 'var(--accent)'
    },
    { 
      code: 'ICNU-202',
      label: 'Plaidoyer & Négociation',
      status: 'Inscription ouverte',
      participants: 32,
      icon: MessageSquare,
      progress: 0,
      color: 'var(--primary)'
    },
    { 
      code: 'ICNU-303',
      label: 'Gestion de Projet ODD',
      status: 'Complet',
      participants: 50,
      icon: Briefcase,
      progress: 100,
      color: 'var(--accent)'
    }
  ]);
  
  const progressRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-brand-bg rounded-[2.5rem] p-8 border border-brand-text/5 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-brand-secondary to-transparent opacity-30" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-brand-primary/5 rounded-2xl text-brand-secondary">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-brand-text leading-none">Institut ICNU</h3>
            <p className="font-mono text-[9px] text-brand-text/40 uppercase tracking-widest mt-1 font-bold italic">Curriculum Vivant</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[9px] font-mono font-bold text-brand-accent uppercase tracking-tighter">Live Session</span>
        </div>
      </div>

      <div className="relative h-64 w-full perspective-1000 mt-4 flex items-end justify-center">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const yOffset = index * -20;
          const scale = 1 - (index * 0.08);
          const opacity = 1 - (index * 0.25);
          const zIndex = 10 - index;
          
          return (
            <div 
              key={card.code}
              className="absolute w-full h-44 bg-brand-card rounded-3xl border border-brand-border flex flex-col p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-1000 pointer-events-none"
              style={{
                transform: `translateY(${yOffset}px) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${card.color}15`, color: card.color }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono font-bold text-brand-text/40 tracking-widest uppercase">{card.code}</p>
                      <h4 className="font-display font-bold text-sm text-brand-text tracking-tight">{card.label}</h4>
                    </div>
                 </div>
                 <span className={`text-[8px] px-2 py-1 rounded-md font-bold uppercase tracking-wider ${card.status === 'En cours' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-brand-primary/10 text-brand-primary'}`}>
                   {card.status}
                 </span>
               </div>

               <div className="mt-auto space-y-3">
                 <div className="flex justify-between items-end">
                    <span className="text-[10px] text-brand-text/50 font-medium">Progression du module</span>
                    <span className="text-[10px] font-mono font-bold text-brand-accent">{card.progress}%</span>
                 </div>
                 <div className="w-full h-1.5 bg-brand-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-accent transition-all duration-1000" 
                      style={{ width: `${card.progress}%` }} 
                    />
                 </div>
                 <div className="flex items-center gap-2 text-[9px] text-brand-text/40 pt-1">
                    <Users size={10} />
                    <span className="font-mono">{card.participants} participants certifiés cette semaine</span>
                 </div>
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Artifact 2: Miss & Mister Feed (Hyper-Personalized)
// -------------------------------------------------------------
function MissMisterFeed() {
  const events = [
    { text: '🎭 Auditions Miss Cameroun UN - Douala: 45 candidates', type: 'LIVE' },
    { text: '👔 Sélection Mister Cameroun UN - Yaoundé: 38 candidats', type: 'INFO' },
    { text: '🎨 Atelier Culture & Diplomatie - Bafoussam', type: 'DONE' },
    { text: '📸 Shooting officiel - Kribi: En direct', type: 'LIVE' },
    { text: '🏆 Finale nationale - Palais des Congrès: 21 Mars', type: 'UPCOMING' }
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [eventIdx, setEventIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (eventIdx >= events.length) {
      setTimeout(() => { setEventIdx(0); setCharIdx(0); setDisplayText(''); }, 5000);
      return;
    }
    const current = events[eventIdx].text;
    if (charIdx < current.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + current[charIdx]);
        setCharIdx(c => c + 1);
      }, 35);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + '\n');
        setEventIdx(e => e + 1);
        setCharIdx(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [charIdx, eventIdx]);

  return (
    <div className="flex flex-col h-full bg-brand-bg rounded-[2.5rem] p-8 border border-brand-text/5 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-30" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-brand-primary/5 rounded-2xl text-brand-accent">
            <Trophy size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-brand-text leading-none">Miss & Mister</h3>
            <p className="font-mono text-[9px] text-brand-text/40 uppercase tracking-widest mt-1 font-bold italic">Gazette Culturelle</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[9px] font-mono font-bold text-rose-500 uppercase tracking-tighter">Live Broadcast</span>
        </div>
      </div>

      <p className="font-sans text-brand-text/70 text-sm leading-relaxed mb-8">
        Valoriser l'excellence culturelle camerounaise au service de la paix et de la solidarité internationale.
      </p>

      {/* Terminal UI */}
      <div className="w-full bg-[#08080A] rounded-[2rem] p-6 h-56 border border-brand-border mt-auto relative overflow-hidden font-mono shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-8 bg-white/5 flex items-center px-4 gap-1.5 border-b border-white/5">
           <div className="w-2 h-2 rounded-full bg-rose-500/50" />
           <div className="w-2 h-2 rounded-full bg-brand-accent/50" />
           <div className="w-2 h-2 rounded-full bg-brand-primary/50" />
           <span className="ml-auto text-[8px] text-white/20 uppercase tracking-widest">Cultural_Terminal_V1</span>
        </div>
        <div className="mt-6 overflow-hidden">
          <pre className="text-[0.7rem] leading-loose text-brand-text/90 whitespace-pre-wrap">
            {displayText}
            <span className="inline-block w-2.5 bg-brand-accent h-3.5 ml-1 animate-[pulse_0.8s_step-end_infinite] align-middle" />
          </pre>
        </div>
        {/* Glow effect */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Artifact 3: Simulation Scheduler (Hyper-Personalized)
// -------------------------------------------------------------
function SimulationScheduler() {
  const simulations = [
    { day: 'L', event: 'Conseil de Sécurité', slots: '12/20', status: 'open', color: 'var(--accent)' },
    { day: 'M', event: 'Assemblée Générale', slots: '8/15', status: 'open', color: 'var(--primary)' },
    { day: 'S', event: 'Tribunal International', slots: '20/20', status: 'full', color: 'var(--accent)' }
  ];

  const svgRef = useRef(null);
  const cursorRef = useRef(null);
  const tooltipRef = useRef(null);
  const [activeSim, setActiveSim] = useState(simulations[0]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      
      gsap.set(cursorRef.current, { x: 20, y: 150, opacity: 0 });
      gsap.set(tooltipRef.current, { opacity: 0, y: 10, scale: 0.95 });

      tl.to(cursorRef.current, { opacity: 1, duration: 0.4 })
        .to(cursorRef.current, { x: 145, y: 55, duration: 1.2, ease: 'power2.inOut', onStart: () => setActiveSim(simulations[0]) })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .to(tooltipRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { x: 240, y: 140, duration: 1, ease: 'power3.inOut', delay: 1.5 })
        .to(cursorRef.current, { opacity: 0, duration: 0.3 });

    }, svgRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col h-full bg-brand-bg rounded-[2.5rem] p-8 border border-brand-text/5 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-30" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-brand-primary/5 rounded-2xl text-brand-primary">
            <Globe size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-brand-text leading-none">Simulations</h3>
            <p className="font-mono text-[9px] text-brand-text/40 uppercase tracking-widest mt-1 font-bold italic">Agenda Diplomatique</p>
          </div>
        </div>
      </div>

      {/* Scheduler UI */}
      <div className="w-full bg-brand-card rounded-3xl border border-brand-border mt-auto p-6 h-64 relative overflow-hidden shadow-2xl" ref={svgRef}>
        <div className="flex items-center justify-between mb-6 border-b border-brand-border pb-3">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
             <span key={i} className={`text-[10px] font-mono font-bold ${simulations.find(s => s.day === day) ? 'text-brand-accent' : 'text-brand-text/20'}`}>{day}</span>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-3 px-1 relative">
           {Array.from({length: 14}).map((_, i) => (
             <div key={i} className="aspect-square rounded-xl bg-brand-primary/5 border border-brand-primary/10 transition-colors hover:bg-brand-accent/10" />
           ))}
           
           {/* Interactive Tooltip controlled by GSAP */}
           <div 
             ref={tooltipRef}
             className="absolute top-[-80px] left-[50%] -translate-x-1/2 w-48 p-4 rounded-2xl bg-brand-dark text-white shadow-2xl border border-white/10 z-20"
           >
              <p className="text-[8px] font-mono uppercase tracking-widest text-brand-accent mb-1 font-bold">{activeSim.event}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold">Places : {activeSim.slots}</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase tracking-tighter">Inscriptions</span>
              </div>
              <button className="w-full mt-2 py-1.5 rounded-lg bg-brand-accent text-brand-primary text-[9px] font-bold uppercase tracking-wider">S'inscrire</button>
              {/* Arrow */}
              <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-dark border-r border-b border-white/10 rotate-45" />
           </div>
        </div>

        {/* Animated SVG Cursor */}
        <div ref={cursorRef} className="absolute top-0 left-0 z-30 w-8 h-8 text-brand-text drop-shadow-2xl pointer-events-none" style={{ opacity: 0 }}>
           <Cursor size={32} fill="currentColor" stroke="white" strokeWidth="1.5" />
        </div>

        <div className="absolute bottom-6 right-6 flex items-center gap-2">
           <span className="text-[10px] font-mono font-bold text-brand-text/30 uppercase tracking-widest">Protocol Engine V2</span>
           <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-lg">
              <ChevronRight size={14} />
           </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// MAIN SECTION
// -------------------------------------------------------------
export function Features() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="programmes" className="py-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-4xl md:text-7xl tracking-tighter mb-8 text-brand-text leading-[0.95]">
            Systèmes <br /> d'Engagement.
          </h2>
          <p className="font-sans text-brand-text/60 text-xl leading-relaxed max-w-xl">
            L'ACNU transforme la diplomatie en écosystèmes opérationnels pour catalyser l'impact de la jeunesse.
          </p>
        </div>
        <div className="hidden lg:block pb-4">
           <div className="flex gap-2 mb-4">
              <div className="w-12 h-1 bg-brand-accent rounded-full" />
              <div className="w-4 h-1 bg-brand-secondary rounded-full" />
              <div className="w-4 h-1 bg-brand-secondary rounded-full" />
           </div>
           <span className="font-mono text-[10px] uppercase tracking-widest text-brand-text/40 font-bold">World-Class Monitoring // ACTIVE</span>
        </div>
      </div>

      {/* LEVEL 1: Functional Artifacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-32">
        <div className="feature-card h-[520px]">
          <ICNUShuffler />
        </div>
        <div className="feature-card h-[520px]">
          <MissMisterFeed />
        </div>
        <div className="feature-card h-[520px]">
          <SimulationScheduler />
        </div>
      </div>

      {/* LEVEL 2: Programme Details Cards */}
      <div className="grid md:grid-cols-3 gap-10 lg:gap-12 pt-20 border-t border-brand-border relative">
        {/* Decorative badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-brand-bg border border-brand-border rounded-full shadow-sm">
           <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-bold text-brand-text/40 italic">Détails des Programmes Phares</span>
        </div>

        <ProgramCard
          icon={Award}
          title="ICNU"
          subtitle="Institut National"
          description="Certification d'excellence en leadership et plaidoyer reconnue par la Fédération Mondiale des Associations pour les Nations Unies."
          features={['Certification ICNU', 'Mentorat Exécutif', 'Réseau Alumni']}
          cta="S'inscrire au module"
        />
        
        <ProgramCard
          icon={Trophy}
          title="Excellence Culturelle"
          subtitle="Miss & Mister Cameroun UN"
          description="Concours de prestige valorisant l'héritage traditionnel camerounais et l'engagement citoyen de la jeunesse."
          features={['Auditions Nationales', 'Ambassadeurs de Paix', 'Gala Diplomatique']}
          cta="Participer à la sélection"
        />
        
        <ProgramCard
          icon={Users}
          title="Simulations SIJ"
          subtitle="Diplomatie en Action"
          description="Expérience immersive dans les instances onusiennes pour maîtriser les mécanismes de la négociation internationale."
          features={['Conseil de Sécurité', 'Assemblée Générale', 'Tribunaux Internationaux']}
          cta="Postuler aux simulations"
        />
      </div>
    </section>
  );
}
