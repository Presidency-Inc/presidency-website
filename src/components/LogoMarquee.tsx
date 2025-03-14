
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";

const customerLogos = [
  { name: "US Air Force", logo: "/lovable-uploads/c624067b-e118-4415-88dd-6d6b53f8142e.png" },
  { name: "Army National Guard", logo: "/lovable-uploads/c372ad43-c59a-49a8-ad25-4cd72be12224.png" },
  { name: "US Army", logo: "/lovable-uploads/9b2794b1-00af-46be-bead-31074b17b7f3.png" },
  { name: "Walmart", logo: "/lovable-uploads/01457e75-ab86-4eee-9af3-107cad055902.png" },
  { name: "Wells Fargo", logo: "/lovable-uploads/233f0859-da00-47f9-a7a1-f3a9ece35328.png" },
  { name: "Disney", logo: "/lovable-uploads/c8d7310f-59ce-44b3-9496-f94f0bd1f628.png" },
  { name: "Verizon", logo: "/lovable-uploads/81aa2f9a-093a-41bd-b8db-9ebc9c7a004c.png" },
  { name: "T-Mobile", logo: "/lovable-uploads/ab25318d-f684-46d3-9c68-7198dc1c3fa5.png" },
  { name: "AT&T", logo: "/lovable-uploads/9a2f9364-f0f0-49c1-8472-daf12d5e2d4a.png" },
  { name: "Cisco", logo: "/lovable-uploads/ea360af5-371b-4d11-b8a5-07998e94a1b6.png" },
];

const LogoMarquee = () => {
  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Only enable sticky behavior on the homepage
  const enableSticky = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    if (!enableSticky) return;
    
    const handleScroll = () => {
      setIsSticky(window.scrollY === 0);
    };

    // Initial state
    setIsSticky(window.scrollY === 0);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableSticky]);

  const logoWidth = 180; // Reduced from 220
  const logoPadding = 5; // Reduced from 10
  const totalLogoWidth = logoWidth + (logoPadding * 2); // Total width per logo item
  const totalWidth = customerLogos.length * totalLogoWidth;
  const animationDuration = 35; // Reduced from 40 to increase speed

  return (
    <div 
      className={`w-full bg-black h-16 z-30 ${
        enableSticky && isSticky ? "fixed bottom-0 left-0" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-row items-center h-full">
          {!isMobile && (
            <div className="whitespace-nowrap border-r border-gray-800 pr-8 h-full flex items-center">
              <h3 className="text-white text-lg font-bold">Trusted by the Enterprise</h3>
            </div>
          )}
          <div className={isMobile ? "w-full h-full" : "flex-1 pl-8 relative overflow-hidden h-full"}>
            <div className="flex items-center h-full">
              <motion.div
                className="flex items-center"
                initial={{ x: 0 }}
                animate={{ x: -totalWidth }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: animationDuration,
                  ease: "linear",
                }}
                style={{ width: `${totalWidth}px` }}
              >
                {customerLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center"
                    style={{ 
                      width: `${logoWidth}px`, 
                      paddingLeft: `${logoPadding}px`, 
                      paddingRight: `${logoPadding}px` 
                    }}
                  >
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className="max-h-[44px] max-w-full object-contain w-auto"
                    />
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex items-center absolute left-0"
                initial={{ x: totalWidth }}
                animate={{ x: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: animationDuration,
                  ease: "linear",
                }}
                style={{ width: `${totalWidth}px` }}
              >
                {customerLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center"
                    style={{ 
                      width: `${logoWidth}px`, 
                      paddingLeft: `${logoPadding}px`, 
                      paddingRight: `${logoPadding}px` 
                    }}
                  >
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className="max-h-[44px] max-w-full object-contain w-auto"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
