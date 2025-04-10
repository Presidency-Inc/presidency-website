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

// Get the origin for absolute URLs
const origin = window.location.origin;

// Function to ensure image URL is absolute
const getAbsoluteImageUrl = (imageUrl: string): string => {
  if (!imageUrl) return '';
  
  // If it's a data URL (base64), return as is
  if (imageUrl.startsWith('data:')) {
    return imageUrl;
  }
  
  // If it's already an absolute URL, return as is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // Otherwise, prepend the origin
  return `${origin}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
};

// Only set default document title and metadata if we're not on a page with specific metadata
// We check for existing OG tags that may have been added by the Helmet component in specific pages
const existingOgTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]');

if (existingOgTags.length === 0) {
  document.title = "Presidency Solutions | AI & Data Engineering Experts";
  
  const metaTags = [
    { property: "og:title", content: "Presidency Solutions | AI & Data Engineering Experts" },
    { property: "og:description", content: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: origin },
    { property: "og:image", content: getAbsoluteImageUrl("/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png") },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Presidency Solutions | AI & Data Engineering Experts" },
    { name: "twitter:description", content: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions." },
    { name: "twitter:image", content: getAbsoluteImageUrl("/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png") }
  ];
  
  metaTags.forEach(tagData => {
    const meta = document.createElement('meta');
    Object.entries(tagData).forEach(([attr, value]) => {
      meta.setAttribute(attr, value);
    });
    document.head.appendChild(meta);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
