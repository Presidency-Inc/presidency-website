
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
        // Enhanced bot detection with more comprehensive regex
        const userAgent = req.headers['user-agent'] || '';
        // Expanded bot detection regex to catch more crawlers
        const isBot = /bot|googlebot|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora|pinterest|slackbot|vkshare|facebot|outbrain|w3c_validator|crawler|spider|yahoo|bingbot|duckduckbot|yandex|exabot|sogou|semrush|ahref|mj12bot|prerender/i.test(userAgent);
        
        // Log all requests with user agent for debugging
        console.log(`Request: ${req.url} - User Agent: ${userAgent.substring(0, 100)}...`);
        
        if (isBot) {
          // Apply prerender middleware for bots with enhanced logging
          console.log('🤖 Bot detected:', userAgent);
          
          try {
            const prerenderToken = process.env.PRERENDER_TOKEN || 'pWxLCawAzhz9R4gwZovp';
            console.log('Using Prerender token:', prerenderToken.substring(0, 5) + '...');
            
            // Configure prerender with more options and better error handling
            const prerenderMiddleware = require('prerender-node')
              .set('prerenderToken', prerenderToken)
              .set('protocol', 'https')
              .set('host', 'presidencysolutions.com')
              .set('forwardHeaders', true)
              .set('waitAfterLastRequest', 500) // Wait after the last request to ensure JS execution
              .set('pageLoadTimeout', 20000) // Increase timeout for complex pages
              .set('followRedirects', true) // Follow redirects automatically
              .set('beforeRender', function(req: Request, done: Function) {
                console.log('✅ Prerender beforeRender:', req.url);
                done();
              })
              .set('afterRender', function(err: Error, req: Request, prerender_res: any) {
                if (err) {
                  console.error('❌ Prerender error:', err);
                } else {
                  console.log(`✅ Prerender success: ${req.url} - Status: ${prerender_res.statusCode}`);
                  
                  // Log headers to help with debugging
                  console.log('Response headers:', JSON.stringify(prerender_res.headers));
                }
              });
            
            // Apply the middleware with error handling
            return prerenderMiddleware(req, res, next);
          } catch (error) {
            console.error('❌ Error initializing prerender middleware:', error);
            return next();
          }
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
