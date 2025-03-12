
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section height plus some margin
      const threshold = window.innerHeight + 100;
      setIsScrolledPast(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Each logo has a fixed width with padding
  const logoWidth = 350; // Logo width
  const logoPadding = 50; // Padding on each side
  const totalLogoWidth = logoWidth + (logoPadding * 2); // Total width per logo item
  const totalWidth = customerLogos.length * totalLogoWidth;

  return (
    <div 
      className={`w-full bg-black py-8 z-30 ${
        isScrolledPast ? "" : "fixed bottom-0 left-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center">
          <div className="w-1/4 border-r border-gray-800 pr-8">
            <h3 className="text-white text-xl font-bold">Trusted by the Enterprise</h3>
          </div>
          <div className="w-3/4 pl-8 relative overflow-hidden">
            <div className="flex items-center h-24">
              {/* First marquee */}
              <motion.div
                className="flex items-center"
                animate={{ x: [-totalLogoWidth, -totalWidth - totalLogoWidth] }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
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
                      className="max-h-[150px] max-w-full object-contain w-auto"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Duplicate for seamless loop */}
              <motion.div
                className="flex items-center absolute left-0"
                animate={{ x: [totalWidth - totalLogoWidth, -totalLogoWidth] }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
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
                      className="max-h-[150px] max-w-full object-contain w-auto"
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
