# Boleia Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a one-page, bilingual (PT/EN) "coming soon" landing page for Boleia that follows mockup Opção 1 · Estrada.

**Architecture:** A Vite + Vue 3 + TypeScript single-page app at the repo root. Each page section is its own component, and `App.vue` stacks them. All visible text lives in two `vue-i18n` message files. The theme is Tailwind v4, mapped from `design-system/tokens.css`, and assets are imported straight from `design-system/` (no copies).

**Tech Stack:** Vite, Vue 3 (`<script setup lang="ts">`), Tailwind CSS v4 (`@tailwindcss/vite`), shadcn-vue (Tabs only), lucide-vue-next, vue-i18n v11, Vue Bits (FadeContent), Vitest + @vue/test-utils + jsdom, ESLint + Prettier, pnpm.

**Spec:** `docs/superpowers/specs/2026-11-23-boleia-landing-page-design.md`
**Mockup (layout, spacing and the Portuguese copy, verbatim):** `docs/superpowers/specs/2026-11-23-mockup-option-1.dc.html`. Its `/_blob/...` URLs map to `design-system/assets/`:

| Blob in mockup | Local file |
|---|---|
| `4b4e5e41…` | `design-system/assets/Logos/boleia-wordmark.svg` |
| `c691f936…` | `design-system/assets/Logos/boleia-wordmark-dark.svg` |
| `2a85d330…` | `design-system/assets/Photography/onboarding-2.jpg` (hero) |
| `5615c97a…` | `design-system/assets/Photography/onboarding-3.jpg` (safety) |

## Global Constraints

- Colours come only from `design-system/tokens.css` (`--primary #f1e11e`, `--on-primary #101828`, `--bg #040608`, `--surface #15191a`, `--border #292d2e`, `--border-strong #383838`, `--text #ffffff`, `--text-muted #a1a3a3`, `--text-subtle #9b9b9c`). Text on yellow is always `on-primary`, never white.
- Font is Plus Jakarta Sans 400–700 from `design-system/fonts/`, loaded by `tokens.css`'s `@font-face`. No Google Fonts.
- The logo is always the SVG wordmark: yellow on dark, `-dark` on yellow. Never recolour it or set it in type.
- Portuguese is formal (no *tu* forms: "partilha", "divide", "viaja", "tu", "teu"), uses *motorista* never *condutor*, and has no emoji and no "!".
- No copy, numbers or claims beyond `BUSINESS.md` and the mockup. No "Feito em Angola".
- Store badges are text pills, not links, with no Google or Apple logos.
- Never import, copy or reference `mobile_screenshots/1000590981.png`, `1000590982.png` or `1000590984.png`, or the owner's name or email.
- No forms, no backend, no analytics, no remote calls at runtime.
- Commit after every task, with this trailer on each commit message: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. No push.

## Review Focus

1. A stored language value that is garbage (`localStorage.boleia-locale = "fr"`) should give Portuguese, not a blank page or raw keys. Covered in Task 2.
2. On a 360 px wide phone nothing should scroll sideways. The phone mockup and badges must shrink or wrap (`max-w-full`, `flex-wrap`). Covered in Tasks 3 and 4.
3. Visitors with `prefers-reduced-motion: reduce` should see every section immediately, with no hidden-until-scroll content. Covered in Task 6.
4. A key missing from `en.ts` should never show `how.title` to an English reader, so the two message trees must match exactly. Covered in Task 2.
5. The passenger/driver tabs must work from the keyboard (arrow keys, Enter) and update the steps and the phone. Covered in Task 5.

---

### Task 1: Scaffold, theme and tooling

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `vitest.config.ts`, `index.html`, `eslint.config.js`, `.prettierrc.json`, `components.json`
- Create: `src/main.ts`, `src/App.vue`, `src/assets/main.css`, `src/env.d.ts`
- Test: `src/__tests__/App.spec.ts`
- Modify: `CLAUDE.md` (Project section: real commands and layout)

**Interfaces:**
- Produces: alias `@` → `src/`, alias `@ds` → `design-system/`; Tailwind colour utilities `bg-primary text-on-primary bg-bg bg-surface border-border border-border-strong text-fg text-muted text-subtle`; radii `rounded-md(10px) rounded-lg(14px) rounded-xl(16px) rounded-2xl(20px)`; font `font-sans` = Plus Jakarta Sans; scripts `dev`, `build`, `preview`, `test`, `lint`, `format`.

