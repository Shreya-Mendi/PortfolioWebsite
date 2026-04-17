import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Project } from "../typings";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags || [])))];

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags?.includes(activeFilter));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left max-w-full mx-auto z-0"
    >
      {/* Fixed header inside section */}
      <div className="flex-shrink-0 pt-20 pb-4 px-6 md:px-14 bg-lightBackground/95 backdrop-blur-sm z-10">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl mb-1">
          Projects
        </h3>
        <p className="text-gray-400 text-xs mb-4 tracking-widest uppercase">
          {projects.length} projects · hover to explore
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 border ${
                activeFilter === tag
                  ? "bg-dukeBlue text-white border-dukeBlue shadow-md scale-105"
                  : "bg-white text-gray-500 border-gray-200 hover:border-dukeBlue hover:text-dukeBlue"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable grid — fills remaining height */}
      <div className="flex-1 overflow-y-auto px-6 md:px-14 pb-6 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-dukeBlue/40">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 pt-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-dukeBlue/30 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Tags on image */}
                  <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                    {(project.tags || []).slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-dukeBlue/80 text-white px-2 py-0.5 rounded-full backdrop-blur-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-2.5 flex-1">
                  <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-dukeBlue transition-colors duration-200">
                    {project.title}
                  </h4>

                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 flex-1">
                    {project.summary}
                  </p>

                  {/* Tech icons */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <img
                        key={tech._id}
                        src={tech.image}
                        alt={tech.title}
                        title={tech.title}
                        className="h-5 w-5 object-contain rounded transition-transform duration-200 hover:scale-125"
                      />
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="text-gray-400 text-[10px]">+{project.technologies.length - 6}</span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 pt-0.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-colors duration-200"
                      >
                        <CodeBracketIcon className="h-3 w-3" />
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dukeBlue text-white text-xs font-semibold hover:bg-dukeBlue/80 transition-colors duration-200"
                      >
                        <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover ring */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-dukeBlue/0 group-hover:ring-dukeBlue/30 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Background decoration */}
      <div className="w-full absolute top-1/3 bg-dukeBlue/4 left-0 h-[300px] -skew-y-6 pointer-events-none" />
    </motion.div>
  );
}
