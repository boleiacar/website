import { createI18n } from 'vue-i18n'
import pt from './pt'
import en from './en'

export type Locale = 'pt' | 'en'

const STORAGE_KEY = 'boleia-locale'

export function initialLocale(stored: string | null): Locale {
  return stored === 'en' ? 'en' : 'pt'
}

function readStored(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale(readStored()),
  fallbackLocale: 'pt',
  messages: { pt, en },
})

function applyDocument(l: Locale): void {
  const m = l === 'en' ? en : pt
  document.documentElement.lang = l
  document.title = m.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', m.meta.description)
}

export function setLocale(l: Locale): void {
  i18n.global.locale.value = l
  try {
    localStorage.setItem(STORAGE_KEY, l)
  } catch {
    // storage unavailable (private mode): the choice lasts for this visit only
  }
  applyDocument(l)
}

export function syncDocument(): void {
  applyDocument(i18n.global.locale.value as Locale)
}
