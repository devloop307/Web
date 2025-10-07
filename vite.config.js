// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite acceso desde la red o túneles externos
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.trycloudflare.com', // <--- permite cualquier subdominio de Cloudflare
    ],
    port: 5173, // asegúrate de que coincida con el que te muestra vite
  },
})


/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/