- [ ] **Step 1: Scaffold.** Run `pnpm create vite@latest . --template vue-ts` (keep the existing files). Then add the dependencies: `pnpm add vue-i18n lucide-vue-next reka-ui class-variance-authority clsx tailwind-merge` and `pnpm add -D tailwindcss @tailwindcss/vite vitest @vue/test-utils jsdom eslint eslint-plugin-vue @vue/eslint-config-typescript @vue/eslint-config-prettier prettier`. Remove the template's demo files (`HelloWorld.vue`, `src/style.css`, `public/vite.svg`, `src/assets/vue.svg`).
- [ ] **Step 2: Theme in `src/assets/main.css`.** Start with `@import "tailwindcss";` and `@import "../../design-system/tokens.css";`. Add a `@theme inline` block that maps `--color-primary: var(--primary)`, `--color-on-primary`, `--color-bg`, `--color-surface`, `--color-border`, `--color-border-strong`, `--color-fg: var(--text)`, `--color-muted: var(--text-muted)`, `--color-subtle: var(--text-subtle)`, the radii above, and `--font-sans: var(--font-sans)`. Set `body { background: var(--bg); color: var(--text); font-family: var(--font-sans) }` and `html { scroll-behavior: smooth }`, with smooth scrolling off under `prefers-reduced-motion`.
- [ ] **Step 3: `index.html`.** `lang="pt"`. Title: "Boleia · Partilhe a viagem, divida o custo". Meta description: the mockup's hero subtitle. `og:title`, `og:description` and `og:type=website` with the same text. `theme-color` `#040608`. Favicon `/favicon.svg`, a copy of `design-system/assets/Logos/boleia-pin.svg` in `public/`.
- [ ] **Step 4: Write the failing test** `src/__tests__/App.spec.ts`: `it('renders the Boleia wordmark')`, which mounts `App` and expects `wrapper.find('img[alt="Boleia"]').exists()` to be `true`.
- [ ] **Step 5: Run** `pnpm test --run`. Expected: FAIL (App has no wordmark yet).
- [ ] **Step 6: Implement.** `App.vue` renders a `<main>` holding the yellow wordmark (`import wordmark from '@ds/assets/Logos/boleia-wordmark.svg'`). Configure `vitest.config.ts` with `environment: 'jsdom'` and the same aliases as Vite.
- [ ] **Step 7: Run** `pnpm test --run && pnpm build && pnpm lint`. Expected: all pass, and `dist/` contains the Plus Jakarta Sans woff2 files.
- [ ] **Step 8: Update `CLAUDE.md`.** Replace "No code or tech stack exists yet…" with the commands (`pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm test --run`, a single test with `pnpm vitest run src/path/file.spec.ts`, `pnpm lint`) and a 3–4 line layout note: sections in `src/components/sections/`, phone screens in `src/components/phone/`, all copy in `src/i18n/`, assets imported via `@ds`.
- [ ] **Step 9: Commit** with `chore: scaffold Vite + Vue app with Boleia design tokens`.

### Task 2: Translations and the language switch

**Files:**
- Create: `src/i18n/pt.ts`, `src/i18n/en.ts`, `src/i18n/index.ts`, `src/components/LanguageSwitch.vue`
- Test: `src/i18n/__tests__/messages.spec.ts`, `src/components/__tests__/LanguageSwitch.spec.ts`

**Interfaces:**
- Produces: `export type Locale = 'pt' | 'en'`; `export const i18n` (a `createI18n` instance, `legacy: false`, `fallbackLocale: 'pt'`); `export function initialLocale(stored: string | null): Locale`; `export function setLocale(l: Locale): void`, which sets `i18n.global.locale`, writes `localStorage['boleia-locale']` and sets `document.documentElement.lang` to `'pt'` or `'en'`. The message tree, which `en.ts` must mirror exactly:
  ```
  meta.{title,description}
  nav.{how,benefits,safety,language}
  hero.{eyebrow,title,subtitle,soonOn,soonIn,googlePlay,appStore}
  trust.{verified,sos,price,payment}
  how.{eyebrow,title,tabPassenger,tabDriver,passenger[4]{t,d},driver[4]{t,d}}
  benefits.{eyebrow,title,items[9]{t,d}}
  safety.{eyebrow,title,verification,sos,docs[4],photoAlt}
  routes.{title,city,intercity}
  closing.{title,subtitle}
  footer.{languages,rights}
  phone.{greeting,searchTitle,from,to,date,search,recentRoutes,seeAll,tapRoute,tabs[4],publishTitle,step,pricePerSeat,perSeat,recommended,publish}
  ```
