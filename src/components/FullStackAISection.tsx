
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Database, Server, Cloud, Code, 
  Layers, Cpu, ArrowRight, X 
} from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface StackLayerProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  offset: number;
  onClick: () => void;
  detailedInfo: {
    title: string;
    description: string;
    components: string[];
  };
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
  description, 
  offset, 
  onClick,
  detailedInfo 
}) => {
  return (
    <motion.div
      className={`absolute w-80 h-16 bg-white border border-gray-200 shadow-md flex items-center px-4 cursor-pointer hover:shadow-xl transition-shadow`}
      style={{ 
        top: `${offset * 1.5}rem`,
        left: `${offset * 1.5}rem`, 
        zIndex: 10 - offset
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: offset * 0.1 }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mr-3">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};

const StackPerspective: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<typeof stackLayers[0] | null>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-96 mt-16 mb-20">
      {/* 3D Stack Layers */}
      <div className="relative perspective-[1200px] w-full h-full transform-style-3d">
        <div className="absolute left-0 bottom-0 w-96 h-96 transform-style-3d rotate-x-[60deg] rotate-z-[-45deg]">
          {stackLayers.map((layer, index) => (
            <StackLayer
              key={layer.title}
              title={layer.title}
              icon={layer.icon}
              description={layer.description}
              offset={stackLayers.length - 1 - index}
              onClick={() => setSelectedLayer(layer)}
              detailedInfo={layer.detailedInfo}
            />
          ))}
        </div>
        
        {/* AI Logo in the middle */}
        <motion.div
          className="absolute top-[calc(50%-3rem)] left-[calc(50%-3rem)] w-24 h-24 bg-white flex items-center justify-center"
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ 
            transform: `translateX(2rem) translateY(-6rem) rotateX(60deg) rotateZ(-45deg)`,
            zIndex: 20
          }}
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">AI</span>
        </motion.div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedLayer} onOpenChange={(open) => !open && setSelectedLayer(null)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedLayer?.detailedInfo.title}
            </DialogTitle>
            <DialogDescription className="text-base mt-2">
              {selectedLayer?.detailedInfo.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 mb-3">Key Components:</h4>
            <ul className="space-y-2 ml-2">
              {selectedLayer?.detailedInfo.components.map((component, index) => (
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
          </div>
          
          <div className="mt-6 flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const FullStackAISection: React.FC = () => {
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
          <p className="text-xl text-gray-600 mb-10">
            A comprehensive framework for building and deploying AI-powered applications 
            across the entire technology stack - from infrastructure to user-facing applications.
          </p>
        </motion.div>
        
        <StackPerspective />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            className="mt-8 bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90"
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
