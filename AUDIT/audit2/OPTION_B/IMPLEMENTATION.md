# Option B — Guide d'Implémentation
**Pour**: Agent de codage

---

## STRUCTURE ACTUELLE

```
src/components/Features.jsx
├── DiagnosticShuffler()    // Lines 11-81
├── TelemetryTypewriter()   // Lines 83-158
├── ProtocolScheduler()     // Lines 160-249
└── Features()              // Lines 251-end
```

---

## CHANGEMENTS REQUIS

### 1. ICNU SHUFFLER

**Localisation**: Lines 11-81  
**Action**: Renommer + adapter contenu

```jsx
// AVANT
function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: 'Bio Metrics', status: 'Active' },
    { id: 2, label: 'Protocol Sync', status: 'Pending' },
    { id: 3, label: 'Data Stream', status: 'Complete' }
  ]);
  // ...
}

// APRÈS
function ICNUShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: 'Leadership', icon: 'Users', status: 'En cours' },
    { id: 2, label: 'Plaidoyer', icon: 'MessageSquare', status: 'Disponible' },
    { id: 3, label: 'Gestion de Projet', icon: 'Briefcase', status: 'Complet' }
  ]);
  // Conserver toute la logique GSAP
}
```

**Imports à ajouter**:
```jsx
import { Users, MessageSquare, Briefcase } from 'lucide-react';
```

---

### 2. ACNUMEDIA FEED

**Localisation**: Lines 83-158  
**Action**: Renommer + adapter messages

```jsx
// AVANT
const messages = [
  'System initialized...',
  'Connecting to network...',
  'Data stream active...'
];

// APRÈS
const messages = [
  '📰 Nouveau reportage: Maison des Jeunes Douala',
  '🎤 Interview: Jeune volontaire à Yaoundé',
  '📊 Publication: Rapport annuel ICNU 2025',
  '🎓 Formation: 50 jeunes certifiés en leadership',
  '🌍 Simulation: Modèle ONU ce weekend'
];
```

**Label à changer**:
```jsx
// AVANT
<span>Live Feed</span>

// APRÈS
<span>Actualités en Direct</span>
```

---

### 3. CALENDRIER ACNU

**Localisation**: Lines 160-249  
**Action**: Renommer + adapter grid

```jsx
// AVANT
const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// APRÈS
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

// AVANT
const events = [
  { day: 2, label: 'Protocol Review' },
  { day: 4, label: 'Data Sync' }
];

// APRÈS
const events = [
  { day: 1, label: 'Formation ICNU' },
  { day: 3, label: 'Simulation ONU' },
  { day: 6, label: 'Concours Miss & Mister' }
];
```

**Bouton à changer**:
```jsx
// AVANT
<button>Save</button>

// APRÈS
<button>Voir Calendrier</button>
```

---

## INTÉGRATION DANS FEATURES()

**Localisation**: Lines 251-end

```jsx
// AVANT
<Features>
  <DiagnosticShuffler />
  <TelemetryTypewriter />
  <ProtocolScheduler />
</Features>

// APRÈS
<Features>
  <ICNUShuffler />
  <AcnumediaFeed />
  <CalendrierACNU />
</Features>
```

**Titres sections à adapter**:
```jsx
// Card 1
<h3>Formation ICNU</h3>
<p>Modules de formation en leadership, plaidoyer et gestion de projet</p>

// Card 2
<h3>Acnumedia</h3>
<p>Actualités et reportages de la jeunesse camerounaise</p>

// Card 3
<h3>Événements ACNU</h3>
<p>Calendrier des formations, simulations et concours</p>
```

---

## RÈGLES CRITIQUES

### ⚠️ NE PAS TOUCHER
- Logique GSAP (`useEffect`, `gsap.context()`, animations)
- Timings (3s cycle, 50ms typing, 4s cursor)
- Easing curves (`cubic-bezier`)
- Structure HTML/CSS (classes Tailwind)

### ✅ MODIFIER UNIQUEMENT
- Contenu des arrays (`cards`, `messages`, `events`)
- Labels textuels (FR)
- Icônes Lucide
- Couleurs (utiliser CSS variables existantes)

---

## TESTING CHECKLIST

### Fonctionnel
- [ ] Shuffler cycle toutes les 3s
- [ ] Typewriter tape char-by-char
- [ ] Cursor blink visible
- [ ] Scheduler cursor animation complète
- [ ] Pas d'erreurs console

### Thèmes
- [ ] Savane: accent doré visible
- [ ] Forêt: accent vert néon visible
- [ ] Nuit: accent champagne visible

### Responsive
- [ ] Desktop (1920px): 3 cards côte à côte
- [ ] Tablet (768px): 2 cards puis 1
- [ ] Mobile (375px): 1 card, stack vertical

### Performance
- [ ] 60fps animations (Chrome DevTools)
- [ ] Pas de memory leaks (cleanup GSAP)
- [ ] Smooth scroll

---

## COMMIT MESSAGE

```
feat(features): adapt Functional Artifacts to ACNU content

- Rename DiagnosticShuffler → ICNUShuffler (Leadership/Plaidoyer/Gestion)
- Rename TelemetryTypewriter → AcnumediaFeed (actualités ACNU)
- Rename ProtocolScheduler → CalendrierACNU (événements réels)
- Update labels to French
- Add Lucide icons (Users, MessageSquare, Briefcase)
- Preserve all GSAP animations and interactions

Closes #ACNU-ARTIFACTS
```

---

## TEMPS ESTIMÉ

- Artifact 1: 4h
- Artifact 2: 5h
- Artifact 3: 6h
- Intégration: 1h
- QA: 2h
**Total**: 18h (2.25 jours)
