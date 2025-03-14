
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ShieldCheck, Eye, PieChart, TrendingUp } from "lucide-react";

const OmniLangSection = () => {
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
              Governance & <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Observability</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Monitor, secure, and govern your data pipelines with comprehensive tools for visibility, security, and compliance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-lg text-emerald-600 mr-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Data Security</h3>
                  <p className="text-gray-600">End-to-end encryption and access controls</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-100 p-2 rounded-lg text-teal-600 mr-4">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Pipeline Visibility</h3>
                  <p className="text-gray-600">Real-time monitoring and alerting</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg text-green-600 mr-4">
                  <PieChart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Compliance Tools</h3>
                  <p className="text-gray-600">Built-in GDPR, HIPAA, and SOC2 controls</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cost Analytics</h3>
                  <p className="text-gray-600">Track and optimize resource usage</p>
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
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-3xl shadow-sm">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6 border-b pb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-600 rounded-md flex items-center justify-center text-white mr-3">
                      <Eye className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-lg">Governance Dashboard</h3>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Active</div>
                </div>
                
                <div className="space-y-6">
                  {/* Observability Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="text-xs text-gray-500 mb-1">Pipeline Health</div>
                      <div className="text-xl font-bold text-green-600">96%</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="text-xs text-gray-500 mb-1">Data Quality</div>
                      <div className="text-xl font-bold text-emerald-600">92%</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="text-xs text-gray-500 mb-1">Compliance</div>
                      <div className="text-xl font-bold text-teal-600">100%</div>
                    </div>
                  </div>
                  
                  {/* Security Status */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium mb-3">Security Status</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Encryption</span>
                          <span className="text-green-600 font-medium">Active</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Access Controls</span>
                          <span className="text-green-600 font-medium">Active</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Vulnerability Scan</span>
                          <span className="text-yellow-600 font-medium">87%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{width: '87%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Audit Log */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Recent Audit Log</h4>
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-gray-50 text-xs grid grid-cols-4 gap-2 p-2 border-b">
                        <div className="font-medium">Time</div>
                        <div className="font-medium">User</div>
                        <div className="font-medium">Action</div>
                        <div className="font-medium">Status</div>
                      </div>
                      {[
                        { time: "10:42", user: "admin", action: "Pipeline Update", status: "Success" },
                        { time: "09:37", user: "system", action: "Security Scan", status: "Success" },
                        { time: "08:15", user: "dataops", action: "Access Request", status: "Approved" }
                      ].map((item, i) => (
                        <div key={i} className="text-xs grid grid-cols-4 gap-2 p-2 border-b last:border-b-0">
                          <div>{item.time}</div>
                          <div>{item.user}</div>
                          <div>{item.action}</div>
                          <div className="text-green-600">{item.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Compliance Badges */}
                  <div className="flex justify-around">
                    <div className="bg-gray-50 p-2 rounded-md flex items-center justify-center flex-col">
                      <div className="text-teal-600 font-bold text-xs mb-1">GDPR</div>
                      <div className="text-green-600">✓</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-md flex items-center justify-center flex-col">
                      <div className="text-teal-600 font-bold text-xs mb-1">HIPAA</div>
                      <div className="text-green-600">✓</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-md flex items-center justify-center flex-col">
                      <div className="text-teal-600 font-bold text-xs mb-1">SOC2</div>
                      <div className="text-green-600">✓</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-md flex items-center justify-center flex-col">
                      <div className="text-teal-600 font-bold text-xs mb-1">ISO27001</div>
                      <div className="text-green-600">✓</div>
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

export default OmniLangSection;
