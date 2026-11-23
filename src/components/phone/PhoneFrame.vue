<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div
    role="img"
    :aria-label="label"
    class="relative flex aspect-[340/700] w-[340px] max-w-full flex-col overflow-hidden rounded-[52px] border-[10px] border-[#232526] bg-bg text-fg"
  >
    <div aria-hidden="true" class="flex grow flex-col">
      <slot />
    </div>
  </div>
</template>
