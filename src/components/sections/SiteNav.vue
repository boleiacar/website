<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import wordmark from '@ds/assets/Logos/boleia-wordmark.svg'
import LanguageSwitch from '@/components/LanguageSwitch.vue'

const { t } = useI18n()
const links = [
  { href: '#como', key: 'nav.how' },
  { href: '#vantagens', key: 'nav.benefits' },
  { href: '#seguranca', key: 'nav.safety' },
]
</script>

<template>
  <nav
    class="container-page flex items-center gap-6 py-5 md:gap-8 md:py-7"
  >
    <a href="/" class="shrink-0"><img :src="wordmark" alt="Boleia" class="h-8 w-auto md:h-9" /></a>
    <div class="hidden grow gap-7 text-[15px] md:flex">
      <a
        v-for="l in links"
        :key="l.href"
        :href="l.href"
        class="text-fg transition-colors hover:text-primary"
        >{{ t(l.key) }}</a
      >
    </div>
    <div class="ml-auto md:ml-0"><LanguageSwitch /></div>
  </nav>
</template>
