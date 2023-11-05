import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx(),
    react()
  ],
  resolve: {
    alias: {
      '@components': resolve('src/components'),
      '@src': resolve('src'),
    }
  },
})
