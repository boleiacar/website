import { describe, expect, it } from 'vitest'

// Every colour must come from design-system tokens (spec anti-goal): no raw hex in components.
const sources = import.meta.glob('/src/**/*.vue', { query: '?raw', import: 'default', eager: true })

describe('design tokens', () => {
  it('components use no hard-coded hex colours', () => {
    const offenders = Object.entries(sources)
      .filter(([, src]) =>
        /#[0-9a-fA-F]{3,8}\b/.test((src as string).replace(/rgba\(4,\s*6,\s*8[^)]*\)/g, '')),
      )
      .map(([path, src]) => `${path}: ${(src as string).match(/#[0-9a-fA-F]{3,8}\b/g)?.join(', ')}`)
    expect(offenders).toEqual([])
  })
})
