import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//it was envDir: './env'. now,  it is the environment folder 
//https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
});
