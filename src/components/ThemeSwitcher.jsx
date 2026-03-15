import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, TreePine, Moon } from 'lucide-react';
import clsx from 'clsx';
import gsap from 'gsap';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const panelRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      panelRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1 }
    );
  }, []);

  return (
    <div 
      ref={panelRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 px-4 py-3 rounded-full bg-[#1A1A36]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
    >
      <span className="text-white/60 text-xs font-mono uppercase tracking-widest mr-2 pr-4 border-r border-white/10 hidden sm:block">
        Director Mode
      </span>
      
      <button
        onClick={() => setTheme('savane')}
        className={clsx(
          "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
          theme === 'savane' 
            ? "bg-[#C9893B] text-white shadow-inner" 
            : "text-white/50 hover:text-white hover:bg-white/10"
        )}
      >
        <Sun className="w-4 h-4" />
        <span className="hidden sm:inline">Savane Dorée</span>
      </button>

      <button
        onClick={() => setTheme('foret')}
        className={clsx(
          "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
          theme === 'foret' 
            ? "bg-[#22C55E] text-white shadow-inner" 
            : "text-white/50 hover:text-white hover:bg-white/10"
        )}
      >
        <TreePine className="w-4 h-4" />
        <span className="hidden sm:inline">Forêt Équatoriale</span>
      </button>

      <button
        onClick={() => setTheme('nuit')}
        className={clsx(
          "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
          theme === 'nuit' 
            ? "bg-[#C9A84C] text-[#0D0D16] shadow-inner" 
            : "text-white/50 hover:text-white hover:bg-white/10"
        )}
      >
        <Moon className="w-4 h-4" />
        <span className="hidden sm:inline">Nuit de Yaoundé</span>
      </button>
    </div>
  );
}
