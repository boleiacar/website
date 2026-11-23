# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Coming soon" landing page for **Boleia**, a ride-sharing app for Angola. It is a single-page Vite + Vue 3 + TypeScript app with Tailwind CSS v4, built as a static site. There is no backend and no forms. The design and plan are in `docs/superpowers/`.

## Commands

Use pnpm.

- `pnpm dev`: dev server
- `pnpm build`: type-check (`vue-tsc`) and production build to `dist/`
- `pnpm preview`: serve the production build
- `pnpm test --run`: all tests once (Vitest + jsdom). For a single file: `pnpm vitest run src/path/file.spec.ts`
- `pnpm lint` / `pnpm format`

## Code layout

- `src/App.vue` stacks the page sections. Each section is a component in `src/components/sections/`. The phone mockups (app screens rebuilt in Vue, sample data only) are in `src/components/phone/`.
- Every visible string lives in `src/i18n/pt.ts` and `src/i18n/en.ts`. The two files must have identical key trees, which a test enforces. Portuguese is the default; the chosen language is kept in `localStorage['boleia-locale']`.
- Design tokens are mapped into Tailwind in `src/assets/main.css` (`bg-primary`, `text-on-primary`, `bg-surface`, `border-border`, `text-muted`…). Assets are imported straight from the design system via the `@ds` alias (`@ds/assets/...`); don't copy them into `src/`.

## Content source

All page copy (hero, about, how it works, feature cards, taglines, Portuguese hero) lives in `BUSINESS.md`. Use it as the single source of truth for text. Don't invent product claims that aren't there. The site targets Portuguese and English.

## Design system (source of truth for look and feel)

`design-system/` is a local copy of the Boleia design system, which was measured from the shipping Android app. The original lives at https://claude.ai/artifact/UcNExNs5orj7MqhaAYdJQt; pull from it again if it changes. Read `design-system/README.md` before any visual work. It covers voice and copy rules, colour usage, type styles, spacing, shape, imagery and logo rules.

- **Tokens:** `design-system/tokens.css` (CSS variables plus named type classes) and `tokens.json`. Map these into the Tailwind/shadcn theme rather than inventing colours. Key values: `--primary #f1e11e`, `--on-primary #101828` (text on yellow, never white), `--bg #040608`, `--surface #15191a`, `--border #292d2e`, `--text-muted #a1a3a3`.
- **Type:** Plus Jakarta Sans only, weights 400–700, self-hosted from `design-system/fonts/`.
- **Logos:** `design-system/assets/Logos/`. Use `boleia-wordmark.svg` (yellow) on dark, `boleia-wordmark-dark.svg` on yellow, and `boleia-pin.svg` as the symbol. Never recolour the logo or set "Boleia" in type in place of the wordmark.
- **Photography:** `design-system/assets/Photography/` holds onboarding and welcome photos. These are screen crops with a dark fade baked into the bottom, good enough for reference and prototypes. Swap in the original files for production.
- **Flags:** `design-system/assets/Flags/`. Use them for the PT/EN language switch.
- **App components:** `design-system/components/` has a small React 18 bundle (`window.Boleia`, typed in `index.d.ts`): TripSearchCard, RouteCard, LocationField, BottomNav, etc. Use it as the reference when recreating app screens inside phone mockups.
- **Voice:** European/Angolan Portuguese, formal third person (never *tu*), sentence case, no emoji, no exclamation marks.

The app has a single dark theme with no shadows; depth comes from `surface` against `bg` and 1px borders. A landing page can go bigger and more expressive, but should stay inside this palette and type scale.

## App screenshots

`mobile_screenshots/` holds real screenshots of the Boleia mobile app. Read `mobile_screenshots/SCREENSHOTS.md` before building any section that shows app screens (phone mockups, how-it-works, feature cards). It maps each file to its screen and flags which files must never be published because they contain personal data.

## UI component inspiration

Build from these libraries before writing custom components, themed with the tokens above:

- **Icons:** [Lucide](https://lucide.dev/) (`lucide-react`). The app uses Lucide with a 2px stroke; see `design-system/assets/Icons/README.md` for the icon-to-feature mapping.
- **Base components:** [shadcn/ui](https://ui.shadcn.com/docs/components)
- **Animated/interactive components:** [React Bits](https://www.reactbits.dev/)
