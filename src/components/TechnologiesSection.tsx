"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import * as Icons from "react-icons/si"
import { portfolioData } from "../data/portfolio"

const TechnologiesSection: React.FC = () => {
  const { technologies } = portfolioData
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = {
    all: technologies,
    frontend: technologies.filter((tech) => tech.category === "frontend"),
    backend: technologies.filter((tech) => tech.category === "backend"),
    database: technologies.filter((tech) => tech.category === "database"),
    tools: technologies.filter((tech) => tech.category === "tools"),
  }

  const categoryLabels: Record<string, string> = {
    all: "Toutes",
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de données",
    tools: "Outils",
  }

  const displayedTechs = categories[activeCategory as keyof typeof categories]

  return (
    <section id="skills" className="py-20 px-4 relative bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 style={{ fontFamily: "Elms Sans, sans-serif" }} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies & Compétences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Mon stack technique et mes niveaux de maîtrise</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {Object.keys(categoryLabels).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md"
                }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {displayedTechs.map((tech, index) => {
            const IconComponent = Icons[tech.icon as keyof typeof Icons] as React.ComponentType<
              React.SVGProps<SVGSVGElement>
            >
            return (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 group-hover:shadow-lg transition-shadow"
                    >
                      <IconComponent
                        className="w-10 h-10 transition-transform duration-300"
                        style={{ color: tech.color }}
                      />
                    </motion.div>
                  </div>

                  <div className="text-center w-full">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{tech.name}</h3>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${tech.color}, ${tech.color}dd)`,
                        }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tech.level}%</p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent group-hover:from-blue-600/5 group-hover:to-indigo-600/5 transition-all duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologiesSection
