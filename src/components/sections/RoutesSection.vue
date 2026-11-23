<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ChevronRight } from 'lucide-vue-next'

const { t } = useI18n()
const routes = [
  { from: 'Talatona', to: 'Luanda Centro', kind: 'city' },
  { from: 'Luanda', to: 'Benguela', kind: 'intercity' },
  { from: 'Luanda', to: 'Huambo', kind: 'intercity' },
  { from: 'Luanda', to: 'Lobito', kind: 'intercity' },
] as const
</script>

<template>
  <section class="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 pb-24 md:pb-30">
    <h2 class="m-0 text-[clamp(28px,3vw,36px)] font-semibold">{{ t('routes.title') }}</h2>
    <ul class="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 p-0">
      <li
        v-for="r in routes"
        :key="r.to"
        data-test="route"
        class="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5.5"
      >
        <span class="text-[13px] text-primary">{{ t(`routes.${r.kind}`) }}</span>
        <span class="flex items-center gap-2.5 text-lg font-medium">
          {{ r.from }}
          <ChevronRight :size="18" class="text-muted" aria-hidden="true" />
          <span class="sr-only">→</span>
          {{ r.to }}
        </span>
      </li>
    </ul>
  </section>
</template>
