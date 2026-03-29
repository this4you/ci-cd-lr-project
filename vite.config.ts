import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ci-cd-lr-project/',
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
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/ci-cd-lr-project/', // назва твого репозиторію зі слешами
// })