- **PT copy:** verbatim from the mockup file for everything it shows. Text the mockup does not contain:
  - `how.driver`: "Seja verificado / Envie o BI, a carta de condução, uma selfie e os documentos do veículo." · "Publique uma viagem / Defina a rota, as paragens, a hora de partida e os lugares. A app sugere um preço justo." · "Preencha os lugares / Os passageiros reservam e pagam antecipadamente." · "Receba / Os seus ganhos são pagos automaticamente."
  - `phone`: "Bom dia", "Encontrar boleia", "De", "Para", "Selecionar data", "Pesquisar viagens", "Rotas recentes", "Ver tudo", "Toque para usar esta rota", tabs "Início / Viagens / Mensagens / Perfil", "Publicar viagem", "Passo 6 de 6 · Preço", "Preço por lugar", "AOA por lugar", "Preço recomendado", "Publicar viagem".
  - `footer.languages` "Português · English"; `footer.rights` "© 2026 Boleia"; `safety.photoAlt` "Motorista da Boleia a receber passageiros à porta de um hotel"; `nav.language` "Idioma".
- **EN copy:** the `BUSINESS.md` text for hero, steps, benefits, safety and taglines (`closing.title` = "Share the ride, share the cost."; `hero.title` = "Your seat is already on the way."). Labels the mockup adds: eyebrow "Coming soon to Angola"; "Coming soon on / Google Play", "Coming soon on / App Store"; trust "Verified drivers / 24-hour SOS / Fixed price per seat, in kwanzas / In-app payment"; how title "From search to seat, in four steps."; tabs "I'm a passenger / I'm a driver"; benefits title "Cheaper than going alone. Safer than flagging a ride on the street."; safety title "Safety comes first."; docs "National ID / Driving licence / Live selfie / Vehicle documents"; routes "By city and across the country." / "City" / "Intercity"; closing subtitle "The app is almost ready. Coming soon to Google Play and the App Store."; phone strings as in the app's English screens ("Good morning", "Find a ride", "From", "To", "Select date", "Search trips", "Recent routes", "See all", "Tap to use this route", "Home / Trips / Messages / Profile", "Publish trip", "Step 6 of 6 · Fare", "Price per seat", "AOA per seat", "Recommended price", "Publish trip").

- [ ] **Step 1: Write failing tests** in `messages.spec.ts`:
  - `it('pt and en have identical key trees')`: flatten both message objects to sorted dot-paths, including array indices, and expect them to be equal.
  - `it('pt uses formal register and motorista')`: every PT string fails to match `/\b(partilha|divide|viaja|tu|teu|tua|condutor(es)?)\b/i` and contains no `!`.
  - `it('has 4 passenger steps, 4 driver steps, 9 benefits, 4 docs')`.
  - `it('never mentions Feito em Angola')`.
  - `it('initialLocale falls back to pt')`: `initialLocale(null)` → `'pt'`, `initialLocale('fr')` → `'pt'`, `initialLocale('en')` → `'en'`.
- [ ] **Step 2: Write a failing test** in `LanguageSwitch.spec.ts`: `it('switches to English, persists and updates html lang')`. Mount with `i18n`, click the `EN` button, and expect `localStorage.getItem('boleia-locale') === 'en'`, `document.documentElement.lang === 'en'`, and `aria-pressed="true"` on EN.
- [ ] **Step 3: Run** `pnpm vitest run src/i18n src/components/__tests__/LanguageSwitch.spec.ts`. Expected: FAIL (modules missing).
- [ ] **Step 4: Implement** the message files, `i18n/index.ts` (the locale read with `initialLocale(localStorage.getItem('boleia-locale'))` at startup; `document.title` and the meta description updated in `setLocale`), and `LanguageSwitch.vue`: two `<button>`s with `aria-pressed`, styled as the mockup's PT/EN pill (active = `bg-primary text-on-primary`), in a group with `aria-label` `t('nav.language')`. Register `i18n` in `main.ts`.
- [ ] **Step 5: Run** the same command. Expected: PASS.
- [ ] **Step 6: Commit** with `feat: add PT/EN translations and language switch`.

### Task 3: Nav, hero and trust strip

**Files:**
- Create: `src/components/StoreBadge.vue`, `src/components/sections/SiteNav.vue`, `src/components/sections/HeroSection.vue`, `src/components/sections/TrustStrip.vue`
- Modify: `src/App.vue` (stacks the sections)
- Test: `src/components/__tests__/Hero.spec.ts`

**Interfaces:**
- Consumes: `i18n`, `LanguageSwitch` (Task 2).
- Produces: `StoreBadge` props `{ store: 'google' | 'apple'; variant: 'filled' | 'outline' }`; section ids `#como`, `#vantagens`, `#seguranca` (used by the nav, owned by Tasks 5 and 6).

