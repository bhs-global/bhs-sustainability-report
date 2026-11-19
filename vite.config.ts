import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bhs-sustainability-report/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

