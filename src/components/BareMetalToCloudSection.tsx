
import { motion } from "framer-motion";
import { Cloud, Server, ArrowRight } from "lucide-react";

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
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                    <Server className="w-12 h-12 text-gray-700 mb-3" />
                    <span className="text-sm font-medium text-center">On-prem/Legacy Infrastructure</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-blue-50">
                    <Cloud className="w-12 h-12 text-blue-500 mb-3" />
                    <span className="text-sm font-medium text-center">Multi-Cloud Environment</span>
                  </div>
                </div>
                
                <div className="flex justify-center my-6">
                  <div className="px-4 py-2 bg-blue-500 rounded-lg text-white flex items-center">
                    <span className="font-medium">Kube8r Migration Director</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
                
                <div className="mt-4">
                  <img
                    src="/lovable-uploads/4bbc04be-480b-4a9c-9ca1-ddbcae1a2bcc.png"
                    alt="Kube8r Migration Process"
                    className="w-full h-auto rounded-lg"
                  />
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
