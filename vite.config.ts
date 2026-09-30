import { copyFileSync } from "node:fs";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function spaGithubPagesFallback() {
  return {
    name: "spa-github-pages-fallback",
    closeBundle() {
      const indexPath = path.resolve(__dirname, "dist/index.html");
      copyFileSync(indexPath, path.resolve(__dirname, "dist/404.html"));
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaGithubPagesFallback()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 4173,
  },
});
