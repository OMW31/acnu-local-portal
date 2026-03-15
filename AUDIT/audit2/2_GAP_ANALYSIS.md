# Audit 2 — Analyse des Gaps vs Vision WorldClass
**Date**: 2026-03-14

---

## 🎯 VISION CIBLE (Projects/ACNU)

**Site Premium ONU-like** avec:
- Identité camerounaise forte (lion, tricolore, motifs Ndop)
- 3 programmes: ICNU, Miss & Mister, Simulation
- 3 projets: Maison des Jeunes, Acnumedia, Volontariat
- Pages: Accueil, À propos, Programmes, Projets, Actualités, Équipe, Don, Newsletter
- Portail membre avec dashboard + admin view
- Multilingue FR/EN (FR prioritaire)
- Accessibilité WCAG AA
- Performance 60fps, SEO optimisé

---

## 📊 GAP MATRIX

### 1. CONTENU & COPYWRITING

| Élément | Spec (Projects/ACNU) | Actuel (acnu-app) | Gap | Priorité |
|---------|---------------------|-------------------|-----|----------|
| Hero titre | "Ensemble, former les leaders de demain" (FR) | "Forming the Leaders of Tomorrow" (EN) | 🔴 | P0 |
| Hero pitch | Pitch ACNU complet (Brainstorm2) | Texte générique | 🔴 | P0 |
| Programmes | ICNU, Miss & Mister, Simulation | Diagnostic Shuffler, Telemetry, Protocol (Cinematic Artifacts) | 🔴 | P0 |
| Projets | Maison des Jeunes, Acnumedia, Volontariat | Aucun | 🔴 | P0 |
| À propos | Vision/Mission/Historique/Équipe | Absent | 🔴 | P0 |
| Actualités | Feed + articles | Absent | 🔴 | P1 |
| Newsletter | Form avec fréquence | Absent | 🟡 | P1 |
| Don | Page dédiée + montants | Absent | 🟡 | P1 |

**Action**: Intégrer tous les textes de `Brainstorm2.md` dans les composants

---

### 2. IDENTITÉ VISUELLE

| Élément | Spec | Actuel | Gap | Priorité |
|---------|------|--------|-----|----------|
| Palette principale | Bleu #07263B, Doré #F6C84B, Tricolore | Thèmes abstraits (savane/forêt/nuit) | 🟡 | P1 |
| Lion filigrane | SVG vectoriel doré translucide | Absent | 🔴 | P0 |
| Motifs Ndop | Diamond pattern overlay | Absent | 🟡 | P1 |
| Bande tricolore | Footer + sections clés | Absent | 🟡 | P1 |
| Typographie | Manrope + Inter + Playfair | Plus Jakarta + Space Grotesk + Inter | 🟡 | P2 |
| Photos réelles | Équipe, événements, terrain | Placeholders | 🔴 | P0 |

**Note**: Les 3 thèmes actuels (savane/forêt/nuit) sont culturellement pertinents et bien implémentés. Ils peuvent coexister avec l'identité ACNU officielle comme "modes d'affichage" optionnels.

**Action**: 
- Ajouter lion SVG en `body::after` ou section backgrounds
- Créer composant `NdopPattern` réutilisable
- Intégrer bande tricolore dans Footer
- Remplacer placeholders par vraies photos

---

### 3. ARCHITECTURE & ROUTING

| Page | Spec | Actuel | Gap | Priorité |
|------|------|--------|-----|----------|
| `/` | Homepage complète | ✅ Implémenté (contenu à remplacer) | 🟡 | P0 |
| `/a-propos` | Qui sommes-nous + équipe | ❌ Route absente | 🔴 | P0 |
| `/programmes` | Hub 3 programmes | ❌ Route absente | 🔴 | P0 |
| `/projets` | Liste projets | ❌ Route absente | 🔴 | P0 |
| `/projets/:slug` | Détail projet | ❌ Route absente | 🔴 | P0 |
| `/actualites` | Feed news | ❌ Route absente | 🔴 | P1 |
| `/actualites/:slug` | Article | ❌ Route absente | 🔴 | P1 |
| `/equipe` | Équipe exécutive | ❌ Route absente | 🟡 | P1 |
| `/don` | Donation flow | ❌ Route absente | 🟡 | P1 |
| `/newsletter` | Gestion abonnement | ❌ Route absente | 🟡 | P2 |
| `/connexion` | Login portail | ✅ Implémenté | ✅ | - |
| `/portail` | Dashboard membre | ✅ Implémenté (admin view manquant) | 🟡 | P1 |

**Action**: Créer toutes les routes Phase C + pages correspondantes

---

### 4. COMPOSANTS RÉUTILISABLES

| Composant | Spec | Actuel | Gap | Priorité |
|-----------|------|--------|-----|----------|
| Navbar | ✅ | ✅ Implémenté | ✅ | - |
| Hero | Avec lion + CTA don | Générique | 🟡 | P0 |
| Footer | Complet avec tricolore | Basique | 🟡 | P0 |
| MemberWidget | ✅ | ✅ Implémenté | ✅ | - |
| ThemeSwitcher | ✅ | ✅ Implémenté | ✅ | - |
| PageHero | Hero court réutilisable | ❌ Absent | 🔴 | P0 |
| ProjectCard | Card projet avec badge | ❌ Absent | 🔴 | P0 |
| NewsCard | Card actualité | ❌ Absent | 🔴 | P1 |
| KPIBar | Chiffres clés animés | ❌ Absent | 🟡 | P1 |
| TestimonialBox | Citation premium | ❌ Absent | 🟡 | P1 |
| NewsletterForm | Form avec fréquence | ❌ Absent | 🟡 | P1 |
| DonationWidget | Montants + récurrent | ❌ Absent | 🟡 | P1 |

