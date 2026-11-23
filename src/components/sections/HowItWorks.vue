<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PhoneFrame from '@/components/phone/PhoneFrame.vue'
import PassengerHomeScreen from '@/components/phone/PassengerHomeScreen.vue'
import DriverFareScreen from '@/components/phone/DriverFareScreen.vue'

type Role = 'passenger' | 'driver'
type Step = { t: string; d: string }

const { t, tm, rt } = useI18n()
const role = ref<Role>('passenger')
const steps = (r: Role) => (tm(`how.${r}`) as Step[]).map((s) => ({ t: rt(s.t), d: rt(s.d) }))
const roles: Role[] = ['passenger', 'driver']
</script>

<template>
  <section
    id="como"
    class="mx-auto flex max-w-[1200px] scroll-mt-6 flex-wrap items-center gap-16 px-6 py-24 md:py-30"
  >
    <Tabs v-model="role" class="flex min-w-0 flex-[1_1_480px] flex-col gap-7">
      <span class="text-[13px] tracking-[.08em] text-primary uppercase">{{ t('how.eyebrow') }}</span>
      <h2 class="m-0 text-[clamp(32px,4vw,48px)] leading-[1.1] font-semibold tracking-[-0.01em]">
        {{ t('how.title') }}
      </h2>
      <TabsList
        class="gap-1.5 self-start rounded-lg border border-border bg-surface p-1.5"
        :aria-label="t('how.eyebrow')"
      >
        <TabsTrigger
          v-for="r in roles"
          :key="r"
          :value="r"
          class="min-h-11 rounded-md px-5 text-[15px] text-fg data-[state=active]:bg-primary data-[state=active]:font-semibold data-[state=active]:text-on-primary"
        >
          {{ t(r === 'passenger' ? 'how.tabPassenger' : 'how.tabDriver') }}
        </TabsTrigger>
      </TabsList>
      <TabsContent v-for="r in roles" :key="r" :value="r">
        <ol class="m-0 flex list-none flex-col gap-3.5 p-0">
          <li
            v-for="(s, i) in steps(r)"
            :key="s.t"
            class="flex gap-4.5 rounded-xl border border-border bg-surface p-5"
          >
            <span
              class="flex size-10 shrink-0 items-center justify-center rounded-full font-bold"
              :class="i === 0 ? 'bg-primary text-on-primary' : 'border border-primary text-primary'"
              aria-hidden="true"
              >{{ i + 1 }}</span
            >
            <span class="flex flex-col gap-1">
              <strong class="text-lg font-semibold">{{ s.t }}</strong>
              <span class="leading-normal text-muted">{{ s.d }}</span>
            </span>
          </li>
        </ol>
      </TabsContent>
    </Tabs>

    <div class="mx-auto flex flex-[0_1_360px] justify-center">
      <PhoneFrame :label="t(role === 'passenger' ? 'phone.searchTitle' : 'phone.publishTitle')">
        <PassengerHomeScreen v-if="role === 'passenger'" />
        <DriverFareScreen v-else />
      </PhoneFrame>
    </div>
  </section>
</template>
