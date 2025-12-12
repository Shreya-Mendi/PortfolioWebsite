import { motion } from "framer-motion";
import React from "react";

export default function HeaderCat() {
  return (
    <div className="relative w-12 h-12 md:w-14 md:h-14">
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cat body */}
        <ellipse cx="45" cy="55" rx="25" ry="20" fill="#3B7EA1" stroke="#012169" strokeWidth="2" />

        {/* Cat head */}
        <circle cx="30" cy="35" r="18" fill="#3B7EA1" stroke="#012169" strokeWidth="2" />

        {/* Left ear */}
        <motion.path
          d="M18,20 L14,10 L22,18 Z"
          fill="#3B7EA1"
          stroke="#012169"
          strokeWidth="2"
          animate={{
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "20px 20px" }}
        />
        {/* Left ear inner */}
        <path d="M18,18 L16,13 L20,18 Z" fill="#FFB6C1" />

        {/* Right ear */}
        <motion.path
          d="M42,20 L46,10 L38,18 Z"
          fill="#3B7EA1"
          stroke="#012169"
          strokeWidth="2"
          animate={{
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "40px 20px" }}
        />
        {/* Right ear inner */}
        <path d="M42,18 L44,13 L40,18 Z" fill="#FFB6C1" />

        {/* Eyes - closed happy */}
        <path d="M24,32 Q24,34 24,32" stroke="#012169" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M36,32 Q36,34 36,32" stroke="#012169" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Nose */}
        <circle cx="30" cy="38" r="2" fill="#012169" />

        {/* Mouth - smile */}
        <path d="M30,38 Q26,41 24,40 M30,38 Q34,41 36,40" stroke="#012169" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Whiskers - left */}
        <path d="M20,34 L10,34" stroke="#012169" strokeWidth="1" strokeLinecap="round" />
        <path d="M20,37 L10,38" stroke="#012169" strokeWidth="1" strokeLinecap="round" />

        {/* Whiskers - right */}
        <path d="M40,34 L50,34" stroke="#012169" strokeWidth="1" strokeLinecap="round" />
        <path d="M40,37 L50,38" stroke="#012169" strokeWidth="1" strokeLinecap="round" />

        {/* Front paws */}
        <ellipse cx="38" cy="70" rx="6" ry="5" fill="#3B7EA1" stroke="#012169" strokeWidth="1.5" />
        <ellipse cx="52" cy="70" rx="6" ry="5" fill="#3B7EA1" stroke="#012169" strokeWidth="1.5" />

        {/* Wagging tail - animated */}
        <motion.path
          d="M65,50 Q80,45 90,40 Q100,35 105,28"
          stroke="#012169"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M65,50 Q80,45 90,40 Q100,35 105,28",
              "M65,50 Q80,50 92,48 Q102,45 108,40",
              "M65,50 Q80,45 90,40 Q100,35 105,28",
            ],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Paw prints floating around */}
        <motion.g
          animate={{
            opacity: [0.4, 1, 0.4],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Paw print 1 */}
          <circle cx="75" cy="25" r="2" fill="#012169" opacity="0.6" />
          <circle cx="72" cy="28" r="1.5" fill="#012169" opacity="0.6" />
          <circle cx="75" cy="30" r="1.5" fill="#012169" opacity="0.6" />
          <circle cx="78" cy="28" r="1.5" fill="#012169" opacity="0.6" />
        </motion.g>

        <motion.g
          animate={{
            opacity: [0.4, 1, 0.4],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut",
          }}
        >
          {/* Paw print 2 */}
          <circle cx="95" cy="55" r="2" fill="#3B7EA1" opacity="0.6" />
          <circle cx="92" cy="58" r="1.5" fill="#3B7EA1" opacity="0.6" />
          <circle cx="95" cy="60" r="1.5" fill="#3B7EA1" opacity="0.6" />
          <circle cx="98" cy="58" r="1.5" fill="#3B7EA1" opacity="0.6" />
        </motion.g>
      </svg>
    </div>
  );
}
