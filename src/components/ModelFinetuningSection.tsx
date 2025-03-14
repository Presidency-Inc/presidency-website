
import { motion } from "framer-motion";
import { TrendingUp, Lightbulb, Lock, LineChart, BarChart, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";

const ModelFinetuningSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Business Focused <span className="text-green-600">Model Finetuning</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Customize AI models to your specific business needs, improving accuracy, relevance, and ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <TrendingUp className="h-6 w-6" />,
              title: "Performance Optimization",
              description: "Enhance model performance on your specific tasks and domain knowledge"
            },
            {
              icon: <Lightbulb className="h-6 w-6" />,
              title: "Domain Specialization",
              description: "Train models to understand industry-specific terminology and concepts"
            },
            {
              icon: <Lock className="h-6 w-6" />,
              title: "Secure & Private",
              description: "Fine-tune models with your data while maintaining security and privacy"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 p-6 rounded-xl"
            >
              <div className={cn(
                "w-12 h-12 flex items-center justify-center rounded-lg mb-4",
                "bg-green-100 text-green-600"
              )}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Finetuning Process</h3>
              
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Data Assessment & Collection",
                    description: "We identify the right data needed to improve model performance for your use case"
                  },
                  {
                    number: "02",
                    title: "Custom Training & Validation",
                    description: "We implement specialized training techniques tailored to your business objectives"
                  },
                  {
                    number: "03",
                    title: "Deployment & Integration",
                    description: "Seamlessly integrate the fine-tuned model into your existing workflow"
                  },
                  {
                    number: "04",
                    title: "Continuous Improvement",
                    description: "Ongoing optimization based on real-world performance and feedback"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-xl font-semibold mb-6">Performance Improvement Metrics</h3>
              
              <div className="space-y-5">
                {[
                  {
                    icon: <LineChart className="h-5 w-5 text-green-600" />,
                    metric: "Accuracy",
                    baseline: "76%",
                    finetuned: "94%",
                    improvement: "+18%"
                  },
                  {
                    icon: <BarChart className="h-5 w-5 text-green-600" />,
                    metric: "Response Relevance",
                    baseline: "68%",
                    finetuned: "92%",
                    improvement: "+24%"
                  },
                  {
                    icon: <PieChart className="h-5 w-5 text-green-600" />,
                    metric: "Domain Knowledge",
                    baseline: "54%",
                    finetuned: "89%",
                    improvement: "+35%"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span className="font-medium">{item.metric}</span>
                      </div>
                      <div className="text-green-600 font-semibold">{item.improvement}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500 mb-1">Baseline Model</div>
                        <div className="bg-gray-100 rounded-full h-2.5">
                          <div 
                            className="bg-gray-400 h-2.5 rounded-full" 
                            style={{ width: item.baseline }}
                          ></div>
                        </div>
                        <div className="mt-1 text-right">{item.baseline}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Fine-tuned Model</div>
                        <div className="bg-gray-100 rounded-full h-2.5">
                          <div 
                            className="bg-green-500 h-2.5 rounded-full" 
                            style={{ width: item.finetuned }}
                          ></div>
                        </div>
                        <div className="mt-1 text-right">{item.finetuned}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelFinetuningSection;
