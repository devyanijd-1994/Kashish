import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/home': {
        target: 'https://kashishjoshiresearch.com',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/home.php',
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            // Add authentication header to proxied requests
            proxyReq.setHeader('Authorization', 'Bearer KashishWeb@2024#SecureToken');
          });
        }
      },
      '/api/inhome': {
        target: 'https://kashishjoshiresearch.com',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/inhome.php',
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            // Add authentication header to proxied requests
            proxyReq.setHeader('Authorization', 'Bearer KashishWeb@2024#SecureToken');
          });
        }
      },
    },
  },
})
