# Responsive Pass and Hero Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sharp art-directed hero photos and deliberate phone, tablet and desktop layouts.
**Architecture:** Generated WebP/JPEG sizes in `src/assets/hero/`, imported into a `<picture>` in `HeroSection`; a shared `.container-page` utility; per-section Tailwind breakpoint classes; a small mobile menu in `SiteNav`.
**Tech Stack:** existing (Vue 3, Tailwind v4, Vitest), plus Python 3 with PIL for one-off image generation.
**Spec:** `docs/superpowers/specs/2026-11-24-responsive-and-hero-images-design.md`

## Global Constraints

- Token colours only (the `tokens.spec` test enforces it). No copy changes, except a new i18n key `nav.menu` ("Menu" / "Menu") for the menu button's label.
- Phones must never download the 2560 px image (the `<source>` media queries and `sizes` handle this).
- Commit after each task, with the trailer `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. The menu open on a phone, then the window widened: the panel must not stay stuck open over the desktop nav. It is `md:hidden`. Covered in Task 2.
2. Missing WebP support: the JPEG fallback in `<img src>` takes over. Covered in Task 1.
3. Large browser font on a 360 px phone: the badges wrap and the tabs fit. Covered by the existing tests and the Task 4 check.
4. Keyboard users: the menu button is reachable, Escape closes the menu, and focus stays sensible. Covered in Task 2.
5. Slow connections: the hero image has width and height and an `object-cover` box, so there is no layout shift. Covered in Task 1.

---

### Task 1: Hero images and container

**Files:** Create `scripts/make-hero-images.py`, `src/assets/hero/*` (generated), `src/components/sections/__tests__/HeroPicture.spec.ts`. Modify `src/assets/main.css` (`@utility container-page`), `HeroSection.vue`, `README.md` (photo credits).

- [ ] **Step 1: Write the generation script.** `make-hero-images.py SRC_LANDSCAPE SRC_PORTRAIT OUT_DIR` writes `road-{640,1024,1600,2560}.{webp,jpg}` (landscape) and `luanda-{640,1024,1600}.{webp,jpg}` (portrait, cropped to 3:4), with WebP quality 78 and JPEG quality 80, progressive. Run it with `python3 -I` on the Pexels downloads 15403008 and 37382237.
- [ ] **Step 2: Write the failing test** `HeroPicture.spec`:
  - `it('serves a portrait source to phones and landscape to larger screens')`: the `<picture>` has a `source[media="(max-width: 639px)"]` whose srcset contains `luanda-640` and `luanda-1024`, and a WebP landscape source whose srcset contains `road-2560`.
  - `it('hero image loads eagerly with intrinsic size')`: the `img` has `fetchpriority="high"`, has no `loading="lazy"`, has width and height attributes, and has an alt (decorative `alt=""` is fine).
- [ ] **Step 3: Run** `pnpm vitest run src/components/sections/__tests__/HeroPicture.spec.ts`. Expected: FAIL.
- [ ] **Step 4: Implement** the `<picture>` as an absolutely positioned layer behind the gradient overlay in `HeroSection`, plus `.container-page`. Make Hero and Nav use `.container-page`.
- [ ] **Step 5: Run** `pnpm vitest run`. Expected: PASS. Commit with `feat: high-resolution art-directed hero photos`.

### Task 2: Mobile menu

**Files:** Modify `SiteNav.vue`, `src/i18n/pt.ts`, `src/i18n/en.ts`. Test: `src/components/__tests__/SiteNav.spec.ts`.

- [ ] **Step 1: Write failing tests:**
  - `it('menu button toggles the link panel')`: the button has `aria-expanded="false"`; after a click it is `"true"`, and the element named by `aria-controls` holds the 3 links.
  - `it('choosing a link closes the menu')`.
  - `it('Escape closes the menu')`.
  - `it('panel and button are hidden from md up')`: both have the class `md:hidden`.
- [ ] **Step 2: Run.** Expected: FAIL. **Step 3: Implement** with lucide `Menu`/`X` icons and a 44 px touch target. **Step 4: Run.** Expected: PASS. Commit with `feat: mobile navigation menu`.

### Task 3: Section layouts

**Files:** Modify `TrustStrip.vue`, `HowItWorks.vue`, `BenefitsSection.vue`, `SafetySection.vue`, `RoutesSection.vue`, `ClosingBanner.vue`, `SiteFooter.vue`. Test: `src/components/__tests__/Layout.spec.ts`.

- [ ] **Step 1: Write failing tests** that pin the breakpoint contract with class assertions:
  - trust list `grid-cols-2 lg:grid-cols-4`;
  - How It Works root `md:grid-cols-[minmax(0,1fr)_300px]`;
  - benefits list `sm:grid-cols-2 lg:grid-cols-3`, with the last card `sm:col-span-2 lg:col-span-1`;
  - safety card `lg:flex-row`;
  - routes list `sm:grid-cols-2 lg:grid-cols-4`;
  - every section uses `container-page`.
- [ ] **Step 2: Run.** Expected: FAIL. **Step 3: Implement** with section spacing `py-16 sm:py-22 lg:py-28`. **Step 4: Run** `pnpm vitest run`. Expected: PASS. Commit with `feat: phone, tablet and desktop layouts for every section`.

### Task 4: Browser check

- [ ] **Step 1: Run** `pnpm lint && pnpm vitest run && pnpm build`. Expected: all pass. Check the size of the hero assets in `dist/assets`.
- [ ] **Step 2:** In headless Chrome at 320/390/768/1024/1440/1920 px, expect `scrollWidth − innerWidth = 0`. Check that a 390 px phone requests a `luanda-*` image and no `road-2560` (from the network log). Take screenshots and look at the fold and the full page at 390, 768 and 1440 px. Fix anything off with a test first.
- [ ] **Step 3: Commit** with `chore: responsive verification`.
