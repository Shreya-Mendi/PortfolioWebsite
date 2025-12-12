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
        {/* Dotted path in Duke blue */}
        <motion.path
          d="M80,0 Q120,100 80,200 Q40,300 80,400 Q120,500 80,600 Q40,700 80,800 Q120,900 80,1000"
          stroke="#012169"
          strokeWidth="4"
          strokeDasharray="8,12"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Cute blue cat that follows the path */}
        <g transform={`translate(${80 + Math.sin(scrollProgress * 20) * 40}, ${scrollProgress * 1000})`}>
          {/* Cat body */}
          <motion.ellipse
            cx="0"
            cy="2"
            rx="14"
            ry="16"
            fill="#3B7EA1"
            stroke="#012169"
            strokeWidth="1"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Cat head */}
          <circle cx="0" cy="-8" r="10" fill="#3B7EA1" stroke="#012169" strokeWidth="1" />

          {/* Cat ears - left */}
          <motion.path
            d="M-8,-15 L-10,-22 L-5,-18 Z"
            fill="#3B7EA1"
            stroke="#012169"
            strokeWidth="1"
            animate={{
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Inner ear - left */}
          <path d="M-7,-17 L-8,-20 L-6,-18 Z" fill="#FFB6C1" />

          {/* Cat ears - right */}
          <motion.path
            d="M8,-15 L10,-22 L5,-18 Z"
            fill="#3B7EA1"
            stroke="#012169"
            strokeWidth="1"
            animate={{
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Inner ear - right */}
          <path d="M7,-17 L8,-20 L6,-18 Z" fill="#FFB6C1" />

          {/* Cat eyes - closed happy eyes */}
          <path d="M-4,-8 Q-4,-6 -4,-8" stroke="#012169" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M4,-8 Q4,-6 4,-8" stroke="#012169" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Cat nose */}
          <circle cx="0" cy="-5" r="1.5" fill="#012169" />

          {/* Cat mouth - smile */}
          <path d="M0,-5 Q-2,-3 -3,-4 M0,-5 Q2,-3 3,-4" stroke="#012169" strokeWidth="1" fill="none" strokeLinecap="round" />

          {/* Whiskers - left */}
          <path d="M-8,-7 L-14,-7" stroke="#012169" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M-8,-5 L-14,-4" stroke="#012169" strokeWidth="0.8" strokeLinecap="round" />

          {/* Whiskers - right */}
          <path d="M8,-7 L14,-7" stroke="#012169" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M8,-5 L14,-4" stroke="#012169" strokeWidth="0.8" strokeLinecap="round" />

          {/* Cat paws */}
          <circle cx="-6" cy="14" r="3" fill="#3B7EA1" stroke="#012169" strokeWidth="0.8" />
          <circle cx="6" cy="14" r="3" fill="#3B7EA1" stroke="#012169" strokeWidth="0.8" />

          {/* Wagging tail */}
          <motion.path
            d="M12,8 Q18,5 20,0 Q22,-5 20,-10"
            stroke="#012169"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M12,8 Q18,5 20,0 Q22,-5 20,-10",
                "M12,8 Q18,8 22,5 Q25,0 24,-8",
                "M12,8 Q18,5 20,0 Q22,-5 20,-10",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Purr hearts */}
          <motion.text
            x="-25"
            y="-5"
            fontSize="10"
            fill="#FFB6C1"
            animate={{
              opacity: [0, 1, 0],
              y: [-5, -15, -25],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            ♥
          </motion.text>
        </g>
      </svg>

      {/* Duke blue sparkles around the path */}
      {[0, 0.2, 0.4, 0.6, 0.8].map((position, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          style={{
            top: `${position * 100}%`,
            right: `${20 + Math.sin(position * 10) * 30}px`,
            color: index % 2 === 0 ? '#012169' : '#3B7EA1',
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
          ⭐
        </motion.div>
      ))}
    </div>
  );
}
