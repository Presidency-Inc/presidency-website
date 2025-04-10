
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
        // This table doesn't exist yet - we'll need to create it with a SQL command
        // For now, we'll return a fallback object to prevent errors
        
        // When the table exists, this code will work:
        // const { data, error } = await supabase
        //   .from('page_metadata')
        //   .select('*')
        //   .eq('route', route)
        //   .single();
        
        // if (error) throw error;
        
        // if (data) {
        //   setMetadata(data);
        // }
        
        // Fallback metadata for now
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
      } catch (err) {
        console.error('Error fetching page metadata:', err);
        setError(err as Error);
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
