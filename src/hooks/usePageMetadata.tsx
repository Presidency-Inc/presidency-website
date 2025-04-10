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

  useEffect(() => {
    // Create a cache system to avoid repeated requests for the same routes
    const cachedMetadata = localStorage.getItem(`page_metadata_${route}`);
    
    if (cachedMetadata) {
      try {
        // Try to use cached data first
        const parsed = JSON.parse(cachedMetadata);
        
        // If the cached data contains a base64 image, we need to fetch fresh data
        if (parsed.image_url && parsed.image_url === '[base64-image]') {
          // Skip setting cached metadata and fetch directly
          fetchMetadata();
        } else {
          // Make sure image URL is absolute
          if (parsed.image_url) {
            parsed.image_url = getAbsoluteImageUrl(parsed.image_url);
          }
          
          // Add full URL
          parsed.fullUrl = getFullUrl(route);
          
          setMetadata(parsed);
          setLoading(false);
          
          // Still fetch in the background to update the cache
          fetchMetadata(true);
        }
      } catch (err) {
        // If parsing fails, fetch the data
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
          const fallbackMetadata = {
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
          
          setMetadata(fallbackMetadata as PageMetadata);
          
          // Cache the fallback data
          localStorage.setItem(`page_metadata_${route}`, JSON.stringify(fallbackMetadata));
        } else {
          throw error;
        }
      } else if (data) {
        // Ensure image URL is absolute
        if (data.image_url) {
          data.image_url = getAbsoluteImageUrl(data.image_url);
        }
        
        // Add the full URL (used only in rendering, not saved to DB)
        const enhancedData = {
          ...data,
          fullUrl: getFullUrl(route),
          image_url: data.image_url // This is now properly formatted
        };
        
        // Handle image validation: For external URLs only (not for data URLs or local URLs)
        if (data.image_url && !data.image_url.startsWith('data:image') && 
            !data.image_url.startsWith(window.location.origin) && 
            (data.image_url.startsWith('http://') || data.image_url.startsWith('https://'))) {
          const img = new Image();
          img.src = data.image_url;
          
          img.onload = () => {
            // Image loaded successfully, use the data
            setMetadata(enhancedData as PageMetadata);
            // Cache the fetched data
            localStorage.setItem(`page_metadata_${route}`, JSON.stringify(enhancedData));
          };
          
          img.onerror = () => {
            // Image failed to load, use fallback image
            const correctedData = {
              ...data,
              image_url: getAbsoluteImageUrl("/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png"),
              fullUrl: getFullUrl(route)
            };
            setMetadata(correctedData as PageMetadata);
            // Cache the corrected data
            localStorage.setItem(`page_metadata_${route}`, JSON.stringify(correctedData));
          };
        } else {
          // For data URLs or local URLs, just use the data as is
          setMetadata(enhancedData as PageMetadata);
          
          // Cache the fetched data, but if it's a base64 image, just store a reference
          if (data.image_url && data.image_url.startsWith('data:image')) {
            const cachedData = { 
              ...enhancedData, 
              image_url: '[base64-image]' // Just store a reference that it's a base64 image
            };
            localStorage.setItem(`page_metadata_${route}`, JSON.stringify(cachedData));
          } else {
            localStorage.setItem(`page_metadata_${route}`, JSON.stringify(enhancedData));
          }
        }
      }
    } catch (err) {
      console.error('Error fetching page metadata:', err);
      setError(err as Error);
      
      // Provide fallback metadata in case of error
      const fallbackMetadata = {
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
      
      setMetadata(fallbackMetadata as PageMetadata);
      
      // Cache the fallback data
      localStorage.setItem(`page_metadata_${route}`, JSON.stringify(fallbackMetadata));
    } finally {
      if (!isBackgroundFetch) {
        setLoading(false);
      }
    }
  };

  return { metadata, loading, error, refetch: fetchMetadata };
};

export default usePageMetadata;
