# Boleia landing page: design

Date: 2026-11-23
Status: draft, awaiting approval

## Intent

Boleia is a ride-sharing (carpooling) app for Angola. It is still in development and not yet in any app store. This landing page announces it: it explains what Boleia is and how it works, builds trust (verified drivers, SOS, fixed prices), and tells visitors the app is coming soon to Google Play and the App Store.

Audience: people in Angola, both future passengers and future drivers, mostly on phones, in Portuguese first and English second.

Success: a visitor understands in a few seconds what Boleia does and why it is safe, and remembers it for when it launches. The page looks like the same product as the app.

## Goals

- One-page site in Portuguese (default) and English, switchable in the page.
- Follows the chosen mockup, "Opção 1 · Estrada": https://claude.ai/artifact/6QNunGKRBwNcEjLqf7Xsim#artboard-Main
- Uses the Boleia design system in `design-system/` for colours, type, logos and photos.
- Shows the app inside phone mockups, rebuilt as Vue components (not screenshots).
- Works well from 360 px phones up to wide desktops.
- A git repository with everything committed.

## Non-goals

- No waitlist, sign-up form, email capture or backend (option A, chosen by the user).
- No CMS, blog, analytics or cookie banner.
- No real store links: the badges are "Em breve" labels, not links.
- No hosting or deployment setup beyond a static production build.

## Anti-goals (would be a failure even if it works)

