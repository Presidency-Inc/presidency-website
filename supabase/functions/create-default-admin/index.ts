
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create a Supabase client with the Admin key
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Email and password for the default admin
    const adminEmail = "admin@presidencysolutions.com";
    const adminPassword = "AdminPass123!"; // Should be changed after first login

    // Check if admin already exists
    const { data: existingUsers, error: lookupError } = await supabaseAdmin
      .from("admin_users")
      .select("email")
      .eq("email", adminEmail);

    if (lookupError) {
      console.error("Error checking for existing admin:", lookupError);
      return new Response(
        JSON.stringify({ error: "Failed to check for existing admin" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500 
        }
      );
    }

    // If admin already exists, return success
    if (existingUsers && existingUsers.length > 0) {
      return new Response(
        JSON.stringify({ message: "Admin user already exists" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200 
        }
      );
    }

    // Create the admin user
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
    });

    if (error) {
      console.error("Error creating admin user:", error);
      return new Response(
        JSON.stringify({ error: "Failed to create admin user" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500 
        }
      );
    }

    console.log("Created admin user successfully:", data);
    
    return new Response(
      JSON.stringify({ message: "Admin user created successfully", details: "Email: admin@presidencysolutions.com, Password: AdminPass123!" }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});
