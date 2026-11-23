<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import wordmarkDark from '@ds/assets/Logos/boleia-wordmark-dark.svg'

const { t } = useI18n()
</script>

<template>
  <section class="pb-16 sm:pb-22 lg:pb-28">
    <div class="container-page">
      <div
        class="flex flex-col items-center gap-5 rounded-[28px] bg-primary px-6 py-14 text-center text-on-primary sm:px-12 sm:py-16 lg:py-20"
      >
        <img :src="wordmarkDark" alt="Boleia" class="h-10 w-auto md:h-12" />
        <h2 class="m-0 text-[clamp(32px,4vw,52px)] leading-[1.05] font-bold">
          {{ t('closing.title') }}
        </h2>
        <p class="m-0 max-w-[520px] text-lg leading-normal">{{ t('closing.subtitle') }}</p>
      </div>
    </div>
  </section>
</template>
