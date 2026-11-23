// Pexels 15403008 (road, landscape) and 37382237 (Luanda boulevard, portrait 3:4). Pexels licence.
// Regenerate with scripts/make-hero-images.py.
const files = import.meta.glob<string>('./*.{webp,jpg}', { eager: true, import: 'default', query: '?url' })

function srcset(stem: string, ext: 'webp' | 'jpg', widths: number[]): string {
  return widths.map((w) => `${files[`./${stem}-${w}.${ext}`]} ${w}w`).join(', ')
}

export const hero = {
  phone: {
    webp: srcset('luanda', 'webp', [640, 1024, 1600]),
    jpg: srcset('luanda', 'jpg', [640, 1024, 1600]),
  },
  wide: {
    webp: srcset('road', 'webp', [640, 1024, 1600, 2560]),
    jpg: srcset('road', 'jpg', [640, 1024, 1600, 2560]),
  },
  fallback: files['./road-1600.jpg'] as string,
  width: 1600,
  height: 1067,
}
