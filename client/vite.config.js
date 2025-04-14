import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// import { defineConfig as defineVitestConfig } from "vitest"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/projets/fusionaile",
  build:{
    outDir: "dist",
    assetsDir: "./assets",
  },
  server: {
    // host: "0.0.0.0",
    // port: 5173,
    watch: {
      usePolling: true, // Corrige les problèmes de hot reload
    }
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})