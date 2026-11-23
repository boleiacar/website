<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import wordmark from '@ds/assets/Logos/boleia-wordmark.svg'

const { t } = useI18n()
// Social links are added here once the URLs exist (spec: open items).
</script>

<template>
  <footer class="border-t border-border">
    <div
      class="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-6 py-10 text-sm text-subtle"
    >
      <img :src="wordmark" alt="Boleia" class="h-6.5 w-auto" />
      <span>{{ t('footer.languages') }}</span>
      <span>{{ t('footer.rights') }}</span>
    </div>
  </footer>
</template>
