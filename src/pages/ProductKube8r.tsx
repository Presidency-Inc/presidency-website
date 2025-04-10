
import Navbar from "@/components/Navbar";
import Hero from "@/components/Kube8rHero";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import BareMetalToCloudSection from "@/components/BareMetalToCloudSection";
import AppStackModernizationSection from "@/components/AppStackModernizationSection";
import Kube8rCTA from "@/components/Kube8rCTA";
import LogoMarquee from "@/components/LogoMarquee";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const ProductKube8r = () => {
  const isMobile = useIsMobile();
  const { metadata } = usePageMetadata("/products/kube8r");
  
  // Extract string values for metadata to avoid Symbol conversion issues
  const title = metadata?.title || "Kube8r | Kubernetes and Cloud Modernization Platform";
  const description = metadata?.description || "Kube8r is a powerful platform for modernizing your infrastructure, from bare metal to cloud, and optimizing your application stack for Kubernetes.";
  const ogType = metadata?.og_type || "website";
  const ogUrl = metadata?.fullUrl || `${window.location.origin}/products/kube8r`;
  const ogImage = metadata?.image_url || `${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`;
  const twitterCard = metadata?.twitter_card || "summary_large_image";
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-kube8r-layout');
    } else {
      document.body.classList.remove('mobile-kube8r-layout');
    }
    
    return () => {
      document.body.classList.remove('mobile-kube8r-layout');
    };
  }, [isMobile]);
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Kubernetes, cloud modernization, bare metal to cloud, app stack, infrastructure optimization" />
        
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
      <Hero />
      <LogoMarquee />
      <div id="bare-metal" className="mobile-section">
        <BareMetalToCloudSection />
      </div>
      <div id="app-stack" className="mobile-section">
        <AppStackModernizationSection />
      </div>
      <Kube8rCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductKube8r;
