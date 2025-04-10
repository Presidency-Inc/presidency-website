
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerenderPlugin from 'vite-plugin-prerender';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    middleware: [
      (req, res, next) => {
        // Check if the request is from a bot
        const userAgent = req.headers['user-agent'] || '';
        const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);
        
        if (isBot) {
          // Apply prerender middleware for bots
          const prerenderMiddleware = require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN || '');
          return prerenderMiddleware(req, res, next);
        }
        
        return next();
      }
    ]
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
  build: {
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false
      },
    },
  }
}));
