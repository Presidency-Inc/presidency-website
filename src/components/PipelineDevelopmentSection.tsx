
import { motion } from "framer-motion";
import { GitBranch, Code, Shuffle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PipelineDevelopmentSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6 border-b pb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white mr-3">
                        <GitBranch className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-lg">Pipeline Designer</h3>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Active</div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Pipeline Flow Diagram */}
                    <div className="relative h-64 bg-gray-50 rounded-lg p-4">
                      <div className="absolute inset-x-0 top-4 h-1 bg-gray-200"></div>
                      <div className="absolute inset-x-0 top-1/2 h-1 bg-gray-200 transform -translate-y-1/2"></div>
                      <div className="absolute inset-x-0 bottom-4 h-1 bg-gray-200"></div>
                      
                      {/* Pipeline Nodes */}
                      <div className="absolute left-8 top-4 transform -translate-y-1/2">
                        <div className="bg-blue-500 text-white p-2 rounded-md shadow-md">
                          <div className="text-xs">Source</div>
                        </div>
                      </div>
                      
                      <div className="absolute left-1/3 top-4 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-indigo-500 text-white p-2 rounded-md shadow-md">
                          <div className="text-xs">Extract</div>
                        </div>
                      </div>
                      
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-indigo-600 text-white p-3 rounded-md shadow-md flex items-center">
                          <Shuffle className="w-4 h-4 mr-1" />
                          <div className="text-xs">Transform</div>
                        </div>
                      </div>
                      
                      <div className="absolute right-1/3 bottom-4 transform translate-x-1/2 -translate-y-1/2">
                        <div className="bg-indigo-500 text-white p-2 rounded-md shadow-md">
                          <div className="text-xs">Load</div>
                        </div>
                      </div>
                      
                      <div className="absolute right-8 bottom-4 transform -translate-y-1/2">
                        <div className="bg-blue-500 text-white p-2 rounded-md shadow-md">
                          <div className="text-xs">Target</div>
                        </div>
                      </div>
                      
                      {/* Flow Arrows */}
                      {[1, 2, 3, 4].map(i => (
                        <div 
                          key={i} 
                          className="absolute w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                          style={{
                            left: i === 1 ? '20%' : i === 2 ? '40%' : i === 3 ? '60%' : '80%',
                            top: i <= 2 ? '4px' : 'auto',
                            bottom: i > 2 ? '4px' : 'auto',
                            animationDelay: `${i * 0.3}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Code Example */}
                    <div className="bg-gray-900 rounded-md p-4 text-gray-300 text-sm font-mono">
                      <div className="text-pink-400">def transform_data(data):</div>
                      <div className="pl-4 text-gray-400">
                        <div># Apply business logic to incoming data</div>
                        <div className="text-blue-400">result = data.map(lambda x: x.transform())</div>
                        <div className="text-green-400">return result.filter(valid_records)</div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">Success Rate</div>
                        <div className="text-xl font-bold text-gray-900">99.8%</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">Pipelines</div>
                        <div className="text-xl font-bold text-gray-900">42</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">Daily Runs</div>
                        <div className="text-xl font-bold text-gray-900">124</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Pipeline <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Development</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Build robust, scalable data pipelines that reliably move and transform your data from diverse sources to destinations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <GitBranch className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Workflow Orchestration</h3>
                  <p className="text-gray-600">Coordinate complex data workflows with dependencies</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Custom Transformations</h3>
                  <p className="text-gray-600">Apply business logic to transform raw data into insights</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Shuffle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Data Validation</h3>
                  <p className="text-gray-600">Ensure data quality with automated testing frameworks</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Continuous Integration</h3>
                  <p className="text-gray-600">Deploy pipelines with CI/CD best practices</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
                <Link to="/services-interest-form">
                  Talk to an Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PipelineDevelopmentSection;
