
import { motion } from "framer-motion";
import { ArrowRightLeft, Database, FileText, Wifi, Server, CloudCog } from "lucide-react";

const AnySourceTargetSection = () => {
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
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Any Source</span> to <span className="bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">Any Target</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              From DBs, Streaming, APIs to basic filesystems, you can configure your ETL source and targets with ease.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Supported Source Types</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-1.5 rounded text-blue-600 mr-3">
                      <Database className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm">Databases</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-1.5 rounded text-indigo-600 mr-3">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm">File Systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-1.5 rounded text-blue-600 mr-3">
                      <Wifi className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm">Streaming APIs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-1.5 rounded text-indigo-600 mr-3">
                      <Server className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm">REST/GraphQL</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Supported Target Types</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-1.5 rounded text-blue-600 mr-3">
                      <Database className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm">Data Warehouses</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-1.5 rounded text-indigo-600 mr-3">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm">Storage Services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-1.5 rounded text-blue-600 mr-3">
                      <CloudCog className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm">Cloud Services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-1.5 rounded text-indigo-600 mr-3">
                      <ArrowRightLeft className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm">Analytics Tools</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-600">
                  Configure your data pipeline once and deploy to any infrastructure. Our flexible architecture ensures compatibility with both legacy systems and modern cloud platforms.
                </p>
              </div>
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
                        <ArrowRightLeft className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-lg">Data Flow Designer</h3>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">Active</div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Data Flow Diagram */}
                    <div className="relative h-72 bg-gray-50 rounded-lg p-4">
                      {/* Sources Column */}
                      <div className="absolute left-6 top-4 bottom-4 w-[28%]">
                        <div className="bg-blue-50 rounded-lg p-3 h-full flex flex-col">
                          <div className="text-sm font-medium text-gray-700 mb-3 text-center pb-2 border-b border-blue-100">
                            Sources
                          </div>
                          <div className="space-y-3 overflow-auto flex-1 pr-1">
                            {[
                              { name: 'PostgreSQL DB', icon: <Database className="w-4 h-4" />, color: 'blue' },
                              { name: 'REST API', icon: <Server className="w-4 h-4" />, color: 'indigo' },
                              { name: 'CSV Files', icon: <FileText className="w-4 h-4" />, color: 'blue' },
                              { name: 'Message Queue', icon: <Wifi className="w-4 h-4" />, color: 'indigo' },
                            ].map((source, idx) => (
                              <div key={idx} className={`bg-${source.color}-100 p-2 rounded flex items-center shadow-sm`}>
                                <div className={`text-${source.color}-600 mr-2`}>
                                  {source.icon}
                                </div>
                                <span className="text-xs">{source.name}</span>
                                <div className="ml-auto h-2 w-2 rounded-full bg-green-500"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Transformation Column */}
                      <div className="absolute left-[36%] top-4 bottom-4 w-[28%]">
                        <div className="bg-indigo-50 rounded-lg p-3 h-full flex flex-col">
                          <div className="text-sm font-medium text-gray-700 mb-3 text-center pb-2 border-b border-indigo-100">
                            Transformations
                          </div>
                          <div className="flex flex-col justify-center items-center h-full space-y-4">
                            <div className="relative w-full h-[70%] border-2 border-dashed border-indigo-300 rounded-lg flex items-center justify-center p-3">
                              <div className="absolute -top-3 bg-indigo-50 px-2 text-xs text-indigo-700 font-medium">
                                OmniLang Transformation
                              </div>
                              <div className="text-xs text-gray-500 text-center">
                                <div className="font-mono bg-white p-2 rounded mb-2 text-left text-[10px] overflow-hidden">
                                  <div className="text-blue-600">transform (data) {`{`}</div>
                                  <div className="pl-3 text-gray-700">join(data.users, data.orders);</div>
                                  <div className="pl-3 text-gray-700">filter(x =&gt; x.status == "active");</div>
                                  <div className="pl-3 text-gray-700">aggregate(sum, "total");</div>
                                  <div className="text-blue-600">{`}`}</div>
                                </div>
                                Data is currently being processed
                              </div>
                            </div>
                            <div className="w-full flex justify-center items-center">
                              <div className="h-1 bg-indigo-200 w-2/3 relative">
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
                                  <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Targets Column */}
                      <div className="absolute right-6 top-4 bottom-4 w-[28%]">
                        <div className="bg-blue-50 rounded-lg p-3 h-full flex flex-col">
                          <div className="text-sm font-medium text-gray-700 mb-3 text-center pb-2 border-b border-blue-100">
                            Targets
                          </div>
                          <div className="space-y-3 overflow-auto flex-1 pr-1">
                            {[
                              { name: 'Snowflake DW', icon: <Database className="w-4 h-4" />, color: 'blue' },
                              { name: 'S3 Storage', icon: <CloudCog className="w-4 h-4" />, color: 'indigo' },
                              { name: 'Analytics API', icon: <ArrowRightLeft className="w-4 h-4" />, color: 'blue' },
                              { name: 'Tableau', icon: <FileText className="w-4 h-4" />, color: 'indigo' },
                            ].map((target, idx) => (
                              <div key={idx} className={`bg-${target.color}-100 p-2 rounded flex items-center shadow-sm`}>
                                <div className={`text-${target.color}-600 mr-2`}>
                                  {target.icon}
                                </div>
                                <span className="text-xs">{target.name}</span>
                                <div className="ml-auto h-2 w-2 rounded-full bg-yellow-500"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Flow Arrows */}
                      <div className="absolute left-[32%] top-1/2 w-[4%] h-0.5 bg-indigo-300 transform -translate-y-1/2">
                        <div className="absolute right-0 h-2 w-2 bg-indigo-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      <div className="absolute left-[64%] top-1/2 w-[4%] h-0.5 bg-blue-300 transform -translate-y-1/2">
                        <div className="absolute right-0 h-2 w-2 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>
                    
                    {/* Status Information */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-500 mb-1">Sources</div>
                        <div className="text-sm font-semibold">4/4 Active</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-500 mb-1">Processing</div>
                        <div className="text-sm font-semibold">2.3M Records</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-500 mb-1">Targets</div>
                        <div className="text-sm font-semibold">4/4 Ready</div>
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

export default AnySourceTargetSection;
