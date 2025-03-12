
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const MeshGrid = () => {
  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create springs for smoother animations
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Transform values for grid movement
  const gridX = useTransform(springX, (x) => x / 50);
  const gridY = useTransform(springY, (y) => y / 50);
  const gridRotate = useTransform(
    springX, 
    [-1000, 1000], 
    [-2, 2]
  );
  
  // Transform values for gradient movement
  const gradientX = useTransform(springX, (x) => x / 100);
  const gradientY = useTransform(springY, (y) => y / 100);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background gradient layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50/10"
        style={{
          x: gradientX,
          y: gradientY,
        }}
      />
      
      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(#0EA5E9 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px",
          x: gridX,
          y: gridY,
          rotate: gridRotate,
        }}
        animate={{
          opacity: [0.3, 0.45, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      {/* Second grid layer with offset for parallax effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(#8B5CF6 0.8px, transparent 0.8px)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "10px 10px",
          x: useTransform(gridX, (x) => x * -1.2),
          y: useTransform(gridY, (y) => y * -1.2),
          rotate: useTransform(gridRotate, (r) => r * -1.5),
        }}
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Third grid layer for extra depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(#F97316 0.6px, transparent 0.6px)`,
          backgroundSize: "25px 25px",
          backgroundPosition: "5px 5px",
          x: useTransform(gridX, (x) => x * 1.5),
          y: useTransform(gridY, (y) => y * 1.5),
          rotate: useTransform(gridRotate, (r) => r * 1.2),
        }}
        animate={{
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/70 mix-blend-overlay" />
    </div>
  );
};

export default MeshGrid;
