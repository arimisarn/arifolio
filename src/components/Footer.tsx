"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Github,
  Mail,
  Code2,
  TerminalSquare,
  Globe,
  Cpu,
} from "lucide-react";
import {
  FaReact,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  // ✅ Référence du footer pour l’animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ Fonction pour le défilement fluide
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    { icon: <FaReact className="text-sky-500" />, name: "React" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "TailwindCSS" },
    { icon: <SiDjango className="text-emerald-500" />, name: "Django" },
    { icon: <SiPostgresql className="text-indigo-500" />, name: "PostgreSQL" },
    { icon: <FaDocker className="text-blue-500" />, name: "Docker" },
    { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
  ];

  const socialLinks = [
    { icon: <Github />, href: "https://github.com/arimisarn", label: "GitHub" },
    // { icon: <Linkedin />, href: "https://linkedin.com/in/arimisarn", label: "LinkedIn" },
    { icon: <Mail />, href: "mailto:arimisa.dev@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Accueil", id: "home" },
    { name: "À propos", id: "about" },
    { name: "Projets", id: "projects" },
    { name: "Compétences", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer
      ref={ref}
      className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white relative
        transition-colors duration-500 py-16 px-6 sm:px-10 md:px-16 lg:px-[190px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12"
      >
        {/* ----------------- Bloc Identité ----------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/3"
        >
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="text-indigo-500" />
            <h2 className="text-2xl font-bold">
              Arimisa Nathalie <span className="text-indigo-500">.</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Développeuse Fullstack spécialisée dans la création d’applications
            performantes et intuitives. J’aime fusionner créativité et logique
            pour concevoir des interfaces à impact.
          </p>
          <p className="italic text-sm text-gray-500 dark:text-gray-400">
            “Je code pour résoudre, apprendre et créer des expériences utiles.”
          </p>
        </motion.div>

        {/* ----------------- Bloc Stack ----------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-1/3"
        >
          <h3 className="text-lg font-semibold mb-4 text-indigo-500 flex items-center gap-2">
            <Cpu size={18} /> Stack technique
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="text-2xl">{tech.icon}</div>
                <span className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ----------------- Bloc Contact ----------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="md:w-1/3 text-center md:text-right"
        >
          <h3 className="text-lg font-semibold mb-4 text-indigo-500 flex items-center gap-2 justify-center md:justify-end">
            <TerminalSquare size={18} /> Connectons-nous
          </h3>

          <motion.div
            className="flex justify-center md:justify-end gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-indigo-500 hover:text-white
                  transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          <a
            href="mailto:arimisa.dev@gmail.com"
            className="inline-block px-5 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition-all duration-300"
          >
            Me contacter
          </a>
        </motion.div>
      </motion.div>

      {/* ----------------- Ligne + bas du footer ----------------- */}
      <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 mt-16 mb-8"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400"
      >
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
          {quickLinks.map((link, i) => (
            <li key={i}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="hover:text-indigo-400 transition-colors duration-300 cursor-pointer bg-transparent border-none focus:outline-none"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <Globe className="w-4 h-4" />
          <p>
            © {year} <span className="font-semibold">Arimisa Nathalie</span>.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
