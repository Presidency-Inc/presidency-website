
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 lg:py-32">
        {/* Left side with content */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Maximize Impact with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI + Data
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-xl">
            Presidency Solutions seeks to present exceptional solutions and resources that today's technical and financial decision makers appreciate.
          </p>

          <div>
            <Button variant="default" size="lg" className="bg-black text-white hover:bg-gray-800">
              GET SOLUTIONS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
        
        {/* Right side with AI pattern */}
        <motion.div 
          className="relative hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-xl border border-gray-100">
            {/* Blue AI pattern background */}
            <div className="absolute inset-0 bg-[#1a46e5]">
              {/* Wave patterns */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[10%] left-0 right-0 h-32 bg-blue-300 rounded-full blur-3xl transform rotate-6"></div>
                <div className="absolute top-[30%] left-0 right-0 h-32 bg-blue-400 rounded-full blur-3xl transform -rotate-3"></div>
                <div className="absolute top-[50%] left-0 right-0 h-32 bg-blue-300 rounded-full blur-3xl transform rotate-2"></div>
                <div className="absolute top-[70%] left-0 right-0 h-32 bg-blue-400 rounded-full blur-3xl transform -rotate-6"></div>
              </div>
              
              {/* Content overlay - mimicking a UI similar to the reference image */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg w-full max-w-md mx-auto mt-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Create an AI Solution</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                      <p className="text-sm font-medium text-gray-700">Region</p>
                      <p className="text-sm text-gray-600">North America - New York</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                      <p className="text-sm font-medium text-gray-700">Model Type</p>
                      <p className="text-sm text-gray-600">Enterprise GPT - 24GB RAM</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-700">Estimated Cost</p>
                        <p className="text-sm font-medium text-blue-600">$2.99 /hour</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white rounded-md py-2 mt-6 font-medium hover:bg-blue-700 transition-colors">
                    Create Solution
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
