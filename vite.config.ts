import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Nombre del repo: GitHub Pages publica en angelismejia.github.io/candy-dev-portfolio/
  base: '/candy-dev-portfolio/',
})
