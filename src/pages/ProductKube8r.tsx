
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

const ProductKube8r = () => {
  const isMobile = useIsMobile();
  
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
        <title>Kube8r | Kubernetes and Cloud Modernization Platform</title>
        <meta name="description" content="Kube8r is a powerful platform for modernizing your infrastructure, from bare metal to cloud, and optimizing your application stack for Kubernetes." />
        <meta name="keywords" content="Kubernetes, cloud modernization, bare metal to cloud, app stack, infrastructure optimization" />
        <meta property="og:title" content="Kube8r | Kubernetes and Cloud Modernization Platform" />
        <meta property="og:description" content="Kube8r is a powerful platform for modernizing your infrastructure, from bare metal to cloud, and optimizing your application stack for Kubernetes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/products/kube8r" />
        <meta property="og:image" content="/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png" />
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
