import fiteny from "../assets/fiteny flow.png";
import pf from "../assets/IMG_20250510_150605~2.jpg";
import tsinjo from "../assets/tsinjo.png"

export interface Technology {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
  color: string;
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
    { name: "React", icon: "SiReact", category: "frontend", color: "#61DAFB" },
    {
      name: "TypeScript",
      icon: "SiTypescript",
      category: "frontend",
      color: "#3178C6",
    },
    {
      name: "Tailwind CSS",
      icon: "SiTailwindcss",
      category: "frontend",
      color: "#06B6D4",
    },
    { name: "Django", icon: "SiDjango", category: "backend", color: "#092E20" },
    {
      name: "PostgreSQL",
      icon: "SiPostgresql",
      category: "database",
      color: "#336791",
    },
    { name: "Docker", icon: "SiDocker", category: "tools", color: "#2496ED" },
    { name: "Git", icon: "SiGit", category: "tools", color: "#F05032" },
    { name: "GitHub", icon: "SiGithub", category: "tools", color: "#181717" },
    { name: "Postman", icon: "SiPostman", category: "tools", color: "#FF6C37" },
  ],
  experiences: [
    {
      title: "Stagiaire Développeuse",
      company: "NosyTech",
      location: "Andoharanofotsy, Madacascar",
      period: "Octobre 2024 - Juin 2025",
      description: [
        "Collaboration avec une équipe de développeurs seniors",
        "Mise en place de tests unitaires et d'intégration avec Vue JS",
      ],
      technologies: ["Vue JS", "Docker", "Git", "JavaScript"],
      temps: "Temps partiel",
    },
  ],
  projects: [
    {
      title: "FitenyFlow",
      description:
        "Plateforme de reformulation de phrase en Anglais ou Français",
      technologies: ["React", "Meta Llama", "TypeScript", "Tailwindcss"],
      githubUrl: "https://github.com/arimisarn/FitenyFlow",
      liveUrl: "https://fiteny-flow.vercel.app",
      image: fiteny,
    },
    {
      title: "Tsinjool",
      description: "Plateforme de coaching personnalisé via IA",
      technologies: ["React", "TypeScript", "Django", "PostgreSQL", "Mistral"],
      githubUrl: "https://github.com/arimisarn/Tsinjool",
      liveUrl: "https://tsinjool.vercel.app",
      image: tsinjo,
    },
  ],
};
