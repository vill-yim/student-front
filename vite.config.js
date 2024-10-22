import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:'0.0.0.0',
    port:3001,
    open:false,
    strictPort:true,
    cors:true,
  },
  optimizeDeps:{
    exclude:['lightweight-charts']
  }
})
