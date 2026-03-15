# Audit 2 — Roadmap vers Production WorldClass
**Date**: 2026-03-14

---

## 🎯 OBJECTIF

Transformer le codebase actuel (4.9/10) en site premium production-ready (9.7/10) en 4-5 semaines.

---

## 📅 PLAN D'EXÉCUTION

### SPRINT 0 — HOTFIX (1 jour)
**Objectif**: Débloquer le build

#### Tâches
- [ ] Fix import `Cursor` → `MousePointer2` dans `Features.jsx`
- [ ] Vérifier build production `npm run build`
- [ ] Tester dev server `npm run dev`
- [ ] Commit: "fix: replace Cursor with MousePointer2 in Features"

**Livrables**: Build fonctionnel ✅

---

### SPRINT 1 — FONDATIONS (5 jours)
**Objectif**: Contenu FR + Identité visuelle + Routes Phase C

#### Jour 1-2: Contenu FR
- [ ] Remplacer Hero: titre, pitch, CTAs (Brainstorm2)
- [ ] Remplacer Features: ICNU, Miss & Mister, Simulation
- [ ] Remplacer Philosophy: Manifesto ACNU
- [ ] Remplacer Membership: Textes adhésion
- [ ] Remplacer Footer: Liens, newsletter, mentions légales
- [ ] Commit: "content: integrate French copy from Brainstorm2"

#### Jour 3: Identité Visuelle
- [ ] Créer `LionWatermark.jsx` — SVG filigrane doré
- [ ] Intégrer lion en `body::after` ou Hero background
- [ ] Créer `NdopPattern.jsx` — Motif diamond
- [ ] Ajouter bande tricolore dans Footer
- [ ] Commit: "design: add lion watermark and cultural patterns"

#### Jour 4-5: Routes Phase C
- [ ] Créer routes dans `App.jsx`:
  - `/a-propos`
  - `/programmes`
  - `/projets`
  - `/projets/:slug`
  - `/actualites`
  - `/actualites/:slug`
  - `/don`
  - `/newsletter`
- [ ] Créer pages vides avec PageHero
- [ ] Tester navigation
- [ ] Commit: "feat: add Phase C routes and placeholder pages"

**Livrables**: Site en FR avec identité ACNU + navigation complète

---

### SPRINT 2 — COMPOSANTS PHASE C (4 jours)
**Objectif**: Créer composants réutilisables

#### Jour 1: Composants Base
- [ ] `PageHero.jsx` — Hero court avec breadcrumb
- [ ] `ProjectCard.jsx` — Card projet avec image + badge
- [ ] `NewsCard.jsx` — Card actualité 16:9
- [ ] Commit: "feat: add PageHero, ProjectCard, NewsCard components"

#### Jour 2: Composants Data
- [ ] `KPIBar.jsx` — Chiffres clés animés GSAP
- [ ] `TestimonialBox.jsx` — Citation premium
- [ ] Commit: "feat: add KPIBar and TestimonialBox components"

#### Jour 3: Composants Forms
- [ ] `NewsletterForm.jsx` — Email + fréquence + RGPD
- [ ] `DonationWidget.jsx` — Montants + récurrent
- [ ] Commit: "feat: add NewsletterForm and DonationWidget"

#### Jour 4: Intégration
- [ ] Tester tous les composants dans Storybook (optionnel)
- [ ] Vérifier responsive mobile
- [ ] Commit: "test: verify Phase C components responsiveness"

**Livrables**: 7 composants réutilisables testés

---

### SPRINT 3 — PAGES PUBLIQUES (5 jours)
**Objectif**: Implémenter toutes les pages Phase C

#### Jour 1: À Propos
- [ ] `/a-propos` — Hero + Vision/Mission
- [ ] Section Historique (timeline GSAP)
- [ ] Section KPIs ("L'ACNU en chiffres")
- [ ] Section Équipe (grille portraits)
- [ ] Commit: "feat: implement /a-propos page"

