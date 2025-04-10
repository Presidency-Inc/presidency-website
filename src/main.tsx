
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

// Add prerender status code meta tag for proper bot responses
const prerenderStatusCode = document.createElement('meta');
prerenderStatusCode.name = 'prerender-status-code';
prerenderStatusCode.content = '200';
document.head.appendChild(prerenderStatusCode);

// Add prerender header for better bot processing
const prerenderHeader = document.createElement('meta');
prerenderHeader.name = 'prerender-header';
prerenderHeader.content = 'X-Prerender-Processed: true';
document.head.appendChild(prerenderHeader);

// Add a specific meta tag that Prerender.io can detect to confirm integration
const prerenderDetection = document.createElement('meta');
prerenderDetection.name = 'prerender-detection';
prerenderDetection.content = 'Prerender.io integration active';
document.head.appendChild(prerenderDetection);

// Add mandatory fragment meta tag for hash bang crawling support
const fragmentMeta = document.createElement('meta');
fragmentMeta.name = 'fragment';
fragmentMeta.content = '!';
document.head.appendChild(fragmentMeta);

// Enhanced console logging for prerender detection
console.log('Checking for prerender:', window.navigator.userAgent);
if (window.navigator.userAgent.includes('prerender') || 
    window.navigator.userAgent.includes('Prerender') ||
    window.__PRERENDER_STATUS) {
  console.log('Page is being prerendered!');
}

// Add window.prerenderReady control
// This will force Prerender to wait until we explicitly set it to true
window.prerenderReady = false;

// Set prerenderReady to true after a delay to ensure content is loaded
// Use a longer timeout to ensure all dynamic content is loaded
setTimeout(() => {
  console.log('Setting prerenderReady to true');
  window.prerenderReady = true;
}, 3000);

// In case page is 404, set appropriate status (page components can override this)
if (window.location.pathname !== '/' && !document.querySelector('meta[name="prerender-status-code"]')) {
  const statusMeta = document.createElement('meta');
  statusMeta.name = 'prerender-status-code';
  statusMeta.content = '404';
  document.head.appendChild(statusMeta);
}

createRoot(document.getElementById("root")!).render(<App />);
