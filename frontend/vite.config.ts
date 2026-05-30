import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],

  server: {
    port: 4001,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },

  // ── Esbuild: strip console/debugger in production ─────────────────────
  esbuild:
    mode === "production"
      ? { drop: ["console", "debugger"] }
      : {},

  // ── Build optimizations ───────────────────────────────────────────────
  build: {
    // Raise warning threshold — we're explicitly splitting chunks
    chunkSizeWarningLimit: 600,

    // Disable sourcemaps for smaller production output
    sourcemap: false,

    rollupOptions: {
      output: {
        /**
         * Manual chunk splitting — ensures heavy libraries land in
         * separate async chunks that only load when actually needed.
         */
        manualChunks(id: string) {
          // ── Core React ──────────────────────────────────────────────
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "vendor-react";
          }

          // ── React Router ────────────────────────────────────────────
          if (id.includes("node_modules/react-router")) {
            return "vendor-router";
          }

          // ── Redux ───────────────────────────────────────────────────
          if (
            id.includes("node_modules/@reduxjs/toolkit") ||
            id.includes("node_modules/react-redux") ||
            id.includes("node_modules/redux/")
          ) {
            return "vendor-redux";
          }

          // ── Charts (d3, recharts, chart.js) — VERY heavy, load async
          if (
            id.includes("node_modules/d3") ||
            id.includes("node_modules/recharts") ||
            id.includes("node_modules/chart.js") ||
            id.includes("node_modules/react-chartjs-2")
          ) {
            return "vendor-charts";
          }

          // ── Animation (GSAP + Framer Motion) ────────────────────────
          if (
            id.includes("node_modules/gsap") ||
            id.includes("node_modules/@gsap") ||
            id.includes("node_modules/framer-motion")
          ) {
            return "vendor-animation";
          }

          // ── Socket.IO ───────────────────────────────────────────────
          if (id.includes("node_modules/socket.io-client")) {
            return "vendor-socket";
          }

          // ── Icon libraries ──────────────────────────────────────────
          if (
            id.includes("node_modules/lucide-react") ||
            id.includes("node_modules/react-icons") ||
            id.includes("node_modules/@fortawesome")
          ) {
            return "vendor-icons";
          }

          // ── Form & Validation ───────────────────────────────────────
          if (
            id.includes("node_modules/react-hook-form") ||
            id.includes("node_modules/zod")
          ) {
            return "vendor-forms";
          }

          // ── Misc UI utilities ───────────────────────────────────────
          if (
            id.includes("node_modules/react-hot-toast") ||
            id.includes("node_modules/axios") ||
            id.includes("node_modules/jwt-decode")
          ) {
            return "vendor-utils";
          }
        },
      },
    },
  },

  // ── Pre-bundle optimization ───────────────────────────────────────────
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@reduxjs/toolkit",
      "react-redux",
      "axios",
      "react-hot-toast",
      "framer-motion",
    ],
    // Exclude very heavy deps from pre-bundling — they are code-split
    exclude: ["jspdf", "d3", "recharts", "chart.js"],
  },
}));