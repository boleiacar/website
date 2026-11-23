<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ store: 'google' | 'apple'; variant: 'filled' | 'outline' }>()
const { t } = useI18n()

const label = computed(() =>
  props.store === 'google'
    ? { pre: t('hero.soonOn'), name: t('hero.googlePlay') }
    : { pre: t('hero.soonIn'), name: t('hero.appStore') },
)
</script>

<template>
  <span
    data-test="store-badge"
    class="inline-flex min-h-14 flex-col justify-center rounded-lg px-5 py-2.5 leading-tight"
    :class="variant === 'filled' ? 'bg-primary text-on-primary' : 'border border-primary text-fg'"
  >
    <span class="text-[11px] font-medium" :class="variant === 'outline' && 'text-muted'">{{
      label.pre
    }}</span>
    <span class="text-[17px] font-semibold">{{ label.name }}</span>
  </span>
</template>
