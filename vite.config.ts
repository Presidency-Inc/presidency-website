
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Set CSS modules hash to be consistent between builds
  css: {
    modules: {
      generateScopedName: mode === 'production' 
        ? '[hash:base64:8]' 
        : '[local]__[hash:base64:5]'
    }
  },
  // Optimize SSR support
  build: {
    // Generate source maps for easier debugging
    sourcemap: true,
    // Ensure CSS is extracted for easier SSR handling
    cssCodeSplit: true,
    // Minimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    }
  },
}));
