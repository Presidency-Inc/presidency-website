
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkle, Database, Code } from "lucide-react";
import { motion } from "framer-motion";

const LLMsSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
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
              <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">Model Hosting</span> & Finetuning
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Use frontier models or deploy your preferred LLM locally or on the cloud. 
              Fine-tune them to align with your business logic and deliver superior results.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Multiple Models</h3>
                  <p className="text-sm text-gray-500">Frontier and beyond</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Sparkle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Fine-tuning</h3>
                  <p className="text-sm text-gray-500">Domain expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Self-hosting</h3>
                  <p className="text-sm text-gray-500">Full control</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Prompting</h3>
                  <p className="text-sm text-gray-500">Advanced techniques</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="group border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5] hover:text-white transition-all"
              >
                Explore LLM Capabilities
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          
          {/* Right Content - LLM Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-8 rounded-3xl shadow-lg">
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
                    <pattern id="brain-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="15" cy="15" r="1.5" fill="currentColor" className="text-violet-300" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#brain-pattern)" />
                </svg>
                
                {/* LLM Visualization */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-medium text-gray-800">Model Selection</div>
                    <div className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full">
                      Enterprise Ready
                    </div>
                  </div>
                  
                  {/* Model cards */}
                  <div className="space-y-4">
                    <div className="border border-blue-100 rounded-lg p-4 bg-blue-50 relative">
                      <div className="absolute top-3 right-3">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <Brain className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Frontier LLMs</div>
                          <div className="text-xs text-gray-500">GPT, Grok, DeepSeek, Llama & more</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                          <Sparkle className="w-6 h-6 text-violet-600" />
                        </div>
                        <div>
                          <div className="font-medium">Custom Finetune</div>
                          <div className="text-xs text-gray-500">Domain-specific knowledge</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                          <Database className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-medium">Self-hosted LLM</div>
                          <div className="text-xs text-gray-500">Complete data sovereignty</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      <div className="text-xs bg-gray-100 px-2 py-1 rounded">temp: 0.7</div>
                      <div className="text-xs bg-gray-100 px-2 py-1 rounded">top_p: 0.9</div>
                      <div className="text-xs bg-gray-100 px-2 py-1 rounded">top_k: 40</div>
                      <div className="text-xs bg-gray-100 px-2 py-1 rounded">max_tokens: 1024</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-violet-100 rounded-full"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-indigo-100 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LLMsSection;
