
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tabData = [
  {
    id: "product",
    title: "Product documentation",
    content: {
      heading: "Product documentation",
      description: "Learn how to spin up a virtual machine, get started with block storage, and more with in-depth documentation.",
      cta: "Read the docs",
      image: "/lovable-uploads/8304d312-8378-42a5-9ec0-699b6f66c884.png"
    }
  },
  {
    id: "business",
    title: "Business advice",
    content: {
      heading: "Business advice",
      description: "Discover strategies to scale your business, optimize costs, and make the most of your technology investments.",
      cta: "Explore resources",
      image: "/lovable-uploads/8304d312-8378-42a5-9ec0-699b6f66c884.png"
    }
  },
  {
    id: "technical",
    title: "Technical expertise",
    content: {
      heading: "Technical expertise",
      description: "Access tutorials and guides on AI implementation, data operations, and advanced technology integration.",
      cta: "View tutorials",
      image: "/lovable-uploads/8304d312-8378-42a5-9ec0-699b6f66c884.png"
    }
  }
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("product");

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
            Learn from the experts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you want to learn about funding your business, installing Linux on Ubuntu,
            or getting started on DigitalOcean, we have the educational resources for you.
          </p>
        </motion.div>

        <div className="mb-16">
          <Tabs 
            defaultValue="product" 
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
