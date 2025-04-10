
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import CareerHero from "@/components/CareerHero";
import HiringProcessSection from "@/components/HiringProcessSection";
import { motion } from "framer-motion";
import JobList from "@/components/JobList";
import { Helmet } from "react-helmet";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const Careers = () => {
  const { metadata } = usePageMetadata("/careers");
  
  // Extract string values for metadata to avoid Symbol conversion issues
  const title = String(metadata?.title || "Join Our Team | Presidency Solutions");
  const description = String(metadata?.description || "Explore career opportunities at Presidency Solutions. Join a team of passionate experts in AI, data engineering, and cloud solutions.");
  const ogType = String(metadata?.og_type || "website");
  const ogUrl = String(metadata?.fullUrl || `${window.location.origin}/careers`);
  const ogImage = String(metadata?.image_url || `${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`);
  const twitterCard = String(metadata?.twitter_card || "summary_large_image");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="careers, jobs, employment, hiring, AI jobs, data engineering jobs, cloud jobs" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <main className="min-h-screen bg-white">
        <CareerHero />
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-gray-600 text-lg mb-8">
                Join our team of passionate experts who are transforming how organizations leverage AI and data to maximize their impact.
              </p>
            </motion.div>
            
            <JobList />
          </div>
        </section>
        
        <HiringProcessSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Careers;
