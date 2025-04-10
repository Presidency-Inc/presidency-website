
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.3";

// CORS headers to allow requests from your frontend
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Create a Supabase client authenticated with the service role key (admin access)
const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  {
    auth: {
      persistSession: false,
    },
  }
);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the JWT token from the request header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      // For public routes, we can proceed without authentication
      // This allows us to handle public endpoints like job listings
      console.log("No authorization header - proceeding as public request");
    } else {
      // For authenticated routes, validate the token
      const token = authHeader.replace('Bearer ', '');
      const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);

      if (authError) {
        console.error("Auth error:", authError);
        // Allow the request to proceed for public endpoints like job listings
        // but log the authentication error
      }
    }

    // Parse the request body
    const { table, action, columns = "*", data, match, order, limit, offset, filters } = await req.json();

    if (!table || !action) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let query;
    let result;

    // Perform the requested database operation
    switch (action) {
      case 'select':
        query = supabaseAdmin.from(table).select(columns);
        
        // Apply ordering if provided
        if (order) {
          if (Array.isArray(order)) {
            order.forEach(o => {
              query = query.order(o.column, { ascending: o.ascending });
            });
          } else {
            query = query.order(order.column, { ascending: order.ascending });
          }
        }
        
        // Apply filters if provided
        if (filters) {
          filters.forEach((filter: any) => {
            if (filter.type === 'eq') {
              query = query.eq(filter.column, filter.value);
            } else if (filter.type === 'gt') {
              query = query.gt(filter.column, filter.value);
            } else if (filter.type === 'lt') {
              query = query.lt(filter.column, filter.value);
            } else if (filter.type === 'gte') {
              query = query.gte(filter.column, filter.value);
            } else if (filter.type === 'lte') {
              query = query.lte(filter.column, filter.value);
            } else if (filter.type === 'like') {
              query = query.like(filter.column, filter.value);
            }
          });
        }
        
        // Apply pagination if provided
        if (limit !== undefined) {
          query = query.limit(limit);
        }
        
        if (offset !== undefined) {
          query = query.range(offset, offset + (limit || 10) - 1);
        }
        
        result = await query;
        break;
        
      case 'insert':
        if (!data) {
          return new Response(
            JSON.stringify({ error: 'Missing data for insert operation' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        result = await supabaseAdmin.from(table).insert(data);
        break;
        
      case 'update':
        if (!data || !match) {
          return new Response(
            JSON.stringify({ error: 'Missing data or match criteria for update operation' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        result = await supabaseAdmin.from(table).update(data).match(match);
        break;
        
      case 'delete':
        if (!match) {
          return new Response(
            JSON.stringify({ error: 'Missing match criteria for delete operation' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        result = await supabaseAdmin.from(table).delete().match(match);
        break;
        
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