#### Jour 2: Programmes
- [ ] `/programmes` — Hero + 3 cards
- [ ] ICNU: description + CTA inscription
- [ ] Miss & Mister: description + CTA participer
- [ ] Simulation: description + CTA postuler
- [ ] Commit: "feat: implement /programmes page"

#### Jour 3: Projets
- [ ] `/projets` — Grid de ProjectCards
- [ ] `/projets/maison-des-jeunes` — Page complète
- [ ] `/projets/acnumedia` — Page complète
- [ ] `/projets/volontariat` — Page complète
- [ ] Commit: "feat: implement /projets pages"

#### Jour 4: Actualités
- [ ] `/actualites` — Grid + Filters + Search
- [ ] Mock data: 8 articles
- [ ] `/actualites/:slug` — Article template
- [ ] Partage social + articles liés
- [ ] Commit: "feat: implement /actualites pages"

#### Jour 5: Don + Newsletter
- [ ] `/don` — Page donation avec DonationWidget
- [ ] Page "Merci" post-don
- [ ] `/newsletter` — Gestion préférences
- [ ] Commit: "feat: implement /don and /newsletter pages"

**Livrables**: 8 pages publiques complètes avec contenu réel

---

### SPRINT 4 — PORTAIL ADMIN (2 jours)
**Objectif**: Compléter Phase B

#### Jour 1: Admin View
- [ ] Role toggle Membre/Admin dans PortalPage
- [ ] Section KPIs globaux (Funds, Beneficiaries, Projects)
- [ ] Section Ongoing Initiatives (progress bars)
- [ ] Commit: "feat: add admin view to portal"

#### Jour 2: Admin Features
- [ ] Section Pending Approvals (membres + projets)
- [ ] Notification center avec badge count
- [ ] Modal Sign Out avec confirmation
- [ ] Commit: "feat: add admin features and notifications"

**Livrables**: Portail membre complet avec admin view

---

### SPRINT 5 — POLISH & QA (5 jours)
**Objectif**: Atteindre WorldClass

#### Jour 1: Assets Réels
- [ ] Remplacer toutes les images placeholder
- [ ] Intégrer photos équipe exécutive
- [ ] Intégrer photos événements/terrain
- [ ] Optimiser images (WebP, lazy loading)
- [ ] Commit: "assets: replace placeholders with real photos"

#### Jour 2: Mobile Responsive
- [ ] Tester toutes les pages sur mobile
- [ ] Fix sidebar burger menu
- [ ] Fix MemberWidget FAB mode
- [ ] Tester tablette
- [ ] Commit: "fix: mobile responsive issues"

#### Jour 3: SEO & Performance
- [ ] Ajouter meta tags sur toutes les pages
- [ ] Ajouter Open Graph tags
- [ ] Optimiser bundle size
- [ ] Lazy load routes
- [ ] Run Lighthouse audit
- [ ] Commit: "perf: SEO optimization and bundle size reduction"

#### Jour 4: Accessibilité
- [ ] Audit WCAG AA complet
- [ ] Fix focus states
- [ ] Ajouter alt text manquants
- [ ] Tester keyboard navigation
- [ ] Tester screen reader
- [ ] Commit: "a11y: WCAG AA compliance"

#### Jour 5: Final QA
- [ ] Tester tous les flows utilisateur
- [ ] Vérifier 3 thèmes sur toutes les pages
- [ ] Vérifier animations 60fps
- [ ] Fix bugs mineurs
- [ ] Documentation README
- [ ] Commit: "docs: update README for production"

**Livrables**: Site production-ready 9.7/10

---

## 📊 CHECKLIST PRODUCTION

### Technique
- [ ] Build production sans erreurs
- [ ] Bundle size < 500KB (gzipped)
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 95
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Mobile responsive 100%
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge

### Contenu
- [ ] Tous les textes en FR (Brainstorm2)
- [ ] Photos réelles (équipe, événements)
- [ ] Lion filigrane visible
- [ ] Motifs culturels intégrés
- [ ] Bande tricolore footer
- [ ] 3 programmes documentés
- [ ] 3 projets documentés
- [ ] 8+ articles actualités

