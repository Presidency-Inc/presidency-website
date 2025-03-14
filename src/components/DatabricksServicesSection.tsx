
import { motion } from "framer-motion";
import { Database, Code, BarChart3, Terminal } from "lucide-react";

const DatabricksServicesSection = () => {
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
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-lg">
                  {/* Databricks UI Mockup */}
                  <div className="border-b border-gray-200">
                    <div className="flex items-center bg-[#FF3621] text-white p-3 rounded-t-2xl">
                      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FF3621"/>
                        <path d="M9.5 7.5L14.5 12.5L9.5 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-medium">Databricks</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex space-x-4 mb-4">
                      <div className="bg-blue-50 rounded-md p-2 w-32 h-10 flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-700">Clusters</span>
                      </div>
                      <div className="bg-blue-100 rounded-md p-2 w-32 h-10 flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-700">Notebooks</span>
                      </div>
                      <div className="bg-blue-50 rounded-md p-2 w-32 h-10 flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-700">Jobs</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-md p-4 mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <Terminal className="w-4 h-4 text-indigo-600 mr-2" />
                          <span className="text-sm font-medium">Customer 360 Analysis</span>
                        </div>
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Running</div>
                      </div>
                      
                      <div className="bg-white rounded-md p-3 border border-gray-200 h-48 overflow-hidden font-mono text-xs text-gray-600">
                        <pre className="overflow-x-auto">
                          <code>
                            <span className="text-purple-600">import</span> pyspark.sql.functions <span className="text-purple-600">as</span> F<br/>
                            <span className="text-purple-600">from</span> pyspark.sql.types <span className="text-purple-600">import</span> *<br/><br/>
                            <span className="text-green-600"># Load customer data</span><br/>
                            customer_df = spark.read.format(<span className="text-blue-600">"delta"</span>)<br/>
                            &nbsp;&nbsp;.load(<span className="text-blue-600">"/mnt/data/customers"</span>)<br/><br/>
                            <span className="text-green-600"># Transform data</span><br/>
                            transformed_df = customer_df<br/>
                            &nbsp;&nbsp;.withColumn(<span className="text-blue-600">"full_name"</span>, F.concat(F.col(<span className="text-blue-600">"first_name"</span>), F.lit(<span className="text-blue-600">" "</span>), F.col(<span className="text-blue-600">"last_name"</span>)))<br/>
                            &nbsp;&nbsp;.withColumn(<span className="text-blue-600">"active_days"</span>, F.datediff(F.current_date(), F.col(<span className="text-blue-600">"signup_date"</span>)))<br/><br/>
                          </code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Active Clusters</div>
                        <div className="text-lg font-bold text-gray-900">4</div>
                        <div className="text-xs text-gray-500">24 cores total</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Jobs Today</div>
                        <div className="text-lg font-bold text-gray-900">12</div>
                        <div className="text-xs text-green-600">All succeeded</div>
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
              Databricks <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Maximize your Databricks investment with our specialized consulting and implementation services for data, ML, and AI workflows.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Lakehouse Architecture</h3>
                  <p className="text-gray-600">Design and implement modern data lakehouse solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Delta Lake Optimization</h3>
                  <p className="text-gray-600">Leverage Delta Lake for reliable data lakes at scale</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">MLflow Integration</h3>
                  <p className="text-gray-600">Track experiments and manage models with MLflow</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Workflow Automation</h3>
                  <p className="text-gray-600">Orchestrate complex data processing with Databricks Jobs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DatabricksServicesSection;
