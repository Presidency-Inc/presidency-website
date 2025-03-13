import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Network, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ContextProtocolSection = () => {
  return (
    <section className="py-24 bg-blue-35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Context Protocol Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl shadow-lg">
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
                    <pattern id="data-grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-300" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#data-grid-pattern)" />
                </svg>
                
                {/* Context Protocol visualization */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-medium text-gray-800">Context Management System</div>
                    <div className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full">
                      Active
                    </div>
                  </div>
                  
                  {/* Visualization elements */}
                  <div className="space-y-5">
                    <div className="relative">
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="border border-blue-100 rounded-lg p-4 ml-4 bg-blue-50">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">Customer Data</div>
                          <div className="text-xs text-gray-500">12.5K records</div>
                        </div>
                        <div className="mt-2 h-3 bg-gray-100 rounded overflow-hidden">
                          <div className="bg-blue-500 h-full" style={{width: "85%"}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-indigo-500 rounded-full"></div>
                      <div className="border border-indigo-100 rounded-lg p-4 ml-4 bg-indigo-50">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">Product Database</div>
                          <div className="text-xs text-gray-500">2.8K items</div>
                        </div>
                        <div className="mt-2 h-3 bg-gray-100 rounded overflow-hidden">
                          <div className="bg-indigo-500 h-full" style={{width: "65%"}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-violet-500 rounded-full"></div>
                      <div className="border border-violet-100 rounded-lg p-4 ml-4 bg-violet-50">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">Knowledge Base</div>
                          <div className="text-xs text-gray-500">5.3K documents</div>
                        </div>
                        <div className="mt-2 h-3 bg-gray-100 rounded overflow-hidden">
                          <div className="bg-violet-500 h-full" style={{width: "90%"}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <span>Ready for AI consumption</span>
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-violet-100 rounded-full"></div>
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
              Leverage the power of <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">our Context Management System</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Integrate with any dataset and optimize it for AI use. Our Context Management System ensures your data is structured, searchable, and ready for AI consumption across all channels.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Data Storage</h3>
                  <p className="text-sm text-gray-500">Efficient & secure</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Network size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Connections</h3>
                  <p className="text-sm text-gray-500">Seamless integration</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
                  <Layers size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Structure</h3>
                  <p className="text-sm text-gray-500">Organized knowledge</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Optimization</h3>
                  <p className="text-sm text-gray-500">AI-ready format</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="group border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5] hover:text-white transition-all"
              >
                Explore Context Management
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContextProtocolSection;
