<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setLocale, type Locale } from '@/i18n'

const { t, locale } = useI18n()
const options: { value: Locale; label: string }[] = [
  { value: 'pt', label: 'PT' },
  { value: 'en', label: 'EN' },
]
</script>

<template>
  <div
    role="group"
    :aria-label="t('nav.language')"
    class="flex items-center gap-1 rounded-full border border-border-strong p-1 text-sm"
  >
    <button
      v-for="o in options"
      :key="o.value"
      type="button"
      :aria-pressed="locale === o.value ? 'true' : 'false'"
      class="min-h-9 cursor-pointer rounded-full px-3 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
      :class="locale === o.value ? 'bg-primary text-on-primary' : 'text-muted hover:text-fg'"
      @click="setLocale(o.value)"
    >
      {{ o.label }}
    </button>
  </div>
</template>
