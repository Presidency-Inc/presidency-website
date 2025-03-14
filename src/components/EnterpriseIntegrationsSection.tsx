
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Globe, Database, Server, Link } from "lucide-react";

const EnterpriseIntegrationsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isMobile && 'mobile-reverse'}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              Source & Target <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Integrations</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Connect to any source or target with pre-built connectors and extensible APIs for seamless data flow across your enterprise.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Databases</h3>
                  <p className="text-sm text-gray-500">SQL & NoSQL</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Server size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Cloud Platforms</h3>
                  <p className="text-sm text-gray-500">AWS, Azure, GCP</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">SaaS Applications</h3>
                  <p className="text-sm text-gray-500">200+ integrations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                  <Link size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">APIs & Services</h3>
                  <p className="text-sm text-gray-500">REST, GraphQL, gRPC</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-3xl shadow-sm">
              <div className="relative">
                {/* Integration hub visualization */}
                <div className="aspect-square relative flex items-center justify-center">
                  {/* Center hub */}
                  <div className="absolute w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                  </div>
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <g stroke="#a5b4fc" strokeWidth="2" strokeDasharray="5,5" fill="none">
                      <path d="M200,200 L100,100" />
                      <path d="M200,200 L300,100" />
                      <path d="M200,200 L300,300" />
                      <path d="M200,200 L100,300" />
                      <path d="M200,200 L50,200" />
                      <path d="M200,200 L350,200" />
                      <path d="M200,200 L200,50" />
                      <path d="M200,200 L200,350" />
                    </g>
                  </svg>
                  
                  {/* Surrounding systems */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                          <line x1="6" y1="6" x2="6.01" y2="6"></line>
                          <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                      </div>
                      <span>Cloud Services</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
                      <div className="bg-indigo-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                      </div>
                      <span>Databases</span>
                    </div>
                  </div>
                  
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
                      <div className="bg-purple-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                          <rect x="9" y="9" width="6" height="6"></rect>
                          <line x1="9" y1="1" x2="9" y2="4"></line>
                          <line x1="15" y1="1" x2="15" y2="4"></line>
                          <line x1="9" y1="20" x2="9" y2="23"></line>
                          <line x1="15" y1="20" x2="15" y2="23"></line>
                          <line x1="20" y1="9" x2="23" y2="9"></line>
                          <line x1="20" y1="14" x2="23" y2="14"></line>
                          <line x1="1" y1="9" x2="4" y2="9"></line>
                          <line x1="1" y1="14" x2="4" y2="14"></line>
                        </svg>
                      </div>
                      <span>APIs</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
                    <div className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
                      <div className="bg-teal-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                          <path d="M4 11a9 9 0 0 1 9 9"></path>
                          <path d="M4 4a16 16 0 0 1 16 16"></path>
                          <circle cx="5" cy="19" r="1"></circle>
                        </svg>
                      </div>
                      <span>Event Streams</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
                      <div className="bg-amber-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.09 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                          <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                        </svg>
                      </div>
                      <span>Data Lakes</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
                    <div className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
                      <div className="bg-red-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                      </div>
                      <span>File Systems</span>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
                      <div className="bg-green-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                      <span>SaaS Apps</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
                      <div className="bg-sky-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      </div>
                      <span>Real-time Data</span>
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

export default EnterpriseIntegrationsSection;
