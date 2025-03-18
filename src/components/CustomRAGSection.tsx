
import { motion } from "framer-motion";
import { Database, Search, FileText, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CustomRAGSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom <span className="text-blue-600">RAG Development</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Build retrieval-augmented generation systems that combine the power of large language models with your organization's proprietary knowledge and data.
            </p>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <Database className="h-6 w-6" />,
                  title: "Knowledge Integration",
                  description: "Connect your enterprise data sources, documents, and knowledge bases to AI models."
                },
                {
                  icon: <Search className="h-6 w-6" />,
                  title: "Semantic Search",
                  description: "Implement advanced vector search to find contextually relevant information."
                },
                {
                  icon: <FileText className="h-6 w-6" />,
                  title: "Document Processing",
                  description: "Automatically process and index various document formats and structures."
                },
                {
                  icon: <Workflow className="h-6 w-6" />,
                  title: "RAG Pipeline Design",
                  description: "Custom retrieval-augmentation workflows optimized for your use cases."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link to="/services-interest-form">
                TALK TO AN EXPERT
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-blue-100 p-2 rounded-lg mr-2">
                  <Database className="h-5 w-5 text-blue-600" />
                </span>
                RAG System Architecture
              </h3>
              
              <div className="relative">
                {/* RAG Architecture Visualization */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Data Sources */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold mb-2 text-gray-900">Data Sources</div>
                    <div className="grid grid-cols-4 gap-2">
                      {["Documents", "Databases", "APIs", "Knowledge Bases"].map((source, idx) => (
                        <div key={idx} className="bg-blue-50 p-2 rounded text-xs text-center text-gray-700">
                          {source}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Processing Pipeline with Arrow */}
                  <div className="flex justify-center">
                    <svg height="30" width="20">
                      <polygon points="10,0 0,10 20,10" className="fill-blue-300" />
                      <rect x="8" y="10" width="4" height="20" className="fill-blue-300" />
                    </svg>
                  </div>
                  
                  {/* Document Processing */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                    <div className="font-semibold mb-2 text-gray-900">Document Processing</div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-white p-2 rounded text-xs text-center text-gray-700">
                        Chunking & Embedding Generation
                      </div>
                      <div className="bg-white p-2 rounded text-xs text-center text-gray-700">
                        Metadata Extraction & Indexing
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <svg height="30" width="20">
                      <rect x="8" y="0" width="4" height="20" className="fill-blue-300" />
                      <polygon points="10,30 0,20 20,20" className="fill-blue-300" />
                    </svg>
                  </div>
                  
                  {/* Vector Store */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold mb-2 text-gray-900">Vector Database</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 p-2 rounded text-xs text-center text-gray-700">
                        Document Vectors
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-xs text-center text-gray-700">
                        Semantic Index
                      </div>
                    </div>
                  </div>
                  
                  {/* Bidirectional Arrow */}
                  <div className="flex justify-center">
                    <svg height="40" width="20">
                      <rect x="8" y="5" width="4" height="30" className="fill-blue-300" />
                      <polygon points="10,0 0,10 20,10" className="fill-blue-300" />
                      <polygon points="10,40 0,30 20,30" className="fill-blue-300" />
                    </svg>
                  </div>
                  
                  {/* LLM Integration */}
                  <div className="border border-blue-200 bg-blue-100 rounded-lg p-4">
                    <div className="font-semibold mb-2 text-gray-900">LLM Integration</div>
                    <div className="bg-white p-2 rounded text-xs text-center text-gray-700">
                      Query Understanding & Response Generation
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

export default CustomRAGSection;
