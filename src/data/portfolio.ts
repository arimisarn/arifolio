import fiteny from "../assets/fiteny flow.png";
import pf from "../assets/IMG_20250510_150605~2.jpg";
import tsinjo from "../assets/tsinjo.png";
import nathagram from "../assets/nathagram.png";
import lorie from "../assets/lorie.png"

import tailwind from "../assets/tailwind-css-trainer.png";

export interface Technology {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools" | "mobile";
  color: string;
  level?: number; // Niveau de maîtrise (0-100)
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  temps: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    photo?: string;
    github?: string;
    linkedin?: string;
  };
  technologies: Technology[];
  experiences: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Arimisa Nathalie",
    title: "Développeuse Junior",
    description:
      "Passionnée par le développement web et les nouvelles technologies. J'aime créer des solutions innovantes et apprendre constamment.",
    email: "arimisa.dev@email.com",
    phone: "+33 ",
    location: "Antananarivo, Madagascar",
    photo: pf,
    github: "https://github.com/arimisarn",
    linkedin: "https://facebook.com/hary.randria.121",
  },
  technologies: [
    {
      name: "HTML",
      icon: "SiHtml5",
      category: "frontend",
      color: "#df690f",
      level: 90,
    },
    {
      name: "CSS",
      icon: "SiCss3",
      category: "frontend",
      color: "#4f46e5",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: "SiJavascript",
      category: "frontend",
      color: "#eab308",
      level: 90,
    },
    {
      name: "TypeScript",
      icon: "SiTypescript",
      category: "frontend",
      color: "#3178C6",
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: "SiTailwindcss",
      category: "frontend",
      color: "#06B6D4",
      level: 90,
    },
    {
      name: "React",
      icon: "SiReact",
      category: "frontend",
      color: "#61DAFB",
      level: 85,
    },
    {
      name: "Next.js",
      icon: "SiNextdotjs",
      category: "frontend",
      color: "#ffffff",
      level: 70,
    },
    {
      name: "Django",
      icon: "SiDjango",
      category: "backend",
      color: "#092E20",
      level: 85,
    },
    {
      name: "Python",
      icon: "SiPython",
      category: "backend",
      color: "#eab308",
      level: 90,
    },
    {
      name: "PostgreSQL",
      icon: "SiPostgresql",
      category: "database",
      color: "#336791",
      level: 70,
    },
    {
      name: "MySQL",
      icon: "SiMysql",
      category: "database",
      color: "#336791",
      level: 60,
    },
     {
      name: "Sqlite",
      icon: "SiSqlite",
      category: "database",
      color: "#336791",
      level: 60,
    },
    {
      name: "Docker",
      icon: "SiDocker",
      category: "tools",
      color: "#2496ED",
      level: 60,
    },
    {
      name: "Git",
      icon: "SiGit",
      category: "tools",
      color: "#F05032",
      level: 70,
    },
    {
      name: "GitHub",
      icon: "SiGithub",
      category: "tools",
      color: "#181717",
      level: 70,
    },
    {
      name: "Postman",
      icon: "SiPostman",
      category: "tools",
      color: "#FF6C37",
      level: 60,
    },
  ],
  experiences: [
    {
      title: "Développeuse full-stack",
      company: "Abba Villa Host",
      location: "Varsovie , Pologne",
      period: "Octobre 2025 - Maintenant",
      description: [
        "Développement d’applications web fullstack avec Django (backend) et React + TypeScript (frontend)",
        "Gestion de projets via conteneurs Docker et accès SSH pour le déploiement et la maintenance.",
        "Collaboration avec l’équipe sur des workflows CI/CD, optimisation des performances et modularité du code.",
      ],
      technologies: ["Django", "React", "Docker", "Python", "TypeScript"],
      temps: "À distance - Temps partiel",
    },
    {
      title: "Enseignante en technologie frontend",
      company: "IS-IESI",
      location: "Ambatomainty, Madacascar",
      period: "Août 2025 - Maintenant",
      description: [
        "Formation des étudiants aux technologies moderne.",
        "Développement de support pédagodique. ",
        "Mentorat sur des projets .",
      ],
      technologies: ["HTML", "CSS", "JS", "Tailwindcss", "ReactJs"],
      temps: "Temps partiel",
    },
    {
      title: "Stagiaire Développeuse",
      company: "NosyTech",
      location: "Andoharanofotsy, Madacascar",
      period: "Octobre 2024 - Juin 2025",
      description: [
        "Collaboration avec une équipe de développeurs seniors.",
        "Mise en place de tests unitaires et d'intégration avec Vue JS / HTML / CSS / JS.",
      ],
      technologies: ["Vue JS", "Docker", "Git", "JavaScript"],
      temps: "Temps partiel",
    },
  ],
  projects: [
    {
      title: "Tsinjool",
      description: "Plateforme de coaching personnalisé via IA",
      technologies: ["React", "TypeScript", "Django", "PostgreSQL", "Mistral"],
      githubUrl: "https://github.com/arimisarn/Tsinjool",
      liveUrl: "https://tsinjool.vercel.app",
      image: tsinjo,
    },
    {
      title: "FitenyFlow",
      description:
        "Plateforme de reformulation & traduction de phrase en Anglais ou Français",
      technologies: ["React", "Meta Llama", "TypeScript", "Tailwindcss"],
      githubUrl: "https://github.com/arimisarn/FitenyFlow",
      liveUrl: "https://fiteny-flow.vercel.app",
      image: fiteny,
    },

    {
      title: "Tailwind-css-trainer",
      description: "Plateforme d'exercice / quiz sur les bases de Tailwind CSS",
      technologies: ["React", "TypeScript", "Tailwindcss"],
      githubUrl: "https://github.com/arimisarn/Tailwind-css-trainer",
      liveUrl: "https://tailwind-css-trainer.vercel.app",
      image: tailwind,
    },
    {
      title: "Nathagram",
      description: "Site de Réseau social inspiré de Facebook et Instagram",
      technologies: [
        "React",
        "Django",
        "TypeScript",
        "Tailwindcss",
        "Python",
        "PostgreSQL",
      ],
      githubUrl: " ",
      liveUrl: " ",
      image: nathagram,
    },
      {
      title: "Nathagram",
      description: "Site de Réseau social inspiré de Facebook et Instagram",
      technologies: [
        "NextJS",
        "TypeScript",
        "Tailwindcss",
      ],
      githubUrl: " ",
      liveUrl: "https://marilialauriane.vercel.app/",
      image: lorie,
    },
  ],
};
