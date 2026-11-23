import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import { alias } from './vite.config.ts'

export default defineConfig({
  plugins: [vue()],
  resolve: { alias },
  test: {
    environment: 'jsdom',
    css: false,
    setupFiles: ['./src/test-setup.ts'],
  },
})
