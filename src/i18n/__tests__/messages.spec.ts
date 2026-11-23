import { describe, expect, it } from 'vitest'
import pt from '@/i18n/pt'
import en from '@/i18n/en'
import { initialLocale } from '@/i18n'

function flatten(obj: unknown, prefix = ''): Record<string, string> {
  if (typeof obj === 'string') return { [prefix]: obj }
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(obj as object)) {
    Object.assign(out, flatten(v, prefix ? `${prefix}.${k}` : k))
  }
  return out
}

const ptFlat = flatten(pt)
const enFlat = flatten(en)

describe('messages', () => {
  it('pt and en have identical key trees', () => {
    expect(Object.keys(enFlat).sort()).toEqual(Object.keys(ptFlat).sort())
  })

  it('pt uses formal register and motorista', () => {
    for (const [key, text] of Object.entries(ptFlat)) {
      // informal imperatives open a sentence ("Partilha a viagem", "Viaja pela cidade");
      // mid-sentence third person ("o botão que partilha") is correct formal Portuguese
      expect(text, key).not.toMatch(/(^|[.:]\s+)(partilha|divide|viaja)\b/i)
      expect(text, key).not.toMatch(/\b(tu|teu|tua|condutor(es)?)\b/i)
      expect(text, key).not.toContain('!')
    }
  })

  it('has 4 passenger steps, 4 driver steps, 9 benefits, 4 docs', () => {
    for (const m of [pt, en]) {
      expect(m.how.passenger).toHaveLength(4)
      expect(m.how.driver).toHaveLength(4)
      expect(m.benefits.items).toHaveLength(9)
      expect(m.safety.docs).toHaveLength(4)
    }
  })

  it('never mentions Feito em Angola', () => {
    const all = [...Object.values(ptFlat), ...Object.values(enFlat)].join(' ')
    expect(all).not.toMatch(/feito em angola|made in angola/i)
  })

  it('initialLocale falls back to pt', () => {
    expect(initialLocale(null)).toBe('pt')
    expect(initialLocale('fr')).toBe('pt')
    expect(initialLocale('en')).toBe('en')
  })
})
