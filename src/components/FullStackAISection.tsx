
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Database, Server, Cloud, Code, 
  Layers, Cpu, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const stackLayers = [
  {
    title: "AI Applications",
    icon: <Layers className="w-6 h-6" />,
    description: "Ready-to-use enterprise AI applications",
    detailedInfo: {
      title: "AI Applications",
      description: "Ready-to-use enterprise AI applications for high-value use cases.",
      components: [
        "AI CRM Suite",
        "Asset Performance Suite",
        "Defense & Intelligence Suite",
        "Financial Services Suite",
        "State & Local Government Suite",
        "Supply Chain Suite",
        "Sustainability Suite"
      ]
    }
  },
  {
    title: "Development Tools",
    icon: <Code className="w-6 h-6" />,
    description: "Tools for AI development and deployment",
    detailedInfo: {
      title: "Development Tools",
      description: "Comprehensive suite of tools to develop, test, and deploy AI solutions.",
      components: [
        "Playground (OpenAI, Humalloop)",
        "APIs/Plugins (Serp, Wolfram, Zapier)",
        "Orchestration (Python, LangChain, LlamaIndex)",
        "Validation (Guardrails, Rebuff, LMQL)"
      ]
    }
  },
  {
    title: "AI Platform",
    icon: <Cpu className="w-6 h-6" />,
    description: "Core platform for AI capabilities",
    detailedInfo: {
      title: "AI Platform",
      description: "Core infrastructure for building and running AI models and applications.",
      components: [
        "Data Pipelines (Databricks, Airflow)",
        "Embedding Models (OpenAI, Cohere, HuggingFace)",
        "Vector Databases (Pinecone, Weaviate)",
        "LLM Cache (Redis, SQLite)",
        "App Hosting (Vercel, Streamlit)"
      ]
    }
  },
  {
    title: "PaaS",
    icon: <Cloud className="w-6 h-6" />,
    description: "Platform as a Service infrastructure",
    detailedInfo: {
      title: "Platform as a Service (PaaS)",
      description: "Scalable cloud platform services for AI workloads.",
      components: [
        "Proprietary APIs (OpenAI, Anthropic)",
        "Open APIs (HuggingFace, Replicate)",
        "Cloud Providers (AWS, GCP, Azure)",
        "Opinionated Cloud (Databricks, Anyscale)"
      ]
    }
  },
  {
    title: "IaaS",
    icon: <Server className="w-6 h-6" />,
    description: "Infrastructure as a Service foundation",
    detailedInfo: {
      title: "Infrastructure as a Service (IaaS)",
      description: "Fundamental computing resources and networking capabilities.",
      components: [
        "Compute Services",
        "Storage Solutions",
        "Networking Infrastructure",
        "Security Services"
      ]
    }
  }
];

const StackCard = ({ 
  layer, 
  index, 
  total, 
  isSelected, 
  onClick 
}) => {
  // Calculate the position in the stack
  const baseZIndex = 50 - index * 10;
  const baseYOffset = index * 15;
  const selectedYOffset = -50;
  const selectedXOffset = 100;
  
  return (
    <motion.div
      className={`absolute w-full max-w-md rounded-lg shadow-lg bg-white border border-gray-200 
                ${isSelected ? 'z-[100]' : `z-[${baseZIndex}]`}`}
      initial={{ 
        y: baseYOffset, 
        rotateX: -5, 
        rotateY: 5, 
        scale: 1 - (index * 0.05) 
      }}
      animate={{ 
        y: isSelected ? selectedYOffset : baseYOffset,
        x: isSelected ? selectedXOffset : 0,
        rotateX: isSelected ? 0 : -5,
        rotateY: isSelected ? 0 : 5,
        scale: isSelected ? 1.05 : 1 - (index * 0.05),
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }
      }}
      whileHover={{ 
        scale: isSelected ? 1.05 : 1 - (index * 0.04),
        cursor: 'pointer' 
      }}
      onClick={onClick}
    >
      <Card className="overflow-hidden h-full">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600">
              {layer.icon}
            </div>
            <h3 className="text-xl font-semibold">{layer.title}</h3>
          </div>
          <p className="text-gray-600">{layer.description}</p>
          
          {/* Render additional details if selected */}
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-100"
            >
              <h4 className="font-semibold text-gray-900 mb-3">Key Components:</h4>
              <ul className="space-y-2">
                {layer.detailedInfo.components.map((component, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>{component}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

const FullStackAISection = () => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(null);
  const [hoveredLayerIndex, setHoveredLayerIndex] = useState(null);

  const handleLayerClick = (index) => {
    setSelectedLayerIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Full Stack AI Framework
          </h2>
          <p className="text-xl text-gray-600">
            A comprehensive framework for building and deploying AI-powered applications 
            across the entire technology stack.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* 3D Card Stack */}
          <div className="relative h-[500px] w-full md:w-1/2 flex items-center justify-center perspective-[1200px]">
            <div className="relative w-full max-w-md h-[350px]">
              {stackLayers.map((layer, index) => (
                <StackCard
                  key={layer.title}
                  layer={layer}
                  index={index}
                  total={stackLayers.length}
                  isSelected={selectedLayerIndex === index}
                  onClick={() => handleLayerClick(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Description Side */}
          <div className="w-full md:w-1/2 max-w-lg">
            {selectedLayerIndex !== null ? (
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                    {stackLayers[selectedLayerIndex].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {stackLayers[selectedLayerIndex].detailedInfo.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg">
                  {stackLayers[selectedLayerIndex].detailedInfo.description}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Components:</h4>
                <ul className="space-y-3 ml-2">
                  {stackLayers[selectedLayerIndex].detailedInfo.components.map((component, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-lg">{component}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div 
                className="bg-white/80 p-8 rounded-lg border border-gray-200 text-center h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-500 text-xl">
                  Select a layer from the stack to see detailed information
                </p>
              </motion.div>
            )}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button 
            className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90 text-lg"
            size="lg"
          >
            Explore Our Full Stack
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FullStackAISection;
