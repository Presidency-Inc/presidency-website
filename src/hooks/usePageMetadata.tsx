
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
}

export const usePageMetadata = (route: string) => {
  const [metadata, setMetadata] = useState<PageMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
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
            setMetadata({
              id: 'fallback',
              route: route,
              title: route === '/' 
                ? "Presidency Solutions | AI & Data Engineering Experts" 
                : `${route.split("/").pop()?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} | Presidency Solutions`,
              description: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
              image_url: "/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png",
              og_type: "website",
              twitter_card: "summary_large_image"
            });
          } else {
            throw error;
          }
        } else if (data) {
          setMetadata(data);
        }
      } catch (err) {
        console.error('Error fetching page metadata:', err);
        setError(err as Error);
        
        // Provide fallback metadata in case of error
        setMetadata({
          id: 'fallback',
          route: route,
          title: route === '/' 
            ? "Presidency Solutions | AI & Data Engineering Experts" 
            : `${route.split("/").pop()?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} | Presidency Solutions`,
          description: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
          image_url: "/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png",
          og_type: "website",
          twitter_card: "summary_large_image"
        });
      } finally {
        setLoading(false);
      }
    };

    if (route) {
      fetchMetadata();
    }
  }, [route]);

  return { metadata, loading, error };
};

export default usePageMetadata;
