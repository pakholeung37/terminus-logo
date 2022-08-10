import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react/jsx-runtime'],
    },
  },
})
