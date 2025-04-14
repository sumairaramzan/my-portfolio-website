import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio-website/',
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    outDir: 'dist'
  }
})
