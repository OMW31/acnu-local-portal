import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, User, FolderOpen, FileText, BarChart3,
  LogOut, Bell, Calendar, ChevronRight, Menu, X,
  Download, Send, Users, Clock, TrendingUp, BookOpen,
  Globe, Award, Shield, Settings, AlertCircle, CheckCircle2,
  Eye, XCircle, Zap
} from 'lucide-react';
import gsap from 'gsap';

// ──────────────────────────────────────────────────────────────────
// MOCK DATA
// ──────────────────────────────────────────────────────────────────
const MEMBER = {
  name: 'Jean-Paul Nguema',
  matricule: 'ACNU-2024-001',
  role: 'Membre Actif',
  region: 'Centre — Yaoundé',
  since: '2019',
  initials: 'JP',
  programs: ['ICNU — Promotion 5', 'Simulation Internationale 2024', 'Miss CANU 2025'],
};

const ADMIN = {
  name: 'Dr. Marie Ondua',
  matricule: 'ACNU-ADMIN-01',
  role: 'Secrétaire Générale',
  region: 'Siège — Yaoundé',
  since: '2016',
  initials: 'MO',
};

const STATS_MEMBER = [
  { label: 'Sessions suivies', value: '24', icon: BookOpen, trend: '+3 ce mois' },
  { label: 'Heures terrain', value: '156', icon: Globe, trend: '+12 ce mois' },
  { label: 'Certifications', value: '5', icon: Award, trend: '1 en cours' },
  { label: 'Réseau', value: '89', icon: Users, trend: '+7 contacts' },
];

const STATS_ADMIN = [
  { label: 'Membres Actifs', value: '347', icon: Users, trend: '+23 ce mois' },
  { label: 'Fonds Mobilisés', value: '12.4M', icon: TrendingUp, trend: '+8% trimestre' },
  { label: 'Projets en cours', value: '18', icon: FolderOpen, trend: '3 terminés' },
  { label: 'Bénéficiaires', value: '4,200', icon: Globe, trend: '+350 ce mois' },
];

const ACTIVITIES = [
  { date: '12 Mar 2026', title: 'Session MUNYLEP — Comité Droits de l\'Homme', type: 'formation', icon: BookOpen },
  { date: '8 Mar 2026', title: 'Journée Internationale des Femmes — Panel ACNU', type: 'événement', icon: Calendar },
  { date: '1 Mar 2026', title: 'Rapport ODD Objectif 4 — Contribution validée', type: 'rapport', icon: FileText },
  { date: '22 Fév 2026', title: 'Mission terrain — Accès à l\'eau, région Nord', type: 'mission', icon: Globe },
];

const PROJECTS = [
  { id: 1, name: 'Maison des Jeunes Douala', status: 'En cours', progress: 65 },
  { id: 2, name: 'AcnuMedia — Lancement', status: 'Terminé', progress: 100 },
  { id: 3, name: 'Atelier Leadership Yaoundé', status: 'Planifié', progress: 10 },
];

const PENDING_APPROVALS = [
  { id: 1, type: 'membre', name: 'Karine Bella', matricule: 'ACNU-2026-089', date: '14 Mar 2026' },
  { id: 2, type: 'projet', name: 'Initiative Eau Propre Nord', region: 'Nord-Cameroun', date: '13 Mar 2026' },
  { id: 3, type: 'membre', name: 'Paul Ekwalla', matricule: 'ACNU-2026-090', date: '12 Mar 2026' },
];

const REPORTS = [
  { id: 1, name: 'Rapport Annuel 2025', type: 'PDF', size: '3.1 MB' },
  { id: 2, name: 'Certificat ICNU — Promotion 5', type: 'PDF', size: '1.1 MB' },
  { id: 3, name: 'Rapport Mission Nord 2024', type: 'PDF', size: '2.8 MB' },
];

const EVENTS = [
  { id: 1, title: 'Assemblée Générale Annuelle', date: '28 Avr 2026', time: '09:00', location: 'Yaoundé' },
  { id: 2, title: 'Conférence ODD — Partenaires', date: '15 Mai 2026', time: '14:00', location: 'Douala' },
];

const ENGAGEMENT_DATA = [8, 14, 10, 22, 30, 26, 33, 28, 40, 35, 44, 48];
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const ATTENDANCE_PERCENT = 78;
const VOLUNTEER_PERCENT = 62;

