import React from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/si";
import { portfolioData } from "../data/portfolio";

const TechnologiesSection: React.FC = () => {
  const { technologies } = portfolioData;

  const categories = {
    frontend: technologies.filter((tech) => tech.category === "frontend"),
    backend: technologies.filter((tech) => tech.category === "backend"),
    database: technologies.filter((tech) => tech.category === "database"),
    tools: technologies.filter((tech) => tech.category === "tools"),
  };

  const categoryNames = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de données",
    tools: "Outils",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([category, techs]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {categoryNames[category as keyof typeof categoryNames]}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="space-y-3"
              >
                {techs.map((tech) => {
                  const IconComponent = Icons[
                    tech.icon as keyof typeof Icons
                  ] as React.ComponentType<{ className?: string }>;
                  return (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <span style={{ color: tech.color }}>
                        <IconComponent className="w-6 h-6" />
                      </span>

                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
