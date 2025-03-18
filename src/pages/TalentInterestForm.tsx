import { useState, useEffect } from "react";
import { Check, ArrowRight, ArrowLeft, UserCheck, Clock, Globe, Shield } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const TalentInterestForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const isMobile = useIsMobile();
  
  // Reset to first step when switching from desktop to mobile view
  useEffect(() => {
    if (isMobile) {
      setCurrentStep(1);
    }
  }, [isMobile]);

  // Add meta tag for iOS status bar when on step 1 (black section)
  useEffect(() => {
    if (isMobile && currentStep === 1) {
      // Set meta tag for iOS status bar to match dark theme
      const metaTag = document.createElement('meta');
      metaTag.name = 'apple-mobile-web-app-status-bar-style';
      metaTag.content = 'black-translucent';
      document.head.appendChild(metaTag);
      
      return () => {
        // Clean up when unmounting or moving to step 2
        document.head.removeChild(metaTag);
      };
    }
  }, [isMobile, currentStep]);

  const handleContinue = () => {
    setCurrentStep(2);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Desktop view - side by side layout */}
      {!isMobile && (
        <div className="flex h-screen">
          {/* Left side with iframe */}
          <div className="w-1/2 h-full flex flex-col">
            {/* Back navigation */}
            <div className="p-4 md:p-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/talent" className="flex items-center text-gray-600 hover:text-gray-900">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Talent
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            <iframe 
              src="https://sibforms.com/serve/MUIFAPcCEPmPnfRSFJ2u45OaBhC2rjCH-5Q_FH2nTeOLN8-W2BFrO8xNGWMZIvUyDdE2GIGYsVNNpilmaLnLW4iQy5oNGjWXYcb2-BmvbsX3jzVz-1pcLWw_HIc68DKw08s-zIfnZfxYNT9vY8nBJmvL9DkwDtdZlFSKSU1WRRDNgUsjGJ-Fyl3ynPQ6E2usplJbVJXj-hGQW23X" 
              frameBorder="0" 
              scrolling="auto" 
              allowFullScreen 
              className="w-full flex-grow"
              style={{ display: "block", maxWidth: "100%" }}
            />
          </div>
          
          {/* Right side with how it works */}
          <div className="w-1/2 bg-gray-900 text-white p-8 h-full flex flex-col pb-12">
            <div className="mb-6">
              <Logo />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Access pre-vetted AI and data engineering talent.
            </h2>
            
            <p className="text-lg mb-10">
              We're excited to help you strengthen your team with top-tier AI and data engineering professionals, including nearshore options for cost-effective scaling.
            </p>
            
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <UserCheck className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-lg">
                  Machine Learning & AI Engineers that deliver intelligence capabilities to streamline and improve your business
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-lg">
                  Data Engineers to build scalable and robust data infrastructure
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-lg">
                  Rapid onboarding with engineers available to start in days, not months
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-lg">
                  Nearshore options with same timezone collaboration and IP protection at 30-40% cost reduction
                </p>
              </div>
            </div>
            
            <div className="mt-auto pt-2">
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {customerLogos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className="max-h-[45px] max-w-[120px] object-contain w-auto"
                    />
                  </div>
                ))}
              </div>
              
              <p className="text-center mt-4 mb-6 text-lg">
                Trusted by the Enterprise
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile view - stepper format */}
      {isMobile && (
        <div className="h-full min-h-screen w-full">
          {currentStep === 1 && (
            <div className="bg-gray-900 text-white p-6 flex flex-col min-h-screen">
              {/* Back navigation */}
              <div className="mb-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/talent" className="flex items-center text-gray-300 hover:text-white">
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Back to Talent
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              
              <div className="mb-6">
                <Logo />
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                Access pre-vetted AI and data engineering talent.
              </h2>
              
              <p className="text-lg mb-8">
                We're excited to help you strengthen your team with top-tier AI and data engineering professionals, including nearshore options for cost-effective scaling.
              </p>
              
              {/* Continue button now above bullet points */}
              <Button 
                onClick={handleContinue}
                className="w-full mb-8 py-6 bg-blue-500 hover:bg-blue-600"
                size="lg"
              >
                Continue <ArrowRight className="ml-2" />
              </Button>
              
              <div className="space-y-6 mb-6 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-base">
                    Machine Learning & AI Engineers that deliver intelligence capabilities to streamline and improve your business
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-base">
                    Data Engineers to build scalable and robust data infrastructure
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-base">
                    Rapid onboarding with engineers available to start in days, not months
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-base">
                    Nearshore options with same timezone collaboration and IP protection at 30-40% cost reduction
                  </p>
                </div>
              </div>
              
              <div className="mt-auto pb-6">
                <div className="flex flex-wrap justify-center gap-4 items-center">
                  {customerLogos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <img
                        src={logo.logo}
                        alt={logo.name}
                        className="max-h-[35px] max-w-[90px] object-contain w-auto my-1"
                      />
                    </div>
                  ))}
                </div>
                
                <p className="text-center mt-3 mb-0 text-sm">
                  Trusted by the Enterprise
                </p>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="min-h-screen w-full flex flex-col">
              {/* Back navigation */}
              <div className="p-4 bg-white">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/talent" className="flex items-center text-gray-600 hover:text-gray-900">
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Back to Talent
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              
              <iframe 
                src="https://sibforms.com/serve/MUIFAPcCEPmPnfRSFJ2u45OaBhC2rjCH-5Q_FH2nTeOLN8-W2BFrO8xNGWMZIvUyDdE2GIGYsVNNpilmaLnLW4iQy5oNGjWXYcb2-BmvbsX3jzVz-1pcLWw_HIc68DKw08s-zIfnZfxYNT9vY8nBJmvL9DkwDtdZlFSKSU1WRRDNgUsjGJ-Fyl3ynPQ6E2usplJbVJXj-hGQW23X" 
                frameBorder="0" 
                scrolling="auto" 
                allowFullScreen 
                className="w-full flex-grow"
                style={{ display: "block", maxWidth: "100%" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const customerLogos = [
  { name: "US Air Force", logo: "/lovable-uploads/c624067b-e118-4415-88dd-6d6b53f8142e.png" },
  { name: "Army National Guard", logo: "/lovable-uploads/c372ad43-c59a-49a8-ad25-4cd72be12224.png" },
  { name: "US Army", logo: "/lovable-uploads/9b2794b1-00af-46be-bead-31074b17b7f3.png" },
  { name: "Walmart", logo: "/lovable-uploads/01457e75-ab86-4eee-9af3-107cad055902.png" },
  { name: "Wells Fargo", logo: "/lovable-uploads/233f0859-da00-47f9-a7a1-f3a9ece35328.png" },
  { name: "Disney", logo: "/lovable-uploads/c8d7310f-59ce-44b3-9496-f94f0bd1f628.png" },
];

export default TalentInterestForm;
