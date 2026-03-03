import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vitePluginSvgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
// import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //     // "@assets": path.resolve(__dirname, "./src/assets"),
  //     // "@common": path.resolve(__dirname, "./src/common"),
  //     // "@routes": path.resolve(__dirname, "./src/routes"),
  //     // "@icons": path.resolve(__dirname, "./src/assets/icons"),
  //     // "@sounds": path.resolve(__dirname, "./src/assets/sounds"),
  //     // "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
  //     // "@images": path.resolve(__dirname, "./src/assets/images"),
  //   },
  // },
  plugins: [react(), tailwindcss(), vitePluginSvgr(), tsconfigPaths()],
});
