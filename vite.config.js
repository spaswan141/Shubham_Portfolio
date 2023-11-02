import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias for @fortawesome/react-fontawesome to ensure proper import
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
    },
  },
})
