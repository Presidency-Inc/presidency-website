
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  email: string;
  name: string;
  phone?: string;
  company?: string;
  message: string;
}

// Function to send an email using an email service
async function sendEmail(formData: ContactFormData) {
  const { email, name, phone, company, message } = formData;
  
  // Compose the message body with all relevant information
  const messageBody = `
New contact form submission:

From: ${name} (${email})
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}

Message:
${message}
  `;

  // In a real implementation, you would replace this with your actual email sending logic
  // For now, we're just logging the message for debugging purposes
  console.log("Email would be sent with body:", messageBody);
  
  // For a complete solution, you'd integrate with an email service like Resend, SendGrid, etc.
  // Example implementation with a hypothetical email API:
  /*
  const response = await fetch('https://api.email-service.com/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Deno.env.get('EMAIL_API_KEY')}`
    },
    body: JSON.stringify({
      from: 'website@presidencysolutions.com',
      to: 'hello@presidencysolutions.com',
      subject: `New Contact Form: ${name}`,
      text: messageBody
    })
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send email: ${errorText}`);
  }
  
  return await response.json();
  */
  
  // For now, return a mock successful response
  return { success: true };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Parse the request body
    const formData: ContactFormData = await req.json();
    
    // Validate required fields
    if (!formData.email || !formData.name || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          } 
        }
      );
    }
    
    // Send the email
    const result = await sendEmail(formData);
    
    return new Response(
      JSON.stringify(result),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        } 
      }
    );
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        } 
      }
    );
  }
});
