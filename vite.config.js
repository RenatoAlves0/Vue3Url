import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || process.env.$PORT || 3001,
  },
  plugins: [vue()],
})
