
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OmniflowCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
          
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left content - Image/Graphics */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-12 lg:p-16 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="relative mx-auto w-48 h-48 mb-8">
                    <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                    <div className="absolute inset-3 bg-white/20 rounded-full"></div>
                    <div className="absolute inset-6 bg-white/30 rounded-full flex items-center justify-center">
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20L60 20L60 60L20 60L20 20Z" fill="white"/>
                        <path d="M30 30L50 30L50 50L30 50L30 30Z" fill="white" fillOpacity="0.6"/>
                        <path d="M15 40L65 40" stroke="white" strokeWidth="3"/>
                        <path d="M40 15L40 65" stroke="white" strokeWidth="3"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Transform Your Data Strategy</h3>
                  <p className="text-blue-100 max-w-sm mx-auto">
                    Join industry leaders who have revolutionized their data operations with our enterprise ETL platform
                  </p>
                </motion.div>
              </div>
              
              {/* Right content - CTA */}
              <div className="p-12 lg:p-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                    Ready to Streamline Your <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Data Pipeline?</span>
                  </h2>
                  
                  <p className="text-lg text-gray-600">
                    Schedule a demo to see how Presidency Omniflow can revolutionize your data management and integration processes.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90 shadow-lg"
                      size="lg"
                      asChild
                    >
                      <Link to="/product-interest-form">
                        Contact Sales
                        <MessageSquare className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmniflowCTA;
