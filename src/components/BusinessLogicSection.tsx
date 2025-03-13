
import { Button } from "@/components/ui/button";
import { ArrowRight, GitBranch, Cpu, Settings, Network } from "lucide-react";
import { motion } from "framer-motion";

const BusinessLogicSection = () => {
  return (
    <section className="py-24 bg-gray-200">
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
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">Business Logic</span> & Orchestration
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Seamlessly integrate your business logic and AI with the appropriate data, tools, and command sequences for optimal performance and results.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <GitBranch size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Workflow</h3>
                  <p className="text-sm text-gray-500">Streamlined processes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Integration</h3>
                  <p className="text-sm text-gray-500">Connect with any API</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
                  <Settings size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Customization</h3>
                  <p className="text-sm text-gray-500">Tailored to your needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Network size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Orchestration</h3>
                  <p className="text-sm text-gray-500">Coordinated execution</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="group border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5] hover:text-white transition-all"
              >
                Explore Business Logic
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          
          {/* Right Content - Flow Diagram */}
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
                    <pattern id="flow-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-blue-300"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#flow-pattern)" />
                </svg>
                
                {/* Flow diagram */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex flex-col items-center space-y-6">
                    {/* Start node */}
                    <div className="w-32 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-medium">
                      User Intent
                    </div>
                    
                    {/* Arrow down */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400" />
                    </svg>
                    
                    {/* Decision node */}
                    <div className="w-36 h-36 bg-indigo-100 rounded-full flex items-center justify-center text-center p-4">
                      <div>
                        <div className="text-indigo-600 font-medium">Context Protocol</div>
                        <div className="text-xs text-gray-500 mt-1">Processes & Analyzes</div>
                      </div>
                    </div>
                    
                    {/* Arrow down */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400" />
                    </svg>
                    
                    {/* Multiple nodes with connections */}
                    <div className="flex space-x-4">
                      <div className="w-24 h-10 bg-violet-100 rounded-md flex items-center justify-center text-violet-600 text-sm">
                        Function 1
                      </div>
                      <div className="w-24 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 text-sm">
                        Function 2
                      </div>
                      <div className="w-24 h-10 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600 text-sm">
                        Function 3
                      </div>
                    </div>
                    
                    {/* Arrow down */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400" />
                    </svg>
                    
                    {/* Result node */}
                    <div className="w-32 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-medium">
                      Response
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-indigo-100 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLogicSection;
