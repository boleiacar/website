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
      class="container-page m-0 grid list-none grid-cols-1 min-[22rem]:grid-cols-2 gap-x-6 gap-y-4 py-5 text-sm text-muted sm:text-[15px] lg:grid-cols-4 lg:py-6"
    >
      <li
        v-for="i in items"
        :key="i.key"
        class="flex items-start gap-2.5 lg:items-center lg:justify-center"
      >
        <component
          :is="i.icon"
          :size="20"
          class="mt-px shrink-0 text-primary lg:mt-0"
          aria-hidden="true"
        />
        {{ t(i.key) }}
      </li>
    </ul>
  </section>
</template>
