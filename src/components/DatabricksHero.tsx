
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DatabricksHero = () => {
  return (
    <section className="relative pt-40 pb-8 md:pt-40 md:pb-12 overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="databricks-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Flow Pattern */}
          <pattern id="databricks-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 0,50 C 20,20 40,0 50,0 C 60,0 80,20 100,50 C 120,80 140,100 150,100 C 160,100 180,80 200,50"
              fill="none"
              stroke="url(#databricks-gradient)"
              strokeWidth="2"
              transform="translate(0,0)"
            />
            <path
              d="M 0,50 C 20,20 40,0 50,0 C 60,0 80,20 100,50 C 120,80 140,100 150,100 C 160,100 180,80 200,50"
              fill="none"
              stroke="url(#databricks-gradient)"
              strokeWidth="2"
              transform="translate(-100,25)"
            />
            <path
              d="M 0,50 C 20,20 40,0 50,0 C 60,0 80,20 100,50 C 120,80 140,100 150,100 C 160,100 180,80 200,50"
              fill="none"
              stroke="url(#databricks-gradient)"
              strokeWidth="2"
              transform="translate(0,50)"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#databricks-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Databricks Services <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Reimagined</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Our proprietary accelerators overcome Databricks' inherent limitations, enabling faster, more efficient data processing jobs. Accelerate your data workflows and enhance performance like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#1a46e5] hover:bg-[#1a46e5]/90 text-white border-none">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5]/10">
                Schedule a Consultation
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg blur opacity-50"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-lg border border-blue-500/30 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Accelerated ETL</h3>
                    <p className="text-gray-700 text-sm">3-5x faster processing</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Cost Efficiency</h3>
                    <p className="text-gray-700 text-sm">30-40% reduction</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced ML Ops</h3>
                    <p className="text-gray-700 text-sm">Streamlined deployment</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Unity Catalog+</h3>
                    <p className="text-gray-700 text-sm">Enhanced governance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DatabricksHero;
