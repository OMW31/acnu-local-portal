# Phase B — Architecture Decisions Record (ADR)
**Version**: 1.0 | **Date**: 2026-03-14

---

## ADR-01: Theming via CSS Custom Properties + `data-theme` attribute

**Decision**: Utiliser `[data-theme="xxx"]` sur `<html>` au lieu de classes CSS (`.theme-diplomatic`).

**Rationale**: 
- L'approche de l'agent Orchids (via `data-theme`) est plus propre et plus scalable.
- Permet de changer **tout** (couleurs, fonts, radius, opacités) via un seul attribut.
- Compatible avec Tailwind v4 et les CSS layers.
- Notre actuel `ThemeContext` devra migrer de `className` vers `setAttribute('data-theme', theme)`.

**Impact**: Réécriture de `ThemeContext.jsx` et `index.css`.

---

## ADR-02: React Router pour Navigation Multi-Pages

**Decision**: Installer `react-router-dom` v7 pour gérer les routes publiques et protégées.

**Rationale**:
- Le projet actuel est un SPA mono-page. Le portail nécessite des routes séparées.
- L'agent Lovable utilise `BrowserRouter` + `Routes` — pattern standard.
- L'agent Orchids fait la même chose.

**Routes prévues**:
```
/               → HomePage (Landing existante)
/login          → LoginPage (Glassmorphism + Lion filigrane)
/portal         → PortalPage (Dashboard — Protected)
/portal/profile → ProfileTab
/portal/projects→ ProjectsTab
/portal/reports → ReportsTab
/portal/stats   → StatsTab
```

---

## ADR-03: Dashboard Layout — Sidebar + Tab State (pas de sous-routes)

**Decision**: Le portail utilise un state `activeTab` pour switcher entre les vues (Dashboard, Profile, Projects, Reports, Stats) au lieu de sous-routes.

**Rationale**:
- Plus fluide (pas de rechargement de layout).
- Permet des transitions animées entre tabs.
- Les deux agents parallèles utilisent ce pattern.
- Les sous-routes pourront être ajoutées plus tard si nécessaire.

---

## ADR-04: Charts en SVG pur + GSAP (pas de librairie chart)

**Decision**: Coder les donut charts et bar charts en SVG natif animé avec GSAP.

**Rationale**:
- L'agent Lovable utilise `<motion.circle>` avec `strokeDasharray` pour les donuts — excellente approche.
- GSAP est déjà installé dans notre projet. Pas besoin d'ajouter Chart.js ou Recharts.
- SVG pur = contrôle total du style per-theme (couleur de stroke, glow, etc.).
- Performance : 60fps garanti avec GSAP vs re-renders React d'une lib chart.

---

## ADR-05: Mock Auth System (localStorage)

**Decision**: Utiliser `localStorage` pour simuler l'authentification (matricule/password === demo/demo).

**Rationale**:
- Phase B est frontend-only. Pas de backend.
- Permet de tester le flow login → portal → logout.
- L'agent Lovable utilise exactement ce pattern.

---

## ADR-06: Theme Variations — Composition Changes per Component

**Decision**: Ne pas simplement swapper des couleurs. Chaque thème aura des variations de :
1. `border-radius` (différent par thème via `--radius` / `--radius-lg`)
2. `font-family` (heading, body, drama, mono — 4 variables par thème)
3. `color-scheme` (light pour Savane, dark pour Forêt et Nuit)
4. `noise-opacity` (varie de 0.04 à 0.06)
5. Composition subtile (ex: photo ronde vs carrée, glow vs flat shadow)

**Rationale**: Répondre à l'exigence "No 2 themes should feel static or repetitive". C'est ce qui rend l'approche Orchids supérieure.

---

## ADR-07: Extraction des Patterns Parallèles

**Ce qu'on prend de Lovable** :
- ✅ Structure `PortalPage` avec tabs + sidebar
- ✅ SVG donut chart pattern (`strokeDasharray`)
- ✅ Animated bar chart pattern
- ✅ Mobile sidebar drawer avec overlay
- ✅ Mock data structures (members, projects, reports, events)

**Ce qu'on prend d'Orchids** :
- ✅ Système de thèmes CSS variables complet (`--bg`, `--bg-card`, `--accent`, `--accent-glow`, etc.)
- ✅ `ThemeContext` avec `data-theme` attribute
- ✅ `.card-premium` hover effect pattern
- ✅ `.btn-magnetic` implementation
- ✅ Noise overlay via `body::before` (inline SVG filter)
- ✅ Cultural patterns (Ndop Diamond, Spider Web)
- ✅ Noms de thèmes culturellement enracinés (Savane/Forêt/Nuit)
- ✅ Welcome banner avec Ndop pattern overlay

**Ce qu'on améliore par rapport aux deux** :
- 🔥 Animations GSAP au lieu de Framer Motion (déjà dans nos deps)
- 🔥 Composition variations par thème (pas juste couleurs)
- 🔥 Filigrane lion en fond de la Login page
- 🔥 Admin/Member role distinction
