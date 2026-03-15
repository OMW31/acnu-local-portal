# Option B — Code Snippets Prêts à l'Emploi

---

## SNIPPET 1: ICNU SHUFFLER DATA

```jsx
// Remplacer dans DiagnosticShuffler (ligne ~15)
const [cards, setCards] = useState([
  { 
    id: 1, 
    label: 'Leadership', 
    icon: 'Users',
    status: 'En cours',
    color: 'var(--accent)'
  },
  { 
    id: 2, 
    label: 'Plaidoyer', 
    icon: 'MessageSquare',
    status: 'Disponible',
    color: 'var(--primary)'
  },
  { 
    id: 3, 
    label: 'Gestion de Projet', 
    icon: 'Briefcase',
    status: 'Complet',
    color: 'var(--accent)'
  }
]);
```

---

## SNIPPET 2: ACNUMEDIA MESSAGES

```jsx
// Remplacer dans TelemetryTypewriter (ligne ~90)
const messages = [
  '📰 Nouveau reportage: Maison des Jeunes Douala',
  '🎤 Interview: Jeune volontaire à Yaoundé',
  '📊 Publication: Rapport annuel ICNU 2025',
  '🎓 Formation: 50 jeunes certifiés en leadership',
  '🌍 Simulation: Modèle ONU ce weekend',
  '🏆 Concours Miss & Mister: inscriptions ouvertes',
  '📱 Acnumedia: nouvelle plateforme lancée',
  '🤝 Partenariat: ACNU x UNESCO Cameroun'
];
```

---

## SNIPPET 3: CALENDRIER EVENTS

```jsx
// Remplacer dans ProtocolScheduler (ligne ~170)
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const events = [
  { 
    day: 1, // Lundi
    label: 'Formation ICNU',
    type: 'formation',
    color: 'var(--accent)'
  },
  { 
    day: 3, // Mercredi
    label: 'Simulation ONU',
    type: 'simulation',
    color: 'var(--primary)'
  },
  { 
    day: 6, // Samedi
    label: 'Concours Miss & Mister',
    type: 'concours',
    color: 'var(--accent)'
  }
];
```

---

## SNIPPET 4: SECTION TITLES

```jsx
// Remplacer dans Features() component (ligne ~260)

// Card 1
<div className="space-y-2">
  <h3 className="text-2xl font-display font-bold">
    Formation ICNU
  </h3>
  <p className="text-[var(--text-secondary)]">
    Modules de formation en leadership, plaidoyer et gestion de projet pour les jeunes leaders
  </p>
</div>

// Card 2
<div className="space-y-2">
  <h3 className="text-2xl font-display font-bold">
    Acnumedia
  </h3>
  <p className="text-[var(--text-secondary)]">
    Actualités et reportages de la jeunesse camerounaise en temps réel
  </p>
</div>

// Card 3
<div className="space-y-2">
  <h3 className="text-2xl font-display font-bold">
    Événements ACNU
  </h3>
  <p className="text-[var(--text-secondary)]">
    Calendrier des formations, simulations internationales et concours culturels
  </p>
</div>
```

---

## SNIPPET 5: IMPORTS LUCIDE

```jsx
// Ajouter en haut de Features.jsx (ligne ~4)
import { 
  Users,           // Pour Leadership
  MessageSquare,   // Pour Plaidoyer
  Briefcase,       // Pour Gestion de Projet
  BookOpen,        // Existant
  Mic2,            // Existant
  Globe            // Existant
} from 'lucide-react';
```

---

## SNIPPET 6: ICON RENDERING

```jsx
// Dans ICNUShuffler, remplacer le contenu de card par:
<div className="flex items-center gap-3">
  {card.icon === 'Users' && <Users className="w-5 h-5" style={{ color: card.color }} />}
  {card.icon === 'MessageSquare' && <MessageSquare className="w-5 h-5" style={{ color: card.color }} />}
  {card.icon === 'Briefcase' && <Briefcase className="w-5 h-5" style={{ color: card.color }} />}
  <span className="font-mono text-sm">{card.label}</span>
</div>
```

---

## SNIPPET 7: LIVE FEED LABEL

```jsx
// Remplacer dans AcnumediaFeed (ligne ~95)
<div className="flex items-center gap-2 mb-4">
  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
    Actualités en Direct
  </span>
  <div className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot" />
</div>
```

---

## SNIPPET 8: CALENDRIER BUTTON

```jsx
// Remplacer dans CalendrierACNU (ligne ~230)
<button className="mt-4 px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--bg)] font-mono text-sm hover:opacity-90 transition-opacity">
  Voir Calendrier
</button>
```

---

## UTILISATION

1. Copier le snippet correspondant
2. Localiser la ligne indiquée dans `Features.jsx`
3. Remplacer le code existant
4. Sauvegarder
5. Tester dans le navigateur

**Note**: Conserver TOUTE la logique GSAP et les `useEffect`. Ne modifier QUE les données et labels.
