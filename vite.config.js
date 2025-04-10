import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],  // ✅ Move this outside of `server`
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,      // Ensure the port is correct
    strictPort: true,  // Ensure the port is not changed if unavailable
    allowedHosts: ['expora.xyz', 'www.expora.xyz']
  }
});
