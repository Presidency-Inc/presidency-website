
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session } from "@supabase/supabase-js";

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Function to get the current session
    const getSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error getting session:", error);
        } else {
          setSession(data.session);
        }
      } catch (error) {
        console.error("Unexpected error during session check:", error);
      } finally {
        setLoading(false);
      }
    };
    
    // Get the initial session
    getSession();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        setSession(newSession);
        setLoading(false);
      }
    );
    
    // Cleanup the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  return {
    session,
    loading,
    user: session?.user ?? null,
    isAuthenticated: !!session?.user,
  };
};

export default useAuth;
