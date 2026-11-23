# Boleia · landing page

"Coming soon" landing page for Boleia, a ride-sharing app for Angola. Vite + Vue 3 + TypeScript + Tailwind CSS v4.

```sh
pnpm install
pnpm dev          # local server
pnpm build        # production build in dist/
pnpm test --run   # tests
```

See `CLAUDE.md` for the code layout and `docs/superpowers/` for the design and plans.

## Photo credits

Hero photos from [Pexels](https://www.pexels.com/license/), free to use:

- [Road through the Angolan countryside](https://www.pexels.com/photo/a-road-in-a-countryside-15403008/) (Pexels 15403008)
- [Luanda boulevard with traffic](https://www.pexels.com/photo/modern-boulevard-in-luanda-with-traffic-37382237/) (Pexels 37382237)

Responsive sizes are generated with `python3 -I scripts/make-hero-images.py <landscape.jpg> <portrait.jpg> src/assets/hero`.

The other photos and the logos come from the Boleia design system (`design-system/`).