- Looking like Mobucha (https://mobucha.ao/) or any other site: it was inspiration only.
- Copy or claims not in `BUSINESS.md`. No invented numbers, user counts, prices or testimonials.
- Personal data on the page: `mobile_screenshots/1000590981.png`, `1000590982.png` and `1000590984.png` contain the owner's real name, email and a password. They must never be committed, shipped or shown.
- Recolouring the logo, setting "Boleia" in type in place of the wordmark, or adding colours outside the tokens.
- Informal Portuguese (*tu*), emoji, or exclamation marks (design-system voice rules).

## Constraints

- **Stack (user's choice): Vite + Vue 3 single-page app**, not Nuxt. Chosen over Nuxt static generation and Nuxt with a server. Known trade-off: search engines and link previews see less, because the page is built in the browser. Mitigate cheaply with good static `<title>`, meta description and Open Graph tags in `index.html` (in Portuguese).
- **Component libraries (user's choice, adapted to Vue):** the user asked for Lucide, shadcn/ui and React Bits. Those last two are React-only, so use the Vue equivalents:
  - icons: `lucide-vue-next`
  - base components: `shadcn-vue` (Tailwind-based), only where the page needs them (e.g. Tabs for the passenger/driver switch)
  - motion: Vue Bits (vue-bits.dev) or Inspira UI pieces, used sparingly (entrance and reveal animations), and respecting `prefers-reduced-motion`
- **Styling:** Tailwind CSS, with the theme mapped from `design-system/tokens.css` / `tokens.json` (colours, radii, spacing, font). shadcn-vue's CSS variables point to the same tokens. Single dark theme, as in the app.
- **Font:** Plus Jakarta Sans 400–700, self-hosted from `design-system/fonts/`.
- **Text source:** the facts and claims come from `BUSINESS.md`, and the wording comes from the mockup.
  - **Portuguese:** `BUSINESS.md` has Portuguese for the hero only, and in the informal register. The mockup (Opção 1 · Estrada) holds a formal-Portuguese version of every section, translated from `BUSINESS.md`. That mockup text is the Portuguese source: copy it word for word. The user chose the mockup; the translations are the owner's to correct.
  - **English:** use the English text in `BUSINESS.md`. For the few short labels that exist only in the mockup (section labels, trust strip, document chips, "By city and across the country"), translate the mockup's Portuguese.
  - **Driver:** always *motorista* (the app's word and the design-system README's), never *condutor*.
  - **Short labels:** labels the mockup adds ("Em breve em Angola", "Pela cidade e pelo país", trust-strip items, document chips) are allowed, because each restates something in `BUSINESS.md`. "Feito em Angola" is dropped from the footer: it is a claim that is not in `BUSINESS.md`.
  - **Mockup access:** the builder can open the mockup with the claude-artifacts tools (read_file on slug `2bc14d72-b628-46ed-92bd-7780a471b2ce`, path `project/Main.dc.html`). It is the reference for layout, spacing and the phone frame.
- **Translations:** `vue-i18n`, with one message file per language. The language choice is kept in `localStorage`; the first visit defaults to Portuguese. `<html lang>` follows the choice.

## Approaches considered (how it gets built)

1. **Nuxt, generated as a static site:** best SEO and real `/en` URLs. It was recommended, but the user preferred something lighter.
2. **Vite + Vue single-page app (chosen by the user):** lightest setup and the same component libraries. Weaker SEO, mitigated with static meta tags.
3. **Nuxt running as a server:** rejected because there is no backend need with option A.

## The page (from mockup Opção 1 · Estrada)

Top to bottom:

1. **Nav:** yellow wordmark; anchor links Como funciona / Vantagens / Segurança (hidden on phones); PT/EN pill switch.
2. **Hero:** full-bleed photo (`design-system/assets/Photography/onboarding-2.jpg`, mountain road) under a dark gradient. Label "Em breve em Angola", H1 "A sua próxima boleia já vai a caminho.", subtext, and two "Em breve" store badges (Google Play filled yellow, App Store outlined). The badges are not links. They are text pills ("Em breve no / Google Play", "Em breve na / App Store") with no Google or Apple logos. This avoids trademark rules on recoloured brand marks, and Lucide has no brand icons. The official store badges come in at launch, together with real links (designer's call).
3. **Trust strip:** four items with yellow Lucide icons: verified drivers, SOS 24h, fixed price per seat in kwanzas, in-app payment.
4. **How it works:** a tab switch, "Sou passageiro" / "Sou motorista", that really switches between the passenger 4 steps and the driver 4 steps (both from `BUSINESS.md`). Beside it, a phone mockup showing the app's home screen (greeting, trip search card, a recent route, bottom nav) with sample data only. The phone could change with the tab (driver view: publish-trip / fare screen, as in the screenshots); see Builder's calls.
5. **Benefits:** the nine benefit cards from `BUSINESS.md`, in a responsive grid.
6. **Safety:** a split card with a photo (`onboarding-3.jpg`), the verification paragraph, the SOS paragraph, and document chips (BI, Carta de condução, Selfie em tempo real, Documentos do veículo).
7. **Routes:** "Pela cidade e pelo país", four cards: Talatona → Luanda Centro (cidade), and Luanda → Benguela, Huambo and Lobito (interurbana), all named in `BUSINESS.md`.
8. **Closing banner:** yellow block with the dark wordmark, "Partilhe a viagem, divida o custo." and the coming-soon line.
9. **Footer:** wordmark, language note "Português · English", social links (see open items), © 2026 Boleia.

## Phone mockups

Rebuild the app screens as small Vue components that follow `design-system/components/` (same structure, tokens and Lucide icons): a phone frame, a home screen, and optionally the driver fare screen. Only invented sample names and data appear in them, never real people. The real screenshots in `mobile_screenshots/` are reference only and are not shipped.

## Repository

- `git init` in the project root, then commit the existing material (`BUSINESS.md`, `CLAUDE.md`, `design-system/`, `mobile_screenshots/` minus the three personal-data files, this spec) and the app.
- `.gitignore` covers `node_modules`, `dist`, editor files and the three personal-data screenshots by name.
- Commit messages follow the attribution rule in the session; no remote and no push unless asked.
- After scaffolding, update `CLAUDE.md` with the real commands (dev, build, preview, lint) and the code layout.

## Builder's calls (left to the implementer)

- Folder layout, component split and naming.
- Exact animation choices from Vue Bits / Inspira UI, as long as they are subtle and honour reduced motion.
- Whether the phone mockup changes with the passenger/driver tab.
- Linting/formatting setup (ESLint + Prettier is the expected default) and whether to add a small test (e.g. that both languages have the same keys).
- Favicon and Open Graph image made from `boleia-pin.svg` and the brand colours.

## Open items (placeholders until the owner provides them)

- Social media URLs: shown as placeholders in the mockup. Hide the footer links until they exist.
- Original high-resolution photos and master logo files: the design-system copies are screen crops and traces. They are fine for now; swap them before launch.
