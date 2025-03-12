
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Monitor, Globe, MessageCircle, MessageSquare, Share2, Users } from "lucide-react";
import { motion } from "framer-motion";

const MultiChannelSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Multi-Channel Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
                    <pattern id="channel-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path
                        d="M 15 0 L 0 15 L 15 30 L 30 15 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-blue-300"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#channel-pattern)" />
                </svg>
                
                {/* Multi-channel visualization */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-medium text-gray-800">Active Channels</div>
                    <div className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full">
                      Live Data
                    </div>
                  </div>
                  
                  {/* Channel metrics */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Mobile Apps</div>
                          <div className="text-xs text-gray-500">iOS & Android</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full" style={{width: "78%"}}></div>
                        </div>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Globe className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-medium">Web Platform</div>
                          <div className="text-xs text-gray-500">Desktop & Mobile</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full" style={{width: "65%"}}></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                          <MessageSquare className="h-5 w-5 text-violet-600" />
                        </div>
                        <div>
                          <div className="font-medium">Chat Interface</div>
                          <div className="text-xs text-gray-500">Customer Service</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="bg-violet-500 h-full" style={{width: "42%"}}></div>
                        </div>
                        <span className="text-sm font-medium">42%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                        </div>
                        <div>
                          <div className="font-medium">Voice Assistants</div>
                          <div className="text-xs text-gray-500">Smart Speakers & Calls</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full" style={{width: "25%"}}></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Total metrics */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium">Total Active Users</span>
                      <span className="font-bold text-blue-600">245,812</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-violet-100 rounded-full"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-100 rounded-full"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Multi-Channel <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Provide seamless cross-platform experiences on web, iOS, Android, desktops, 
              voice, and beyond. One system, multiple touchpoints, consistent experience.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Mobile</h3>
                  <p className="text-sm text-gray-500">iOS & Android apps</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Monitor size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Desktop</h3>
                  <p className="text-sm text-gray-500">Web & native apps</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Web</h3>
                  <p className="text-sm text-gray-500">Modern browser experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Voice</h3>
                  <p className="text-sm text-gray-500">Smart assistants & calls</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="group border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5] hover:text-white transition-all"
              >
                Explore Multi-Channel
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelSection;
