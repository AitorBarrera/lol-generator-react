import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lol-generator-react/',
  build: {
    outDir: 'docs',
  },
})
