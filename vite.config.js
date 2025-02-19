import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Asegura que se sirvan bien los archivos en Vercel
  build: {
    outDir: "dist"
  },
  server: {
    historyApiFallback: true // Maneja rutas en el desarrollo local
  }
});