- [ ] **Step 1: Write failing tests:**
  - `it('store badges are not links or buttons')`: there is no `a` or `button` inside `[data-test="store-badge"]`, and there are exactly 2 badges.
  - `it('nav links point to section anchors')`: the hrefs equal `['#como', '#vantagens', '#seguranca']`.
  - `it('hero shows the PT title by default')`: the text contains "A sua próxima boleia já vai a caminho."
  - `it('hero has no fixed width wider than a phone')`: no element has an inline width over 360px, and the badge row has the class `flex-wrap`.
- [ ] **Step 2: Run** `pnpm vitest run src/components/__tests__/Hero.spec.ts`. Expected: FAIL.
- [ ] **Step 3: Implement** to match the mockup's header and trust strip. Hero background: a CSS background-image using an imported `@ds/assets/Photography/onboarding-2.jpg` plus the mockup's two gradients, `min-h-[760px]` (`min-h-[640px]` on mobile). Nav links are hidden below `md`. Trust icons come from `lucide-vue-next` (`ShieldCheck`, `CircleAlert`, `Tag`, `CreditCard`) in `text-primary`, with `aria-hidden`.
- [ ] **Step 4: Run** the test again. Expected: PASS.
- [ ] **Step 5: Commit** with `feat: add nav, hero with coming-soon badges, trust strip`.

### Task 4: Phone mockups

**Files:**
- Create: `src/components/phone/PhoneFrame.vue`, `src/components/phone/PassengerHomeScreen.vue`, `src/components/phone/DriverFareScreen.vue`
- Test: `src/components/phone/__tests__/phone.spec.ts`

**Interfaces:**
- Produces: `PhoneFrame` (default slot; root `w-[340px] max-w-full aspect-[340/700] rounded-[52px] border-[10px] border-[#232526] bg-bg overflow-hidden`, with `aria-hidden="true"` on the decorative frame and `role="img"` plus an `aria-label` describing the screen); `PassengerHomeScreen` (no props); `DriverFareScreen` (no props).
- Screen content follows `design-system/components/` (TripSearchCard, RouteCard, BottomNav and SectionHeader structure) and the app screenshots, with i18n `phone.*` strings.
  - Passenger: avatar "AM" with "Ana Manuel", a search card (Talatona / Luanda Centro / one seat), a recent route Luanda → Benguela, and a bottom nav with Início active.
  - Driver: a "Passo 6 de 6" progress bar (6 segments, all filled), price per seat "700" with −/+ circle buttons, "Preço recomendado", and the yellow Publicar viagem button. All controls are inert `<span>`s, not buttons.

- [ ] **Step 1: Write failing tests:**
  - `it('passenger screen shows sample data only')`: the text contains "Ana Manuel" and "Talatona", and does not match `/@|\.com\b/`.
  - `it('phone frame never exceeds its container')`: the root has the classes `max-w-full` and `w-[340px]`.
  - `it('mockup controls are not focusable')`: the phone has no `button`, `a` or `input` elements.
  - `it('driver screen shows the recommended fare')`: the text contains "700" and "Preço recomendado".
- [ ] **Step 2: Run** `pnpm vitest run src/components/phone`. Expected: FAIL.
- [ ] **Step 3: Implement** the three components with Tailwind and Lucide icons (`MapPin`, `Navigation2`, `Calendar`, `Users`, `Search`, `House`, `MessageCircle`, `User`, `ChevronRight`, `Minus`, `Plus`).
- [ ] **Step 4: Run** the test again. Expected: PASS.
- [ ] **Step 5: Commit** with `feat: add phone mockups of passenger home and driver fare screens`.

### Task 5: How it works with passenger/driver tabs

**Files:**
- Create: `src/components/ui/tabs/*`, generated with `pnpm dlx shadcn-vue@latest add tabs` (set up `components.json` and `src/lib/utils.ts` (`cn`) first if the CLI asks), and `src/components/sections/HowItWorks.vue`
- Modify: `src/App.vue`
- Test: `src/components/__tests__/HowItWorks.spec.ts`

**Interfaces:**
- Consumes: `PhoneFrame`, `PassengerHomeScreen`, `DriverFareScreen` (Task 4); `how.*` messages (Task 2).
- Produces: `<section id="como">`.

- [ ] **Step 1: Write failing tests:**
  - `it('shows passenger steps and the passenger phone by default')`: the text contains "Pesquise", and `PassengerHomeScreen` is present.
  - `it('switches to driver steps and the driver phone on click')`: trigger the "Sou motorista" tab, and the text contains "Seja verificado" and `DriverFareScreen` is present.
  - `it('tabs are keyboard operable')`: focus the passenger tab, press `ArrowRight`, and the driver tab has `data-state="active"` (use `attachTo: document.body`).
