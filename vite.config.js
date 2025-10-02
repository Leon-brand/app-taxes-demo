import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  /* base: 'https://Leon-brand.github.io/app-taxes-demo', */
  base: 'app-taxes-demo/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // alias para src/
    },
  },
})
