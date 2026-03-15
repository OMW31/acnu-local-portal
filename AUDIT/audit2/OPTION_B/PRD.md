# Option B — PRD: Functional Artifacts Adaptés ACNU
**Version**: 1.0 | **Date**: 2026-03-14

---

## OBJECTIF

Conserver les interactions cinématiques premium (Shuffler, Typewriter, Scheduler) en adaptant le contenu aux programmes ACNU réels.

---

## ARTIFACTS À ADAPTER

### 1. ICNU Formation Shuffler
**Remplace**: Diagnostic Shuffler  
**Contenu**: 3 modules de formation ICNU qui cyclent  
**Labels**: "Leadership", "Plaidoyer", "Gestion de Projet"  
**Animation**: Conservée (vertical cycle, spring bounce)

### 2. Acnumedia Live Feed
**Remplace**: Telemetry Typewriter  
**Contenu**: Messages actualités en temps réel  
**Messages**: 
- "Nouveau reportage: Maison des Jeunes Douala"
- "Interview: Jeune volontaire à Yaoundé"
- "Publication: Rapport annuel ICNU 2025"
**Animation**: Conservée (typing char-by-char, blinking cursor)

### 3. Calendrier Événements ACNU
**Remplace**: Protocol Scheduler  
**Contenu**: Grid calendrier avec événements réels  
**Événements**: Formations ICNU, Simulations, Concours Miss & Mister  
**Animation**: Conservée (cursor moves, clicks, highlights)

---

## SPECS TECHNIQUES

### Artifact 1: ICNU Shuffler
```jsx
const modules = [
  { id: 1, title: "Leadership", icon: "Users", color: "var(--accent)" },
  { id: 2, title: "Plaidoyer", icon: "MessageSquare", color: "var(--primary)" },
  { id: 3, title: "Gestion de Projet", icon: "Briefcase", color: "var(--accent)" }
];
```
**Cycle**: 3s interval, `array.unshift(array.pop())`  
**Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)`

### Artifact 2: Acnumedia Feed
```jsx
const messages = [
  "📰 Nouveau reportage: Maison des Jeunes Douala",
  "🎤 Interview: Jeune volontaire à Yaoundé",
  "📊 Publication: Rapport annuel ICNU 2025",
  "🎓 Formation: 50 jeunes certifiés en leadership",
  "🌍 Simulation: Modèle ONU ce weekend"
];
```
**Typing**: 50ms/char, 2s pause entre messages  
**Cursor**: Blink 0.8s, accent color

### Artifact 3: Calendrier ACNU
```jsx
const events = [
  { day: "M", label: "Formation ICNU", active: true },
  { day: "W", label: "Simulation ONU", active: false },
  { day: "S", label: "Concours Miss & Mister", active: false }
];
```
**Animation**: Cursor enters → moves to day → clicks → highlights → moves to "Voir"  
**Duration**: 4s total, loops

---

## CRITÈRES DE SUCCÈS

- [ ] Animations GSAP conservées à 60fps
- [ ] Contenu ACNU intégré (pas de placeholder)
- [ ] 3 thèmes supportés (savane/forêt/nuit)
- [ ] Mobile responsive
- [ ] Accessible (keyboard nav, aria-labels)
