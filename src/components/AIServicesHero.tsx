
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AIServicesHero = () => {
  return (
    <div className="relative pt-16 md:pt-24 min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Neural Network Pattern */}
          <pattern id="neural-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="url(#ai-gradient)" />
            <circle cx="25" cy="25" r="2" fill="url(#ai-gradient)" />
            <circle cx="75" cy="25" r="2" fill="url(#ai-gradient)" />
            <circle cx="25" cy="75" r="2" fill="url(#ai-gradient)" />
            <circle cx="75" cy="75" r="2" fill="url(#ai-gradient)" />
            <line x1="50" y1="50" x2="25" y2="25" stroke="url(#ai-gradient)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="75" y2="25" stroke="url(#ai-gradient)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="25" y2="75" stroke="url(#ai-gradient)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="75" y2="75" stroke="url(#ai-gradient)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Artificial Intelligence
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Enhanced efficiency for your business with our cutting-edge AI solutions
          </p>

          <div>
            <Button variant="default" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              CONTACT US
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIServicesHero;
