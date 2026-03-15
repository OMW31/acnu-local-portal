# Phase B — Task Checklist
**Objective**: Build the Member Portal Dashboard with 3-theme system

---

## Milestone 1: Infrastructure Setup
- [x] Install `react-router-dom` v7
- [x] Restructure `src/` with `pages/` and `layouts/` directories
- [x] Migrate `ThemeContext.jsx` to use `data-theme` attribute (Orchids pattern)
- [x] Rewrite `index.css` with full 3-theme CSS variable system (`savane`, `foret`, `nuit`)
- [x] Update `ThemeSwitcher.jsx` with culturally-named themes

## Milestone 2: Login Page
- [x] Create `LoginPage.jsx` with glassmorphism card
- [x] Add lion filigrane SVG in background
- [x] Implement mock auth (matricule + password → localStorage)
- [x] Add password visibility toggle + error states + loading spinner
- [x] Demo credentials hint box
- [x] Theme switcher visible on login page

## Milestone 3: Dashboard Layout
- [x] Create `DashboardLayout.jsx` with Sidebar + Content area
- [x] Implement Sidebar navigation (5 tabs: Dashboard, Profile, Projects, Reports, Stats)
- [x] Active tab sliding indicator (golden line per theme)
- [x] Member info + Logout button in sidebar footer
- [x] Mobile: Burger menu → fullscreen drawer overlay
- [x] Top bar with bell notification + avatar

## Milestone 4: Dashboard — Member View
- [x] Welcome banner with cultural pattern overlay (Ndop)
- [x] Stats grid (4 cards: Sessions, Heures, Certifications, Réseau)
- [x] Activity feed (recent actions timeline)
- [x] Member profile card (right column)
- [x] Quick actions panel (Download certificat, Calendrier, Settings)

## Milestone 5: Dashboard — Interactive Widgets
- [x] SVG Donut Charts (Event Attendance + Volunteer Hours) with GSAP animation
- [x] Bar Chart (Program Engagement by month) with GSAP staggered animation
- [x] Submit a Project form (Title, Description, Lead, Documents)
- [x] Download Reports list with PDF buttons
- [x] Progress bars for active projects (animated)

## Milestone 6: Admin View Extension
- [x] Role toggle (Membre / Admin) — dev mode
- [x] Admin KPI banner (Funds Raised, Beneficiaries, Active Projects)
- [x] Ongoing Initiatives progress bars (Community, Education, Healthcare)
- [x] Pending Approvals list (members + projects to validate)
- [x] Enhanced notification center

## Milestone 7: Theme Variations & Polish
- [x] Verify each theme produces a **unique visual result** on every widget
- [x] Test Savane (light) vs Forêt (dark green) vs Nuit (dark luxe)
- [x] GSAP entrance animations on tab switch
- [x] Cultural pattern details (Ndop diamond, spider web, lion)
- [x] Sign Out confirmation modal with glassmorphism

## Milestone 8: Bug Investigation
- [x] Investigate parallax overlap at bottom of page (from Phase A)
- [x] Fix any component z-index / overflow issues
