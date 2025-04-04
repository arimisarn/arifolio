import logo from '../assets/natha3.png'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


const NavBar = () => {
  return (
   <nav className="mb-2 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className='logo1' src={logo} alt="" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
      <a href="">
        <FaLinkedin className='hover:text-indigo-400 hover:text-3xl transition-all'/>
      </a>
      <a href="https://github/arimisarn">
        <FaGithub className='hover:text-indigo-400 hover:text-3xl transition-all'/>
      </a>
      <a href="">
        <FaInstagram className='hover:text-indigo-400 hover:text-3xl transition-all'/>
      </a>
    </div>
   </nav>
  )
}

export default NavBar
