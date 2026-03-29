import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ci-cd-lr-project/', // назва твого репозиторію зі слешами
})