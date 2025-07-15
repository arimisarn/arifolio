import React from "react";
import { motion } from "framer-motion";
import { Github, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import arifolio from "../assets/arifolio.png";

const Main: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center z-10">
        <div className="lg:hidden mb-6 flex justify-center">
          <img
            src={arifolio}
            alt="Arifolio"
            className="w-[300px] drop-shadow-md opacity-90"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {personal.photo && (
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              src={personal.photo}
              alt={personal.name}
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg object-cover"
            />
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {personal.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6"
          >
            {personal.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            {personal.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            {personal.email}
          </a>
          <a
            href={`tel:${personal.phone}`}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {personal.phone}
          </a>
          <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
            <MapPin className="w-4 h-4" />
            {personal.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-4"
        >
          {personal.github && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          )}
          {personal.linkedin && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Main;