### Fonctionnalités
- [ ] Navigation complète (8 pages publiques)
- [ ] Recherche membre fonctionnelle
- [ ] Login/logout portail
- [ ] Dashboard membre complet
- [ ] Admin view fonctionnel
- [ ] Newsletter signup
- [ ] Donation flow (mock)
- [ ] 3 thèmes switchables
- [ ] Animations GSAP fluides

### Accessibilité
- [ ] WCAG AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader compatible
- [ ] Focus states visibles
- [ ] Alt text complets
- [ ] Contraste suffisant

### SEO
- [ ] Meta titles uniques
- [ ] Meta descriptions uniques
- [ ] Open Graph tags
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Canonical URLs
- [ ] Structured data (JSON-LD)

---

## 🚀 DÉPLOIEMENT

### Pré-production
1. [ ] Créer branche `production`
2. [ ] Merge tous les sprints
3. [ ] Run tests complets
4. [ ] Build production
5. [ ] Deploy sur staging (Vercel/Netlify)
6. [ ] QA finale sur staging
7. [ ] Validation client

### Production
1. [ ] Configurer domaine custom
2. [ ] Configurer SSL
3. [ ] Configurer analytics (Google Analytics)
4. [ ] Configurer monitoring (Sentry)
5. [ ] Deploy production
6. [ ] Smoke tests
7. [ ] Annonce lancement

---

## 📈 POST-LANCEMENT

### Semaine 1
- [ ] Monitoring erreurs
- [ ] Analytics trafic
- [ ] Feedback utilisateurs
- [ ] Hotfixes si nécessaire

### Mois 1
- [ ] Analyse performance réelle
- [ ] Optimisations basées sur data
- [ ] Ajout features P2 (tests, multilingue)

### Mois 2-3
- [ ] Backend réel (Supabase)
- [ ] CMS actualités
- [ ] Paiement réel (Stripe/Paystack)
- [ ] Features P3 (search, analytics)

---

## 🎯 CRITÈRES DE SUCCÈS

### Technique
- ✅ Build production sans erreurs
- ✅ Lighthouse score moyen > 92
- ✅ 0 erreurs console
- ✅ Mobile responsive 100%

### Business
- ✅ Toutes les pages Phase C live
- ✅ Portail membre fonctionnel
- ✅ Identité ACNU complète
- ✅ Contenu FR intégré

### Utilisateur
- ✅ Navigation intuitive
- ✅ Temps de chargement < 3s
- ✅ Animations fluides
- ✅ Accessible WCAG AA

---

## 📝 NOTES POUR L'AGENT DE CODAGE

### Priorités Absolues
1. **Fix build d'abord** — Rien ne marche si ça compile pas
2. **Contenu FR ensuite** — Le site doit parler français
3. **Routes Phase C** — Navigation complète avant détails
4. **Mobile responsive** — Tester en continu, pas à la fin

### Pièges à Éviter
1. **Ne pas casser Phase A/B** — Tester après chaque modif
2. **Ne pas sur-optimiser trop tôt** — Fonctionnel d'abord, perf ensuite
3. **Ne pas ignorer les warnings Tailwind** — Ils sont non-bloquants mais à documenter
4. **Ne pas oublier les 3 thèmes** — Chaque nouveau composant doit supporter savane/forêt/nuit

### Best Practices
1. **Commits atomiques** — 1 feature = 1 commit
2. **Tester en dev avant build** — `npm run dev` après chaque changement
3. **Vérifier mobile régulièrement** — Chrome DevTools responsive mode
4. **Documenter les décisions** — Commenter le code complexe

### Ressources
- Textes: `Projects/ACNU/Brainstorm2.md`
- Specs: `phase-B/PRD.md`, `phase-C/PRD.md`
- Tasks: `phase-B/TASKS.md`, `phase-C/TASKS.md`
- Audit précédent: `AUDIT/audit1/`

---

**Estimation finale**: 22.5 jours dev = 4-5 semaines avec 1 dev full-time

**Score cible**: 9.7/10 WorldClass Premium Production-Ready ✨
