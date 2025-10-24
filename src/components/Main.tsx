import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Facebook, Mail, Download, Code2, Sparkles, ChevronDown } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import cv from "../assets/Arimisa-Nathalie-CV.pdf"

const Main: React.FC = () => {
  const { personal } = portfolioData;
  const [displayText, setDisplayText] = useState("");
  const roles = ["Développeuse Full Stack", "Créatrice d'Interfaces", "Résolutrice de Problèmes"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {personal.photo && (
              <>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 blur-md opacity-75"
                  style={{ padding: "4px" }}
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  src={personal.photo}
                  alt={personal.name}
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
                />
              </>
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-lg"
            >
              <Code2 className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Bienvenue sur mon portfolio
            </span>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400">
              {personal.name}
            </span>
          </h1>

          <div className="h-20 md:h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              <span className="inline-flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-0.5 h-8 bg-blue-600 dark:bg-blue-400"
                />
              </span>
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {personal.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Me Contacter
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={cv}
            download="Arimisa-Nathalie-CV.pdf"
            className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-md hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Télécharger CV
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center items-center gap-6 mb-10"
        >
          {personal.github && (
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <Github className="w-7 h-7" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </motion.a>
          )}
          {personal.linkedin && (
            <motion.a
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <Facebook className="w-7 h-7" />
            </motion.a>
          )}
          <motion.a
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href={`mailto:${personal.email}`}
            className="group relative p-4 bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <Mail className="w-7 h-7" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">Découvrir plus</span>
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

export default Main;
