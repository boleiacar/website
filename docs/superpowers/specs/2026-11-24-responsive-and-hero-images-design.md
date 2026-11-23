# Responsive pass and high-resolution hero: design

Date: 2026-11-24 · Status: approved by the user · Builds on `2026-11-23-boleia-landing-page-design.md`.

## Intent

The page should look deliberate on phones, tablets and large desktops, not just "not broken". The hero photo should be sharp on any screen. Today it is a 1080 px app crop that goes soft on desktop.

## Approaches (hero images)

- **A. Free stock photos from Pexels (chosen by the user).** Sharp and licence-free, but generic: no Boleia car.
- B. The original files behind the onboarding photos. On-brand, but they may not exist.
- C. AI-upscaled brand photos. Keeps the car; quality uncertain.

## Decisions

- **Hero images** (Pexels licence, free, no attribution required; credited in the README anyway):
  - tablet and desktop: Pexels 15403008, a countryside road in Angola, 2560×1707;
  - phones (< 640 px): Pexels 37382237, a Luanda boulevard with traffic, 2560×3840 portrait.
- **How they load:** an art-directed `<picture>` with WebP `srcset` at 640/1024/1600/2560 widths and a JPEG fallback. The hero `<img>` has `fetchpriority="high"`, no lazy loading, and explicit width and height. The dark gradient stays as an overlay so the text keeps its contrast.
- **Where they live:** resized files in `src/assets/hero/`, generated once with a Python/PIL script (`scripts/make-hero-images.py`). The source photos are not committed.
- **Breakpoints:** phone < 640, tablet 640–1023 (`sm`/`md`), desktop ≥ 1024 (`lg`), wide ≥ 1536 (`2xl`).
- **Container:** one shared class `.container-page`: max width 1200 → 1280 (`lg`) → 1440 (`2xl`); horizontal padding 20 / 32 (`sm`) / 48 (`lg`).
- **Section spacing:** 64 px on phones, 88 on tablets, 112 on desktops.
- **Nav:** below `md`, a menu button (`aria-expanded`, `aria-controls`) opens a panel with the three section links. Choosing a link or pressing Escape closes it.
- **Trust strip:** 2 columns on phone and tablet, 4 on desktop.
- **How it works:** from `md`, steps and phone sit side by side (phone column about 300 px); stacked below `md`.
- **Benefits:** 1 column / 2 columns (`sm`, with the 9th card spanning both) / 3 columns (`lg`).
- **Safety:** stacked below `lg`, side by side from `lg`.
- **Routes:** 1 / 2 (`sm`) / 4 (`lg`) columns.
- **Footer:** stacked on phones, one row from `sm`.

## Non-goals

No copy, colour or brand-photo changes, and no new sections.

## Check

Tests for the menu behaviour and the hero `<picture>` sources. In real Chrome at 320/390/768/1024/1440/1920 px there must be no sideways scroll, and the screenshots must look right.
