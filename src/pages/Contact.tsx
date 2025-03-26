import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: values,
      });

      if (error) throw error;

      setIsSuccess(true);
      form.reset();
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setIsError(true);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | Presidency Solutions</title>
        <meta name="description" content="Get in touch with Presidency Solutions. Send us a message and our team will get back to you as soon as possible." />
        <meta name="keywords" content="contact, get in touch, message, Presidency Solutions" />
      </Helmet>
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <div className="relative overflow-hidden py-12 md:py-20 md:mt-16 lg:mt-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute w-full h-full opacity-20"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <path
                key={i}
                d={`M0,${400 + i * 30 - Math.sin(i * 0.5) * 50} 
                   C300,${350 + i * 25 + Math.cos(i * 0.3) * 40} 
                   600,${450 + i * 20 - Math.sin(i * 0.4) * 60} 
                   900,${380 + i * 30 + Math.cos(i * 0.6) * 50} 
                   L1200,${420 + i * 25 - Math.sin(i * 0.5) * 30} 
                   L1200,1200 L0,1200 Z`}
                fill="none"
                stroke="#1a46e5"
                strokeWidth="1.5"
                strokeOpacity={0.8 - i * 0.02}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-[#1a46e5] mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Have a question or want to learn more about our services? Send us a message and our team will get back to you as soon as possible.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-[#1a46e5]" />
                  <h3 className="text-xl font-semibold">Email Us</h3>
                </div>
                <p className="text-gray-600">For general inquiries:</p>
                <a href="mailto:hello@presidencysolutions.com" className="text-[#1a46e5] font-medium hover:underline">hello@presidencysolutions.com</a>
              </motion.div>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 p-6 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-800">Message Sent!</h3>
                  </div>
                  <p className="text-green-700 mb-4">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  <Button 
                    className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90 w-full"
                    asChild
                  >
                    <Link to="/">
                      Learn how we combine AI & Data
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              )}

              {isError && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 p-6 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <XCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-semibold text-red-800">Oops! Something went wrong</h3>
                  </div>
                  <p className="text-red-700">There was an error sending your message. Please try again later or email us directly at hello@presidencysolutions.com</p>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Please provide details about your inquiry.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="bg-[#1a46e5] hover:bg-[#1a46e5]/90 text-white w-full md:w-auto"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Contact;
