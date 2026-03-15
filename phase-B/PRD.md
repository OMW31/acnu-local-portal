# Phase B — PRD: Member Portal Dashboard
**Version**: 1.0 | **Date**: 2026-03-14 | **Author**: Senior Knowledge Architect

---

## 1. Vision
Transformer le portail membre ACNU en un **Command Center Premium** avec 3 thèmes visuels culturellement enracinés. Chaque thème doit offrir une expérience **unique, intentionnelle et immersive** — pas simplement un swap de couleurs, mais un vrai changement d'atmosphère (typographie, radius, densité, mood).

## 2. Utilisateurs Cibles

| Rôle | Accès | Objectif Principal |
|------|-------|-------------------|
| **Membre Standard** | Dashboard personnel, profil, projets, rapports, stats | Suivre son engagement, soumettre des projets, télécharger ses certificats |
| **Exécutif / Admin** | Tout ci-dessus + KPIs globaux, validation membres/projets, gestion news | Piloter l'association, valider les demandes, publier du contenu |

## 3. Les 3 Thèmes (Branded Showcase)

Chaque thème change : **palette, typographie, border-radius, opacité du noise, spacing density, et hero gradient**.

### 🌅 Thème 1 — "Savane Dorée" (Golden Savannah)
- **Mood** : Chaleur diurne, optimisme africain, lumière dorée
- **Palette** : Fonds crème `#FAF6F0`, accent or chaud `#C9893B`, texte brun `#2C1810`
- **Typo** : `Plus Jakarta Sans` (heading) + `Cormorant Garamond` (drama) + `IBM Plex Mono` (data)
- **Feel** : Cartes lumineuses, ombres douces, radius généreux `2.5rem`. Formulaires clairs sur fond blanc.

### 🌿 Thème 2 — "Forêt Équatoriale" (Equatorial Forest)
- **Mood** : Profondeur tropicale, tech-nature, émergeant
- **Palette** : Fonds sombres verts `#0F1F17`, accent vert néon `#4ADE80`, texte clair `#E8F0EB`
- **Typo** : `Space Grotesk` (heading) + `DM Serif Display` (drama) + `Space Mono` (data)
- **Feel** : Cards avec border glow vert, glassmorphism profond, radius `2rem`. Ambiance "biotech lab".

### 🌙 Thème 3 — "Nuit de Yaoundé" (Yaoundé Night)
- **Mood** : Élégance diplomatique nocturne, prestige, autorité
- **Palette** : Fonds obsidien `#0D0D16`, accent champagne/or `#C9A84C`, texte ivoire `#F0EDE8`
- **Typo** : `Inter` (heading) + `Playfair Display` (drama) + `JetBrains Mono` (data)
- **Feel** : Glassmorphism sombre avec halos dorés, radius `3rem` (ultra-arrondis). Esthétique "private members' club". **C'est le thème des mockups fournis.**

## 4. Fonctionnalités Clés

### 4.1 Login Page (Shared)
- Logo ACNU + filigrane lion en arrière-plan
- Champs Matricule + Mot de passe
- Bouton CTA accent + lien "Mot de passe oublié" / "Créer un compte"
- Modal "Sign Out" avec confirmation

### 4.2 Dashboard Membre
- **Profile Card** : Photo, Nom, Matricule, Badge "Active Member", Région
- **Stats personnelles** : Sessions suivies, Heures terrain, Certifications, Réseau
- **Participation Stats** : Donut charts SVG animés (GSAP) pour Event Attendance + Volunteer Hours
- **Submit a Project** : Formulaire (Titre, Description, Responsable, Documents)
- **Download Reports** : Liste PDF téléchargeables (Rapport annuel, Certificat ICNU)
- **Activity Feed** : Timeline des dernières actions

### 4.3 Dashboard Admin (Extension)
- **KPIs Globaux** : Funds Raised, Ongoing Initiatives (progress bars colorées), Beneficiaries
- **Impact Overview** : Bar chart animé (Funds vs Beneficiaires par mois)
- **Pending Approvals** : Liste des nouveaux membres / projets à valider
- **Notifications Center** : Bell icon avec badge count

### 4.4 Theme Variation per Component

> [!IMPORTANT]
> Chaque thème ne se contente pas de changer les couleurs. Les **compositions** des widgets varient aussi :

| Composant | Savane Dorée | Forêt Équatoriale | Nuit de Yaoundé |
|-----------|-------------|-------------------|-----------------|
| Sidebar | Fond blanc, icônes brun doré, indicator bar latérale dorée | Fond vert foncé, icônes vert néon, glow effect | Fond obsidien, icônes or, glassmorphism border |
| Profile Card | Photo ronde, fond blanc, badge plat doré | Photo carrée rounded, fond dark, badge pill vert | Photo ronde+border dorée, fond glass, badge champagne glow |
| Stats Grid | Chiffres grands brun, trend arrows dorées | Chiffres néon, trend en vert vif | Chiffres ivoire, trend dorées subtiles |
| Charts | Donut or/brun sur fond crème | Donut vert néon sur fond dark | Donut or/champagne sur fond obsidien |
| Submit Form | Fond blanc, inputs clairs, CTA doré | Fond dark, inputs glass, CTA vert | Fond glass dark, inputs sombres, CTA champagne |

## 5. Hors-Scope Phase B
- Backend réel (Supabase/Firebase) — uniquement mock data
- Paiement Stripe/Paystack
- Vrai upload de fichiers
- Multilingue (FR/EN)

## 6. Critères de Succès
- [ ] Les 3 thèmes sont switchables en temps réel via le "Director Mode"
- [ ] Chaque thème "feels different" — pas juste un recoloriage
- [ ] Dashboard Membre et Admin sont fonctionnels avec mock data
- [ ] Animations GSAP à 60fps (donut charts, bar charts, transitions)
- [ ] Mobile responsive (sidebar → burger menu drawer)
