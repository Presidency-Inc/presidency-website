
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: "2012",
    title: "Company Foundation",
    description: "Presidency Solutions incorporated with headquarters established in Michigan, USA."
  },
  {
    year: "2013",
    title: "Mobility Practice",
    description: "Launched dedicated Mobility Practice to develop solutions for the increasingly mobile workforce."
  },
  {
    year: "2014",
    title: "Global Expansion",
    description: "Established offshore development center in India to enhance delivery capabilities."
  },
  {
    year: "2015",
    title: "Silicon Valley",
    description: "Opened Silicon Valley office to strengthen presence in the tech innovation hub."
  },
  {
    year: "2016",
    title: "New Practices & Expansion",
    description: "Launched Big Data and Cloud Practice, and established nearshore development center in Mexico."
  },
  {
    year: "2018",
    title: "Inc. 500 Recognition",
    description: "Recognized as one of America's fastest-growing private companies in the Inc. 500 list."
  },
  {
    year: "2019",
    title: "AI Innovation",
    description: "Formed dedicated Artificial Intelligence practice to deliver cutting-edge AI solutions."
  },
  {
    year: "2020",
    title: "AI & RPA Expansion",
    description: "Expanded AI capabilities and launched Robotic Process Automation (RPA) practice in Mexico."
  },
  {
    year: "2021",
    title: "Databricks Partnership",
    description: "Established specialized Databricks practice to deliver data and AI solutions at scale."
  }
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From our founding to today, we've continuously evolved to deliver cutting-edge solutions in technology.
          </p>
        </div>
        
        <div 
          ref={containerRef} 
          className="relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 rounded-full" />
          
          {timelineEvents.map((event, index) => (
            <TimelineItem 
              key={index}
              event={event}
              index={index}
              total={timelineEvents.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ 
  event, 
  index, 
  total 
}: { 
  event: TimelineEvent; 
  index: number; 
  total: number;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    [index % 2 === 0 ? -20 : 20, 0]
  );
  
  // Even items go on the left, odd items on the right
  const isEven = index % 2 === 0;
  
  // Safe check for client-side rendering
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Only access window in useEffect (client-side)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div 
      ref={itemRef}
      className={`flex items-center justify-center mb-12 ${index === total - 1 ? 'mb-0' : ''}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
        {/* Left side content for even items */}
        {isEven && (
          <motion.div 
            className="col-span-2 text-right hidden md:block"
            style={{ opacity, scale, x }}
            initial={{ opacity: 0.3, x: -20 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 ml-auto mr-8 max-w-sm">
              <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </motion.div>
        )}
        
        {/* Center year marker */}
        <div className="col-span-1 flex flex-col items-center">
          <motion.div 
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center z-10 text-white font-bold shadow-lg"
            style={{ 
              scale: useTransform(scrollYProgress, [0, 0.5], [0.8, 1]),
              backgroundColor: useTransform(
                scrollYProgress, 
                [0, 0.5], 
                ["#93c5fd", "#2563eb"]
              )
            }}
            initial={{ scale: 0.8 }}
            viewport={{ once: true }}
          >
            {index + 1}
          </motion.div>
          <motion.div 
            className="text-blue-700 font-bold mt-2 bg-blue-50 px-3 py-1 rounded-full text-sm"
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.3], [0.7, 1])
            }}
            initial={{ opacity: 0.7 }}
            viewport={{ once: true }}
          >
            {event.year}
          </motion.div>
        </div>
        
        {/* Right side content for odd items */}
        {(!isEven || isMobile) && (
          <motion.div 
            className={`${isEven ? 'md:hidden' : ''} col-span-2 md:col-span-2`}
            style={{ opacity, scale, x: isEven ? undefined : x }}
            initial={{ opacity: 0.3, x: isEven ? -20 : 20 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 ml-8 max-w-sm">
              <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </motion.div>
        )}
        
        {/* Responsive version for even items on mobile */}
        {isEven && (
          <motion.div 
            className="md:hidden col-span-2"
            style={{ opacity, scale }}
            initial={{ opacity: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 ml-8 max-w-sm">
              <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TimelineSection;
