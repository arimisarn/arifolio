import NavBar from "./compponents/NavBar"
import SectionUn from "./compponents/SectionUn"
import About from "./compponents/About"
import Techno from "./compponents/Techno"
import Experience from "./compponents/Experience"
import Projets from "./compponents/Projets"
import Contact from "./compponents/Contact"
import './App.css'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-300 
    selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      </div>
        </div>
        <div className="container mx-auto px-8gi">
          <NavBar />
          <SectionUn />
          <About />
          <Techno />
          <Experience />
          <Projets />
          <Contact />
        </div>
    
    </div>
  )
}

export default App
