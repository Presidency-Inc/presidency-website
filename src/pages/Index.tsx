
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatusBar from "@/components/StatusBar";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesSection from "@/components/FeaturesSection";
import TabsSection from "@/components/TabsSection";
import ProductsSection from "@/components/ProductsSection";
import TalentOverviewSection from "@/components/TalentOverviewSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import usePageMetadata from "@/hooks/usePageMetadata";

const Index = () => {
  // Use the hook to get metadata for the homepage
  const { metadata, loading } = usePageMetadata("/");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add a class to the body for iOS Safari detection
    document.body.classList.add('ios-fix');
    
    // Track page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Home',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
    
    return () => {
      document.body.classList.remove('ios-fix');
    };
  }, []);
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>{metadata?.title || "Presidency Solutions | AI, Data Engineering & Cloud Modernization"}</title>
        <meta name="description" content={metadata?.description || "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions."} />
        <meta name="keywords" content="AI solutions, data engineering, Databricks, cloud modernization, talent solutions, Leapfrog, Omniflow, Kube8r" />
        
        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata?.title || "Presidency Solutions | AI, Data Engineering & Cloud Modernization"} />
        <meta property="og:description" content={metadata?.description || "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions."} />
        <meta property="og:type" content={metadata?.og_type || "website"} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={metadata?.image_url || "/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png"} />
        
        {/* Twitter Card metadata */}
        <meta name="twitter:card" content={metadata?.twitter_card || "summary_large_image"} />
        <meta name="twitter:title" content={metadata?.title || "Presidency Solutions | AI, Data Engineering & Cloud Modernization"} />
        <meta name="twitter:description" content={metadata?.description || "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions."} />
        <meta name="twitter:image" content={metadata?.image_url || "/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png"} />
      </Helmet>
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <LogoMarquee />
      <FeaturesSection />
      <TabsSection />
      <ProductsSection />
      <TalentOverviewSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
