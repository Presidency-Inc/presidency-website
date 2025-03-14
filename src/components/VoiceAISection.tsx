
import { motion } from "framer-motion";
import { Mic, Radio, Waveform, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const VoiceAISection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Voice AI <span className="text-teal-600">Development</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Create natural, engaging voice experiences that transform how your customers interact with your business.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mic className="h-6 w-6 text-teal-600" />,
                  title: "Voice Assistants",
                  description: "Custom voice assistants that handle complex conversations and tasks",
                },
                {
                  icon: <Waveform className="h-6 w-6 text-teal-600" />,
                  title: "Text-to-Speech Systems",
                  description: "Natural-sounding voices for content, announcements, and interactive experiences",
                },
                {
                  icon: <Radio className="h-6 w-6 text-teal-600" />,
                  title: "Voice Recognition Systems",
                  description: "Accurate speech recognition optimized for your industry terminology",
                },
                {
                  icon: <Headphones className="h-6 w-6 text-teal-600" />,
                  title: "Audio Content Analysis",
                  description: "Extract insights from calls, meetings, and other audio content",
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Explore Voice Solutions
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
              <div className="mb-6 border-b pb-4">
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-600">Voice Assistant Demo</div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                    <Mic className="h-4 w-4" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm">
                    How can I help you today?
                  </div>
                </div>

                <div className="flex gap-3 items-start justify-end">
                  <div className="bg-teal-50 rounded-lg p-3 text-sm">
                    I'd like to check the status of my recent order.
                  </div>
                  <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M8 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                    </svg>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                    <Mic className="h-4 w-4" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm">
                    I found your order #1234. It was shipped yesterday and should arrive by Friday. Would you like to receive tracking updates by text message?
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t flex items-center gap-4">
                <div className="flex-1">
                  <div className="bg-gray-100 h-10 rounded-full flex items-center justify-center">
                    <Waveform className="h-5 w-5 text-teal-600" />
                    <span className="ml-2 text-gray-500 text-sm">Tap to speak...</span>
                  </div>
                </div>
                <Button className="w-10 h-10 rounded-full p-0 bg-teal-600">
                  <Mic className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="absolute top-6 -left-6 -right-6 bottom-6 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAISection;
