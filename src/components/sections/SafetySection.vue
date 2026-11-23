<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import photo from '@ds/assets/Photography/onboarding-3.jpg'

const { t, tm, rt } = useI18n()
const docs = () => (tm('safety.docs') as string[]).map((d) => rt(d))
</script>

<template>
  <section id="seguranca" class="mx-auto max-w-[1200px] scroll-mt-6 px-6 py-24 md:py-30">
    <div class="flex flex-wrap overflow-hidden rounded-[28px] border border-border bg-surface">
      <img
        :src="photo"
        :alt="t('safety.photoAlt')"
        loading="lazy"
        class="min-h-[300px] min-w-0 flex-[1_1_440px] object-cover md:min-h-[420px]"
      />
      <div class="flex min-w-0 flex-[1_1_440px] flex-col gap-5 p-8 md:p-14">
        <span class="text-[13px] tracking-[.08em] text-primary uppercase">{{ t('safety.eyebrow') }}</span>
        <h2 class="m-0 text-[clamp(30px,3.4vw,42px)] leading-[1.1] font-semibold">{{ t('safety.title') }}</h2>
        <p class="m-0 leading-relaxed text-muted">{{ t('safety.verification') }}</p>
        <p class="m-0 leading-relaxed text-muted">{{ t('safety.sos') }}</p>
        <ul class="m-0 mt-2 flex list-none flex-wrap gap-2.5 p-0">
          <li
            v-for="d in docs()"
            :key="d"
            data-test="doc"
            class="rounded-full border border-border-strong px-3.5 py-2 text-sm"
          >
            {{ d }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
