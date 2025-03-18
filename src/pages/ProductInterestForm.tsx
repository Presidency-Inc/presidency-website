
import { Check } from "lucide-react";
import Logo from "@/components/Logo";

const ProductInterestForm = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Logo at the top */}
      <div className="pt-8 px-8 max-w-7xl mx-auto">
        <Logo />
      </div>
      
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">
        {/* Left side with iframe */}
        <div className="w-full lg:w-1/2">
          <div className="w-full">
            <iframe 
              width="100%" 
              height="500" 
              src="https://sibforms.com/serve/MUIFANIXyCZDk1Oq2tyMyBA9iGrk-vtob662x_EavnMg6d9VtJzkD7aKMYPFKt8Jh4yJVgNzMK2D_h_BOSMi4UTeFW6tIC4yIdHUQWt93Jc_1mRLEStc2jubBGWScZmhwm8FxsUVmKWPWNeuSxOJrcNk7I_A1xMjGE3UElMkbaoMPeX8NN_7FLDZZkSsoBbw5V808WyM7ak79GwA" 
              frameBorder="0" 
              scrolling="auto" 
              allowFullScreen 
              className="max-w-full"
              style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            />
          </div>
        </div>
        
        {/* Right side with how it works */}
        <div className="w-full lg:w-1/2 bg-gray-900 text-white p-8 rounded-lg">
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
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {/* Using customer logos from LogoMarquee */}
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
