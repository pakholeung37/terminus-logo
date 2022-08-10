import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['@angular/core'],
    },
  },
})
