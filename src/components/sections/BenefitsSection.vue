<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  CreditCard,
  Languages,
  LifeBuoy,
  Luggage,
  Map,
  ShieldCheck,
  Siren,
  Star,
  Tag,
} from 'lucide-vue-next'

type Item = { t: string; d: string }
const { t, tm, rt } = useI18n()
const icons = [ShieldCheck, Siren, Tag, CreditCard, Map, Luggage, Star, Languages, LifeBuoy]
const items = () => (tm('benefits.items') as Item[]).map((i) => ({ t: rt(i.t), d: rt(i.d) }))
</script>

<template>
  <section id="vantagens" class="scroll-mt-6 border-y border-border py-16 sm:py-22 lg:py-28">
    <div class="container-page flex flex-col gap-10 lg:gap-12">
      <div class="flex max-w-[680px] flex-col gap-4">
        <span class="text-[13px] tracking-[.08em] text-primary uppercase">{{
          t('benefits.eyebrow')
        }}</span>
        <h2 class="m-0 text-[clamp(1.875rem,1.3rem+2.2vw,3rem)] leading-[1.1] font-semibold">
          {{ t('benefits.title') }}
        </h2>
      </div>
      <ul class="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        <li
          v-for="(b, i) in items()"
          :key="b.t"
          data-test="benefit"
          class="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 lg:gap-3.5 lg:p-7"
          :class="i === 8 && 'sm:col-span-2 lg:col-span-1'"
        >
          <span
            class="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
          >
            <component :is="icons[i]" :size="24" aria-hidden="true" />
          </span>
          <h3 class="m-0 text-lg font-semibold lg:text-[19px]">{{ b.t }}</h3>
          <p class="m-0 text-[15px] leading-relaxed text-muted">{{ b.d }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
