import { motion } from "framer-motion";
import React from "react";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

const funFacts = [
  "☕ Fueled by chai tea, not coffee",
  "🔵 Duke Blue through and through",
  "🤖 Believes AI should be explainable",
  "🌿 Building tech for social good",
];

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-2xl md:w-64 md:h-80 xl:w-[400px] xl:h-[500px] shadow-xl ring-4 ring-dukeBlue/20"
        src={pageInfo?.profilePic || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop"}
        alt="About Shreya"
      />

      <div className="space-y-5 md:space-y-8 px-0 md:px-10 max-w-xl">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-dukeBlue/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base lg:text-lg text-justify text-gray-600 leading-relaxed">
          {pageInfo?.backgroundInformation}
        </p>

        {/* Fun facts sprinkled in */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          {funFacts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-dukeBlue/5 border border-dukeBlue/10 rounded-xl px-3 py-2 text-xs text-gray-600 font-medium hover:bg-dukeBlue/10 transition-colors duration-200 cursor-default"
            >
              {fact}
            </motion.div>
          ))}
        </div>

        {/* Education badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-dukeBlue text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
        >
          🎓 Duke University — MEng in Artificial Intelligence
        </motion.div>
      </div>
    </motion.div>
  );
}
