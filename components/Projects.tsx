import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Project } from "../typings";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, TagIcon } from "@heroicons/react/24/solid";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
      className="min-h-screen relative flex flex-col text-left max-w-full justify-start mx-auto items-center z-0 py-24 px-6 md:px-10"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl mb-2">
        Projects
      </h3>
      <p className="text-gray-400 text-sm mb-6 tracking-widest uppercase">
        {projects.length} projects — hover to explore
      </p>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 max-w-5xl">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 border ${
              activeFilter === tag
                ? "bg-dukeBlue text-white border-dukeBlue shadow-lg scale-105"
                : "bg-white text-gray-500 border-gray-200 hover:border-dukeBlue hover:text-dukeBlue"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project._id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onHoverStart={() => setHoveredId(project._id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-dukeBlue/30"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
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
              <div className="p-5 flex flex-col gap-3">
                <h4 className="font-bold text-gray-900 text-base leading-snug group-hover:text-dukeBlue transition-colors duration-200">
                  {project.title}
                </h4>

                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Tech stack */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <div key={tech._id} className="relative group/tech">
                      <img
                        src={tech.image}
                        alt={tech.title}
                        className="h-6 w-6 object-contain rounded transition-transform duration-200 hover:scale-125"
                        title={tech.title}
                      />
                    </div>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-gray-400 text-xs">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-colors duration-200"
                    >
                      <CodeBracketIcon className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dukeBlue text-white text-xs font-semibold hover:bg-dukeBlue/80 transition-colors duration-200"
                    >
                      <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                  {!project.demoUrl && project.linkToBuild && project.linkToBuild !== project.githubUrl && (
                    <a
                      href={project.linkToBuild}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dukeBlue text-dukeBlue text-xs font-semibold hover:bg-dukeBlue hover:text-white transition-colors duration-200"
                    >
                      <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                      View
                    </a>
                  )}
                </div>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-dukeBlue/0 group-hover:ring-dukeBlue/40 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Background decoration */}
      <div className="w-full absolute top-[30%] bg-dukeBlue/5 left-0 h-[500px] -skew-y-6 pointer-events-none" />
    </motion.div>
  );
}
