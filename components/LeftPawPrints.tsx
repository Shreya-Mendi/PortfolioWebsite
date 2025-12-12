import React from "react";
import { motion } from "framer-motion";

export default function LeftPawPrints() {
  return (
    <div className="fixed top-0 left-0 h-screen w-32 md:w-40 pointer-events-none z-40">
      {/* Paw prints at different heights */}
      {[0.15, 0.35, 0.55, 0.75, 0.9].map((position, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: `${position * 100}%`,
            left: `${30 + Math.sin(position * 8) * 20}px`,
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.9, 1.1, 0.9],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main paw pad */}
            <ellipse
              cx="20"
              cy="25"
              rx="8"
              ry="10"
              fill={index % 2 === 0 ? "#012169" : "#3B7EA1"}
              opacity="0.7"
            />

            {/* Toe pads */}
            {/* Top left toe */}
            <circle
              cx="12"
              cy="15"
              r="4"
              fill={index % 2 === 0 ? "#012169" : "#3B7EA1"}
              opacity="0.7"
            />

            {/* Top middle toe */}
            <circle
              cx="20"
              cy="12"
              r="4"
              fill={index % 2 === 0 ? "#012169" : "#3B7EA1"}
              opacity="0.7"
            />

            {/* Top right toe */}
            <circle
              cx="28"
              cy="15"
              r="4"
              fill={index % 2 === 0 ? "#012169" : "#3B7EA1"}
              opacity="0.7"
            />

            {/* Bottom toe */}
            <circle
              cx="20"
              cy="20"
              r="3.5"
              fill={index % 2 === 0 ? "#012169" : "#3B7EA1"}
              opacity="0.7"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
