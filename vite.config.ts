
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Request, Response, NextFunction } from 'express';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    middleware: [
      (req: Request, res: Response, next: NextFunction) => {
        // Check if the request is from a bot or crawler
        const userAgent = req.headers['user-agent'] || '';
        const isBot = /bot|googlebot|crawler|spider|robot|crawling|facebook|twitter|linkedin|prerender/i.test(userAgent);
        
        if (isBot) {
          // Apply prerender middleware for bots
          console.log('Bot detected, applying prerender middleware:', userAgent);
          const prerenderToken = process.env.PRERENDER_TOKEN || 'pWxLCawAzhz9R4gwZovp';
          const prerenderMiddleware = require('prerender-node')
            .set('prerenderToken', prerenderToken)
            .set('protocol', 'https')
            .set('host', 'presidencysolutions.com')
            .set('forwardHeaders', true);
          
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
