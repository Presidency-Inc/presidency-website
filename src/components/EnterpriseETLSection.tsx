
import { motion } from "framer-motion";
import { Database, RefreshCw, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnterpriseETLSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Enterprise <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">ETL</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The ETL system simplifies data integration by automating tasks, providing teams with consistent, usable data.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Unified Data Layer</h3>
                  <p className="text-gray-600">Aggregate multiple data sources into a single, cohesive view</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Automated Workflows</h3>
                  <p className="text-gray-600">Schedule and automate complex data transformation tasks</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">High Performance</h3>
                  <p className="text-gray-600">Optimized for handling large-scale enterprise data loads</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Real-time Monitoring</h3>
                  <p className="text-gray-600">Track and visualize data flow performance</p>
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
          
          {/* Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6 border-b pb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white mr-3">
                        <Database className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-lg">ETL Process Monitor</h3>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Live</div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* ETL Flow Diagram */}
                    <div className="relative h-48 bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center h-full">
                        {/* Sources */}
                        <div className="space-y-2">
                          {["CRM", "ERP", "API"].map((source, i) => (
                            <div key={source} className="bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm flex items-center">
                              <Database className="w-4 h-4 mr-2" />
                              {source}
                            </div>
                          ))}
                        </div>
                        
                        {/* Flow Arrows */}
                        <div className="flex-1 px-6 relative">
                          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                          {[0, 1, 2].map(i => (
                            <div 
                              key={i} 
                              className="absolute h-3 w-3 bg-blue-500 rounded-full animate-pulse"
                              style={{
                                left: `${20 + i * 25}%`,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                animationDelay: `${i * 0.3}s`
                              }}
                            ></div>
                          ))}
                        </div>
                        
                        {/* Targets */}
                        <div className="space-y-2">
                          {["Data Warehouse", "Analytics", "Reporting"].map((target, i) => (
                            <div key={target} className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-md text-sm flex items-center">
                              <BarChart3 className="w-4 h-4 mr-2" />
                              {target}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Job Status */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Completed</div>
                        <div className="text-xl font-bold text-gray-900">248</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Running</div>
                        <div className="text-xl font-bold text-gray-900">12</div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Failed</div>
                        <div className="text-xl font-bold text-gray-900">3</div>
                      </div>
                    </div>
                    
                    {/* Progress bars */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Extract Progress</span>
                          <span>78%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Transform Progress</span>
                          <span>62%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full" style={{width: '62%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Load Progress</span>
                          <span>45%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '45%'}}></div>
                        </div>
                      </div>
                    </div>
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

export default EnterpriseETLSection;
