import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Laptop, MessageSquare, Globe, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const MultiChannelExperienceSection = () => {
  return (
    <section className="py-24 bg-blue-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Seamless <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Multi Channel Experience</span> across platforms
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Provide consistent AI-powered experiences across all customer touchpoints - web, mobile, voice, chat, email, and beyond.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Mobile Apps</h3>
                  <p className="text-sm text-gray-500">iOS & Android</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Laptop size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Web Applications</h3>
                  <p className="text-sm text-gray-500">Modern & responsive</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Chat & Messaging</h3>
                  <p className="text-sm text-gray-500">Real-time interactions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Headphones size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Voice Assistants</h3>
                  <p className="text-sm text-gray-500">Smart conversations</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="group border-[#1a46e5] text-[#1a46e5] hover:bg-[#1a46e5] hover:text-white transition-all"
              >
                Explore Multi Channel Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          
          {/* Right Content - Multi Channel Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl shadow-lg">
              <div className="relative mx-auto max-w-[450px]">
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 -z-10"
                  viewBox="0 0 800 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid-pattern"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-blue-300"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
                
                {/* Multi-Channel visualization */}
                <div className="relative">
                  {/* Center circle - platform */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                    <Globe size={40} />
                  </div>
                  
                  {/* Device connections */}
                  <div className="w-full aspect-square flex items-center justify-center">
                    {/* Web */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-md flex items-center">
                      <Laptop className="text-blue-600 mr-3" size={28} />
                      <div>
                        <div className="font-medium">Web App</div>
                        <div className="text-xs text-gray-500">React, Vue, Angular</div>
                      </div>
                    </div>
                    
                    {/* Mobile */}
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-md flex items-center">
                      <Smartphone className="text-indigo-600 mr-3" size={28} />
                      <div>
                        <div className="font-medium">Mobile Apps</div>
                        <div className="text-xs text-gray-500">iOS & Android</div>
                      </div>
                    </div>
                    
                    {/* Chat */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-xl shadow-md flex items-center">
                      <MessageSquare className="text-violet-600 mr-3" size={28} />
                      <div>
                        <div className="font-medium">Chat & Email</div>
                        <div className="text-xs text-gray-500">24/7 Support</div>
                      </div>
                    </div>
                    
                    {/* Voice */}
                    <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-md flex items-center">
                      <Headphones className="text-purple-600 mr-3" size={28} />
                      <div>
                        <div className="font-medium">Voice Assistant</div>
                        <div className="text-xs text-gray-500">Smart & Natural</div>
                      </div>
                    </div>
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 400 400">
                      <line x1="200" y1="200" x2="200" y2="40" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5,5" />
                      <line x1="200" y1="200" x2="360" y2="200" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5,5" />
                      <line x1="200" y1="200" x2="200" y2="360" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5,5" />
                      <line x1="200" y1="200" x2="40" y2="200" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-100 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelExperienceSection;
