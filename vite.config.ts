// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remplace 'mon-portfolio' par le nom exact de ton dépôt GitHub
  base: '/mon-portfolio/',
})