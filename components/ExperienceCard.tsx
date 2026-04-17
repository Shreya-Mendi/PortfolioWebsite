import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    experience?.company?.slice(0, 2) || "Co"
  )}&size=200&background=012169&color=FFFFFF&bold=true`;

  const card = (
    <article className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72 md:w-[600px] xl:w-[700px] snap-center bg-white bg-gradient-to-tr from-white to-dukeBlue/5 p-5 md:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-dukeBlue/30 cursor-pointer group">
      {/* Logo — visible on xl, hidden on md (shown in top-right on md) */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:invisible xl:visible md:h-0 w-24 h-24 md:w-0 xl:w-[120px] xl:h-[120px] mb-2 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2 flex-shrink-0"
      >
        <img
          className="w-full h-full object-contain"
          src={experience?.companyImage}
          alt={experience?.company}
          onError={(e) => { (e.target as HTMLImageElement).src = fallbackLogo; }}
        />
      </motion.div>

      <div className="w-full px-0 md:px-10">
        <div className="md:flex md:justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <h4 className="text-lg md:text-2xl font-light text-black group-hover:text-dukeBlue transition-colors duration-200">
              {experience?.jobTitle}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <p className="font-bold text-md md:text-xl text-dukeBlue">
                {experience?.company}
              </p>
              <ArrowTopRightOnSquareIcon className="h-4 w-4 text-dukeBlue/50 group-hover:text-dukeBlue transition-colors duration-200 flex-shrink-0" />
            </div>
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

          {/* Logo on md screens */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="invisible md:visible xl:invisible flex-shrink-0 md:w-20 md:h-20 xl:w-0 xl:h-0 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
          >
            <img
              className="w-full h-full object-contain"
              src={experience?.companyImage}
              alt={experience?.company}
              onError={(e) => { (e.target as HTMLImageElement).src = fallbackLogo; }}
            />
          </motion.div>
        </div>

        <p className="uppercase py-2 md:py-4 text-gray-400 text-xs md:text-sm font-medium tracking-wider">
          {new Date(experience?.dateStarted).toLocaleDateString("en-US", { month: "short", year: "numeric" })} —{" "}
          {experience.isCurrentlyWorkingHere || !experience?.dateEnded
            ? <span className="text-green-500 font-semibold">Present</span>
            : new Date(experience?.dateEnded).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </p>
      </div>

      <ul className="px-0 md:px-10 list-disc text-gray-700 space-y-2 pr-5 text-left ml-0 text-sm md:text-base pl-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-dukeBlue/40 max-h-40">
        {experience?.points.map((point, i) => (
          <li key={i} className="leading-relaxed">{point}</li>
        ))}
      </ul>
    </article>
  );

  return experience?.companyUrl ? (
    <a
      href={experience.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {card}
    </a>
  ) : (
    card
  );
}
