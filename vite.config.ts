import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
  '@ds': fileURLToPath(new URL('./design-system', import.meta.url)),
}

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: { alias },
})
