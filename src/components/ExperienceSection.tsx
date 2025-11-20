import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Code, Timer } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const ExperienceSection: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "Elms Sans, sans-serif" }} 
          className=" text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Expériences
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800"></div>

              {/* Content */}
              <div className="ml-16 bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Timer className="w-4 h-4" />
                      {experience.temps}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Technologies utilisées:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
