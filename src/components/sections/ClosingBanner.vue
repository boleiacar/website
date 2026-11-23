<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import wordmarkDark from '@ds/assets/Logos/boleia-wordmark-dark.svg'

const { t } = useI18n()
</script>

<template>
  <section class="px-6 pb-24 md:pb-30">
    <div
      class="mx-auto flex max-w-[1200px] flex-col items-center gap-5 rounded-[28px] bg-primary px-6 py-16 text-center text-on-primary md:px-12 md:py-18"
    >
      <img :src="wordmarkDark" alt="Boleia" class="h-10 w-auto md:h-12" />
      <h2 class="m-0 text-[clamp(32px,4vw,52px)] leading-[1.05] font-bold">{{ t('closing.title') }}</h2>
      <p class="m-0 max-w-[520px] text-lg leading-normal">{{ t('closing.subtitle') }}</p>
    </div>
  </section>
</template>
