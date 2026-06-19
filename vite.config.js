import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin' // (or whatever plugin you use)

export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPOSITORY_NAME/', // 👈 ADD THIS LINE (Replace with your actual repo name)
})