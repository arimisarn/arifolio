import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useDarkMode } from "./hooks/useDarkMode";
import LoadingScreen from "./components/LoadingScreen";
import DarkModeToggle from "./components/DarkModeToggle";
import ParticleBackground from "./components/ParticleBackground";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import TechnologiesSection from "./components/TechnologiesSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import arifolio from "./assets/arifolio.png";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  const [loading, setLoading] = useState(true);
  const { isDark, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <LoadingScreen onComplete={() => setLoading(false)} />
      </AnimatePresence>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""
        }`}
    >
      <div
        className={`
          min-h-screen relative
          bg-gradient-to-br
          from-white via-blue-100 to-indigo-200
          dark:from-gray-900 dark:via-gray-800 dark:to-black
          transition-all duration-500
        `}
      >
        <ParticleBackground isDark={isDark} />
        <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
        {/* Logo desktop : fixe en haut à gauche */}
        <img
          src={arifolio}
          alt="Arifolio"
          className={`hidden lg:block fixed top-6 left-6 w-40 z-50 transition-all duration-500 drop-shadow-lg ${isDark ? "opacity-70" : "opacity-90"
            }`}
        />

        {/* Logo mobile : centré au-dessus du contenu */}

        <Navigation />

        <main className="relative z-10">
          <Main />
          <About />

          <TechnologiesSection />
          <ExperienceSection />
          <ProjectsSection />
          <Contact />

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
