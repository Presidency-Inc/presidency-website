
/**
 * Secure API client for making authenticated requests to Supabase Edge Functions
 * This avoids exposing API keys in the browser's network requests
 */

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
    const url = `${SUPABASE_FUNCTIONS_URL}/${functionName}`;
    
    // Create a clean options object without sensitive data
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      // Prevent credentials from being sent automatically
      credentials: 'omit'
    };
    
    // Add the payload to the body for POST and PUT requests
    if (payload && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(payload);
    }

    const response = await fetch(url, options);
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || `Error calling ${functionName}`);
    }
    
    return { data: result };
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
  // In a real application, we would use an authentication service
  // This is a placeholder implementation
  return {
    from: (table: string) => ({
      select: async (columns: string = "*") => {
        try {
          // Use the edge function to proxy the request to avoid exposing keys
          const result = await callFunction(`data-proxy`, {
            table,
            action: 'select',
            columns,
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
      }
    })
  };
}
