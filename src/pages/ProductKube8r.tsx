
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
        {metadata ? (
          <>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:type" content={metadata.og_type} />
            <meta property="og:url" content={metadata.fullUrl} />
            <meta property="og:image" content={metadata.image_url} />
            
            <meta name="twitter:card" content={metadata.twitter_card} />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content={metadata.image_url} />
          </>
        ) : (
          <>
            <title>Kube8r | Kubernetes and Cloud Modernization Platform</title>
            <meta name="description" content="Kube8r is a powerful platform for modernizing your infrastructure, from bare metal to cloud, and optimizing your application stack for Kubernetes." />
            <meta name="keywords" content="Kubernetes, cloud modernization, bare metal to cloud, app stack, infrastructure optimization" />
            <meta property="og:title" content="Kube8r | Kubernetes and Cloud Modernization Platform" />
            <meta property="og:description" content="Kube8r is a powerful platform for modernizing your infrastructure, from bare metal to cloud, and optimizing your application stack for Kubernetes." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${window.location.origin}/products/kube8r`} />
            <meta property="og:image" content={`${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={`${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`} />
          </>
        )}
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
