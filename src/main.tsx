
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

// Set a default prerender header for improved SEO
const prerenderHeader = document.createElement('meta');
prerenderHeader.name = 'prerender-header';
prerenderHeader.content = 'Location: https://presidencysolutions.com/';
document.head.appendChild(prerenderHeader);

// In case page is 404, set appropriate status (page components can override this)
if (window.location.pathname !== '/' && !document.querySelector('meta[name="prerender-status-code"]')) {
  const statusMeta = document.createElement('meta');
  statusMeta.name = 'prerender-status-code';
  statusMeta.content = '404';
  document.head.appendChild(statusMeta);
}

createRoot(document.getElementById("root")!).render(<App />);
