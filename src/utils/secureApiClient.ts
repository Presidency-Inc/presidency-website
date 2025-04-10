
/**
 * Secure API client for making authenticated requests to Supabase Edge Functions
 * This avoids exposing API keys in the browser's network requests
 */

// Base URL for Supabase Functions - without exposing API keys in the URL
const SUPABASE_FUNCTIONS_URL = "https://dyixstdknvremrjvaarx.supabase.co/functions/v1";

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
