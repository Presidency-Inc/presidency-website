
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

// Set default document title only if we're not on a blog post page
if (!window.location.pathname.startsWith('/blog/')) {
  document.title = "Presidency Solutions | AI & Data Engineering Experts";
  
  // Only set Open Graph metadata if not on a blog post page
  if (!document.querySelector('meta[property="og:title"]')) {
    const metaTags = [
      { property: "og:title", content: "Presidency Solutions | AI & Data Engineering Experts" },
      { property: "og:description", content: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://presidencysolutions.com" },
      { property: "og:image", content: "/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Presidency Solutions | AI & Data Engineering Experts" },
      { name: "twitter:description", content: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions." },
      { name: "twitter:image", content: "/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png" }
    ];
    
    metaTags.forEach(tagData => {
      const meta = document.createElement('meta');
      Object.entries(tagData).forEach(([attr, value]) => {
        meta.setAttribute(attr, value);
      });
      document.head.appendChild(meta);
    });
  }
}

createRoot(document.getElementById("root")!).render(<App />);
