# Option B — Tasks: Adaptation Functional Artifacts
**Estimation**: 2 jours dev

---

## ARTIFACT 1: ICNU SHUFFLER (4h)

### Tâches
- [ ] Dupliquer `DiagnosticShuffler` → `ICNUShuffler`
- [ ] Remplacer labels: "Bio/Metrics/Protocol" → "Leadership/Plaidoyer/Gestion"
- [ ] Ajouter icônes Lucide: Users, MessageSquare, Briefcase
- [ ] Adapter couleurs: utiliser `--accent` et `--primary`
- [ ] Tester cycle animation (3s interval)
- [ ] Vérifier 3 thèmes (savane/forêt/nuit)
- [ ] Test mobile responsive

### Code Changes
**Fichier**: `src/components/Features.jsx`  
**Fonction**: `DiagnosticShuffler()` → `ICNUShuffler()`  
**Lignes**: ~50

---

## ARTIFACT 2: ACNUMEDIA FEED (5h)

### Tâches
- [ ] Dupliquer `TelemetryTypewriter` → `AcnumediaFeed`
- [ ] Remplacer messages génériques par actualités ACNU
- [ ] Ajouter emojis: 📰 🎤 📊 🎓 🌍
- [ ] Adapter label: "Live Feed" → "Actualités en Direct"
- [ ] Conserver typing animation (50ms/char)
- [ ] Conserver blinking cursor (accent color)
- [ ] Tester loop messages (5 messages)
- [ ] Vérifier 3 thèmes
- [ ] Test mobile responsive

### Code Changes
**Fichier**: `src/components/Features.jsx`  
**Fonction**: `TelemetryTypewriter()` → `AcnumediaFeed()`  
**Lignes**: ~60

---

## ARTIFACT 3: CALENDRIER ACNU (6h)

### Tâches
- [ ] Dupliquer `ProtocolScheduler` → `CalendrierACNU`
- [ ] Remplacer grid générique par événements ACNU
- [ ] Adapter labels jours: S M T W T F S → L M M J V S D (FR)
- [ ] Ajouter événements: Formation ICNU (Lundi), Simulation (Mercredi), Concours (Samedi)
- [ ] Adapter bouton: "Save" → "Voir Calendrier"
- [ ] Conserver cursor animation (4s loop)
- [ ] Adapter couleurs highlights (accent per theme)
- [ ] Tester 3 thèmes
- [ ] Test mobile responsive

### Code Changes
**Fichier**: `src/components/Features.jsx`  
**Fonction**: `ProtocolScheduler()` → `CalendrierACNU()`  
**Lignes**: ~80

---

## INTÉGRATION (1h)

### Tâches
- [ ] Remplacer dans `Features()`:
  ```jsx
  <DiagnosticShuffler /> → <ICNUShuffler />
  <TelemetryTypewriter /> → <AcnumediaFeed />
  <ProtocolScheduler /> → <CalendrierACNU />
  ```
- [ ] Adapter titres sections:
  - "Diagnostic Shuffler" → "Formation ICNU"
  - "Telemetry Typewriter" → "Acnumedia"
  - "Protocol Scheduler" → "Événements"
- [ ] Adapter descriptions (2-3 lignes FR)
- [ ] Test complet 3 artifacts ensemble
- [ ] Vérifier animations ne se bloquent pas mutuellement

---

## QA & POLISH (2h)

### Tâches
- [ ] Test GSAP performance (60fps)
- [ ] Test 3 thèmes sur chaque artifact
- [ ] Test mobile (iPhone, Android)
- [ ] Test tablet (iPad)
- [ ] Accessibility audit:
  - [ ] Keyboard navigation
  - [ ] Aria-labels
  - [ ] Screen reader
- [ ] Fix bugs mineurs
- [ ] Commit: "feat: adapt Functional Artifacts to ACNU content"

---

## TOTAL: 18h (2.25 jours)
