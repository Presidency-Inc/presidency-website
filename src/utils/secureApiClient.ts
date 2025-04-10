
/**
 * Secure API client for making authenticated requests to Supabase Edge Functions
 * This avoids exposing API keys in the browser's network requests
 */

import { supabase } from "@/integrations/supabase/client";

// Base URL for Supabase Functions - without exposing API keys in the URL
const SUPABASE_URL = "https://dyixstdknvremrjvaarx.supabase.co";
const SUPABASE_FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;

// Generic type for API responses
export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

/**
 * Makes a secure request to a Supabase Edge Function
 * @param functionName - The name of the function to call
 * @param payload - The data to send to the function
 * @param method - HTTP method (default: POST)
 * @returns Promise with the function response
 */
export async function callFunction<T = any, P = any>(
  functionName: string, 
  payload?: P, 
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST'
): Promise<ApiResponse<T>> {
  try {
    // Get the current session
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token || '';
    
    const url = `${SUPABASE_FUNCTIONS_URL}/${functionName}`;
    
    // Create a clean options object without sensitive data
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken ? `Bearer ${accessToken}` : '',
      },
      // Prevent credentials from being sent automatically
      credentials: 'omit'
    };
    
    // Add the payload to the body for POST and PUT requests
    if (payload && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(payload);
    }

    console.log(`Calling function ${functionName} with access token: ${accessToken ? 'present' : 'not present'}`);
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Error calling ${functionName}: ${response.statusText}`);
    }
    
    const result = await response.json();
    return { data: result.data || result };
  } catch (error: any) {
    console.error(`Error calling function ${functionName}:`, error);
    return { error: error.message };
  }
}

/**
 * Direct data access helper for Supabase REST API
 * Use this when you need to make direct calls to Supabase tables
 * through a proxy that handles authentication properly
 */
export async function createSupabaseClient() {
  // Get the current session
  const { data: { session } } = await supabase.auth.getSession();
  const accessToken = session?.access_token;

  return {
    from: (table: string) => ({
      select: async (columns: string = "*", options?: { order?: { column: string, ascending: boolean }[], limit?: number, offset?: number, filters?: any[] }) => {
        try {
          // Use the edge function to proxy the request to avoid exposing keys
          const result = await callFunction(`data-proxy`, {
            table,
            action: 'select',
            columns,
            order: options?.order,
            limit: options?.limit,
            offset: options?.offset,
            filters: options?.filters
          });
          
          return result;
        } catch (error: any) {
          console.error(`Error selecting from ${table}:`, error);
          return { error: error.message };
        }
      },
      insert: async (data: any) => {
        try {
          // Use the edge function to proxy the request
          const result = await callFunction(`data-proxy`, {
            table,
            action: 'insert',
            data,
          });
          
          return result;
        } catch (error: any) {
          console.error(`Error inserting into ${table}:`, error);
          return { error: error.message };
        }
      },
      update: async (data: any, match: any) => {
        try {
          // Use the edge function to proxy the request
          const result = await callFunction(`data-proxy`, {
            table,
            action: 'update',
            data,
            match,
          });
          
          return result;
        } catch (error: any) {
          console.error(`Error updating ${table}:`, error);
          return { error: error.message };
        }
      },
      delete: async (match: any) => {
        try {
          // Use the edge function to proxy the request
          const result = await callFunction(`data-proxy`, {
            table,
            action: 'delete',
            match,
          });
          
          return result;
        } catch (error: any) {
          console.error(`Error deleting from ${table}:`, error);
          return { error: error.message };
        }
      },
      order: async (column: string, { ascending = true } = {}) => {
        // This returns a new object with the order parameter set
        return {
          select: async (columns: string = "*", options?: { limit?: number, offset?: number }) => {
            try {
              const result = await callFunction(`data-proxy`, {
                table,
                action: 'select',
                columns,
                order: [{ column, ascending }],
                limit: options?.limit,
                offset: options?.offset,
              });
              return result;
            } catch (error: any) {
              console.error(`Error selecting from ${table} with order:`, error);
              return { error: error.message };
            }
          }
        };
      }
    })
  };
}
