import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      packages: resolve(__dirname, "packages"),
    },
  },
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), Markdown(), vueJsx()],
});
