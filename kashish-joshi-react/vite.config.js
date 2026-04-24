import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/home': {
        target: 'http://kashishweb.questdigiflex.in',
        changeOrigin: true,
        rewrite: (path) => '/home.php',
      },
      '/api/inhome': {
        target: 'http://kashishweb.questdigiflex.in',
        changeOrigin: true,
        rewrite: (path) => '/inhome.php',
      },
    },
  },
})
