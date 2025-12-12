import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="absolute border-2 border-pink-300 opacity-40 rounded-full h-[200px] w-[200px] mt-64 md:mt:52
            animate-ping"
        style={{ animationDuration: "3s" }}
      />
      <div />
      <div
        className="absolute border-2 border-purple-300 opacity-40 rounded-full h-[300px] w-[300px] mt-64 md:mt:52
            animate-ping"
        style={{ animationDuration: "4s" }}
      />
      <div />
      <div
        className="absolute border-2 border-blue-300 opacity-40 rounded-full h-[500px] w-[500px] mt-64 md:mt:52
            animate-ping"
        style={{ animationDuration: "5s" }}
      />
      <div />
      <div
        className="absolute border-2 border-teal-300 opacity-30 h-[510px] w-[510px] md:h-[650px] md:w-[650px]
            animate-pulse mt-64 md:mt:52 rounded-full"
        style={{ animationDuration: "3.5s" }}
      />
      <div />
      <div
        className="absolute border-2 border-yellow-300 opacity-40 rounded-full h-[800px] w-[800px] mt-64 md:mt:52
            animate-ping"
        style={{ animationDuration: "6s" }}
      />
      <div />
    </motion.div>
  );
}
