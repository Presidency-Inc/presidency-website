
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card } from "@/components/ui/card";

const cards = [
  {
    title: "Multi Channel Experience",
    description: "Provide seamless cross-platform experiences on web, iOS, Android, desktops, voice, and beyond.",
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    hoverColor: "hover:border-blue-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    )
  },
  {
    title: "Context Management System",
    description: "Efficiently manage and utilize contextual information to enhance AI interactions and decision-making processes.",
    color: "bg-indigo-50",
    borderColor: "border-indigo-200",
    hoverColor: "hover:border-indigo-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" y2="12"/></svg>
    )
  },
  {
    title: "Business Logic Orchestration",
    description: "Integrate your business logic and AI with the appropriate data, tools, and command sequences.",
    color: "bg-violet-50",
    borderColor: "border-violet-200",
    hoverColor: "hover:border-violet-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
    )
  },
  {
    title: "AIOps Platform",
    description: "Streamline AI operations with automated monitoring, scaling, and management of AI infrastructure.",
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    hoverColor: "hover:border-purple-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
    )
  },
  {
    title: "Model Hosting & Finetuning",
    description: "Deploy models in the cloud or on-premises and fine-tune them to meet your specific business requirements.",
    color: "bg-cyan-50",
    borderColor: "border-cyan-200",
    hoverColor: "hover:border-cyan-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
    )
  }
];

const StackedCard = ({ card, index, selectedIndex, onClick, total }) => {
  const isSelected = selectedIndex === index;
  const baseZIndex = total - index;
  const baseOffset = index * 15;
  const selectedOffset = 40;
  
  return (
    <motion.div
      initial={{ y: baseOffset, zIndex: baseZIndex }}
      animate={{ 
        y: isSelected ? selectedOffset + baseOffset : baseOffset,
        zIndex: isSelected ? 50 : baseZIndex,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }}
      className={`absolute w-full cursor-pointer shadow-lg transition-all ${card.borderColor} border ${card.hoverColor} ${card.color}`}
      onClick={onClick}
      style={{ 
        borderRadius: "8px",
        width: "calc(100% - 10px)",
        left: "5px",
        opacity: isSelected ? 1 : index === 0 ? 1 : 0.9 - (index * 0.15),
      }}
    >
      <Card className="bg-white/90 backdrop-blur-sm overflow-hidden border-0">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className={`p-2 rounded-lg ${card.color} flex-shrink-0`}>
              {card.icon}
            </div>
            <h3 className="font-semibold text-xl">{card.title}</h3>
          </div>
          
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 mt-2"
            >
              {card.description}
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

const MultiChannelSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Leapfrog Platform <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Stack</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our comprehensive platform provides the tools and services you need to build and scale AI solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stacked Card Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="relative h-[400px] w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl"></div>
              
              <div className="relative h-full flex items-center justify-center">
                <div className="w-full max-w-md relative h-64">
                  {cards.map((card, index) => (
                    <StackedCard
                      key={index}
                      card={card}
                      index={index}
                      total={cards.length}
                      selectedIndex={selectedCardIndex}
                      onClick={() => setSelectedCardIndex(prev => prev === index ? null : index)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-blue-100 rounded-full opacity-30"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-indigo-100 rounded-full opacity-40"></div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              {selectedCardIndex !== null 
                ? cards[selectedCardIndex].title 
                : "Comprehensive AI Platform"}
            </h3>
            
            <div className="h-24">
              {selectedCardIndex !== null ? (
                <motion.p
                  key={selectedCardIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg text-gray-600"
                >
                  {cards[selectedCardIndex].description}
                </motion.p>
              ) : (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg text-gray-600"
                >
                  Click on any layer of our platform stack to learn more about each component.
                  Each layer is designed to work seamlessly together while also providing value individually.
                </motion.p>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {selectedCardIndex === null && cards.slice(0, 4).map((card, index) => (
                <HoverCard key={index} openDelay={100} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div className="flex items-start space-x-3 p-3 rounded-lg cursor-pointer hover:bg-white transition-colors">
                      <div className={`p-2 rounded-lg ${card.color} flex-shrink-0`}>
                        {card.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{card.title}</h4>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">{card.title}</h4>
                      <p className="text-sm text-gray-500">{card.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
            
            <div className="pt-6">
              <Button 
                className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90"
                size="lg"
              >
                Explore Platform Architecture
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelSection;
