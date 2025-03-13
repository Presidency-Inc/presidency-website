
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, ServerCog, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const AIOperationsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - AI Ops Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl shadow-lg">
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
                    <pattern id="aiops-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="currentColor" className="text-purple-300" />
                      <circle cx="30" cy="30" r="1" fill="currentColor" className="text-indigo-300" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#aiops-pattern)" />
                </svg>
                
                {/* AI Ops Visualization */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-medium text-gray-800">AI Operations Dashboard</div>
                    <div className="text-xs text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded-full">
                      Enterprise Ready
                    </div>
                  </div>
                  
                  {/* Main monitoring panel */}
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-medium text-sm">LLM Performance</div>
                        <div className="text-xs text-green-600 font-medium">Healthy</div>
                      </div>
                      
                      {/* Mini chart */}
                      <div className="h-12 w-full flex items-end space-x-1">
                        {[40, 60, 50, 70, 65, 80, 75, 85, 70, 90, 85, 95].map((height, i) => (
                          <div 
                            key={i}
                            className="bg-purple-500 rounded-sm flex-1"
                            style={{ height: `${height}%`, opacity: 0.5 + (i * 0.04) }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* LLM Caching stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                            <ServerCog className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="font-medium text-sm">LLM Cache</div>
                        </div>
                        <div className="flex items-baseline">
                          <div className="text-2xl font-bold">86%</div>
                          <div className="text-xs text-green-600 ml-2">+12%</div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Hit Rate</div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-2">
                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div className="font-medium text-sm">Validation</div>
                        </div>
                        <div className="flex items-baseline">
                          <div className="text-2xl font-bold">99.8%</div>
                          <div className="text-xs text-green-600 ml-2">+0.3%</div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Pass Rate</div>
                      </div>
                    </div>
                    
                    {/* System metrics */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                            <Cpu className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="font-medium text-sm">System Metrics</div>
                        </div>
                        <div className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">Last 24h</div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-xs text-gray-500">Latency</div>
                          <div className="font-medium">132ms</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Requests</div>
                          <div className="font-medium">1.2M</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Tokens</div>
                          <div className="font-medium">8.7M</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-100 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-indigo-100 rounded-full"></div>
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
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">AI</span> Operations
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Streamline AI operations with automated monitoring, caching, validation, and comprehensive management of your AI infrastructure.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <ServerCog size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">LLM Caching</h3>
                  <p className="text-sm text-gray-500">Reduced latency & costs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <BarChart size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Monitoring</h3>
                  <p className="text-sm text-gray-500">Real-time insights</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Validation</h3>
                  <p className="text-sm text-gray-500">Ensure quality & safety</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Resource Scaling</h3>
                  <p className="text-sm text-gray-500">Adaptive infrastructure</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="group border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5] hover:text-white transition-all"
              >
                Explore AI Operations
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIOperationsSection;
