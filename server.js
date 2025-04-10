
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import puppeteer from 'puppeteer';
import isbot from 'isbot';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Cache for pre-rendered pages (path -> HTML content)
const RENDER_CACHE = new Map();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

// Serve static files
app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));

// Crawlers detection middleware
app.use(async (req, res, next) => {
  const userAgent = req.headers['user-agent'] || '';
  
  // If not a bot, serve the normal SPA
  if (!isbot(userAgent)) {
    return next();
  }
  
  console.log(`Bot detected: ${userAgent} for path: ${req.path}`);
  
  try {
    // Get pre-rendered HTML for the path
    const html = await getPrerenderedHtml(req.path);
    return res.send(html);
  } catch (error) {
    console.error('Error pre-rendering:', error);
    // Fall back to normal SPA if pre-rendering fails
    return next();
  }
});

// For all other requests, serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Function to get pre-rendered HTML (with caching)
async function getPrerenderedHtml(path) {
  const now = Date.now();
  
  // Check cache first
  if (RENDER_CACHE.has(path)) {
    const { html, timestamp } = RENDER_CACHE.get(path);
    
    // Return cached version if still fresh
    if (now - timestamp < CACHE_TTL) {
      console.log(`Serving cached version for: ${path}`);
      return html;
    } else {
      // Remove stale cache entry
      RENDER_CACHE.delete(path);
    }
  }
  
  console.log(`Pre-rendering page for: ${path}`);
  
  // Launch headless browser
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: "new"
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to the page in our app
    const url = `http://localhost:${port}${path}`;
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 10000 });
    
    // Wait a bit for React to fully render
    await page.waitForTimeout(1000);
    
    // Get the fully rendered HTML
    const html = await page.content();
    
    // Store in cache
    RENDER_CACHE.set(path, { html, timestamp: now });
    
    return html;
  } finally {
    await browser.close();
  }
}

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
