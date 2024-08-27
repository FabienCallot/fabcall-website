import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react()],
    server: {
      host: "0.0.0.0", // Permet l'accès depuis l'extérieur du conteneur
      port: 5173, // Port sur lequel Vite écoute
      strictPort: true, // Assure que le port est strictement celui défini
    },
  };
});
