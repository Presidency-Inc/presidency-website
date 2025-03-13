
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Database, Server, Cloud, Code, 
  Layers, Cpu, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface StackLayerProps {
  title: string;
  icon: React.ReactNode;
  position: number;
  isSelected: boolean;
  onClick: () => void;
}

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

const StackLayer: React.FC<StackLayerProps> = ({ 
  title, 
  icon, 
  position, 
  isSelected,
  onClick 
}) => {
  return (
    <motion.div
      className={`absolute w-80 h-16 flex items-center px-4 cursor-pointer transition-all duration-300 ${
        isSelected ? "bg-blue-100 border border-blue-300" : "bg-white/90 border border-gray-200"
      }`}
      style={{ 
        top: `${position * 2.5}rem`,
        left: 0,
        zIndex: 10 - position,
        boxShadow: isSelected ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "0 2px 6px rgba(0, 0, 0, 0.1)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: position * 0.1 }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mr-3">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
      </div>
    </motion.div>
  );
};

const FullStackAISection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<typeof stackLayers[0] | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Full Stack AI Framework
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            A comprehensive framework for building and deploying AI-powered applications 
            across the entire technology stack - from infrastructure to user-facing applications.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 items-center justify-center">
          {/* 3D Stack Visualization */}
          <div className="relative max-w-md mx-auto perspective-[1200px]">
            <motion.div
              className="w-80 h-80 transform-style-3d"
              style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Stack Layers */}
              <div className="relative">
                {stackLayers.map((layer, index) => (
                  <StackLayer
                    key={layer.title}
                    title={layer.title}
                    icon={layer.icon}
                    position={index}
                    isSelected={selectedLayer?.title === layer.title}
                    onClick={() => setSelectedLayer(layer)}
                  />
                ))}
              </div>
              
              {/* AI Logo in the center */}
              <motion.div
                className="absolute top-[calc(50%-3rem)] left-[calc(50%-3rem)] w-24 h-24 bg-white flex items-center justify-center z-30 shadow-lg border border-gray-100"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ 
                  transform: `translateX(4rem) translateY(-4rem) rotateX(60deg) rotateZ(-45deg)`,
                }}
              >
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">AI</span>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Detailed Information Panel */}
          <div className="md:ml-12 w-full md:w-1/2 max-w-lg">
            {selectedLayer ? (
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    {selectedLayer.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedLayer.detailedInfo.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {selectedLayer.detailedInfo.description}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Key Components:</h4>
                <ul className="space-y-2 ml-2">
                  {selectedLayer.detailedInfo.components.map((component, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>{component}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div 
                className="bg-white/80 p-6 rounded-lg border border-gray-200 text-left h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-500 text-lg">
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
          className="mt-16"
        >
          <Button 
            className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90"
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
