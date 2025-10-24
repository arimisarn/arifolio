"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango, SiTypescript, SiPostgresql, SiDocker } from "react-icons/si";
import propos from "../assets/propos.jpg";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen text-gray-900 dark:text-white transition-colors duration-500 py-24 px-6 sm:px-10 md:px-16 lg:px-[190px]"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
                {/* Image portrait */}
                <motion.div
                    className="flex-1 flex justify-center"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-[320px] sm:w-[380px] md:w-[420px] h-[420px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={propos}
                            alt="Portrait développeuse"
                            className="w-full h-full object-cover rounded-3xl brightness-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                        <Sparkles className="absolute top-5 right-6 text-yellow-400 animate-pulse w-7 h-7" />
                    </motion.div>
                </motion.div>

                {/* Texte + contenu */}
                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold flex items-center gap-3">
                        <Code2 className="text-indigo-500 w-8 h-8" />
                        À propos de moi
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        Je suis une <span className="font-semibold text-indigo-500">développeuse full-stack</span> passionnée par la création
                        d’expériences numériques modernes, performantes et esthétiques.
                        Mon objectif est de transformer des idées en solutions concrètes,
                        en unissant <span className="text-indigo-400 font-medium">design, logique et performance</span>.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        Formée en <strong>Informatique</strong>, j’ai acquis une solide maîtrise des technologies
                        web modernes telles que <strong>Django</strong>, <strong>React TypeScript</strong> et <strong>PostgreSQL</strong>.
                        J’accorde une grande importance à l’architecture logicielle, à la qualité du code et à la maintenabilité.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        J’aime collaborer sur des projets ambitieux, comprendre les besoins des utilisateurs et
                        concevoir des interfaces élégantes, accessibles et responsives.
                        Mon approche repose sur trois piliers : <span className="font-semibold text-indigo-500">clarté</span>,
                        <span className="font-semibold text-indigo-500"> cohérence</span> et
                        <span className="font-semibold text-indigo-500"> créativité</span>.
                    </p>

                    {/* Compétences techniques */}
                    <div className="flex flex-wrap items-center gap-6 pt-6">
                        <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-2">
                            <FaReact className="text-sky-500 w-6 h-6" />
                            <span>React</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-2">
                            <SiTypescript className="text-blue-600 w-6 h-6" />
                            <span>TypeScript</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-2">
                            <SiDjango className="text-emerald-600 w-6 h-6" />
                            <span>Django</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-2">
                            <FaPython className="text-yellow-500 w-6 h-6" />
                            <span>Python</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-2">
                            <SiPostgresql className="text-indigo-500 w-6 h-6" />
                            <span>PostgreSQL</span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-2">
                            <SiDocker className="text-blue-400 w-6 h-6" />
                            <span>Docker</span>
                        </motion.div>
                    </div>

                    {/* Citation */}
                    <motion.p
                        className="italic text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-300 dark:border-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        “Le code n’est pas seulement une suite d’instructions.
                        C’est une forme d’expression, un moyen de construire le futur.”
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
