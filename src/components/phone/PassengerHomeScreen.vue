<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  Calendar,
  ChevronRight,
  House,
  MapPin,
  MessageCircle,
  Navigation2,
  Search,
  User,
  Users,
} from 'lucide-vue-next'

const { t, tm, rt } = useI18n()
const tabIcons = [House, MapPin, MessageCircle, User]
const tabs = () => (tm('phone.tabs') as string[]).map((s) => rt(s))
</script>

<template>
  <div class="flex grow flex-col gap-3.5 px-4 pt-11 text-[13px]">
    <div class="flex items-center gap-3">
      <span class="flex size-10 items-center justify-center rounded-full bg-surface text-sm"
        >AM</span
      >
      <span class="flex flex-col leading-tight">
        <span class="text-[11px] text-subtle">{{ t('phone.greeting') }}</span>
        <span class="text-[15px] font-semibold">Ana Manuel</span>
      </span>
    </div>

    <div class="flex flex-col gap-2.5 rounded-2xl border border-border p-3.5">
      <span class="text-[15px]">{{ t('phone.searchTitle') }}</span>
      <span class="flex h-12 items-center gap-3 rounded-lg border border-border bg-surface px-3">
        <MapPin :size="18" class="text-primary" />
        <span class="flex flex-col leading-tight">
          <span class="text-[10px] text-muted">{{ t('phone.from') }}</span>
          <span>Talatona</span>
        </span>
      </span>
      <span class="flex h-12 items-center gap-3 rounded-lg border border-border bg-surface px-3">
        <Navigation2 :size="18" class="text-primary" />
        <span class="flex flex-col leading-tight">
          <span class="text-[10px] text-muted">{{ t('phone.to') }}</span>
          <span>Luanda Centro</span>
        </span>
      </span>
      <span class="flex gap-2.5">
        <span
          class="flex h-11 grow items-center gap-3 rounded-lg border border-border bg-surface px-3 text-muted"
        >
          <Calendar :size="18" class="text-primary" />{{ t('phone.date') }}
        </span>
        <span class="flex h-11 items-center gap-2 rounded-lg border border-border bg-surface px-3">
          <Users :size="18" class="text-primary" />1
        </span>
      </span>
      <span
        class="mt-1 flex h-11 items-center justify-center gap-2 rounded-full bg-primary font-semibold text-on-primary"
      >
        <Search :size="18" />{{ t('phone.search') }}
      </span>
    </div>

    <div class="flex items-center justify-between">
      <span class="text-[15px] font-medium">{{ t('phone.recentRoutes') }}</span>
      <span class="text-[11px] text-subtle">{{ t('phone.seeAll') }}</span>
    </div>
    <span class="flex w-48 flex-col gap-1 rounded-md bg-surface p-3">
      <span class="flex items-center gap-2">Luanda <ChevronRight :size="16" /> Benguela</span>
      <span class="text-[11px] text-muted">{{ t('phone.tapRoute') }}</span>
    </span>

    <div class="mt-auto -mx-4 flex justify-around rounded-t-2xl bg-surface pt-3 pb-2">
      <span
        v-for="(label, i) in tabs()"
        :key="label"
        class="relative flex min-w-14 flex-col items-center gap-1 pb-2 text-[10px]"
        :class="i === 0 ? 'text-primary' : 'text-muted'"
      >
        <component :is="tabIcons[i]" :size="20" />
        {{ label }}
        <span v-if="i === 0" class="absolute bottom-0 h-1 w-8 rounded-sm bg-primary"></span>
      </span>
    </div>
  </div>
</template>
