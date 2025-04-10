
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
          throw error;
        }
        
        if (data) {
          setMetadata(data);
        }
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
