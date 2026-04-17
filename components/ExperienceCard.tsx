import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72 md:w-[600px] xl:w-[700px] snap-center bg-white bg-gradient-to-tr from-white to-dukeBlue/5 p-5 md:p-10 hover:shadow-2xl cursor-pointer transition-all duration-300 border border-gray-100 hover:border-dukeBlue/20">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="md:invisible xl:visible md:h-0 w-24 h-24 md:w-0 rounded-full xl:w-[120px] xl:h-[120px] mb-2 object-contain bg-white p-2 shadow-md border border-gray-100"
        src={experience?.companyImage}
        alt={experience?.company}
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(experience?.company || "Co")}&size=200&background=012169&color=FFFFFF&bold=true`;
        }}
      />
      <div className="w-full px-0 md:px-10">
        <div className="md:flex md:justify-between items-start">
          <div>
            <h4 className="text-lg md:text-2xl font-light text-black">
              {experience?.jobTitle}
            </h4>
            <p className="font-bold text-md md:text-xl mt-1 text-dukeBlue">
              {experience?.company}
            </p>
            <div className="flex space-x-2 my-2 flex-wrap gap-y-1">
              {experience?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-8 w-8 rounded-full object-contain bg-white p-0.5 border border-gray-100"
                  src={technology?.image}
                  alt={technology?.title}
                  title={technology?.title}
                />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-24 md:w-24 rounded-full mb-0 object-contain bg-white p-2 border border-gray-100 shadow-md"
            src={experience?.companyImage}
            alt={experience?.company}
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(experience?.company || "Co")}&size=200&background=012169&color=FFFFFF&bold=true`;
            }}
          />
        </div>
        <p className="uppercase py-2 md:py-4 text-gray-400 text-xs md:text-sm font-medium tracking-wider">
          {new Date(experience?.dateStarted).toLocaleDateString("en-US", { month: "short", year: "numeric" })} —{" "}
          {experience.isCurrentlyWorkingHere || !experience?.dateEnded
            ? <span className="text-green-500 font-bold">Present</span>
            : new Date(experience?.dateEnded).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </p>
      </div>
      <ul className="px-0 md:px-10 list-disc text-gray-700 space-y-2 pr-5 text-left ml-0 text-sm md:text-base pl-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-dukeBlue/40 max-h-48">
        {experience?.points.map((point, i) => (
          <li key={i} className="leading-relaxed">{point}</li>
        ))}
      </ul>
    </article>
  );
}
