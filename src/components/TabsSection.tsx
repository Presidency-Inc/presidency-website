import { motion } from "framer-motion";
import { BrainCircuit, UserCog, Layers, Headset, Database, GitBranch, Server, Cloud } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tabData = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    content: {
      services: [
        {
          icon: BrainCircuit,
          heading: "Full Stack AI Engineering",
          description: "We specialize in AI from backend to frontend, enhancing automation, personalization, and problem-solving for your business needs."
        },
        {
          icon: UserCog,
          heading: "Agent Development",
          description: "Create intelligent AI agents that can perform complex tasks and make autonomous decisions for your business."
        },
        {
          icon: Layers,
          heading: "Finetuning Frontier Models",
          description: "Customize and optimize large language models to meet your specific business requirements and use cases."
        },
        {
          icon: Headset,
          heading: "Customer Engagement",
          description: "Implement AI-powered solutions to enhance customer interactions and provide personalized experiences."
        }
      ],
      cta: "Explore AI services"
    }
  },
  {
    id: "data",
    title: "Data",
    content: {
      services: [
        {
          icon: Database,
          heading: "Enterprise ETL",
          description: "Extract, transform, and load data efficiently across your organization with our enterprise-grade ETL solutions."
        },
        {
          icon: GitBranch,
          heading: "Pipeline Development",
          description: "Build robust data pipelines that ensure smooth and reliable data flow throughout your infrastructure."
        },
        {
          icon: Server,
          heading: "Data Infrastructure Setup",
          description: "Establish scalable and secure data infrastructure that forms the foundation of your data-driven operations."
        },
        {
          icon: Cloud,
          heading: "Databricks Services",
          description: "Expert consulting and implementation services for Databricks platform, helping you leverage the full potential of unified analytics."
        }
      ],
      cta: "View data solutions"
    }
  },
  {
    id: "cloud",
    title: "Cloud Modernization",
    content: {
      heading: "Cloud Modernization",
      description: "Access expertise on cloud migration, infrastructure optimization, and modern cloud-native application development.",
      cta: "Learn about cloud services",
      image: "/lovable-uploads/8304d312-8378-42a5-9ec0-699b6f66c884.png"
    }
  }
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build with the help of our<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Exceptional Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our goal is to ensure top-notch quality in the services we offer, while providing a distinct 
            price advantage and exceptional value to our customers. With our customer-centric motto, 
            it's easy to see why our customers love us.
          </p>
        </motion.div>

        <div className="mb-16">
          <Tabs 
            defaultValue="ai" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-10">
              <TabsList className="bg-gray-100 p-1 rounded-full h-auto">
                {tabData.map((tab) => (
                  <TabsTrigger 
                    key={tab.id}
                    value={tab.id}
                    className="px-6 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              {tabData.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0">
                  {tab.id === 'ai' && tab.content.services && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                      {tab.content.services.map((service, index) => (
                        <motion.div
                          key={service.heading}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          <service.icon className="w-8 h-8 text-blue-600 mb-4" />
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.heading}
                          </h3>
                          <p className="text-gray-600">
                            {service.description}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                  {tab.id === 'data' && tab.content.services && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                      {tab.content.services.map((service, index) => (
                        <motion.div
                          key={service.heading}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          <service.icon className="w-8 h-8 text-blue-600 mb-4" />
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.heading}
                          </h3>
                          <p className="text-gray-600">
                            {service.description}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                  {tab.id === 'cloud' && (
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                      <motion.div 
                        className="rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img 
                          src={tab.content.image} 
                          alt={tab.content.heading}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {tab.content.heading}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          {tab.content.description}
                        </p>
                      </motion.div>
                    </div>
                  )}
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
