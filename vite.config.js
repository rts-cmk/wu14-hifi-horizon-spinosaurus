import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  const isProd = process.env.NODE_ENV === "production";

  return {
    plugins: [react()],
    server: {
      proxy: !isProd
        ? {
            "/api": {
              target: "https://hifi-server.vercel.app",
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ""),
            },
          }
        : undefined,
    },
  };
});
