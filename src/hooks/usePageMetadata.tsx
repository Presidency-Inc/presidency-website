import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface PageMetadata {
  id: string;
  route: string;
  title: string;
  description: string;
  image_url: string;
  og_type: string;
  twitter_card: string;
  created_at?: string;
  updated_at?: string;
  fullUrl?: string; // For displaying the full URL
}

export const usePageMetadata = (route: string) => {
  const [metadata, setMetadata] = useState<PageMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Function to get the full URL for a route
  const getFullUrl = (path: string): string => {
    const baseUrl = window.location.origin;
    return `${baseUrl}${path === '/' ? '' : path}`;
  };

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
    return `${window.location.origin}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  };

  // Function to update metadata in the document head
  const updateDocumentHead = (meta: PageMetadata) => {
    // Early return if not in browser environment
    if (typeof document === 'undefined') return;
    
    document.title = String(meta.title);
    
    // Prepare metadata
    const metaTags = [
      { property: "og:title", content: String(meta.title) },
      { property: "og:description", content: String(meta.description) },
      { property: "og:type", content: String(meta.og_type || 'website') },
      { property: "og:url", content: String(meta.fullUrl || getFullUrl(route)) },
      { property: "og:image", content: String(meta.image_url) },
      { name: "twitter:card", content: String(meta.twitter_card || 'summary_large_image') },
      { name: "twitter:title", content: String(meta.title) },
      { name: "twitter:description", content: String(meta.description) },
      { name: "twitter:image", content: String(meta.image_url) }
    ];
    
    // Update existing meta tags or create new ones
    metaTags.forEach(tagData => {
      const selector = tagData.property
        ? `meta[property="${tagData.property}"]:not([data-react-helmet])`
        : `meta[name="${tagData.name}"]:not([data-react-helmet])`;
      
      const existingTag = document.querySelector(selector);
      
      if (existingTag) {
        // Update existing tag
        if (tagData.property) {
          existingTag.setAttribute('content', tagData.content);
        } else {
          existingTag.setAttribute('content', tagData.content);
        }
      } else {
        // Create new tag if it doesn't exist
        const meta = document.createElement('meta');
        Object.entries(tagData).forEach(([attr, value]) => {
          meta.setAttribute(attr, value);
        });
        document.head.appendChild(meta);
      }
    });
  };

  useEffect(() => {
    // Clear existing head tags that we'll manage
    if (typeof document !== 'undefined') {
      document.querySelectorAll('meta[property^="og:"]:not([data-react-helmet]), meta[name^="twitter:"]:not([data-react-helmet])').forEach(tag => {
        tag.remove();
      });
    }
    
    // Create a cache key for this route
    const cacheKey = `page_metadata_${route}`;
    
    // Try to use cached data first to prevent flicker
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        
        // Add full URL and ensure image URL is absolute
        if (parsed.image_url) {
          parsed.image_url = getAbsoluteImageUrl(parsed.image_url);
        }
        
        parsed.fullUrl = getFullUrl(route);
        
        // Set state with cached data
        setMetadata(parsed);
        setLoading(false);
        
        // Update document head with cached data
        updateDocumentHead(parsed);
        
        // Still fetch fresh data in the background
        fetchMetadata(true);
      } catch (err) {
        console.error("Error parsing cached metadata:", err);
        fetchMetadata();
      }
    } else {
      fetchMetadata();
    }
  }, [route]);

  const fetchMetadata = async (isBackgroundFetch = false) => {
    if (!isBackgroundFetch) {
      setLoading(true);
    }
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('page_metadata')
        .select('*')
        .eq('route', route)
        .single();
      
      if (error) {
        // If no record found, create a fallback object with default values
        if (error.code === 'PGRST116') {
          const fallbackMetadata: PageMetadata = {
            id: 'fallback',
            route: route,
            title: route === '/' 
              ? "Presidency Solutions | AI & Data Engineering Experts" 
              : `${route.split("/").pop()?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} | Presidency Solutions`,
            description: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
            image_url: getAbsoluteImageUrl("/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png"),
            og_type: "website",
            twitter_card: "summary_large_image",
            fullUrl: getFullUrl(route)
          };
          
          // Update state with fallback data
          setMetadata(fallbackMetadata);
          
          // Update document head with fallback data
          updateDocumentHead(fallbackMetadata);
          
          // Cache the fallback data
          localStorage.setItem(`page_metadata_${route}`, JSON.stringify({
            ...fallbackMetadata,
            image_url: fallbackMetadata.image_url // Store the absolute URL
          }));
        } else {
          throw error;
        }
      } else if (data) {
        // Ensure all values are properly treated as strings
        const stringifiedData: PageMetadata = {
          ...data,
          title: String(data.title),
          description: String(data.description),
          image_url: String(data.image_url),
          og_type: String(data.og_type),
          twitter_card: String(data.twitter_card),
        };
        
        // Ensure image URL is absolute
        stringifiedData.image_url = getAbsoluteImageUrl(stringifiedData.image_url);
        
        // Add the full URL
        stringifiedData.fullUrl = getFullUrl(route);
        
        // Update state with fetched data
        setMetadata(stringifiedData);
        
        // Update document head with fetched data
        updateDocumentHead(stringifiedData);
        
        // Cache the data
        localStorage.setItem(`page_metadata_${route}`, JSON.stringify(stringifiedData));
      }
    } catch (err) {
      console.error('Error fetching page metadata:', err);
      setError(err as Error);
      
      // Provide fallback metadata in case of error
      const fallbackMetadata: PageMetadata = {
        id: 'fallback',
        route: route,
        title: route === '/' 
          ? "Presidency Solutions | AI & Data Engineering Experts" 
          : `${route.split("/").pop()?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} | Presidency Solutions`,
        description: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
        image_url: getAbsoluteImageUrl("/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png"),
        og_type: "website",
        twitter_card: "summary_large_image",
        fullUrl: getFullUrl(route)
      };
      
      // Update state with fallback data
      setMetadata(fallbackMetadata);
      
      // Update document head with fallback data
      updateDocumentHead(fallbackMetadata);
    } finally {
      if (!isBackgroundFetch) {
        setLoading(false);
      }
    }
  };

  return { metadata, loading, error, refetch: fetchMetadata };
};

export default usePageMetadata;
