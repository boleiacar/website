<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import wordmark from '@ds/assets/Logos/boleia-wordmark.svg'

const { t } = useI18n()
// Social links are added here once the URLs exist (spec: open items).
</script>

<template>
  <footer class="border-t border-border">
    <div
      class="container-page flex flex-col items-start gap-4 py-10 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between"
    >
      <img :src="wordmark" alt="Boleia" class="h-6.5 w-auto" />
      <span>{{ t('footer.languages') }}</span>
      <span>{{ t('footer.rights') }}</span>
    </div>
  </footer>
</template>