**Action**: Créer 7 nouveaux composants Phase C

---

### 5. FONCTIONNALITÉS

| Feature | Spec | Actuel | Gap | Priorité |
|---------|------|--------|-----|----------|
| Système de thèmes | 3 angles culturels | ✅ Implémenté | ✅ | - |
| Animations GSAP | ScrollTrigger, parallax | ✅ Implémenté | ✅ | - |
| Recherche membre | Widget fixe matricule | ✅ Implémenté | ✅ | - |
| Auth membre | Login + localStorage | ✅ Implémenté | ✅ | - |
| Dashboard membre | Stats + charts + forms | ✅ Implémenté | ✅ | - |
| Admin view | KPIs globaux + approvals | ❌ Absent | 🟡 | P1 |
| Newsletter signup | Double opt-in + fréquence | ❌ Absent | 🟡 | P1 |
| Donation flow | Stripe/Paystack | ❌ Absent | 🟡 | P1 |
| Actualités CMS | CRUD articles | ❌ Absent | 🔴 | P2 |
| Multilingue FR/EN | i18n | ❌ Absent | 🟡 | P2 |
| Search global | Site-wide | ❌ Absent | 🟡 | P3 |

**Action**: Implémenter admin view + newsletter + donation (P1)

---

### 6. TECHNIQUE

| Aspect | Spec | Actuel | Gap | Priorité |
|--------|------|--------|-----|----------|
| Build | Production-ready | ❌ Cassé (import Cursor) | 🔴 | P0 |
| Tests | Unit + E2E | ❌ Aucun | 🟡 | P2 |
| SEO | Meta tags complets | ⚠️ Partiel | 🟡 | P1 |
| Performance | Lighthouse >90 | ⚠️ Non testé | 🟡 | P1 |
| Accessibilité | WCAG AA | ⚠️ Partiel | 🟡 | P1 |
| Mobile | Responsive complet | ⚠️ Non testé | 🟡 | P0 |
| Backend | Supabase/Firebase | ❌ Mock data | 🟡 | P3 |
| CI/CD | Deploy auto | ❌ Absent | 🟡 | P2 |

**Action**: Fix build P0, tester mobile P0, SEO P1

---

## 🎯 GAPS PAR PRIORITÉ

### P0 — BLOQUANTS (Must-fix avant production)
1. ❌ **Build cassé** — Import Cursor
2. ❌ **Contenu FR** — Remplacer tous les textes EN/génériques
3. ❌ **Lion filigrane** — Identité visuelle manquante
4. ❌ **Photos réelles** — Remplacer placeholders
5. ❌ **Routes Phase C** — 8 pages publiques absentes
6. ❌ **Composants Phase C** — 7 composants manquants
7. ⚠️ **Mobile responsive** — Non testé

### P1 — CRITIQUES (Nécessaires pour WorldClass)
1. ❌ **Admin view** — Dashboard incomplet
2. ❌ **Newsletter** — Feature absente
3. ❌ **Donation** — Flow absent
4. ❌ **Actualités** — CMS absent
5. 🟡 **Motifs culturels** — Ndop, tricolore
6. 🟡 **SEO** — Meta tags incomplets
7. 🟡 **Performance** — Non auditée

### P2 — IMPORTANTES (Polish premium)
1. 🟡 **Tests** — Aucune couverture
2. 🟡 **Multilingue** — FR/EN
3. 🟡 **CI/CD** — Deploy auto
4. 🟡 **Typographie** — Fonts officielles

### P3 — NICE-TO-HAVE (Post-MVP)
1. 🟡 **Backend réel** — Supabase
2. 🟡 **Search global** — Site-wide
3. 🟡 **Analytics** — Tracking

---

## 📊 SCORE WORLDCLASS

| Dimension | Poids | Score Actuel | Score Cible | Gap |
|-----------|-------|--------------|-------------|-----|
| Architecture | 15% | 8/10 | 10/10 | -2 |
| Design System | 20% | 6/10 | 10/10 | -4 |
| Contenu | 25% | 2/10 | 10/10 | -8 |
| Fonctionnalités | 20% | 5/10 | 10/10 | -5 |
| Performance | 10% | ?/10 | 9/10 | ? |
| Accessibilité | 10% | 6/10 | 9/10 | -3 |
| **TOTAL** | 100% | **4.9/10** | **9.7/10** | **-4.8** |

**Verdict**: Le projet est à **50% du niveau WorldClass**. Les fondations sont solides mais le contenu, l'identité visuelle et les pages publiques sont absents.

---

## 🚀 EFFORT ESTIMÉ

| Phase | Tâches | Jours Dev | Priorité |
|-------|--------|-----------|----------|
| Fix Build | 1 bug | 0.5j | P0 |
| Contenu FR | Intégration textes | 2j | P0 |
| Identité visuelle | Lion + motifs + photos | 3j | P0 |
| Routes Phase C | 8 pages | 5j | P0 |
| Composants Phase C | 7 composants | 4j | P0 |
| Admin view | Dashboard extension | 2j | P1 |
| Newsletter + Don | 2 features | 3j | P1 |
| Mobile testing | Responsive audit | 1j | P0 |
| SEO + Perf | Optimization | 2j | P1 |
| **TOTAL** | - | **22.5j** | - |

**Estimation**: 4-5 semaines avec 1 dev full-time pour atteindre production-ready WorldClass.

---

Voir `3_ROADMAP.md` pour le plan d'action détaillé.
