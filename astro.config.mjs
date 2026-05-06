// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://fikrulhanif.github.io", // WAJIB untuk GitHub Pages
  base: "/", // karena pakai repo username.github.io

  vite: {
    plugins: [tailwindcss()],
  },
});
