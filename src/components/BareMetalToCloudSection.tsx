import { motion } from "framer-motion";
import { Cloud, Server, ArrowRight, Database, GitBranch } from "lucide-react";

const BareMetalToCloudSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Bare-Metal to Cloud <span className="text-blue-500">Migration</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Seamlessly migrate your on-premises infrastructure to modern cloud platforms with our automated migration tools and expert guidance.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Workload Analysis</h3>
                  <p className="text-base text-gray-600">Assess and categorize your existing workloads for optimal cloud placement.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Infrastructure as Code</h3>
                  <p className="text-base text-gray-600">Automate infrastructure deployment with fully templated environments.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Data Transfer Engine</h3>
                  <p className="text-base text-gray-600">Secure, efficient migration of your data to cloud storage solutions.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Migration Flow</h3>
                
                <div className="h-56 mb-4 relative overflow-hidden rounded-lg">
                  {/* Visual graphic background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-30"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 800 400"
                    >
                      <defs>
                        <linearGradient id="migration-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <pattern id="migration-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path
                          d="M 0,40 C 20,20 40,0 50,0 C 60,0 80,20 100,40 C 120,60 140,80 150,80 C 160,80 180,60 200,40"
                          fill="none"
                          stroke="url(#migration-gradient)"
                          strokeWidth="2"
                        />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#migration-pattern)" />
                    </svg>
                  </div>
                  
                  {/* Visualization of the Migration Process */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex flex-col items-center">
                      {/* Migration flow diagram */}
                      <div className="flex items-center space-x-4 mb-6">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="bg-gray-100 p-3 rounded-lg shadow-md flex flex-col items-center w-24"
                        >
                          <Server className="w-8 h-8 text-gray-700 mb-1" />
                          <span className="text-xs font-medium text-center">Bare Metal</span>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="flex flex-col items-center"
                        >
                          <div className="text-blue-500 relative">
                            <ArrowRight className="w-6 h-6" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-100 rounded-full -z-10"></div>
                          </div>
                          <span className="text-xs text-blue-700 mt-1">Migrate</span>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="bg-blue-100 p-3 rounded-lg shadow-md flex flex-col items-center w-24"
                        >
                          <Cloud className="w-8 h-8 text-blue-600 mb-1" />
                          <span className="text-xs font-medium text-center">Cloud</span>
                        </motion.div>
                      </div>
                      
                      {/* Kube8r components */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
                      >
                        <span className="font-medium text-sm">Kube8r Migration Engine</span>
                      </motion.div>
                      
                      {/* Migration components */}
                      <div className="grid grid-cols-3 gap-3 mt-6">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="bg-blue-50 p-2 rounded flex flex-col items-center"
                        >
                          <Database className="w-5 h-5 text-blue-500 mb-1" />
                          <span className="text-xs text-center text-blue-800">Data</span>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="bg-indigo-50 p-2 rounded flex flex-col items-center"
                        >
                          <GitBranch className="w-5 h-5 text-indigo-500 mb-1" />
                          <span className="text-xs text-center text-indigo-800">Code</span>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="bg-blue-50 p-2 rounded flex flex-col items-center"
                        >
                          <Server className="w-5 h-5 text-blue-500 mb-1" />
                          <span className="text-xs text-center text-blue-800">Config</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                    <Server className="w-10 h-10 text-gray-700 mb-3" />
                    <span className="text-sm font-medium text-center">On-prem/Legacy Infrastructure</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-blue-50">
                    <Cloud className="w-10 h-10 text-blue-500 mb-3" />
                    <span className="text-sm font-medium text-center">Multi-Cloud Environment</span>
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

export default BareMetalToCloudSection;
