import { motion } from "framer-motion";
import { Brain, MessageSquareCode, Bot, Workflow } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const agentTypes = [
  {
    id: "customer-service",
    title: "Customer Service Agents",
    description: "Intelligent agents that handle customer inquiries and support tickets 24/7.",
    features: [
      "Multilingual support",
      "Integration with CRM systems",
      "Sentiment analysis",
      "Seamless human handoff",
      "Ticket prioritization"
    ],
    icon: <MessageSquareCode className="h-5 w-5" />
  },
  {
    id: "data-analysis",
    title: "Data Analysis Agents",
    description: "Specialized agents that process, analyze, and visualize complex data sets.",
    features: [
      "Custom data processing workflows",
      "Report generation",
      "Anomaly detection",
      "Trend analysis",
      "Data visualization"
    ],
    icon: <Brain className="h-5 w-5" />
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Intelligent agents that automate complex business processes across your organization.",
    features: [
      "Process automation",
      "Cross-system orchestration",
      "Decision support",
      "Compliance monitoring",
      "Performance tracking"
    ],
    icon: <Workflow className="h-5 w-5" />
  }
];

const AgentDevelopmentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Agent</span> Development
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Custom AI agents that automate tasks, enhance decision-making, and transform how your business operates.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-600 text-white p-8 rounded-full w-32 h-32 flex items-center justify-center"
          >
            <Bot className="h-16 w-16" />
          </motion.div>
        </div>

        <Tabs defaultValue="customer-service" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-blue-50">
              {agentTypes.map((type) => (
                <TabsTrigger 
                  key={type.id}
                  value={type.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    {type.icon}
                    <span className="hidden md:inline">{type.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {agentTypes.map((type) => (
            <TabsContent key={type.id} value={type.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-600">{type.title}</CardTitle>
                      <CardDescription className="text-base">{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {type.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <div className="h-2 w-2 rounded-full bg-blue-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-lg font-semibold mb-4">Agent Workflow</div>
                  <div className="space-y-4">
                    {[
                      {label: "Define Objectives", desc: "Identify specific business problems and goals"},
                      {label: "Design Agent Architecture", desc: "Create the optimal structure and capabilities"},
                      {label: "Implement & Train", desc: "Develop and train the agent on your specific domain"},
                      {label: "Integrate & Deploy", desc: "Connect with your existing systems"},
                      {label: "Monitor & Improve", desc: "Continuously enhance performance"}
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                        className="flex gap-4 items-start"
                      >
                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{step.label}</div>
                          <div className="text-sm text-gray-600">{step.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white" 
            size="lg" 
            asChild
          >
            <Link to="/services-interest-form">
              Talk to an Expert
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgentDevelopmentSection;
