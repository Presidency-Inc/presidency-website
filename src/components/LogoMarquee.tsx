
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const customerLogos = [
  { name: "Company 1", logo: "/placeholder.svg" },
  { name: "Company 2", logo: "/placeholder.svg" },
  { name: "Company 3", logo: "/placeholder.svg" },
  { name: "Company 4", logo: "/placeholder.svg" },
  { name: "Company 5", logo: "/placeholder.svg" },
  { name: "Company 6", logo: "/placeholder.svg" },
  { name: "Company 7", logo: "/placeholder.svg" },
  { name: "Company 8", logo: "/placeholder.svg" },
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

  return (
    <div 
      className={`w-full bg-black py-8 z-30 ${
        isScrolledPast ? "" : "fixed bottom-0 left-0"
      }`}
    >
      <div className="relative overflow-hidden">
        <div className="flex items-center">
          <motion.div
            className="flex items-center space-x-12 min-w-full"
            animate={{ x: [0, -1920] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {customerLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-8 md:h-10 object-contain invert"
                />
              </div>
            ))}
          </motion.div>

          {/* Duplicate for seamless loop */}
          <motion.div
            className="flex items-center space-x-12 min-w-full absolute left-full top-0"
            animate={{ x: [0, -1920] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {customerLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-8 md:h-10 object-contain invert"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
