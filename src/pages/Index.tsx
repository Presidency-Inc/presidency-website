
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
import usePageMetadata from "@/hooks/usePageMetadata";
import PageMetadata from "@/components/PageMetadata";

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
      {!loading && metadata && (
        <PageMetadata
          title={metadata.title}
          description={metadata.description}
          image={metadata.image_url}
          type={metadata.og_type}
          twitterCard={metadata.twitter_card}
          url="/"
        />
      )}
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
