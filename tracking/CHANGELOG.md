# Change Log - ACNU Project

## [V1.0.0] - Initial Setup
- Initialized Vite + React 19 environment.
- Configured Tailwind CSS v4.
- Settled project structure and base components.

## [V1.1.0] - Component Implementation
- Implemented `ThemeContext` for dynamic switching.
- Developed `Navbar`, `Hero`, and `Features` (Functional Artifacts).
- Implemented `Philosophy` (Manifesto) and `Protocol` (Stacking cards).
- Finished `Membership`, `Footer`, and `MemberWidget`.

## [V1.5.0] - Phase C: World-Class Hyper-Personalization
- Pivot: Replaced generic artifacts with hyper-personalized ACNU systems (ICNU Curriculum, Miss & Mister Live Feed, Simulation Scheduler).
- Implementation: Level 2 details cards added for each flagship program.
- Fix (Milestone 8): Implemented ScrollTrigger.refresh() on theme switch and stabilized pin-spacing logic in Protocol.jsx.
- UX: Added interactive tooltips and animated progress gauges to artifacts.

## [V1.4.0] - Phase B: Member Portal & Dashboard Complete
- Implemented `LoginPage` with premium glassmorphism and stylized Lion filigrane.
- Finalized `PortalPage` with 5 functional tabs (Dashboard, Profile, Projects, Reports, Stats).
- Implemented Admin View extension with KPI banner and approvals system.
- Developed animated SVG Donut and Bar charts with GSAP and theme-aware glows.
- Integrated ADR-06: Distinct visual compositions per theme (dynamic radius, fonts, and noise).
- Refined `DashboardLayout` for seamless mobile responsiveness (Sidebar Drawer).
- **Status**: Production Build Verified & Cinematic Polish applied.

## [V1.3.0] - Phase C: Public Infrastructure & Content Complete
- Implemented Routing for all public pages (`/a-propos`, `/programmes`, etc.).
- Created `PageHero` reusable component with GSAP entry animations.
- Developed all public pages: About (Timeline & Team), Programs (Cards), Projects (Grid & Details), News (Filters & Search), and Donation (Widget).
- Integrated `NewsletterForm` and `DonationWidget` for high-impact engagement.
- Refined `MemberWidget` (FAB) and `Footer` for global theme consistency.
- Added `usePageMetadata` hook for dynamic titles and smooth scroll restoration.
- **Status**: Production Build Verified (0 Errors).

## [V1.2.0] - CSS Infrastructure Fix
- **Root Cause Diagnosis**: Identified missing `@tailwindcss/vite` plugin for Tailwind v4.
- Installed `@tailwindcss/vite` and updated `vite.config.js`.
- Completely rewrote `index.css` to use `@theme inline` and custom variable hooks for dynamic theming.
- Fixed Navbar scroll-morph logic to use standard CSS classes.
- Integrated comprehensive Google Fonts library.
