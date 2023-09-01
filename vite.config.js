import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      pages:"/src/pages",
      components:"/src/components",
      context:"/src/context",
      img:"/src/img",
      hooks:"/src/hooks",
      data:"/src/data",
      routes:"/src/routes",
    },
  },
});