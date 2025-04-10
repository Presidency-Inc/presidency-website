
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add document title as a fallback (Helmet will override this on specific pages)
document.title = "Presidency Solutions | AI & Data Engineering Experts";

// Create favicon link if not already in the document
if (!document.querySelector('link[rel="icon"]')) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = '/lovable-uploads/465dc1c4-12bb-4d80-b59c-8e56947c0ef0.png';
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(<App />);
