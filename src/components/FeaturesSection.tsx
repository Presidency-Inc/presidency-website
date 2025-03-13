
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const featureItems = [{
  id: "01",
  title: "Improve your business with",
  highlight: "Artificial Intelligence",
  description: "Use AI to innovate, automate, and gain an edge in your market.",
  cta: "Full Stack AI",
  image: <div className="w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 400 200" className="w-full h-full text-gray-600">
          <g>
            {Array.from({
          length: 7
        }).map((_, i) => <line key={i} x1="50" y1={40 + i * 20} x2={300 - i * 30} y2={40 + i * 20} stroke="currentColor" strokeWidth="2" opacity={1 - i * 0.1} />)}
          </g>
        </svg>
      </div>,
  link: "/products/leapfrog"
}, {
  id: "02",
  title: "Streamline your",
  highlight: "Data Operations",
  description: "Make smarter decisions by harnessing the power of your data",
  cta: "Data Operations",
  image: <div className="w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 400 200" className="w-full h-full text-gray-600">
          <g>
            {Array.from({
          length: 15
        }).map((_, i) => {
          const cols = 15;
          const rows = 10;
          const colIndex = i % cols;
          const rowIndex = Math.floor(i / cols);
          return Array.from({
            length: cols
          }).map((_, j) => {
            const x1 = 50 + j * 20;
            const y1 = 40 + rowIndex * 20;
            const height = Math.sin(j * 0.3 + rowIndex * 0.5) * 30 + Math.cos(j * 0.2) * 15;
            return <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x1} y2={y1 - height} stroke="currentColor" strokeWidth="1" />;
          });
        })}
          </g>
        </svg>
      </div>
}, {
  id: "03",
  title: "Extend your team with",
  highlight: "AI Engineers",
  description: "Extend your teams with AI experts to lead in technology and innovation.",
  cta: "Extended Teams",
  image: <div className="w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 400 200" className="w-full h-full text-gray-600">
          <g>
            {Array.from({
          length: 10
        }).map((_, rowIndex) => Array.from({
          length: 20
        }).map((_, colIndex) => <circle key={`${rowIndex}-${colIndex}`} cx={50 + colIndex * 15} cy={30 + rowIndex * 15} r="1.5" fill="currentColor" />))}
          </g>
        </svg>
      </div>
}];

const FeatureCard = ({
  item,
  index
}: {
  item: typeof featureItems[0];
  index: number;
}) => {
  return <motion.div className="relative bg-zinc-900 rounded-xl overflow-hidden" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.2 + index * 0.1
  }}>
      <div className="h-48 bg-zinc-800 p-6 flex items-center justify-center">
        {item.image}
      </div>
      <div className="p-6">
        <h3 className="text-xl text-white mb-1">
          {item.title}{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {item.highlight}
          </span>
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 font-mono">{item.cta}</span>
          {item.link ? (
            <Link to={item.link} className="p-1.5 bg-zinc-800 rounded-md group">
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
            </Link>
          ) : (
            <button className="p-1.5 bg-zinc-800 rounded-md group">
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          )}
        </div>
      </div>
    </motion.div>;
};

const FeaturesSection = () => {
  return <section className="relative bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Ascend into the Future with</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
Presidency Solutions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureItems.map((item, index) => <FeatureCard key={item.id} item={item} index={index} />)}
        </div>
      </div>
    </section>;
};

export default FeaturesSection;
