
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
  
  // Prepare metadata with fallbacks
  const title = metadata?.title || "Presidency Solutions | AI, Data Engineering & Cloud Modernization";
  const description = metadata?.description || "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.";
  const ogType = metadata?.og_type || "website";
  const ogUrl = metadata?.fullUrl || "/";
  const ogImage = metadata?.image_url || "/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png";
  const twitterCard = metadata?.twitter_card || "summary_large_image";
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI solutions, data engineering, Databricks, cloud modernization, talent solutions, Leapfrog, Omniflow, Kube8r" />
        
        {/* Open Graph metadata */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter Card metadata */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
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
