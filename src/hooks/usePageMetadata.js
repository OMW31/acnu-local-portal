import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_TITLES = {
  '/': 'Accueil | ACNU Cameroun',
  '/a-propos': 'À Propos | ACNU Cameroun',
  '/programmes': 'Nos Programmes | ACNU Cameroun',
  '/projets': 'Nos Projets | ACNU Cameroun',
  '/actualites': 'Actualités | ACNU Cameroun',
  '/don': 'Soutenir l\'ACNU | ACNU Cameroun',
  '/connexion': 'Connexion | Portail Membre',
  '/portail': 'Tableau de bord | Portail Membre',
};

export function usePageMetadata() {
  const location = useLocation();

  useEffect(() => {
    const title = PAGE_TITLES[location.pathname] || 'ACNU Cameroun';
    document.title = title;
    
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
}
