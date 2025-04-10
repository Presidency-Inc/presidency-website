
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

// Immediately set default Open Graph tags to ensure they're present for crawlers
const title = "Presidency Solutions | AI & Data Engineering Experts";
const description = "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.";
const imageUrl = `${origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`;

// Add basic meta tags to document head for crawlers before any JS runs
const metaTags = [
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { property: "og:url", content: origin },
  { property: "og:image", content: imageUrl },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: imageUrl },
  { property: "og:locale", content: "en" }
];

// Add meta tags immediately to the head before React even renders
metaTags.forEach(tagData => {
  // Skip if a tag with the same property/name already exists
  const selector = tagData.property
    ? `meta[property="${tagData.property}"]`
    : `meta[name="${tagData.name}"]`;
    
  if (!document.querySelector(selector)) {
    const meta = document.createElement('meta');
    Object.entries(tagData).forEach(([attr, value]) => {
      meta.setAttribute(attr, value);
    });
    document.head.appendChild(meta);
  }
});

// Set document title immediately
document.title = title;

// Now render the React app
createRoot(document.getElementById("root")!).render(<App />);
