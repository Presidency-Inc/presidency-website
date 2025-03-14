
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    title: "Enterprise ETL Framework",
    description: "Simplify data integration by automating tasks, providing teams with consistent, usable data.",
    color: "bg-blue-100",
    borderColor: "border-blue-300",
    hoverColor: "hover:border-blue-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"/><path d="M2 8v11a2 2 0 0 0 2 2h14"/></svg>
    ),
    scrollToId: "enterprise-etl"
  },
  {
    title: "Source & Target Integrations",
    description: "Connect to any source or target with pre-built connectors and extensible APIs for seamless data flow.",
    color: "bg-indigo-100",
    borderColor: "border-indigo-300",
    hoverColor: "hover:border-indigo-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
    ),
    scrollToId: "source-target"
  },
  {
    title: "Multimodal Data Pipelines",
    description: "Process any data type with unified pipelines that handle structured, unstructured, and streaming data.",
    color: "bg-violet-100",
    borderColor: "border-violet-300",
    hoverColor: "hover:border-violet-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    scrollToId: "multimodal-data"
  },
  {
    title: "Governance & Observability",
    description: "Monitor and manage your data pipelines with comprehensive governance and observability tools.",
    color: "bg-cyan-100",
    borderColor: "border-cyan-300",
    hoverColor: "hover:border-cyan-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    ),
    scrollToId: "governance"
  }
];

const CardRow = ({ card, isActive, onClick }) => {
  return (
    <div 
      className={`p-4 rounded-lg mb-3 cursor-pointer transition-all duration-300 ${
        isActive 
          ? `${card.color} ${card.borderColor} border-2 shadow-md` 
          : 'hover:bg-gray-50 border border-gray-100'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className={`p-2 rounded-lg ${card.color} mr-3 flex-shrink-0`}>
          {card.icon}
        </div>
        <h3 className="font-semibold">{card.title}</h3>
      </div>
    </div>
  );
};

const OmniflowFeaturesSelector = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // Default to first card

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            {cards.map((card, index) => (
              <CardRow
                key={index}
                card={card}
                isActive={selectedCardIndex === index}
                onClick={() => setSelectedCardIndex(index)}
              />
            ))}
          </div>
          
          <div className="lg:col-span-7">
            <motion.div
              key={selectedCardIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-sm h-full"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${cards[selectedCardIndex].color} mr-4`}>
                  {cards[selectedCardIndex].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {cards[selectedCardIndex].title}
                </h3>
              </div>
              
              <div className="mb-8">
                <p className="text-lg text-gray-600">
                  {cards[selectedCardIndex].description}
                </p>
                
                <Card className={`mt-6 border ${cards[selectedCardIndex].borderColor}`}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Key Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Seamlessly integrate with existing systems</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Reduce time-to-market for data solutions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Scale seamlessly as your data needs grow</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90"
                size="lg"
                onClick={() => handleScrollToSection(cards[selectedCardIndex].scrollToId)}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmniflowFeaturesSelector;
