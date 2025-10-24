import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Award } from "lucide-react";

const Navigation: React.FC = () => {
  const navItems = [
    { icon: Home, label: "Accueil", href: "home" },
    { icon: User, label: "À propos", href: "about" },
    { icon: Award, label: "Expériences", href: "experience" },
    { icon: Briefcase, label: "Projets", href: "projects" },
    { icon: Code, label: "Compétences", href: "skills" },
    { icon: Mail, label: "Contact", href: "contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="w-full sm:w-auto sm:relative lg:fixed lg:left-6 lg:top-1/2 lg:-translate-y-1/2 z-40 flex sm:block justify-center sm:justify-start mb-4 sm:mb-0 fixed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="flex mx-1 sm:mx-0 flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/20 dark:border-white/10 shadow-lg">
        {navItems.map((item, index) => (
          <motion.button
            key={item.href}
            onClick={() => handleScroll(item.href)}
            className="group relative p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 + index * 0.1 }}
          >
            <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800 dark:text-white group-hover:text-purple-500 transition-colors" />
            <motion.div
              className="absolute left-full ml-4 px-3 py-2 bg-gray-900/90 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none shadow-md hidden sm:block"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              {item.label}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
