<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { hero } from '@/assets/hero'
import SiteNav from './SiteNav.vue'
import StoreBadge from '@/components/StoreBadge.vue'

const { t } = useI18n()
</script>

<template>
  <header
    id="top"
    class="relative isolate flex min-h-[max(600px,92svh)] flex-col overflow-hidden sm:min-h-[680px] lg:min-h-[min(860px,100svh)]"
  >
    <picture class="absolute inset-0 -z-20">
      <source
        media="(max-width: 639px)"
        type="image/webp"
        :srcset="hero.phone.webp"
        sizes="100vw"
      />
      <source media="(max-width: 639px)" type="image/jpeg" :srcset="hero.phone.jpg" sizes="100vw" />
      <source type="image/webp" :srcset="hero.wide.webp" sizes="100vw" />
      <source type="image/jpeg" :srcset="hero.wide.jpg" sizes="100vw" />
      <img
        :src="hero.fallback"
        :width="hero.width"
        :height="hero.height"
        alt=""
        fetchpriority="high"
        decoding="async"
        class="size-full object-cover object-[50%_60%] sm:object-[60%_center]"
      />
    </picture>
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(4_6_8/.55)_0%,rgb(4_6_8/.35)_35%,rgb(4_6_8/.85)_70%,var(--bg)_100%)] sm:bg-[linear-gradient(90deg,rgb(4_6_8/.92)_0%,rgb(4_6_8/.7)_45%,rgb(4_6_8/.15)_100%),linear-gradient(0deg,var(--bg)_0%,rgb(4_6_8/0)_30%)]"
    ></div>

    <SiteNav />
    <div class="container-page mt-auto flex flex-col gap-5 pt-10 pb-14 sm:gap-6 sm:pb-20 lg:pb-28">
      <span
        class="self-start rounded-full border border-primary px-3.5 py-1.5 text-xs tracking-[.08em] text-primary uppercase sm:text-[13px]"
        >{{ t('hero.eyebrow') }}</span
      >
      <h1
        class="m-0 max-w-[13ch] text-[clamp(2.5rem,1.6rem+4.2vw,5.25rem)] leading-[1.02] font-bold tracking-[-0.025em]"
      >
        {{ t('hero.title') }}
      </h1>
      <p class="m-0 max-w-[36rem] text-base leading-relaxed text-fg/85 sm:text-lg lg:text-xl">
        {{ t('hero.subtitle') }}
      </p>
      <div data-test="badge-row" class="mt-2 flex flex-wrap gap-3">
        <StoreBadge store="google" variant="filled" />
        <StoreBadge store="apple" variant="outline" />
      </div>
    </div>
  </header>
</template>
