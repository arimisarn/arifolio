import { RiReactjsLine } from "react-icons/ri"
import { BiLogoPostgresql } from "react-icons/bi"
import {SiDjango} from "react-icons/si"
import { TbBrandTailwind } from "react-icons/tb"
import { SiPhp } from "react-icons/si"
import { SiDocker } from "react-icons/si"
import {motion} from "framer-motion"


const iconMotion = (duration: number) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0], // Exemple de mouvement
    transition: {
      duration: duration,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop' as const // Utilisation d'un type littéral pour éviter l'erreur
    }
  }
})

const Techno = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
        <motion.h2 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration: 1.5}}
          className="my-20 text-center text-3xl">Technologies
        </motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1.5, }}
          className="flex flex-wrap items-center justify-center"
          >
          <motion.div 
            variants={iconMotion(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
            <RiReactjsLine className="text-6xl text-cyan-400" />
          </motion.div>
          <motion.div 
            variants={iconMotion(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
            <BiLogoPostgresql className="text-6xl text-sky-700" />
          </motion.div>
          <motion.div 
           variants={iconMotion(2.5)}
           animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
            <SiDjango className="text-6xl text-green-700" />
          </motion.div>
          <motion.div className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
            <TbBrandTailwind className="text-6xl text-blue-500" />
          </motion.div>
          <motion.div 
           variants={iconMotion(6)}
           initial="initial"
           animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
            <SiPhp className="text-6xl text-blue-600" />
          </motion.div>
          <motion.div 
            variants={iconMotion(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 m-4">
            <SiDocker className="text-6xl text-blue-500" />
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Techno
