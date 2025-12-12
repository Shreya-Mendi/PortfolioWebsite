import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function TreasureMapPath({}: Props) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate position along the path
  const pathLength = 1000; // Approximate length of the path
  const offset = scrollProgress * pathLength;

  return (
    <div className="fixed top-0 right-0 h-screen w-32 md:w-40 pointer-events-none z-50 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 160 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Treasure map style dotted path - snaky curves */}
        <motion.path
          d="M80,0 Q120,100 80,200 Q40,300 80,400 Q120,500 80,600 Q40,700 80,800 Q120,900 80,1000"
          stroke="#FFB6C1"
          strokeWidth="3"
          strokeDasharray="8,12"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Animated strawberry that follows the path */}
        <g transform={`translate(${80 + Math.sin(scrollProgress * 20) * 40}, ${scrollProgress * 1000})`}>
          {/* Strawberry body */}
          <motion.ellipse
            cx="0"
            cy="0"
            rx="12"
            ry="14"
            fill="#FF69B4"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Strawberry seeds */}
          <circle cx="-3" cy="-3" r="1" fill="#FFE4E1" />
          <circle cx="3" cy="-3" r="1" fill="#FFE4E1" />
          <circle cx="-3" cy="3" r="1" fill="#FFE4E1" />
          <circle cx="3" cy="3" r="1" fill="#FFE4E1" />
          <circle cx="0" cy="0" r="1" fill="#FFE4E1" />

          {/* Strawberry leaves */}
          <motion.path
            d="M-6,-12 L0,-18 L6,-12 L4,-10 L2,-12 L0,-10 L-2,-12 L-4,-10 Z"
            fill="#90EE90"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      </svg>

      {/* Sparkles around the path */}
      {[0, 0.2, 0.4, 0.6, 0.8].map((position, index) => (
        <motion.div
          key={index}
          className="absolute text-yellow-300 text-xl"
          style={{
            top: `${position * 100}%`,
            right: `${20 + Math.sin(position * 10) * 30}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}