- [ ] **Step 2: Run** `pnpm vitest run src/components/__tests__/HowItWorks.spec.ts`. Expected: FAIL.
- [ ] **Step 3: Implement** following the mockup's "Como funciona" section. The tab list is styled like the app's segmented control (surface pill; the active tab is `bg-primary text-on-primary`). Steps are an `<ol>` of surface cards, where step 1 has a filled yellow number and the others have yellow outlines. The phone sits on the right and stacks below the steps under `lg`.
- [ ] **Step 4: Run** the test again. Expected: PASS.
- [ ] **Step 5: Commit** with `feat: add how-it-works with passenger and driver tabs`.

### Task 6: Benefits, safety, routes, closing, footer, motion

**Files:**
- Create: `src/components/sections/BenefitsSection.vue`, `SafetySection.vue`, `RoutesSection.vue`, `ClosingBanner.vue`, `SiteFooter.vue`; `src/components/motion/FadeContent.vue`
- Modify: `src/App.vue` (final order: Nav, Hero, Trust, How, Benefits, Safety, Routes, Closing, Footer; each section below the hero wrapped in `FadeContent`)
- Test: `src/components/__tests__/Sections.spec.ts`, `src/components/motion/__tests__/FadeContent.spec.ts`

**Interfaces:**
- Produces: `FadeContent` props `{ duration?: number /* ms, default 700 */; delay?: number /* ms, default 0 */; threshold?: number /* default 0.1 */ }`. The default slot is visible at once when `matchMedia('(prefers-reduced-motion: reduce)').matches` or when `IntersectionObserver` is missing. Base it on Vue Bits' FadeContent (https://vue-bits.dev, Animations → Fade Content). If it pulls in gsap or can't be fetched, write the equivalent with IntersectionObserver and a CSS opacity/translate transition, keeping these props.
- Routes data (the only non-i18n content): `[{from:'Talatona',to:'Luanda Centro',kind:'city'},{from:'Luanda',to:'Benguela',kind:'intercity'},{from:'Luanda',to:'Huambo',kind:'intercity'},{from:'Luanda',to:'Lobito',kind:'intercity'}]`.
- Benefit icons (Lucide, in order): `ShieldCheck`, `Siren`, `Tag`, `CreditCard`, `Map`, `Luggage`, `Star`, `Languages`, `LifeBuoy`. These replace the mockup's 01–09 numbers.

- [ ] **Step 1: Write failing tests:**
  - `Sections.spec`: `it('renders 9 benefit cards')`, `it('safety lists the 4 documents')`, `it('routes show 4 cards with city/intercity labels')`, `it('closing banner uses the dark wordmark on yellow')` (an img with `src` containing `boleia-wordmark-dark`), `it('footer has no social links until URLs exist')` (no `a[href*="instagram"]` and no "[Instagram]" text), and `it('footer omits Feito em Angola')`.
  - `FadeContent.spec`: `it('shows content immediately with reduced motion')`. Mock `matchMedia` to match reduce, and the slot wrapper has `opacity: 1` with no transition. `it('starts hidden then shows when intersecting')`. Mock `IntersectionObserver`, fire `isIntersecting: true`, and expect opacity `1`.
- [ ] **Step 2: Run** `pnpm vitest run src/components`. Expected: the new tests FAIL.
- [ ] **Step 3: Implement** the sections following the mockup (safety photo via the imported `onboarding-3.jpg` with `alt` = `t('safety.photoAlt')`), and `FadeContent`.
- [ ] **Step 4: Run** `pnpm test --run`. Expected: all PASS.
- [ ] **Step 5: Commit** with `feat: add benefits, safety, routes, closing banner, footer and reveal motion`.

### Task 7: Final check and handover

**Files:**
- Modify: `CLAUDE.md` (if the layout changed), `public/og-image.png` (optional, 1200×630, wordmark on `#040608`; skip it if it can't be made without new tooling)

- [ ] **Step 1: Run** `pnpm lint && pnpm test --run && pnpm build`. Expected: all pass, with no TypeScript errors.
- [ ] **Step 2: Check the personal data.** Run `git ls-files | grep -E '1000590981|1000590982|1000590984'` and `grep -rniE 'the owner name and email' src index.html public`. Expected: no output from either.
- [ ] **Step 3: Check the page.** Run `pnpm preview` and open it at 360 px and 1440 px widths. Expected: no sideways scroll at 360 px; PT by default; EN switch works and survives a reload; all sections render. Report what was seen, including anything off.
- [ ] **Step 4: Commit** with `chore: final checks and docs`.
