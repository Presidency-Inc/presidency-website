
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
        // Enhanced bot detection with more comprehensive regex and debugging
        const userAgent = req.headers['user-agent'] || '';
        // Log all requests for debugging
        console.log(`🔍 Request: ${req.url} - User Agent: ${userAgent}`);
        
        // Enhanced debugging for headers
        console.log('📋 Request headers:', JSON.stringify(req.headers));
        
        // Expanded bot detection regex with additional crawlers and debugging flags
        const botPatterns = [
          'bot', 'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 
          'yandexbot', 'facebot', 'facebookexternalhit', 'twitterbot', 
          'rogerbot', 'linkedinbot', 'embedly', 'quora', 'pinterest', 
          'slackbot', 'vkshare', 'outbrain', 'w3c_validator', 'crawler', 
          'spider', 'yahoo', 'exabot', 'sogou', 'semrush', 'ahrefsbot', 
          'mj12bot', 'prerender', 'screaming frog', 'headless', 'lighthouse',
          'chrome-lighthouse', 'pagespeed', 'ptr', 'whatsapp', 'snapchat',
          'telegrambot', 'wechat', 'skype', 'ia_archiver', 'adsbot'
        ];
        
        // Create a regex pattern from the bot patterns array
        const botRegexPattern = new RegExp(botPatterns.join('|'), 'i');
        const isBot = botRegexPattern.test(userAgent);
        
        // Allow forcing prerender with a query parameter for testing
        const forcePrerenderParam = req.query?.forcePrerender === 'true';
        
        if (isBot || forcePrerenderParam) {
          // Log detection clearly
          console.log(`🤖 Bot detected or prerender forced: ${forcePrerenderParam ? 'Force param' : userAgent}`);
          
          try {
            // Get the token with fallback and verbose logging
            const prerenderToken = process.env.PRERENDER_TOKEN || 'pWxLCawAzhz9R4gwZovp';
            console.log(`🔑 Using Prerender token: ${prerenderToken.substring(0, 5)}...`);
            
            // Get the host with proper fallback for production
            const host = process.env.HOST_URL || 'presidencysolutions.com';
            console.log(`🌐 Using host for prerender: ${host}`);
            
            // More extensive prerender configuration with additional options
            const prerenderMiddleware = require('prerender-node')
              .set('prerenderToken', prerenderToken)
              .set('protocol', 'https')
              .set('host', host)
              .set('forwardHeaders', true)
              .set('waitAfterLastRequest', 1000) // Increased time to ensure full execution
              .set('pageLoadTimeout', 30000) // Increased timeout for complex pages
              .set('followRedirects', true)
              .set('bubbleUp5xxErrors', true) // Allow 5xx errors to bubble up
              .set('beforeRender', function(req: Request, done: Function) {
                console.log('✅ Prerender beforeRender triggered for:', req.url);
                // Add custom header to track prerender processing
                req.headers['X-Prerender-Trace'] = 'requested';
                done();
              })
              .set('afterRender', function(err: Error, req: Request, prerender_res: any) {
                if (err) {
                  console.error('❌ Prerender error:', err);
                } else {
                  console.log(`✅ Prerender success for: ${req.url} - Status: ${prerender_res?.statusCode || 'unknown'}`);
                  // Log all headers to identify what's being returned
                  console.log('📋 Prerender response headers:', JSON.stringify(prerender_res?.headers || {}));
                }
              });
            
            // Log that middleware is about to be called
            console.log('🚀 Applying prerender middleware...');
            
            // Apply the middleware with error handling
            return prerenderMiddleware(req, res, next);
          } catch (error) {
            console.error('❌ Error initializing prerender middleware:', error);
            return next();
          }
        } else {
          console.log('👤 Regular user request (not a bot)');
          return next();
        }
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
