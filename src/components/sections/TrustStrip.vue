<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { CircleAlert, CreditCard, ShieldCheck, Tag } from 'lucide-vue-next'

const { t } = useI18n()
const items = [
  { icon: ShieldCheck, key: 'trust.verified' },
  { icon: CircleAlert, key: 'trust.sos' },
  { icon: Tag, key: 'trust.price' },
  { icon: CreditCard, key: 'trust.payment' },
]
</script>

<template>
  <section class="border-y border-border">
    <ul
      class="mx-auto m-0 flex max-w-[1200px] list-none flex-wrap justify-between gap-x-10 gap-y-4 px-6 py-5 text-[15px] text-muted"
    >
      <li v-for="i in items" :key="i.key" class="flex items-center gap-2.5">
        <component :is="i.icon" :size="20" class="text-primary" aria-hidden="true" />
        {{ t(i.key) }}
      </li>
    </ul>
  </section>
</template>
