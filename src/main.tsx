
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create favicon link if not already in the document
if (!document.querySelector('link[rel="icon"]')) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = '/lovable-uploads/465dc1c4-12bb-4d80-b59c-8e56947c0ef0.png';
  document.head.appendChild(link);
}

// Helper function for adding meta tags
const addMetaTag = (name: string, content: string) => {
  // Remove any existing tags with the same name
  const existingTag = document.querySelector(`meta[name="${name}"]`);
  if (existingTag) {
    existingTag.remove();
  }
  
  const metaTag = document.createElement('meta');
  metaTag.name = name;
  metaTag.content = content;
  document.head.appendChild(metaTag);
  console.log(`📝 Meta tag added: ${name}="${content}"`);
};

// Add prerender status code meta tag for proper bot responses
addMetaTag('prerender-status-code', '200');

// Add prerender header for better bot processing
addMetaTag('prerender-header', 'X-Prerender-Processed: true');

// Add a specific meta tag that Prerender.io can detect to confirm integration
addMetaTag('prerender-detection', 'Prerender.io integration active');

// Add mandatory fragment meta tag for hash bang crawling support
addMetaTag('fragment', '!');

// Enhanced prerender detection and logging
console.log('🔍 Checking for prerender with user agent:', window.navigator.userAgent);

// Define common bot patterns for client-side detection
const botPatterns = [
  'bot', 'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
  'yandexbot', 'prerender', 'headless', 'lighthouse'
];

// Check if the user agent matches any bot pattern
const isBot = botPatterns.some(pattern => 
  window.navigator.userAgent.toLowerCase().includes(pattern.toLowerCase())
);

// Check for prerender in multiple ways
if (isBot || 
    window.navigator.userAgent.includes('prerender') || 
    window.__PRERENDER_STATUS ||
    // Check for specific parameters that might be set by the prerender service
    (window as any).__PRERENDER_INJECTED) {
  console.log('🤖 Page is being prerendered - bot detected!');
  
  // Add debug information about window properties
  console.log('🔍 Prerender environment details:', {
    windowHasDocument: typeof document !== 'undefined',
    windowHasNavigator: typeof navigator !== 'undefined',
    windowLocation: window.location.href,
    documentReadyState: document.readyState
  });
}

// Add window.prerenderReady control
// This will force Prerender to wait until we explicitly set it to true
window.prerenderReady = false;
console.log('⏳ Initial prerenderReady set to false - waiting for page to load');

// Add event listener for when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 Document content loaded event fired');
});

// Set prerenderReady to true after a delay to ensure content is loaded
// Use a longer timeout to ensure all dynamic content is loaded
setTimeout(() => {
  console.log('✅ Setting prerenderReady to true after timeout');
  window.prerenderReady = true;
}, 3000);

// In case page is 404, set appropriate status
if (window.location.pathname !== '/' && !document.querySelector('meta[name="prerender-status-code"]')) {
  addMetaTag('prerender-status-code', '404');
}

createRoot(document.getElementById("root")!).render(<App />);
