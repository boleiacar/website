<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Menu, X } from 'lucide-vue-next'
import wordmark from '@ds/assets/Logos/boleia-wordmark.svg'
import LanguageSwitch from '@/components/LanguageSwitch.vue'

const { t } = useI18n()
const links = [
  { href: '#como', key: 'nav.how' },
  { href: '#vantagens', key: 'nav.benefits' },
  { href: '#seguranca', key: 'nav.safety' },
]
const open = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)

function onKey(e: KeyboardEvent) {
  if (e.key !== 'Escape' || !open.value) return
  open.value = false
  menuButton.value?.focus()
}
onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <nav class="relative">
    <div class="container-page flex flex-wrap items-center gap-x-6 gap-y-3 py-5 md:gap-8 md:py-7">
      <a href="/" class="shrink-0"
        ><img :src="wordmark" alt="Boleia" class="h-8 w-auto lg:h-9"
      /></a>
      <div class="hidden grow gap-7 text-[15px] md:flex">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-fg transition-colors hover:text-primary"
          >{{ t(l.key) }}</a
        >
      </div>
      <div class="ml-auto flex items-center gap-2 md:ml-0">
        <LanguageSwitch />
        <button
          ref="menuButton"
          type="button"
          class="flex size-11 cursor-pointer items-center justify-center rounded-full border border-border-strong text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg md:hidden"
          :aria-label="t('nav.menu')"
          :aria-expanded="open ? 'true' : 'false'"
          aria-controls="mobile-menu"
          @click="open = !open"
        >
          <X v-if="open" :size="20" aria-hidden="true" />
          <Menu v-else :size="20" aria-hidden="true" />
        </button>
      </div>
    </div>
    <div
      v-if="open"
      id="mobile-menu"
      class="absolute inset-x-0 top-full z-20 border-y border-border bg-surface md:hidden"
    >
      <ul class="container-page m-0 flex list-none flex-col py-2">
        <li v-for="l in links" :key="l.href">
          <a
            :href="l.href"
            class="flex min-h-12 items-center text-lg text-fg hover:text-primary"
            @click="open = false"
            >{{ t(l.key) }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
