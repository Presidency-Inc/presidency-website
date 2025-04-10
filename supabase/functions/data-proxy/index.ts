
// Follow Deno & Edge Function conventions
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

// Define the Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client with service role key (only on server)
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get request data
    const { action, table, options = {}, id, data, select } = await req.json();

    // Response object
    let result: any = { data: null, count: null };

    // Handle different data operations
    switch (action) {
      case 'select': {
        let query = supabase.from(table).select(options.select || '*', { 
          count: options.limit ? undefined : 'exact' 
        });

        // Apply filters
        if (options.filters) {
          Object.entries(options.filters).forEach(([key, value]) => {
            if (typeof value === 'string' && value.includes('%')) {
              query = query.ilike(key, value);
            } else {
              query = query.eq(key, value);
            }
          });
        }

        // Apply sorting
        if (options.order) {
          query = query.order(options.order.column, {
            ascending: options.order.ascending
          });
        }

        // Apply pagination
        if (options.limit) {
          query = query.limit(options.limit);
        }
        
        if (options.offset) {
          query = query.offset(options.offset);
        }

        // Execute query
        const { data, error, count } = await query;
        
        if (error) throw error;
        
        result = { data, count };
        break;
      }

      case 'getRecord': {
        const { data: recordData, error } = await supabase
          .from(table)
          .select(select || '*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        
        result.data = recordData;
        break;
      }

      case 'insert': {
        const { data: insertedData, error } = await supabase
          .from(table)
          .insert(data)
          .select();
        
        if (error) throw error;
        
        result.data = insertedData;
        break;
      }

      case 'update': {
        const { data: updatedData, error } = await supabase
          .from(table)
          .update(data)
          .eq('id', id)
          .select();
        
        if (error) throw error;
        
        result.data = updatedData;
        break;
      }

      case 'delete': {
        const { error } = await supabase
          .from(table)
          .delete()
          .eq('id', id);
        
        if (error) throw error;
        
        result.data = { success: true };
        break;
      }

      default:
        throw new Error('Invalid action specified');
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Error in data-proxy:', error);
    
    return new Response(JSON.stringify({ 
      error: error.message || 'An error occurred processing your request'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
