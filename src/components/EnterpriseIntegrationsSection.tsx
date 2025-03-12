
import { motion } from "framer-motion";
import { Globe, Cloud, Database, Server } from "lucide-react";

const EnterpriseIntegrationsSection = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6 border-b pb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-teal-600 rounded-md flex items-center justify-center text-white mr-3">
                        <Globe className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-lg">Integration Hub</h3>
                    </div>
                    <div className="text-xs text-gray-500">Connected: 24/28</div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Integration Map */}
                    <div className="relative h-64 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                      {/* Central Node */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center z-10 border-4 border-white">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white">
                          <span className="text-xs font-bold">OMNIFLOW</span>
                        </div>
                      </div>
                      
                      {/* Connection Lines */}
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                        <div 
                          key={angle}
                          className="absolute top-1/2 left-1/2 bg-gray-200 h-0.5"
                          style={{
                            width: '35%',
                            transformOrigin: '0 0',
                            transform: `rotate(${angle}deg)`,
                          }}
                        >
                          <div 
                            className="absolute right-0 w-1.5 h-1.5 rounded-full bg-emerald-500"
                            style={{
                              boxShadow: '0 0 5px rgba(16, 185, 129, 0.6)',
                              animation: 'pulse 1.5s infinite',
                              animationDelay: `${angle / 100}s`
                            }}
                          ></div>
                        </div>
                      ))}
                      
                      {/* External Nodes - Cloud Services */}
                      <div className="absolute top-[15%] left-[15%] bg-blue-100 p-2 rounded-lg shadow-sm">
                        <Cloud className="h-5 w-5 text-blue-600" />
                        <span className="text-xs block mt-1">AWS</span>
                      </div>
                      
                      <div className="absolute top-[20%] right-[20%] bg-blue-100 p-2 rounded-lg shadow-sm">
                        <Cloud className="h-5 w-5 text-blue-600" />
                        <span className="text-xs block mt-1">Azure</span>
                      </div>
                      
                      <div className="absolute bottom-[20%] left-[25%] bg-orange-100 p-2 rounded-lg shadow-sm">
                        <Database className="h-5 w-5 text-orange-600" />
                        <span className="text-xs block mt-1">BigQuery</span>
                      </div>
                      
                      <div className="absolute bottom-[25%] right-[15%] bg-cyan-100 p-2 rounded-lg shadow-sm">
                        <Database className="h-5 w-5 text-cyan-600" />
                        <span className="text-xs block mt-1">Snowflake</span>
                      </div>
                      
                      <div className="absolute top-[50%] left-[10%] bg-purple-100 p-2 rounded-lg shadow-sm">
                        <Server className="h-5 w-5 text-purple-600" />
                        <span className="text-xs block mt-1">APIs</span>
                      </div>
                      
                      <div className="absolute bottom-[10%] right-[45%] bg-green-100 p-2 rounded-lg shadow-sm">
                        <Database className="h-5 w-5 text-green-600" />
                        <span className="text-xs block mt-1">MongoDB</span>
                      </div>
                    </div>
                    
                    {/* Integration Categories */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mb-2">
                          <Cloud className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="text-xs text-gray-700">Cloud Services</div>
                        <div className="text-sm font-semibold text-gray-900">8</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg text-center">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 mb-2">
                          <Database className="h-4 w-4 text-orange-600" />
                        </div>
                        <div className="text-xs text-gray-700">Databases</div>
                        <div className="text-sm font-semibold text-gray-900">12</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg text-center">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 mb-2">
                          <Server className="h-4 w-4 text-purple-600" />
                        </div>
                        <div className="text-xs text-gray-700">APIs</div>
                        <div className="text-sm font-semibold text-gray-900">6</div>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg text-center">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 mb-2">
                          <Globe className="h-4 w-4 text-teal-600" />
                        </div>
                        <div className="text-xs text-gray-700">Services</div>
                        <div className="text-sm font-semibold text-gray-900">4</div>
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
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Enterprise <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect this agent to databases, cloud services like AWS or Azure, and platforms like Google BigQuery or Snowflake for streamlined data handling.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mt-8">
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cloud Service Providers</h3>
                    <p className="text-gray-600 mb-3">Seamlessly connect to all major cloud providers including AWS, Azure, Google Cloud, and more.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">AWS</span>
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">Azure</span>
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">GCP</span>
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">IBM Cloud</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-100 p-2 rounded-lg text-orange-600 mr-4">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Data Warehouse Platforms</h3>
                    <p className="text-gray-600 mb-3">Integrate with modern data warehouses to centralize your organization's data assets.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded">Snowflake</span>
                      <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded">BigQuery</span>
                      <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded">Redshift</span>
                      <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded">Databricks</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 p-2 rounded-lg text-teal-600 mr-4">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Database Systems</h3>
                    <p className="text-gray-600 mb-3">Connect to both SQL and NoSQL databases to centralize data from various sources.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">PostgreSQL</span>
                      <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">MySQL</span>
                      <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">MongoDB</span>
                      <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">Oracle</span>
                      <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">SQL Server</span>
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
