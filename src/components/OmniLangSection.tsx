
import { motion } from "framer-motion";
import { Code, Check, ArrowRight, Braces } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const OmniLangSection = () => {
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
              <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center text-white mr-3">
                        <Code className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold">OmniLang Editor</h3>
                    </div>
                    <div className="flex space-x-2">
                      <span className="h-3 w-3 rounded-full bg-red-500"></span>
                      <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                      <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="transform" className="w-full">
                    <div className="border-b border-gray-200">
                      <TabsList className="bg-gray-100 w-full justify-start rounded-none px-4 pt-2 h-auto">
                        <TabsTrigger 
                          value="transform" 
                          className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:shadow-none rounded-t-md rounded-b-none px-4"
                        >
                          transform.omni
                        </TabsTrigger>
                        <TabsTrigger 
                          value="validate" 
                          className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:shadow-none rounded-t-md rounded-b-none px-4"
                        >
                          validate.omni
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    
                    <TabsContent value="transform" className="p-0 mt-0">
                      <div className="flex">
                        <div className="bg-gray-700 py-3 px-2 text-right text-xs text-gray-400 font-mono w-12">
                          {Array.from({ length: 15 }, (_, i) => (
                            <div key={i} className="mb-1">{i + 1}</div>
                          ))}
                        </div>
                        <div className="bg-gray-800 py-3 pr-4 flex-1 overflow-x-auto font-mono text-sm">
                          <pre className="text-white">
                            <code>
                              <span className="text-indigo-400">import</span>
                              <span className="text-white"> {`{ transform, join, filter, aggregate }`} </span>
                              <span className="text-indigo-400">from</span>
                              <span className="text-white"> </span>
                              <span className="text-yellow-300">"omniflow"</span>
                              <span className="text-white">;</span>
                              <br/><br/>
                              <span className="text-purple-400">// Define the transformation pipeline</span>
                              <br/>
                              <span className="text-indigo-400">pipeline</span>
                              <span className="text-white"> CustomerOrdersReport </span>
                              <span className="text-white">{`{`}</span>
                              <br/>
                              <br/>
                              <span className="text-white pl-4">// Join customers with their orders</span>
                              <br/>
                              <span className="pl-4 text-blue-400">join</span>
                              <span className="text-white">(</span>
                              <span className="text-yellow-300">"customers"</span>
                              <span className="text-white">, </span>
                              <span className="text-yellow-300">"orders"</span>
                              <span className="text-white">, </span>
                              <span className="text-white">{`{ on: `}</span>
                              <span className="text-yellow-300">"customer_id"</span>
                              <span className="text-white">, type: </span>
                              <span className="text-yellow-300">"left"</span>
                              <span className="text-white"> {`}`});</span>
                              <br/><br/>
                              <span className="pl-4 text-white">// Filter active orders from last month</span>
                              <br/>
                              <span className="pl-4 text-blue-400">filter</span>
                              <span className="text-white">(row {`=>`} row.status == </span>
                              <span className="text-yellow-300">"completed"</span>
                              <span className="text-white"> && </span>
                              <br/>
                              <span className="pl-12 text-blue-400">date</span>
                              <span className="text-white">(row.order_date).isAfter(</span>
                              <span className="text-yellow-300">"2023-01-01"</span>
                              <span className="text-white">));</span>
                              <br/><br/>
                              <span className="pl-4 text-white">// Group by customer and calculate aggregates</span>
                              <br/>
                              <span className="pl-4 text-blue-400">aggregate</span>
                              <span className="text-white">({`{`}</span>
                              <br/>
                              <span className="pl-8 text-white">groupBy: [</span>
                              <span className="text-yellow-300">"customer_name"</span>
                              <span className="text-white">, </span>
                              <span className="text-yellow-300">"customer_region"</span>
                              <span className="text-white">],</span>
                              <br/>
                              <span className="pl-8 text-white">measures: {`{`}</span>
                              <br/>
                              <span className="pl-12 text-white">total_spent: sum(</span>
                              <span className="text-yellow-300">"order_amount"</span>
                              <span className="text-white">),</span>
                              <br/>
                              <span className="pl-12 text-white">avg_order: avg(</span>
                              <span className="text-yellow-300">"order_amount"</span>
                              <span className="text-white">),</span>
                              <br/>
                              <span className="pl-12 text-white">order_count: count()</span>
                              <br/>
                              <span className="pl-8 text-white">{`}`}</span>
                              <br/>
                              <span className="pl-4 text-white">{`}`});</span>
                              <br/><br/>
                              <span className="text-white">{`}`}</span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      
                      <div className="bg-gray-100 p-3 flex justify-between items-center border-t border-gray-200">
                        <div className="text-xs text-gray-500">Syntax: Valid</div>
                        <div className="flex items-center">
                          <button className="bg-indigo-500 text-white px-3 py-1 text-xs rounded flex items-center">
                            <Check className="mr-1 h-3 w-3" /> Run
                          </button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="validate" className="p-0 mt-0">
                      <div className="h-64 bg-gray-800 p-4 font-mono text-sm text-gray-300">
                        <span className="text-indigo-400">import</span> {`{ validate, schema, rules }`} <span className="text-indigo-400">from</span> <span className="text-yellow-300">"omniflow"</span>;
                        <br/><br/>
                        <span className="text-purple-400">// Data validation rules</span>
                        <br/>
                        <span className="text-indigo-400">validator</span> CustomerDataValidator {`{`}
                        <br/><br/>
                        {`  `}<span className="text-blue-400">schema</span>({`{`}
                        <br/>
                        {`    `}customer_id: <span className="text-yellow-300">"string"</span>.required(),
                        <br/>
                        {`    `}customer_name: <span className="text-yellow-300">"string"</span>.min(2).max(100),
                        <br/>
                        {`    `}email: <span className="text-yellow-300">"string"</span>.email().required(),
                        <br/>
                        {`    `}age: <span className="text-yellow-300">"number"</span>.min(18)
                        <br/>
                        {`  `}{`}`});
                        <br/><br/>
                        {`  `}<span className="text-blue-400">rules</span>({`{`}
                        <br/>
                        {`    `}unique: [<span className="text-yellow-300">"customer_id"</span>, <span className="text-yellow-300">"email"</span>],
                        <br/>
                        {`    `}custom: [
                        <br/>
                        {`      `}row {`=>`} row.status !== <span className="text-yellow-300">"inactive"</span> || row.notes,
                        <br/>
                        {`      `}<span className="text-yellow-300">"Inactive customers must have notes"</span>
                        <br/>
                        {`    `}]
                        <br/>
                        {`  `}{`}`});
                        <br/><br/>
                        {`}`}
                      </div>
                      
                      <div className="bg-gray-100 p-3 flex justify-between items-center border-t border-gray-200">
                        <div className="text-xs text-gray-500">Syntax: Valid</div>
                        <div className="flex items-center">
                          <button className="bg-indigo-500 text-white px-3 py-1 text-xs rounded flex items-center">
                            <Check className="mr-1 h-3 w-3" /> Run
                          </button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
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
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">OmniLang</span> Transformation Language
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Expand the solution space of your migration problems by using OmniLang, our purpose-built language for data transformations.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg text-indigo-600 mr-4">
                    <Braces className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Intuitive Syntax</h3>
                    <p className="text-gray-600">
                      OmniLang combines the power of SQL with the flexibility of modern programming languages, making it accessible to both developers and data analysts.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="text-indigo-500 mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Declarative data transformation pipelines</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-indigo-500 mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Built-in data validation and quality checks</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-indigo-500 mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Automatic optimization for performance</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-indigo-500 mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Error handling and debugging tools</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-indigo-500 mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">Extensible with custom functions and connectors</span>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mt-8">
                <h3 className="font-semibold text-gray-900 mb-3">Use Cases</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-indigo-600 font-medium mb-1">Data Migration</div>
                    <p className="text-sm text-gray-600">Transfer data between different database systems while handling schema changes and data type conversions.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-indigo-600 font-medium mb-1">Data Cleansing</div>
                    <p className="text-sm text-gray-600">Standardize, deduplicate, and validate data before loading it into target systems.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-indigo-600 font-medium mb-1">Real-time Transformations</div>
                    <p className="text-sm text-gray-600">Process streaming data with complex business logic at scale.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-indigo-600 font-medium mb-1">Analytics Preparation</div>
                    <p className="text-sm text-gray-600">Reshape data into formats optimized for business intelligence and reporting tools.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center pt-4">
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-700 transition-colors">
                  Explore OmniLang Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OmniLangSection;
