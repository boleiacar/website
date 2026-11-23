<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import heroPhoto from '@ds/assets/Photography/onboarding-2.jpg'
import SiteNav from './SiteNav.vue'
import StoreBadge from '@/components/StoreBadge.vue'

const { t } = useI18n()
const background = {
  backgroundImage: `linear-gradient(90deg, rgba(4,6,8,.92) 0%, rgba(4,6,8,.65) 45%, rgba(4,6,8,.15) 100%), linear-gradient(0deg, var(--bg) 0%, rgba(4,6,8,0) 30%), url(${heroPhoto})`,
}
</script>

<template>
  <header
    id="top"
    class="flex min-h-[640px] flex-col bg-cover bg-[position:65%_center] md:min-h-[760px] md:bg-center"
    :style="background"
  >
    <SiteNav />
    <div
      class="mx-auto mt-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 pt-10 pb-20 md:pb-24"
    >
      <span
        class="self-start rounded-full border border-primary px-3.5 py-1.5 text-[13px] tracking-[.08em] text-primary uppercase"
        >{{ t('hero.eyebrow') }}</span
      >
      <h1
        class="m-0 max-w-[760px] text-[clamp(40px,6vw,76px)] leading-[1.04] font-bold tracking-[-0.02em]"
      >
        {{ t('hero.title') }}
      </h1>
      <p class="m-0 max-w-[560px] text-lg leading-relaxed text-fg/80 md:text-[19px]">
        {{ t('hero.subtitle') }}
      </p>
      <div data-test="badge-row" class="mt-2 flex flex-wrap gap-3">
        <StoreBadge store="google" variant="filled" />
        <StoreBadge store="apple" variant="outline" />
      </div>
    </div>
  </header>
</template>
