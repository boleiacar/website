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
  <section class="pb-16 sm:pb-22 lg:pb-28">
    <div class="container-page flex flex-col gap-8">
      <h2 class="m-0 text-[clamp(1.625rem,1.3rem+1.2vw,2.25rem)] font-semibold">
        {{ t('routes.title') }}
      </h2>
      <ul class="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  </section>
</template>
