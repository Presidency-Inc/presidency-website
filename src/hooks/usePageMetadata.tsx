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
    
    // If it's a data URL (base64), return as is (though we should avoid these for OG)
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
    
    const fullUrl = meta.fullUrl || getFullUrl(route);
    const imageUrl = getAbsoluteImageUrl(meta.image_url);
    
    // Prepare metadata
    const metaTags = [
      { property: "og:title", content: String(meta.title) },
      { property: "og:description", content: String(meta.description) },
      { property: "og:type", content: String(meta.og_type || 'website') },
      { property: "og:url", content: fullUrl },
      { property: "og:image", content: imageUrl },
      { property: "og:locale", content: "en" },
      { name: "twitter:card", content: String(meta.twitter_card || 'summary_large_image') },
      { name: "twitter:title", content: String(meta.title) },
      { name: "twitter:description", content: String(meta.description) },
      { name: "twitter:image", content: imageUrl }
    ];
    
    // Update existing meta tags or create new ones
    metaTags.forEach(tagData => {
      const selector = tagData.property
        ? `meta[property="${tagData.property}"]`
        : `meta[name="${tagData.name}"]`;
      
      const existingTag = document.querySelector(selector);
      
      if (existingTag) {
        // Update existing tag
        existingTag.setAttribute('content', tagData.content);
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
    // Create a cache key for this route
    const cacheKey = `page_metadata_${route}`;
    
    // Try to use cached data first for immediate display
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        
        // Add full URL and ensure image URL is absolute
        parsed.image_url = getAbsoluteImageUrl(parsed.image_url);
        parsed.fullUrl = getFullUrl(route);
        
        // Set state with cached data
        setMetadata(parsed);
        setLoading(false);
        
        // Update document head with cached data
        updateDocumentHead(parsed);
      } catch (err) {
        console.error("Error parsing cached metadata:", err);
      }
    }
    
    // Always fetch fresh data (whether we used cache or not)
    fetchMetadata();
  }, [route]);

  const fetchMetadata = async () => {
    setLoading(true);
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
          const fullUrl = getFullUrl(route);
          const imageUrl = getAbsoluteImageUrl("/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png");
          
          const fallbackMetadata: PageMetadata = {
            id: 'fallback',
            route: route,
            title: route === '/' 
              ? "Presidency Solutions | AI & Data Engineering Experts" 
              : `${route.split("/").pop()?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} | Presidency Solutions`,
            description: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
            image_url: imageUrl,
            og_type: "website",
            twitter_card: "summary_large_image",
            fullUrl: fullUrl
          };
          
          // Update state with fallback data
          setMetadata(fallbackMetadata);
          
          // Update document head with fallback data
          updateDocumentHead(fallbackMetadata);
          
          // Cache the fallback data
          localStorage.setItem(`page_metadata_${route}`, JSON.stringify(fallbackMetadata));
          
          // Done loading
          setLoading(false);
          return;
        } else {
          throw error;
        }
      } else if (data) {
        // Ensure all values are properly treated as strings
        const fullUrl = getFullUrl(route);
        const imageUrl = getAbsoluteImageUrl(data.image_url);
        
        const stringifiedData: PageMetadata = {
          ...data,
          title: String(data.title),
          description: String(data.description),
          image_url: imageUrl,
          og_type: String(data.og_type || "website"),
          twitter_card: String(data.twitter_card || "summary_large_image"),
          fullUrl: fullUrl
        };
        
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
      const fullUrl = getFullUrl(route);
      const imageUrl = getAbsoluteImageUrl("/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png");
      
      const fallbackMetadata: PageMetadata = {
        id: 'fallback',
        route: route,
        title: route === '/' 
          ? "Presidency Solutions | AI & Data Engineering Experts" 
          : `${route.split("/").pop()?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} | Presidency Solutions`,
        description: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
        image_url: imageUrl,
        og_type: "website",
        twitter_card: "summary_large_image",
        fullUrl: fullUrl
      };
      
      // Update state with fallback data
      setMetadata(fallbackMetadata);
      
      // Update document head with fallback data
      updateDocumentHead(fallbackMetadata);
    } finally {
      setLoading(false);
    }
  };

  return { metadata, loading, error, refetch: fetchMetadata };
};

export default usePageMetadata;
