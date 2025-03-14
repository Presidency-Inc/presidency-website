
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { BarChart, FileText, FileCode, Workflow } from "lucide-react";

const AnySourceTargetSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isMobile && 'mobile-reverse'}`}>
          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-sm">
              <div className="relative">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-blue-500 rounded-md flex items-center justify-center text-white mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg">Multimodal Data Pipeline</h3>
                  </div>
                  
                  {/* Data Pipeline Visualization */}
                  <div className="space-y-6">
                    {/* Input Data Types */}
                    <div className="grid grid-cols-4 gap-2">
                      <div className="bg-blue-50 p-3 rounded-md flex flex-col items-center justify-center text-center">
                        <FileText className="h-6 w-6 text-blue-500 mb-2" />
                        <span className="text-xs font-medium">Text</span>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md flex flex-col items-center justify-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500 mb-2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span className="text-xs font-medium">Images</span>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md flex flex-col items-center justify-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500 mb-2">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                        </svg>
                        <span className="text-xs font-medium">Audio</span>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md flex flex-col items-center justify-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500 mb-2">
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                        <span className="text-xs font-medium">Video</span>
                      </div>
                    </div>
                    
                    {/* Processing Flow */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-1 bg-blue-100 relative">
                          <div className="absolute inset-0 bg-blue-500 w-3/4"></div>
                        </div>
                      </div>
                      <div className="relative flex justify-between">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2">1</div>
                          <span className="text-xs">Ingest</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2">2</div>
                          <span className="text-xs">Transform</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2">3</div>
                          <span className="text-xs">Enrich</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2">4</div>
                          <span className="text-xs">Analyze</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white mb-2">5</div>
                          <span className="text-xs">Deliver</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pipeline Code */}
                    <div className="bg-gray-900 p-4 rounded-md text-gray-100 text-sm font-mono">
                      <div><span className="text-pink-400">pipeline</span>.<span className="text-blue-400">from</span>(<span className="text-green-400">"s3://data-lake"</span>)</div>
                      <div>&nbsp;&nbsp;.<span className="text-blue-400">transform</span>(<span className="text-pink-400">DataTransformers</span>.<span className="text-blue-400">normalize</span>())</div>
                      <div>&nbsp;&nbsp;.<span className="text-blue-400">enrich</span>(<span className="text-pink-400">EnrichmentService</span>.<span className="text-blue-400">metadata</span>())</div>
                      <div>&nbsp;&nbsp;.<span className="text-blue-400">analyze</span>(<span className="text-pink-400">ML</span>.<span className="text-blue-400">sentiment</span>())</div>
                      <div>&nbsp;&nbsp;.<span className="text-blue-400">to</span>(<span className="text-green-400">"bigquery://analytics"</span>)</div>
                    </div>
                    
                    {/* Status */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Processing Rate</div>
                        <div className="text-xl font-bold text-gray-900">243 MB/s</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Success Rate</div>
                        <div className="text-xl font-bold text-gray-900">99.7%</div>
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
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              Multimodal <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Data Pipelines</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Process any data type with unified pipelines that handle structured, unstructured, and streaming data with the same simplified interface.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <BarChart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Unified Processing</h3>
                  <p className="text-gray-600">Handle all data types with a single processing framework</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-cyan-100 p-2 rounded-lg text-cyan-600 mr-4">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Content Extraction</h3>
                  <p className="text-gray-600">Extract structured data from unstructured content</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg text-indigo-600 mr-4">
                  <FileCode className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Code-First Design</h3>
                  <p className="text-gray-600">Define pipelines in code for version control and CI/CD</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 p-2 rounded-lg text-purple-600 mr-4">
                  <Workflow className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Parallel Processing</h3>
                  <p className="text-gray-600">Scale horizontally for high-throughput workloads</p>
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
