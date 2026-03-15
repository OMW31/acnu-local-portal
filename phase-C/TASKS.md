# Phase C — Task Checklist
**Objective**: Build all remaining public pages for the ACNU website

---

## Milestone 1: Routing & Layouts
- [x] Add routes for `/a-propos`, `/programmes`, `/projets`, `/projets/:slug`, `/actualites`, `/actualites/:slug`, `/don`
- [x] Create `PublicLayout.jsx` wrapping Navbar + Footer + MemberWidget
- [x] Add `NavLink` active state highlighting in Navbar

## Milestone 2: Reusable Components
- [x] `PageHero.jsx` — Short hero with overlay, title, breadcrumb
- [x] `ProjectCard.jsx` — Image, badge, title, excerpt, CTA
- [x] `NewsCard.jsx` — Image 16:9, tag, title, date, excerpt
- [x] `KPIBar.jsx` — Animated number counters (GSAP snap)
- [x] `TestimonialBox.jsx` — Premium quote box
- [x] `NewsletterForm.jsx` — Email + frequency + RGPD consent
- [x] `DonationWidget.jsx` — Amount presets + custom + recurring toggle

## Milestone 3: Pages — About & Team
- [x] `/a-propos` page layout
- [x] Vision & Mission section with icons
- [x] History timeline (GSAP ScrollTrigger)
- [x] KPI section ("L'ACNU en chiffres")
- [x] Team grid (portraits, names, roles, expandable bios)

## Milestone 4: Pages — Programmes & Projets
- [x] `/programmes` — Hero + 3 programme cards
- [x] `/projets` — Grid of project cards
- [x] `/projets/maison-des-jeunes` — Full project page
- [x] `/projets/acnumedia` — Full project page
- [x] `/projets/volontariat` — Full project page
- [x] Related projects section

## Milestone 5: Pages — Actualités
- [x] `/actualites` — Grid + Filters + Search + Pagination
- [x] `/actualites/:slug` — Article page (image, body, share, related)
- [x] Mock data for 6-8 news articles

## Milestone 6: Pages — Don & Newsletter
- [x] `/don` — Donation page with amount presets
- [x] Post-don "Merci" page/modal
- [x] Newsletter section integration (footer + homepage + standalone)

## Milestone 7: Widget Transverse
- [x] `MemberWidget.jsx` audit (already exists, refine for new theme system)
- [x] Ensure it renders on all public pages within PublicLayout
- [x] Test FAB mode on mobile

## Milestone 8: Bug Investigation & Stability
- [x] Investigate parallax overlap at bottom of page
- [x] Force ScrollTrigger.refresh() on theme change
- [x] Stabilize pinSpacing in Protocol component

## Milestone 9: Hyper-Personalized Artifacts (World-Class)
- [x] Refactor ICNUShuffler with progress gauges and metadata
- [x] Implement Miss & Mister Feed with "LIVE" badges and cultural timeline
- [x] Develop SimulationScheduler with interactive tooltips and slot tracking
- [x] Add Level 2 Programme Details Cards
