import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// GitHub Pages serves 404.html for any path it has no file for. Shipping a copy
// of index.html under that name lets the router handle deep links and refreshes
// instead of the visitor getting GitHub's 404 page.
const spaFallback = () => ({
  name: 'spa-404-fallback',
  closeBundle() {
    const dist = path.resolve(__dirname, 'dist')
    fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
  },
})

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), spaFallback()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
