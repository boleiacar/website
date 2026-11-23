<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { TabsList, type TabsListProps } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <TabsList :loop="props.loop" :as="props.as" :as-child="props.asChild" :class="cn('inline-flex items-center', props.class)">
    <slot />
  </TabsList>
</template>