// Initiative bars for Admin
const INITIATIVES = [
  { label: 'Communauté & Citoyenneté', percent: 72, color: 'var(--accent)' },
  { label: 'Éducation & Formation', percent: 88, color: 'var(--primary)' },
  { label: 'Santé & Environnement', percent: 55, color: 'var(--accent-hover)' },
];

const TABS = [
  { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
  { id: 'profile', label: 'Mon Profil', icon: User },
  { id: 'projects', label: 'Mes Projets', icon: FolderOpen },
  { id: 'reports', label: 'Rapports', icon: FileText },
  { id: 'stats', label: 'Statistiques', icon: BarChart3 },
];

const ADMIN_TABS = [
  { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
  { id: 'approvals', label: 'Validations', icon: CheckCircle2 },
  { id: 'members', label: 'Membres', icon: Users },
  { id: 'stats', label: 'Statistiques', icon: BarChart3 },
];

// ──────────────────────────────────────────────────────────────────
// STATUS BADGE
// ──────────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    'En cours': 'bg-brand-primary/10 text-brand-primary',
    'Terminé': 'bg-green-500/10 text-green-500',
    'Planifié': 'bg-brand-secondary text-brand-text-muted',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold ${map[status] || map['Planifié']}`}>
      {status}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────────
// ANIMATED DONUT CHART (GSAP + SVG)
// ──────────────────────────────────────────────────────────────────
function DonutChart({ percent, label, color = 'var(--accent)' }) {
  const circleRef = useRef(null);
  const countRef = useRef(null);
  const r = 40;
  const circumference = 2 * Math.PI * r;

  useEffect(() => {
    const targetDash = (percent / 100) * circumference;
    gsap.fromTo(
      circleRef.current,
      { strokeDasharray: `0 ${circumference}` },
      { strokeDasharray: `${targetDash} ${circumference - targetDash}`, duration: 1.6, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo(
      { val: 0 },
      { val: percent, duration: 1.5, ease: 'power3.out', delay: 0.3, onUpdate: function () {
          if (countRef.current) countRef.current.textContent = `${Math.round(this.targets()[0].val)}%`;
        }
      }
    );
  }, [percent, circumference]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90 drop-shadow-[0_0_8px_var(--accent-glow)]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={r} fill="none" stroke="var(--border)" strokeWidth="8" />
          <circle
            ref={circleRef}
            cx="50" cy="50" r={r} fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`0 ${circumference}`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span ref={countRef} className="font-mono text-xl font-bold" style={{ color }}>0%</span>
        </div>
      </div>
      <span className="text-xs font-mono text-brand-text-muted uppercase tracking-widest text-center">{label}</span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// BAR CHART (GSAP)
// ──────────────────────────────────────────────────────────────────
function BarChart({ data, months }) {
  const barsRef = useRef([]);
  const maxVal = Math.max(...data);

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      const pct = (data[i] / maxVal) * 100;
      gsap.fromTo(bar,
        { scaleY: 0 },
        { scaleY: 1, height: `${pct}%`, duration: 0.7, delay: i * 0.06, ease: 'power3.out' }
      );
    });
  }, [data, maxVal]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end gap-1.5 h-36">
        {data.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full">
            <div
              ref={el => barsRef.current[i] = el}
              className="w-full rounded-t-md origin-bottom"
              style={{
                background: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-subtle)',
                height: '0%',
                minHeight: '3px',
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {months.map((m, i) => (
          <div key={i} className="flex-1 text-center font-mono text-[9px] text-[var(--text-muted)]">{m}</div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// INITIATIVE PROGRESS BAR (ADMIN)
// ──────────────────────────────────────────────────────────────────
function InitiativeBar({ label, percent, color }) {
  const barRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(barRef.current,
      { width: '0%' },
      { width: `${percent}%`, duration: 1.2, ease: 'power3.out', delay: 0.4 }
    );
  }, [percent]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-body text-[var(--text-secondary)]">{label}</span>
        <span className="font-mono text-xs" style={{ color }}>{percent}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-[var(--border)] overflow-hidden">
        <div ref={barRef} className="h-full rounded-full" style={{ background: color, width: '0%' }} />
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// TAB CONTENT COMPONENTS
// ──────────────────────────────────────────────────────────────────
function DashboardMember() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="space-y-6">
      {/* Welcome Banner with Ndop */}
      <div className="relative overflow-hidden rounded-[var(--radius-xl)] p-7"
           style={{ background: 'var(--accent)' }}>
        <div className="absolute inset-0 opacity-10 ndop-pattern" />
        <div className="relative z-10">
          <p className="text-xs font-mono uppercase tracking-widest opacity-70" style={{ color: 'var(--bg)' }}>Bienvenue sur votre portail</p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold mt-1" style={{ color: 'var(--bg)' }}>
            Bonjour, {MEMBER.name.split(' ')[0]} !
          </h1>
          <p className="text-sm mt-1 opacity-80" style={{ color: 'var(--bg)' }}>
            {MEMBER.role} · {MEMBER.matricule} · {MEMBER.region}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS_MEMBER.map(({ label, value, icon: Icon, trend }) => (
          <div key={label} className="card-premium p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                   style={{ background: 'var(--accent-subtle)', color: 'var(--accent)' }}>
                <Icon size={18} />
              </div>
              <TrendingUp size={12} style={{ color: 'var(--accent)' }} />
            </div>
            <p className="text-2xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>{value}</p>
            <p className="text-xs font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
            <p className="text-[10px] font-mono mt-1" style={{ color: 'var(--accent)' }}>{trend}</p>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Activity Feed */}
        <div className="md:col-span-2 card-premium p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-lg font-bold">Activité récente</h2>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider"
                  style={{ background: 'var(--accent-subtle)', color: 'var(--accent)' }}>
              {ACTIVITIES.length} entrées
            </span>
          </div>
          <div className="space-y-3">
            {ACTIVITIES.map((a, i) => (
              <div key={i} className="flex items-start gap-4 p-3.5 rounded-[var(--radius-lg)] transition-all hover:scale-[1.01] cursor-pointer"
                   style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                     style={{ background: 'var(--accent-subtle)', color: 'var(--accent)' }}>
                  <a.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold font-body">{a.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{a.date}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider"
                          style={{ background: 'var(--primary-subtle)', color: 'var(--primary)' }}>
                      {a.type}
                    </span>
                  </div>
                </div>
                <ChevronRight size={14} style={{ color: 'var(--text-muted)' }} className="shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Member Card + Quick Actions */}
        <div className="space-y-4">
          <div className="card-premium p-6 text-center" style={{ borderRadius: 'var(--radius-xl)' }}>
            <div 
              className="w-20 h-20 mx-auto mb-4 flex items-center justify-center font-display text-2xl font-bold transition-all duration-700 overflow-hidden"
              style={{ 
                background: 'var(--accent)', 
                color: 'var(--bg)', 
                border: '3px solid var(--accent-glow)',
                borderRadius: 'var(--radius-xl)' /* Using dynamic radius for theme variation */
              }}
            >
              {MEMBER.initials}
            </div>
            <h3 className="font-display text-lg font-bold">
              {MEMBER.name}
            </h3>
            <p className="text-sm font-mono mt-1 text-brand-accent">
              {MEMBER.role}
            </p>
            <p className="text-xs font-mono mt-0.5 text-brand-text-muted">
              {MEMBER.matricule}
            </p>
            <div className="mt-4 space-y-2.5 p-4 rounded-[var(--radius-lg)] bg-brand-bg border border-brand-border">
              {[
                ['Région', MEMBER.region], 
                ['Membre depuis', MEMBER.since], 
                ['Statut', 'Actif']
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-xs">
                  <span className="text-brand-text-muted font-body">{k}</span>
                  <span className={`font-mono font-semibold ${k === 'Statut' ? 'text-green-500' : 'text-brand-text'}`}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium p-5">
            <h3 className="text-sm font-bold font-display mb-3">Actions rapides</h3>
            <div className="space-y-2">
              {[
                { icon: FileText, label: 'Télécharger mon certificat' },
                { icon: Calendar, label: 'Voir le calendrier' },
                { icon: Settings, label: 'Paramètres du compte' },
              ].map(({ icon: Icon, label }) => (
                <button key={label} className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-left border transition-all hover:scale-[1.02]"
                        style={{ background: 'var(--bg)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}>
                  <Icon size={14} style={{ color: 'var(--accent)' }} />
                  <span className="font-body text-xs">{label}</span>
                  <ChevronRight size={12} className="ml-auto" style={{ color: 'var(--text-muted)' }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="card-premium p-6">
        <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
          <Calendar size={18} style={{ color: 'var(--primary)' }} />
          Prochains Événements
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {EVENTS.map(e => (
            <div key={e.id} className="flex items-start gap-4 p-4 rounded-[var(--radius-lg)]"
                 style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <div className="w-12 h-12 rounded-xl shrink-0 flex flex-col items-center justify-center"
                   style={{ background: 'var(--primary-subtle)', color: 'var(--primary)' }}>
                <span className="font-mono text-xs font-bold">{e.date.split(' ')[0]}</span>
                <span className="font-mono text-[9px] opacity-70">{e.date.split(' ')[1]?.slice(0,3)}</span>
              </div>
              <div>
                <p className="font-semibold text-sm font-body">{e.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock size={11} style={{ color: 'var(--text-muted)' }} />
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{e.time} · {e.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardAdmin() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="space-y-6">
      {/* Admin Welcome */}
      <div className="relative overflow-hidden rounded-[var(--radius-xl)] p-7"
           style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)' }}>
        <div className="absolute inset-0 opacity-10 ndop-pattern" />
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest opacity-70" style={{ color: 'var(--bg)' }}>Vue Administrateur</p>
            <h1 className="font-display text-2xl sm:text-3xl font-bold mt-1" style={{ color: 'var(--bg)' }}>
              Bonjour, {ADMIN.name.split(' ').pop()} !
            </h1>
            <p className="text-sm mt-1 opacity-80" style={{ color: 'var(--bg)' }}>
              {ADMIN.role} · {ADMIN.matricule}
            </p>
          </div>
          <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
            <Shield size={28} style={{ color: 'var(--bg)' }} />
          </div>
        </div>
      </div>

      {/* Admin KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS_ADMIN.map(({ label, value, icon: Icon, trend }) => (
          <div key={label} className="card-premium p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                   style={{ background: 'var(--primary-subtle)', color: 'var(--primary)' }}>
                <Icon size={18} />
              </div>
              <TrendingUp size={12} style={{ color: 'var(--primary)' }} />
            </div>
            <p className="text-2xl font-bold font-display">{value}</p>
            <p className="text-xs font-body mt-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
            <p className="text-[10px] font-mono mt-1" style={{ color: 'var(--primary)' }}>{trend}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Initiatives Progress */}
        <div className="card-premium p-6">
          <h2 className="font-display text-lg font-bold mb-5">Programmes en cours</h2>
          <div className="space-y-5">
            {INITIATIVES.map(p => (
              <InitiativeBar key={p.label} {...p} />
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-lg font-bold">Validations en attente</h2>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold"
                  style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>
              {PENDING_APPROVALS.length} en attente
            </span>
          </div>
          <div className="space-y-3">
            {PENDING_APPROVALS.map(p => (
              <div key={p.id} className="flex items-center gap-3 p-3 rounded-[var(--radius-lg)]"
                   style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                     style={{ background: p.type === 'membre' ? 'var(--primary-subtle)' : 'var(--accent-subtle)',
                              color: p.type === 'membre' ? 'var(--primary)' : 'var(--accent)' }}>
                  {p.type === 'membre' ? <User size={14} /> : <FolderOpen size={14} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold font-body truncate">{p.name}</p>
                  <p className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>{p.matricule || p.region} · {p.date}</p>
                </div>
                <div className="flex gap-1.5">
                  <button className="p-1.5 rounded-lg transition-all hover:scale-110" style={{ color: '#22c55e' }}><CheckCircle2 size={15} /></button>
                  <button className="p-1.5 rounded-lg transition-all hover:scale-110" style={{ color: '#ef4444' }}><XCircle size={15} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement chart */}
      <div className="card-premium p-6">
        <h2 className="font-display text-lg font-bold mb-6">Engagement mensuel 2025</h2>
        <BarChart data={ENGAGEMENT_DATA} months={MONTHS} />
      </div>
    </div>
  );
}

function ProfileTab({ isAdmin }) {
  const person = isAdmin ? ADMIN : MEMBER;
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="space-y-6">
      <div className="card-premium p-8">
        <div className="flex items-center gap-5 mb-8">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-display text-2xl font-bold"
               style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
            {person.initials}
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">{person.name}</h2>
            <p className="font-mono text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--accent)' }}>{person.role}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: 'Matricule', value: person.matricule },
            { label: 'Rôle', value: person.role },
            { label: 'Région', value: person.region },
            { label: 'Membre depuis', value: person.since },
          ].map(f => (
            <div key={f.label} className="p-4 rounded-[var(--radius-lg)]"
                 style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>{f.label}</div>
              <div className="font-body text-sm font-semibold">{f.value}</div>
            </div>
          ))}
        </div>
      </div>

      {!isAdmin && (
        <div className="card-premium p-6">
          <h3 className="font-display text-base font-bold mb-4">Programmes inscrits</h3>
          <div className="space-y-2">
            {MEMBER.programs.map(p => (
              <div key={p} className="flex items-center gap-3 p-3 rounded-xl"
                   style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                <span className="text-sm font-body">{p}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectsTab() {
  const [showForm, setShowForm] = useState(false);
  const barsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
    );
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      gsap.fromTo(bar,
        { width: '0%' },
        { width: `${PROJECTS[i].progress}%`, duration: 1, delay: 0.4 + i * 0.15, ease: 'power3.out' }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold">Mes Projets</h2>
        <button onClick={() => setShowForm(v => !v)}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
          <Send size={14} />
          Soumettre un projet
        </button>
      </div>

      {showForm && (
        <div className="card-premium p-6">
          <h3 className="font-display text-base font-bold mb-4">Nouveau projet</h3>
          <div className="space-y-4">
            {[
              { label: 'Titre du projet', type: 'text', placeholder: 'Ex: Initiative Eau Propre...' },
              { label: 'Responsable', type: 'text', placeholder: 'Nom du responsable' },
            ].map(f => (
              <div key={f.label} className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder}
                       className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                       style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
              </div>
            ))}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Description</label>
              <textarea rows={3} placeholder="Décrivez votre projet..."
                        className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none resize-none transition-all"
                        style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
            </div>
            <button className="px-6 py-3 rounded-full font-display text-sm font-bold transition-all hover:scale-[1.02]"
                    style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
              Soumettre
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {PROJECTS.map((p, i) => (
          <div key={p.id} className="card-premium p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-body text-sm font-semibold">{p.name}</h3>
              <StatusBadge status={p.status} />
            </div>
            <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
              <div ref={el => barsRef.current[i] = el} className="h-full rounded-full" style={{ background: 'var(--accent)', width: '0%' }} />
            </div>
            <p className="font-mono text-[10px] mt-1.5" style={{ color: 'var(--text-muted)' }}>{p.progress}% complété</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportsTab() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
    );
  }, []);
  return (
    <div ref={containerRef} className="space-y-4">
      <h2 className="font-display text-2xl font-bold">Rapports & Documents</h2>
      {REPORTS.map(r => (
        <div key={r.id} className="card-premium p-5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
               style={{ background: 'var(--accent-subtle)', color: 'var(--accent)' }}>
            <FileText size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-body text-sm font-semibold truncate">{r.name}</div>
            <div className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{r.type} · {r.size}</div>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-body font-semibold transition-all hover:scale-105"
                  style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
            <Download size={13} /> Télécharger
          </button>
        </div>
      ))}
    </div>
  );
}

function StatsTab() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
    );
  }, []);
  return (
    <div ref={containerRef} className="space-y-6">
      <h2 className="font-display text-2xl font-bold">Statistiques de Participation</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="card-premium p-8 flex flex-col items-center">
          <DonutChart percent={ATTENDANCE_PERCENT} label="Présence événements" color="var(--accent)" />
        </div>
        <div className="card-premium p-8 flex flex-col items-center">
          <DonutChart percent={VOLUNTEER_PERCENT} label="Heures Volontariat" color="var(--primary)" />
        </div>
      </div>
      <div className="card-premium p-6">
        <h3 className="font-display text-base font-bold mb-5">Engagement Annuel</h3>
        <BarChart data={ENGAGEMENT_DATA} months={MONTHS} />
      </div>
    </div>
  );
}

function ApprovalsTab() {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl font-bold">Validations en attente</h2>
      <div className="space-y-3">
        {PENDING_APPROVALS.map(p => (
          <div key={p.id} className="card-premium p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                 style={{ background: p.type === 'membre' ? 'var(--primary-subtle)' : 'var(--accent-subtle)',
                          color: p.type === 'membre' ? 'var(--primary)' : 'var(--accent)' }}>
              {p.type === 'membre' ? <User size={18} /> : <FolderOpen size={18} />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body font-semibold text-sm">{p.name}</p>
              <p className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {p.type === 'membre' ? 'Nouveau membre' : 'Projet soumis'} · {p.matricule || p.region} · {p.date}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                      style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)' }}>
                <CheckCircle2 size={13} /> Valider
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                      style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}>
                <XCircle size={13} /> Rejeter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MembersTab() {
  const mockMembers = [
    { name: 'Karine Bella', matricule: 'ACNU-2024-034', region: 'Littoral', status: 'Actif' },
    { name: 'Paul Ekwalla', matricule: 'ACNU-2024-089', region: 'Nord-Ouest', status: 'Actif' },
    { name: 'Stéphane Nkolo', matricule: 'ACNU-2023-122', region: 'Centre', status: 'Inactif' },
    { name: 'Aimée Mballa', matricule: 'ACNU-2025-012', region: 'Sud', status: 'Actif' },
  ];
  return (
    <div className="space-y-5">
      <h2 className="font-display text-2xl font-bold">Gestion des Membres</h2>
      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
                {['Nom', 'Matricule', 'Région', 'Statut', 'Actions'].map(h => (
                  <th key={h} className="text-left px-5 py-3 font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockMembers.map((m, i) => (
                <tr key={i} className="transition-colors hover:bg-[var(--bg-secondary)]" style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-5 py-4 font-body font-semibold">{m.name}</td>
                  <td className="px-5 py-4 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{m.matricule}</td>
                  <td className="px-5 py-4 font-body text-xs">{m.region}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono ${m.status === 'Actif' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-400'}`}>
                      {m.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button className="font-mono text-[10px] px-3 py-1 rounded-lg transition-all hover:scale-105"
                            style={{ background: 'var(--primary-subtle)', color: 'var(--primary)' }}>
                      <Eye size={12} className="inline mr-1" /> Voir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// MAIN PORTAL PAGE
// ──────────────────────────────────────────────────────────────────
export function PortalPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const mainRef = useRef(null);

  const auth = JSON.parse(localStorage.getItem('acnu-auth') || '{}');
  const actualIsAdmin = auth.role === 'admin';
  const person = actualIsAdmin ? ADMIN : MEMBER;
  const tabs = actualIsAdmin ? ADMIN_TABS : TABS;

  useEffect(() => {
    const auth = localStorage.getItem('acnu-auth');
    if (!auth) navigate('/connexion');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('acnu-auth');
    navigate('/connexion');
  };

  const handleTabChange = useCallback((id) => {
    if (mainRef.current) {
      gsap.to(mainRef.current, { opacity: 0, y: 10, duration: 0.15, onComplete: () => {
        setActiveTab(id);
        setSidebarOpen(false);
        gsap.to(mainRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
      }});
    } else {
      setActiveTab(id);
      setSidebarOpen(false);
    }
  }, []);

  const renderContent = () => {
    if (actualIsAdmin) {
      switch (activeTab) {
        case 'dashboard': return <DashboardAdmin />;
        case 'approvals': return <ApprovalsTab />;
        case 'members': return <MembersTab />;
        case 'stats': return <StatsTab />;
        default: return <DashboardAdmin />;
      }
    } else {
      switch (activeTab) {
        case 'dashboard': return <DashboardMember />;
        case 'profile': return <ProfileTab isAdmin={false} />;
        case 'projects': return <ProjectsTab />;
        case 'reports': return <ReportsTab />;
        case 'stats': return <StatsTab />;
        default: return <DashboardMember />;
      }
    }
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* ── DESKTOP SIDEBAR ────────────────────────────────── */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 border-r h-screen sticky top-0"
             style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="p-5 pb-4">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm"
                 style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
              AC
            </div>
            <div>
              <div className="font-display font-bold text-base leading-tight">ACNU</div>
              <div className="font-mono text-[9px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Portail Membre</div>
            </div>
          </Link>

          {/* Admin role badge & Dev Toggle */}
          <div className="mb-4 space-y-2">
            {actualIsAdmin && (
              <div className="px-3 py-2 rounded-xl flex items-center gap-2"
                   style={{ background: 'var(--primary-subtle)', color: 'var(--primary)' }}>
                <Shield size={13} />
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">Mode Administration</span>
              </div>
            )}
            {/* DEV ONLY TOGGLE */}
            <button 
              onClick={() => {
                const newRole = actualIsAdmin ? 'member' : 'admin';
                localStorage.setItem('acnu-auth', JSON.stringify({ ...auth, role: newRole }));
                window.location.reload();
              }}
              className="w-full px-3 py-1.5 rounded-lg border border-brand-border text-[9px] font-mono uppercase tracking-widest text-brand-text-muted hover:bg-brand-accent/10 hover:text-brand-accent transition-all"
            >
              Switch to {actualIsAdmin ? 'Member' : 'Admin'} View (Dev)
            </button>
          </div>

          <nav className="space-y-1">
            {tabs.map(tab => (
              <button key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200"
                      style={{
                        background: activeTab === tab.id ? 'var(--accent-subtle)' : 'transparent',
                        color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-muted)',
                        fontWeight: activeTab === tab.id ? '600' : '400',
                      }}>
                <tab.icon size={16} />
                <span className="font-body">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="mt-auto p-5 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0"
                 style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
              {person.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-body text-sm font-semibold truncate">{person.name}</div>
              <div className="font-mono text-[9px] truncate" style={{ color: 'var(--accent)' }}>{person.matricule}</div>
            </div>
          </div>
          <button onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-body transition-colors hover:scale-[1.02]"
                  style={{ color: '#ef4444' }}>
            <LogOut size={15} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* ── MOBILE HEADER ──────────────────────────────────── */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 py-3 border-b"
              style={{ background: 'color-mix(in srgb, var(--bg-card) 90%, transparent)', backdropFilter: 'blur(20px)', borderColor: 'var(--border)' }}>
        <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg transition-colors hover:bg-white/5">
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center font-display font-bold text-xs"
               style={{ background: 'var(--accent)', color: 'var(--bg)' }}>AC</div>
          <span className="font-display font-bold">ACNU</span>
        </div>
        <button onClick={handleLogout} className="p-2 rounded-lg" style={{ color: 'var(--text-muted)' }}>
          <LogOut size={16} />
        </button>
      </header>

      {/* ── MOBILE SIDEBAR DRAWER ──────────────────────────── */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-[60]" onClick={() => setSidebarOpen(false)}>
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />
          <div className="absolute inset-y-0 left-0 w-72 p-6 shadow-2xl flex flex-col"
               style={{ background: 'var(--bg-card)' }}
               onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <span className="font-display font-bold text-lg">ACNU Portal</span>
              <button onClick={() => setSidebarOpen(false)} className="p-1.5 rounded-lg" style={{ color: 'var(--text-muted)' }}>
                <X size={18} />
              </button>
            </div>
            <nav className="space-y-1 flex-1">
              {tabs.map(tab => (
                <button key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all"
                        style={{
                          background: activeTab === tab.id ? 'var(--accent-subtle)' : 'transparent',
                          color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-muted)',
                          fontWeight: activeTab === tab.id ? '600' : '400',
                        }}>
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </nav>
            <button onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body mt-4" style={{ color: '#ef4444' }}>
              <LogOut size={16} /> Déconnexion
            </button>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ───────────────────────────────────── */}
      <main className="flex-1 overflow-y-auto pt-14 md:pt-0">
        {/* Top Bar (desktop) */}
        <div className="hidden md:flex items-center justify-between px-8 py-5 border-b"
             style={{ borderColor: 'var(--border)' }}>
          <div>
            <h1 className="font-display font-bold text-xl">{tabs.find(t => t.id === activeTab)?.label}</h1>
          </div>
          <div className="flex items-center gap-3">
            {/* Bell */}
            <button className="relative p-2 rounded-xl border transition-all hover:scale-105"
                    style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
              <Bell size={16} style={{ color: 'var(--primary)' }} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
            </button>
            {/* Avatar + name */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl border"
                 style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center font-display font-bold text-xs"
                   style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
                {person.initials}
              </div>
              <span className="font-body text-sm font-semibold">{person.name.split(' ')[0]}</span>
            </div>
          </div>
        </div>

        <div ref={mainRef} className="p-5 sm:p-7 md:p-8 max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
