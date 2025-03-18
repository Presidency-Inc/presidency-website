
import { motion } from "framer-motion";
import { Server, Network, HardDrive, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataInfrastructureSection = () => {
  return (
    <section className="py-20 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Data Infrastructure <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Setup</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Design and implement scalable data infrastructure that grows with your business needs while maintaining security and performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cloud Optimization</h3>
                  <p className="text-gray-600">Architect efficient cloud-based data solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Data Mesh Architecture</h3>
                  <p className="text-gray-600">Distributed domain-oriented data ownership model</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <HardDrive className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Data Lakes & Warehouses</h3>
                  <p className="text-gray-600">Store and organize your data for optimal access</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Infrastructure as Code</h3>
                  <p className="text-gray-600">Automate deployment with reproducible templates</p>
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
          >
            <div className="relative perspective-[1200px]">
              <div className="transform-style-3d rotate-x-[60deg] rotate-z-[-45deg]">
                <div className="grid grid-cols-3 gap-3">
                  {/* Top layer - cloud */}
                  <div className="bg-white p-3 rounded-lg shadow-lg col-span-3 flex items-center justify-center h-16">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 19H6.5C3.46 19 1 16.54 1 13.5C1 10.46 3.46 8 6.5 8H7C7 4.69 9.69 2 13 2C16.31 2 19 4.69 19 8V8.5C21.21 8.5 23 10.29 23 12.5C23 14.71 21.21 16.5 19 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-medium text-sm">Cloud Services</span>
                    </div>
                  </div>
                  
                  {/* Middle layer - data services */}
                  <div className="bg-white p-3 rounded-lg shadow-lg col-span-1 h-16 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-medium text-xs text-blue-700">Storage</div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-lg col-span-1 h-16 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-medium text-xs text-blue-700">Compute</div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-lg col-span-1 h-16 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-medium text-xs text-blue-700">Analytics</div>
                    </div>
                  </div>
                  
                  {/* Bottom layer - infrastructure */}
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg shadow-lg col-span-3 h-16 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-medium text-xs text-white">Core Infrastructure</div>
                    </div>
                  </div>
                </div>
                
                {/* Vertical connections */}
                <div className="absolute left-1/6 top-16 w-0.5 h-16 bg-blue-300"></div>
                <div className="absolute left-1/2 top-16 w-0.5 h-16 bg-blue-300"></div>
                <div className="absolute left-5/6 top-16 w-0.5 h-16 bg-blue-300"></div>
                
                {/* Infrastructure details */}
                <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sm">Infrastructure Metrics</h3>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Healthy</div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Storage Utilization</span>
                        <span>65%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>CPU Usage</span>
                        <span>42%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '42%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Network Throughput</span>
                        <span>78%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '78%'}}></div>
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

export default DataInfrastructureSection;
