import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="
        py-8 px-4
        bg-gray-100 text-gray-900
        dark:bg-gray-900 dark:text-white
        relative
        transition-colors duration-500
      "
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2"
        >
          <span>Arimisa Nathalie • {new Date().getFullYear()}</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mt-2"
        >
          Arifolio - Portfolio
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
