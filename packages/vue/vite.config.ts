import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: './src/index.vue',
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
