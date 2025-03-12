import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "IP Protection",
    description: "Breathe Easy knowing that your IP is protected under NAFTA/LAWS",
    label: "NAFTA IP Protection",
    color: "from-purple-400 to-purple-300",
  },
  {
    title: "Same Timezone",
    description: "No late night or early morning meetings with offshore teams",
    label: "Synchronized Schedules",
    color: "from-blue-400 to-blue-300",
  },
  {
    title: "US Invoicing & Payroll",
    description: "Work billed in the US and paid in the US. Say goodbye to cross border grunt-work",
    label: "Easy Administration",
    color: "from-indigo-400 to-indigo-300",
  },
];

const ExtendedTeamsSection = () => {
  return (
    <section className="py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-24">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
          >
            Extended Teams
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="default" className="bg-zinc-900 hover:bg-zinc-800 rounded-lg px-6 py-5 h-auto">
              GET AN EXTENDED TEAM
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AI Engineers</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Extend your teams with AI experts to lead in technology and innovation.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow"
            >
              <h3 className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-8">
                {feature.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-mono">
                  {feature.label}
                </span>
                
                <Button variant="default" className="bg-zinc-900 hover:bg-zinc-800 rounded-md px-4 py-2 h-auto text-sm">
                  HIRE NOW
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            Remote, Hybrid or Onsite
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600">
                Choosing nearshore models offers significant advantages in terms of time 
                zone alignment for easier communication, cultural similarities for better teamwork, 
                and cost-effectiveness.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-600">
                Strike a balance between offshore savings and onshore quality, making it an 
                appealing choice for businesses.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="mt-32 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="absolute inset-0 opacity-30">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 1200 800"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a46e5" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {Array.from({ length: 20 }).map((_, i) => (
                <path
                  key={i}
                  d={`M0,${40 + i * 40} C300,${10 + i * 40} 600,${60 + i * 40} 1200,${30 + i * 40} V800 H0 Z`}
                  fill="none"
                  stroke="url(#wave-gradient)"
                  strokeWidth="1.5"
                />
              ))}
            </svg>
          </div>
          
          <div className="relative px-8 py-16 text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
            >
              Nearshore Advantage
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-lg mb-8"
            >
              Choosing nearshore models offers significant advantages in terms of time 
              zone alignment for easier communication, cultural similarities for better teamwork, 
              and cost-effectiveness without compromising on quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 h-auto text-lg font-medium"
              >
                Explore Nearshore Options
              </Button>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-between items-center"
        >
          <h3 className="text-2xl font-bold">
            Hire AI Engineers
          </h3>
          
          <Button variant="default" className="bg-zinc-900 hover:bg-zinc-800 rounded-lg px-6 py-5 h-auto">
            GET AN EXTENDED TEAM
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtendedTeamsSection;
