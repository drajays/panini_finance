import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages URL: https://drajays.github.io/panini_finance/
export default defineConfig({
  plugins: [react()],
  base: '/panini_finance/',
})
