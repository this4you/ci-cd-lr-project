import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ci-cd-lr-project.lab/',
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'ci-cd-lr-project.js'
      }
    }
  },
  plugins: [react()],
})
