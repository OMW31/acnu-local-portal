# Phase C — PRD: Public Pages (Site Vitrine Complet)
**Version**: 1.0 | **Date**: 2026-03-14 | **Author**: Senior Knowledge Architect

---

## 1. Vision
Après le portail membre (Phase B), Phase C complète le site vitrine ACNU avec toutes les pages publiques nécessaires pour présenter l'association, ses programmes, ses projets, son équipe, et permettre les dons et la consultation d'actualités.

## 2. Pages à Créer

### 2.1 Page : `/a-propos` — Qui Sommes-Nous
**Sections** :
- Hero court avec photo d'équipe + mission statement
- Vision & Mission avec icônes ONU-style
- Historique & Ancrage national (timeline GSAP)
- "L'ACNU en chiffres" — KPI bar animée (personnes formées, projets lancés, partenaires)
- Équipe Exécutive — Grille de portraits (photo 1:1, nom, function, bio expandable)
- CTA → "Rejoignez-nous" / "Faire un don"

### 2.2 Page : `/programmes` — Programmes Phares
**3 Programmes présentés** :
1. **ICNU** — Institut Camerounais des Nations Unies (Formation & Capacités)
2. **Miss & Mister Cameroun Nations Unies** (Culture & Tradition)
3. **Simulation Internationale des Jeunes** (Diplomatie)

**Composants** :
- Hero avec carrousel horizontal des 3 programmes
- Cartes détaillées : Accroche + Description + CTA "S'inscrire" / "En savoir plus"
- Galerie photos par programme

### 2.3 Page : `/projets` + `/projets/:slug` — Projets Clés
**3 Projets avec pages dédiées** :
1. **Maison des Jeunes** — Espaces citoyens dans les régions
2. **AcnuMedia** — Plateforme d'information citoyenne
3. **Volontariat pour le Développement**

**Structure page projet** (héritée du Brainstorm) :
- Breadcrumb / retour
- Hero image + Titre + Accroche
- 2 colonnes : Description complète (gauche) + Encart résumé & CTA don (droite)
- Objectifs + Activités + Résultats & Indicateurs
- Témoignage (citation box premium)
- Galerie photos / ressources téléchargeables
- Related projects

### 2.4 Page : `/actualites` + `/actualites/:slug` — Actualités & Médias
- Grille de cartes actualités (image 16:9, tag/rubrique, titre, extrait, date)
- Filtres : "Tous / Programmes / Événements / Communiqués"
- Recherche plein texte
- Pagination (SEO-friendly)
- Page article : titre, méta, image, corps, partage social, articles liés
- Sidebar optionnelle : top articles, tags, CTA newsletter

### 2.5 Section : Newsletter (intégrée)
- Formulaire : Email + Préférence fréquence (Hebdo/Mensuel/Trimestriel)
- Case consentement RGPD
- Confirmation visuelle (double opt-in UX)
- Placement : en footer + section dédiée homepage + page `/newsletter`

### 2.6 Page : `/don` — Faire un Don
- Titre + intro émotionnelle
- Options de don : 10K XAF / 50K / 200K / Libre
- Toggle don récurrent mensuel
- Sécurité & transparence (badges Stripe/Paystack)
- Page "Merci" post-don

### 2.7 Widget Transverse : "Vérifier un Membre"
- Fixé en bas à droite de toutes les pages
- Clique → slide-in drawer avec champ de saisie matricule
- Résultat : mini-profil public (nom, rôle, statut, photo)
- Fallback : "Aucun membre trouvé"
- Mobile : FAB (Floating Action Button) → modal

## 3. Composants Réutilisables à Créer
- `PageHero.jsx` — Hero court réutilisable avec overlay + titre + breadcrumb
- `ProjectCard.jsx` — Carte projet avec image, badge, CTA
- `NewsCard.jsx` — Carte actualité compacte
- `KPIBar.jsx` — Barre de chiffres clés animée
- `TestimonialBox.jsx` — Citation premium avec guillemets décoratifs
- `NewsletterForm.jsx` — Formulaire newsletter avec validation
- `DonationWidget.jsx` — Widget de don avec montants pré-définis

## 4. Interactions & Animations (GSAP)
- ScrollTrigger reveal on sections (fade-up, stagger 0.15)
- Parallax textures dans les sections "Manifesto"
- Number counters animés sur les KPIs (GSAP `to()` avec `snap`)
- Cartes projets : hover lift + shadow + scale

## 5. SEO & Accessibilité
- Meta titles et descriptions uniques par page
- Heading hierarchy (un seul H1 par page)
- Semantic HTML5 (`<main>`, `<article>`, `<section>`, `<nav>`)
- `aria-labels` sur tous les widgets interactifs
- Contraste WCAG AA minimum

## 6. Critères de Succès
- [ ] Toutes les pages sont navigables via la Navbar
- [ ] Chaque page adopte le thème actif (3 variations)
- [ ] Contenu réel (textes du Brainstorm) intégré
- [ ] Responsive mobile-first
- [ ] GSAP animations fluides à 60fps
