# Phase 0–1 foundation

## Phase 0 — Discovery

- Next.js 16.3.4 App Router project; global CSS is loaded from the root layout.
- No licensed Suxnix source is present. The public reference remains visual-only.
- BAKA assets are stored in `src/public/images` and are consumed through static imports.
- `main-hero.png`: combined BAKA product composition.
- `la-chuoi-1.png`, `la-chuoi-2.png`: transparent banana-leaf decorations.
- `bat-plus.png`, `bat-cacao.png`: transparent ingredient bowls.
- `doitac-1.png`, `doitac-2.png`, `doitac-3.png`, `doi-tac-4.png`: partner/channel marks.

## Phase 1 — Design system

- Design tokens: `src/styles/tokens.css`
- Shared CSS primitives: `src/styles/primitives.css`
- Container primitive: `src/components/ui/Container.tsx`
- Button-link primitive: `src/components/ui/ButtonLink.tsx`
- Section-heading primitive: `src/components/ui/SectionHeading.tsx`
- Centralized image registry: `src/config/assets.ts`

Reference-derived foundations include 1320px desktop containers, 15px gutters, Roboto body text, Oswald display headings, BAKA green `#0d9b4d`, orange `#faa432`, section spacing, pill buttons, elevations, and motion timing.

## Verification

- Production build and TypeScript: passed.
- Desktop 1440: existing geometry unchanged.
- Mobile 390: existing geometry unchanged; no horizontal overflow.
- Phase 2 Header/Hero implementation was intentionally not changed in this phase.
