
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ContextProtocolSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Leverage the power of <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Context Protocol</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Integrate with any dataset and optimize it for AI use. Our Context Protocol ensures your data is structured, searchable, and ready for AI consumption across all channels.
            </p>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="group border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5] hover:text-white transition-all"
              >
                Explore Context Protocol
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          
          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl shadow-lg">
              <div className="relative mx-auto max-w-[300px]">
                <svg
                  className="absolute inset-0 w-full h-full opacity-30 -z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 800 800"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="grid-small" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-blue-300"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-small)" />
                </svg>
                
                <div className="relative border-8 border-gray-900 rounded-[3rem] p-1 bg-gray-900 shadow-xl">
                  <div className="absolute top-0 z-10 w-full h-6 bg-gray-900 rounded-t-[2.5rem]"></div>
                  <div className="absolute top-2 z-10 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gray-800 rounded-full"></div>
                  <div className="overflow-hidden rounded-[2.5rem]">
                    <img 
                      src="/lovable-uploads/e37bdc98-408b-43ab-a870-f13c834451ba.png" 
                      alt="Context Protocol in action" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 z-10 w-full h-6 bg-gray-900 rounded-b-[2.5rem]"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-violet-100 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContextProtocolSection;
