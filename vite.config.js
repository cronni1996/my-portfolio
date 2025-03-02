import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Импортируем модуль 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Алиас '@' указывает на папку 'src'
    },

  },

})