
import { motion } from "framer-motion";
import { BrainCircuit, UserCog, Layers, Headset, Database, GitBranch, Server, Cloud, Mic, BookOpen, Bot } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

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
          icon: BookOpen,
          heading: "Custom RAG Development",
          description: "Build tailored Retrieval Augmented Generation systems that leverage your proprietary data to provide accurate, contextual AI responses."
        },
        {
          icon: Bot,
          heading: "Agent Development",
          description: "Create intelligent AI agents that can perform complex tasks and make autonomous decisions for your business."
        },
        {
          icon: Mic,
          heading: "Voice AI Development",
          description: "Implement cutting-edge voice recognition and synthesis solutions for natural and engaging audio interactions."
        },
        {
          icon: Layers,
          heading: "Business Focused Model Finetuning",
          description: "Customize and optimize large language models to meet your specific business requirements and industry use cases."
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
      services: [
        {
          icon: Cloud,
          heading: "Cloud Migrations",
          description: "Expert guidance and implementation for seamless cloud migrations, ensuring minimal disruption and maximum efficiency."
        },
        {
          icon: Server,
          heading: "App-stack Enhancements",
          description: "Modernize your application stack with cloud-native technologies and best practices for improved scalability and performance."
        }
      ],
      cta: "Learn about cloud services"
    }
  }
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Build with the help of our<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Exceptional Services
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
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
            <div className="flex justify-center mb-6 md:mb-10 overflow-x-auto pb-2 scrollbar-none">
              <TabsList className="bg-gray-100 p-1 rounded-full h-auto flex-nowrap">
                {tabData.map((tab) => (
                  <TabsTrigger 
                    key={tab.id}
                    value={tab.id}
                    className="px-3 md:px-6 py-2 rounded-full text-xs md:text-sm whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    {isMobile ? tab.title.split(' ')[0] : tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="mt-6 md:mt-8 border-t border-gray-200 pt-8">
              {tabData.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0">
                  {tab.content.services && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
                    >
                      {tab.content.services.map((service, index) => (
                        <motion.div
                          key={service.heading}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="p-4 md:p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          <service.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mb-3 md:mb-4" />
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                            {service.heading}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {service.description}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
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
