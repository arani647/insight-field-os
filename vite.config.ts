import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

const ROUTES_TO_PRERENDER = [
  "/",
  "/product",
  "/gps-tracking",
  "/field-service",
  "/field-service/get-noticed",
  "/field-service/get-paid",
  "/ai-employee",
  "/ai-assistant",
  "/reviews",
  "/phones",
  "/text-marketing",
  "/industries",
  "/pricing",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      routes: ROUTES_TO_PRERENDER,
      renderAfterDocumentEvent: "render-event",
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'react-query': ['@tanstack/react-query'],
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'radix': [
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-dialog',
            '@radix-ui/react-slot',
          ],
        },
      },
    },
  },
}));
