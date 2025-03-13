import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    title: "Multi Channel Experience",
    description: "Provide seamless cross-platform experiences on web, iOS, Android, desktops, voice, and beyond.",
    color: "bg-blue-100",
    borderColor: "border-blue-300",
    hoverColor: "hover:border-blue-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    )
  },
  {
    title: "Context Management System",
    description: "Efficiently manage and utilize contextual information to enhance AI interactions and decision-making processes.",
    color: "bg-indigo-100",
    borderColor: "border-indigo-300",
    hoverColor: "hover:border-indigo-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" y2="12"/></svg>
    )
  },
  {
    title: "Business Logic Orchestration",
    description: "Integrate your business logic and AI with the appropriate data, tools, and command sequences.",
    color: "bg-violet-100",
    borderColor: "border-violet-300",
    hoverColor: "hover:border-violet-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
    )
  },
  {
    title: "AIOps Platform",
    description: "Streamline AI operations with automated monitoring, scaling, and management of AI infrastructure.",
    color: "bg-purple-100",
    borderColor: "border-purple-300",
    hoverColor: "hover:border-purple-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
    )
  },
  {
    title: "Model Hosting & Finetuning",
    description: "Deploy models in the cloud or on-premises and fine-tune them to meet your specific business requirements.",
    color: "bg-cyan-100",
    borderColor: "border-cyan-300",
    hoverColor: "hover:border-cyan-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
    )
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

const MultiChannelSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // Default to first card

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
                        <span>Reduce time-to-market for AI solutions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Scale seamlessly as your needs grow</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90"
                size="lg"
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

export default MultiChannelSection;
