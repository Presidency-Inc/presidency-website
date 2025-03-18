import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Globe, MessageSquare, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MultiChannelExperienceSection = () => {
  return (
    <section className="py-24 bg-blue-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Multi Channel</span> Experience
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Seamlessly deliver your AI experiences across any platform - web, mobile, voice, and beyond. One platform to build them all.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Web</h3>
                  <p className="text-sm text-gray-500">Responsive interfaces</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Mobile</h3>
                  <p className="text-sm text-gray-500">iOS and Android</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Chat</h3>
                  <p className="text-sm text-gray-500">Messaging platforms</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Headphones size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Voice</h3>
                  <p className="text-sm text-gray-500">Speech interfaces</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="group border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5] hover:text-white transition-all"
                asChild
              >
                <Link to="/product-interest-form">
                  Contact Sales
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Left Content - Channels Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative lg:order-1"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg">
              <div className="relative mx-auto max-w-[450px]">
                <svg
                  className="absolute inset-0 w-full h-full opacity-30 -z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 800 800"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="channel-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="currentColor" className="text-blue-300" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#channel-grid)" />
                </svg>
                
                {/* Channel cards */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-medium text-gray-800">Omni Channel Reach</div>
                    <div className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full">
                      Enterprise Ready
                    </div>
                  </div>
                  
                  {/* Channel cards */}
                  <div className="space-y-4">
                    <div className="border border-blue-100 rounded-lg p-4 bg-blue-50 relative">
                      <div className="absolute top-3 right-3">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <Globe className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Web</div>
                          <div className="text-xs text-gray-500">Global access</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                          <Smartphone className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-medium">Mobile</div>
                          <div className="text-xs text-gray-500">On-the-go access</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                          <MessageSquare className="w-6 h-6 text-violet-600" />
                        </div>
                        <div>
                          <div className="font-medium">Chat</div>
                          <div className="text-xs text-gray-500">Instant communication</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                          <Headphones className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium">Voice</div>
                          <div className="text-xs text-gray-500">Hands-free interactions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-100 rounded-full"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-indigo-100 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelExperienceSection;
