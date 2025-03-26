
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

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

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Function to send an email using Resend
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

  try {
    const emailResponse = await resend.emails.send({
      from: "Presidency Solutions <hello@presidencysolutions.com>",
      to: ["hello@presidencysolutions.com"],
      reply_to: email,
      subject: `New Contact Form: ${name}`,
      text: messageBody
    });
    
    console.log("Email sent successfully:", emailResponse);
    return emailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
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
