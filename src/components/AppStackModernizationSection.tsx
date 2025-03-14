
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
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">How it Works</h3>
                
                <div className="mb-6">
                  <img
                    src="/lovable-uploads/40082881-4d36-469d-8cbf-9fe26e0f3d17.png"
                    alt="Kube8r Process Flow"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50">
                    <span className="text-sm font-medium text-center text-blue-700">Discover</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-teal-50">
                    <span className="text-sm font-medium text-center text-teal-700">Migrate</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-cyan-50">
                    <span className="text-sm font-medium text-center text-cyan-700">Operationalize</span>
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
              App-Stack <span className="text-teal-500">Modernization</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Transform your legacy applications into modern, containerized microservices deployable on Kubernetes or any cloud platform.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
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
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
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
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
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
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3">
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
