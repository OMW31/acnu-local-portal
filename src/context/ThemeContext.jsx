import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const THEMES = [
  {
    id: 'savane',
    name: 'Savane Dorée',
    description: 'Chaleur de la savane',
  },
  {
    id: 'foret',
    name: 'Forêt Équatoriale',
    description: 'Profondeur tropicale',
  },
  {
    id: 'nuit',
    name: 'Nuit de Yaoundé',
    description: 'Élégance nocturne',
  },
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('acnu-theme') || 'nuit'; // Default to Nuit de Yaoundé as per mockups
    }
    return 'nuit';
  });

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('acnu-theme', newTheme);
    
    // Fix Milestone 8: Force refresh ScrollTrigger after theme-induced layout shift
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  }, [theme]);

  // For backward compatibility with Phase A landing page logic that imported THEMES as an object
  const legacyThemes = {
    DIPLOMATIC: 'nuit',
    ORGANIC: 'foret',
    KINETIC: 'savane',
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES, THEMES: legacyThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
