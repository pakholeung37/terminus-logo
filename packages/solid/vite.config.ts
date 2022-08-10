import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [solid(), dts()],
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['solid-js/web'],
    },
  },
})
