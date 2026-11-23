<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ArrowLeft, Minus, Plus } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <div class="flex grow flex-col gap-4 px-4 pt-11 text-[13px]">
    <div class="flex items-center gap-3">
      <span class="flex size-9 items-center justify-center rounded-full bg-surface">
        <ArrowLeft :size="18" />
      </span>
      <span class="grow pr-9 text-center text-[16px] font-medium">{{
        t('phone.publishTitle')
      }}</span>
    </div>
    <span class="text-muted">{{ t('phone.step') }}</span>
    <span class="flex gap-1.5">
      <span v-for="n in 6" :key="n" class="h-1 grow rounded-full bg-fg"></span>
    </span>

    <div class="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-5">
      <span class="text-[15px] font-medium">{{ t('phone.pricePerSeat') }}</span>
      <span class="text-[11px] text-muted">{{ t('phone.perSeat') }}</span>
      <span class="flex w-full items-center justify-between">
        <span
          class="flex size-10 items-center justify-center rounded-full border border-primary text-primary"
        >
          <Minus :size="18" />
        </span>
        <span class="text-[38px] font-bold text-primary">700</span>
        <span
          class="flex size-10 items-center justify-center rounded-full border border-primary text-primary"
        >
          <Plus :size="18" />
        </span>
      </span>
      <span class="font-medium text-primary">{{ t('phone.recommended') }}</span>
    </div>

    <span
      class="mt-auto mb-8 flex h-12 items-center justify-center rounded-lg bg-primary text-[15px] font-medium text-on-primary"
      >{{ t('phone.publish') }}</span
    >
  </div>
</template>
