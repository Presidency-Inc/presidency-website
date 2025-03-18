
import { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const ProductInterestForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const isMobile = useIsMobile();
  
  // Reset to first step when switching from desktop to mobile view
  useEffect(() => {
    if (isMobile) {
      setCurrentStep(1);
    }
  }, [isMobile]);

  const handleContinue = () => {
    setCurrentStep(2);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Desktop view - side by side layout */}
      {!isMobile && (
        <div className="flex h-screen">
          {/* Left side with iframe */}
          <div className="w-1/2 h-full">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://sibforms.com/serve/MUIFANIXyCZDk1Oq2tyMyBA9iGrk-vtob662x_EavnMg6d9VtJzkD7aKMYPFKt8Jh4yJVgNzMK2D_h_BOSMi4UTeFW6tIC4yIdHUQWt93Jc_1mRLEStc2jubBGWScZmhwm8FxsUVmKWPWNeuSxOJrcNk7I_A1xMjGE3UElMkbaoMPeX8NN_7FLDZZkSsoBbw5V808WyM7ak79GwA" 
              frameBorder="0" 
              scrolling="auto" 
              allowFullScreen 
              style={{ display: "block" }}
            />
          </div>
          
          {/* Right side with how it works */}
          <div className="w-1/2 bg-gray-900 text-white p-8 h-full flex flex-col">
            <div className="mb-6">
              <Logo />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How does it work?
            </h2>
            
            <p className="text-lg mb-10">
              We're happy to answer questions and build your custom tech product.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-lg">
                  We build a comprehensive tech roadmap.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-lg">
                  We orchestrate and execute technology projects and programs across various domains, including GenAI, AI/Data, Cloud, and more.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-lg">
                  We get the right people for the job with the quality, speed, and cost effectiveness of our human intelligence platform.
                </p>
              </div>
            </div>
            
            {/* Logos section */}
            <div className="mt-auto pt-8">
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {customerLogos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className="max-h-[36px] max-w-[100px] object-contain w-auto filter brightness-0 invert opacity-80"
                    />
                  </div>
                ))}
              </div>
              
              <p className="text-center mt-8 text-lg">
                Trusted by leading AI hyperscalers, research labs, and Fortune 500 companies
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile view - stepper format */}
      {isMobile && (
        <div className="h-screen w-full">
          {currentStep === 1 && (
            <div className="bg-gray-900 text-white p-6 flex flex-col h-full">
              <div className="mb-6">
                <Logo />
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                How does it work?
              </h2>
              
              <p className="text-lg mb-8">
                We're happy to answer questions and build your custom tech product.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-base">
                    We build a comprehensive tech roadmap.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-base">
                    We orchestrate and execute technology projects and programs across various domains, including GenAI, AI/Data, Cloud, and more.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-base">
                    We get the right people for the job with the quality, speed, and cost effectiveness of our human intelligence platform.
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={handleContinue}
                className="w-full mt-4 mb-8 py-6"
                size="lg"
              >
                Continue to Interest Form <ArrowRight className="ml-2" />
              </Button>
              
              {/* Logos section */}
              <div className="mt-auto">
                <div className="flex flex-wrap justify-center gap-4 items-center">
                  {customerLogos.slice(0, 3).map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <img
                        src={logo.logo}
                        alt={logo.name}
                        className="max-h-[32px] max-w-[80px] object-contain w-auto filter brightness-0 invert opacity-80"
                      />
                    </div>
                  ))}
                </div>
                
                <p className="text-center mt-6 text-sm">
                  Trusted by leading AI hyperscalers, research labs, and Fortune 500 companies
                </p>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="h-screen w-full">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://sibforms.com/serve/MUIFANIXyCZDk1Oq2tyMyBA9iGrk-vtob662x_EavnMg6d9VtJzkD7aKMYPFKt8Jh4yJVgNzMK2D_h_BOSMi4UTeFW6tIC4yIdHUQWt93Jc_1mRLEStc2jubBGWScZmhwm8FxsUVmKWPWNeuSxOJrcNk7I_A1xMjGE3UElMkbaoMPeX8NN_7FLDZZkSsoBbw5V808WyM7ak79GwA" 
                frameBorder="0" 
                scrolling="auto" 
                allowFullScreen 
                style={{ display: "block" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Using the same logos as in the LogoMarquee component
const customerLogos = [
  { name: "US Air Force", logo: "/lovable-uploads/c624067b-e118-4415-88dd-6d6b53f8142e.png" },
  { name: "Army National Guard", logo: "/lovable-uploads/c372ad43-c59a-49a8-ad25-4cd72be12224.png" },
  { name: "US Army", logo: "/lovable-uploads/9b2794b1-00af-46be-bead-31074b17b7f3.png" },
  { name: "Walmart", logo: "/lovable-uploads/01457e75-ab86-4eee-9af3-107cad055902.png" },
  { name: "Wells Fargo", logo: "/lovable-uploads/233f0859-da00-47f9-a7a1-f3a9ece35328.png" },
  { name: "Disney", logo: "/lovable-uploads/c8d7310f-59ce-44b3-9496-f94f0bd1f628.png" },
];

export default ProductInterestForm;
