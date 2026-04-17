import React from "react";
import { motion } from "framer-motion";
import { Skill as mySkill } from "../typings";

type Props = {
  skill: mySkill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border-2 border-dukeBlue/30 object-contain bg-white p-1.5 w-16 h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out shadow-sm"
        src={skill?.image}
        alt={skill?.title}
        title={skill?.title}
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(skill?.title || "?")}&size=100&background=012169&color=FFFFFF&bold=true`;
        }}
      />
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-dukeBlue w-16 h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full gap-0.5">
          <p className="text-sm md:text-xl font-bold text-white opacity-100">
            {skill.progress}%
          </p>
          <p className="text-[8px] md:text-[9px] text-blue-200 text-center px-1 leading-tight">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}
