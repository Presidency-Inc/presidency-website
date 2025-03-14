
import { motion } from "framer-motion";
import { Code, Workflow, Activity } from "lucide-react";

const AppStackModernizationSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">How it Works</h3>
                
                <div className="mb-6 h-48 relative overflow-hidden">
                  {/* Visual graphic inspired by Leapfrog */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-30"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 800 400"
                    >
                      <defs>
                        <linearGradient id="app-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <pattern id="app-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path
                          d="M 0,40 C 20,20 40,0 50,0 C 60,0 80,20 100,40 C 120,60 140,80 150,80 C 160,80 180,60 200,40"
                          fill="none"
                          stroke="url(#app-gradient)"
                          strokeWidth="2"
                        />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#app-pattern)" />
                    </svg>
                  </div>
                  
                  {/* Visualization of App Stack Modernization Process */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative z-10 grid grid-cols-3 gap-2 w-full px-4">
                      <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="bg-blue-100 p-3 rounded-lg flex flex-col items-center"
                      >
                        <Code className="w-6 h-6 text-blue-600 mb-2" />
                        <span className="text-xs font-semibold text-blue-800">Discover</span>
                      </motion.div>
                      <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-indigo-100 p-3 rounded-lg flex flex-col items-center"
                      >
                        <Workflow className="w-6 h-6 text-indigo-600 mb-2" />
                        <span className="text-xs font-semibold text-indigo-800">Migrate</span>
                      </motion.div>
                      <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-blue-100 p-3 rounded-lg flex flex-col items-center"
                      >
                        <Activity className="w-6 h-6 text-blue-600 mb-2" />
                        <span className="text-xs font-semibold text-blue-800">Operationalize</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Connection lines between steps */}
                  <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 400 200">
                    <path 
                      d="M 120,100 L 200,100 L 280,100" 
                      stroke="#94a3b8" 
                      strokeWidth="2" 
                      strokeDasharray="5,5" 
                      fill="none"
                    />
                    <path 
                      d="M 110,100 L 120,100" 
                      stroke="#94a3b8" 
                      strokeWidth="2" 
                      fill="none"
                    />
                    <path 
                      d="M 280,100 L 290,100" 
                      stroke="#94a3b8" 
                      strokeWidth="2" 
                      fill="none"
                    />
                  </svg>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50">
                    <span className="text-sm font-medium text-center text-blue-700">Discover</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-indigo-50">
                    <span className="text-sm font-medium text-center text-indigo-700">Migrate</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50">
                    <span className="text-sm font-medium text-center text-blue-700">Operationalize</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              App-Stack <span className="text-blue-500">Modernization</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Transform your legacy applications into modern, containerized microservices deployable on Kubernetes or any cloud platform.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Discovery Engine</h3>
                  <p className="text-base text-gray-600">Thoroughly analyze application dependencies, data flows, and integration points.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Containerization</h3>
                  <p className="text-base text-gray-600">Automatically package applications into containers for deployment on Kubernetes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">CI/CD Pipeline Integration</h3>
                  <p className="text-base text-gray-600">Integrate with your existing CI/CD pipelines or set up new ones for continuous deployment.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Analytics & Monitoring</h3>
                  <p className="text-base text-gray-600">Built-in monitoring tools to ensure optimal performance of your modernized applications.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppStackModernizationSection;
