import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/p7-Kasa", // Ajoute cette ligne pour spécifier la racine du projet
});
