
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tabData = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    content: {
      heading: "Artificial Intelligence",
      description: "Learn how to leverage AI technologies to transform your business processes and create intelligent applications.",
      cta: "Explore AI services",
      image: "/lovable-uploads/8304d312-8378-42a5-9ec0-699b6f66c884.png"
    }
  },
  {
    id: "data",
    title: "Data",
    content: {
      heading: "Data",
      description: "Discover strategies to harness your data assets, implement analytics solutions, and drive data-informed decision making.",
      cta: "View data solutions",
      image: "/lovable-uploads/8304d312-8378-42a5-9ec0-699b6f66c884.png"
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build with the help of our<br />Exceptional Services
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
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {tab.content.heading}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {tab.content.description}
                      </p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                      >
                        {tab.content.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </motion.div>
                  </div>
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
