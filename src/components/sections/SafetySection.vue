<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import photo from '@ds/assets/Photography/onboarding-3.jpg'

const { t, tm, rt } = useI18n()
const docs = () => (tm('safety.docs') as string[]).map((d) => rt(d))
</script>

<template>
  <section id="seguranca" class="scroll-mt-6 py-16 sm:py-22 lg:py-28">
    <div class="container-page">
      <div
        data-test="safety-card"
        class="flex flex-col overflow-hidden rounded-[28px] border border-border bg-surface lg:flex-row"
      >
        <img
          :src="photo"
          :alt="t('safety.photoAlt')"
          loading="lazy"
          width="1080"
          height="820"
          class="aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-auto lg:w-1/2"
        />
        <div class="flex min-w-0 flex-col gap-5 p-6 sm:p-10 lg:w-1/2 lg:p-14">
          <span class="text-[13px] tracking-[.08em] text-primary uppercase">{{
            t('safety.eyebrow')
          }}</span>
          <h2 class="m-0 text-[clamp(1.75rem,1.3rem+1.8vw,2.625rem)] leading-[1.1] font-semibold">
            {{ t('safety.title') }}
          </h2>
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
    </div>
  </section>
</template>
