
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

// Check if we already have metadata from the preload script
const preloadedMetadata = window.__PRELOADED_METADATA__;

// Fallback metadata values if not preloaded
const title = String(preloadedMetadata?.title || "Presidency Solutions | AI & Data Engineering Experts");
const description = String(preloadedMetadata?.description || "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.");
const imageUrl = preloadedMetadata?.image_url || `${origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`;
const absoluteImageUrl = imageUrl.startsWith('http') || imageUrl.startsWith('data:') 
  ? imageUrl 
  : `${origin}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
const ogType = String(preloadedMetadata?.og_type || "website");
const twitterCard = String(preloadedMetadata?.twitter_card || "summary_large_image");

// Helper function to update meta tag if it exists or create it if it doesn't
const updateOrCreateMetaTag = (tagData: { [key: string]: string }) => {
  const selector = tagData.property
    ? `meta[property="${tagData.property}"]`
    : `meta[name="${tagData.name}"]`;
  
  const existingTag = document.querySelector(selector);
  
  if (existingTag) {
    existingTag.setAttribute('content', tagData.content);
  } else {
    const meta = document.createElement('meta');
    Object.entries(tagData).forEach(([attr, value]) => {
      meta.setAttribute(attr, String(value));
    });
    document.head.appendChild(meta);
  }
};

// Add or update meta tags - this won't remove existing ones
const metaTags = [
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: ogType },
  { property: "og:url", content: window.location.href },
  { property: "og:image", content: absoluteImageUrl },
  { property: "og:site_name", content: "Presidency Solutions" },
  { property: "og:locale", content: "en_US" },
  { name: "twitter:card", content: twitterCard },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: absoluteImageUrl }
];

// Update or create each meta tag
metaTags.forEach(updateOrCreateMetaTag);

// Set document title immediately
document.title = title;

// Declare the global type for TypeScript
declare global {
  interface Window {
    __PRELOADED_METADATA__?: any;
  }
}

// Now render the React app
createRoot(document.getElementById("root")!).render(<App />);
