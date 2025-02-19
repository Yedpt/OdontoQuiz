import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Asegura rutas correctas en producción
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Maneja rutas en desarrollo
  },
  preview: {
    historyApiFallback: true, // Asegura rutas en producción en previsualización
  },
});
