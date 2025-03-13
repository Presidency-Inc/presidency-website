
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Laptop, Tablet, Tv, MessageSquare, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const MultiChannelExperience = () => {
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
              Create seamless <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Multi Channel Experiences</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Deliver consistent and personalized AI experiences across all platforms including web, mobile, desktop, voice assistants, and more.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Mobile</h3>
                  <p className="text-sm text-gray-500">iOS & Android</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Laptop size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Web</h3>
                  <p className="text-sm text-gray-500">Responsive design</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
                  <Headphones size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Voice</h3>
                  <p className="text-sm text-gray-500">Speech interfaces</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Messaging</h3>
                  <p className="text-sm text-gray-500">Chat platforms</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="group border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5] hover:text-white transition-all"
              >
                Explore Multi Channel
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          
          {/* Right Content - Multi Channel Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
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
                    <pattern id="multi-channel-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="currentColor" className="text-indigo-300" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#multi-channel-grid)" />
                </svg>
                
                {/* Main device - laptop */}
                <div className="relative z-10 bg-white rounded-xl shadow-md p-1 mb-12">
                  <div className="bg-gray-800 rounded-t-lg p-2 flex justify-between items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400">Web App</div>
                    <div className="w-4"></div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-b-lg">
                    <div className="h-48 bg-white rounded-lg p-3 shadow-sm">
                      <div className="h-6 w-2/3 bg-gray-200 rounded mb-3"></div>
                      <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                      <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                      <div className="h-4 w-3/4 bg-gray-100 rounded mb-4"></div>
                      <div className="flex space-x-2">
                        <div className="h-8 w-24 bg-indigo-500 rounded-md"></div>
                        <div className="h-8 w-24 bg-gray-200 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile device - absolute positioned */}
                <div className="absolute top-20 -right-4 z-20 w-32 bg-white rounded-xl shadow-md overflow-hidden border-4 border-white">
                  <div className="bg-gray-800 h-4 flex justify-center items-center">
                    <div className="w-8 h-1 bg-gray-600 rounded"></div>
                  </div>
                  <div className="bg-indigo-50 h-56 p-2">
                    <div className="bg-white rounded-md h-full p-2 shadow-sm">
                      <div className="h-3 w-2/3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                      <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                      <div className="h-2 w-3/4 bg-gray-100 rounded mb-3"></div>
                      <div className="h-5 w-full bg-indigo-500 rounded-md mb-2"></div>
                      <div className="h-5 w-full bg-gray-200 rounded-md"></div>
                    </div>
                  </div>
                  <div className="bg-black h-6 flex justify-center items-center">
                    <div className="w-5 h-5 rounded-full border border-gray-600"></div>
                  </div>
                </div>
                
                {/* Tablet device - absolute positioned */}
                <div className="absolute -bottom-8 -left-8 z-20 w-40 bg-white rounded-xl shadow-md overflow-hidden border-4 border-white">
                  <div className="bg-gray-800 h-3 flex justify-center items-center">
                    <div className="w-5 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="bg-indigo-50 h-48 p-2">
                    <div className="bg-white rounded-md h-full p-2 shadow-sm">
                      <div className="h-3 w-2/3 bg-gray-200 rounded mb-2"></div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="h-12 bg-gray-100 rounded"></div>
                        <div className="h-12 bg-gray-100 rounded"></div>
                        <div className="h-12 bg-gray-100 rounded"></div>
                        <div className="h-12 bg-indigo-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Smartwatch - absolute positioned */}
                <div className="absolute top-16 -left-6 z-30">
                  <div className="w-20 h-24 bg-gray-800 rounded-xl p-1 shadow-lg">
                    <div className="w-full h-full bg-indigo-50 rounded-lg p-1">
                      <div className="w-full h-full bg-white rounded-md flex flex-col justify-center items-center">
                        <div className="w-10 h-2 bg-gray-200 rounded mb-1"></div>
                        <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-6 h-10 bg-gray-800 mx-auto rounded-b-xl"></div>
                </div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
                  <line x1="50%" y1="50%" x2="85%" y2="35%" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="15%" y2="35%" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4" />
                </svg>
                
                {/* Center connection hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-indigo-500 rounded-full z-10 flex items-center justify-center shadow-md">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
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

export default MultiChannelExperience;
