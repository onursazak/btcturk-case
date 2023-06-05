import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // _responsive.css added globally instead of adding that in each scss file.
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/mixins/_responsive";`,
      },
    },
  },
  server: {
    host: true,
  },
});
