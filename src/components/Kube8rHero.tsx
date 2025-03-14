
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Kube8rHero = () => {
  return (
    <div className="relative pt-16 md:pt-24 min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="kube-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Grid Pattern */}
          <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="none" stroke="url(#kube-gradient)" strokeWidth="1" />
            <circle cx="25" cy="25" r="3" fill="url(#kube-gradient)" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
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
            Presidency Kube8r
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Cloud Migration Platform
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            A Platform that Securely Automates Fully-Wired Application & Data Migration to Multi-Cloud and Kubernetes
          </p>

          <div>
            <Button variant="default" size="lg" className="bg-[#0ea5e9] text-white hover:bg-[#0ea5e9]/90">
              GET STARTED
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Kube8rHero;
