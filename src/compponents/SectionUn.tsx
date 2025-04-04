import { SECTIONONE_PARAGRAPHE } from "../constants"
import profile from '../assets/a.jpeg.jpg'
import {motion} from "framer-motion"
import { BiDownload } from "react-icons/bi"
import cv from '../assets/CV/Intro IA 01.pdf'

const container = (delay: number) => ({
    hidden : {x: -100 , opacity:0},
    visible : {
        x: 0,
        opacity: 1,
        transition : {duration : 0.5 , delay : delay},
    },
})

const SectionUn = () => {
  return (
    <>
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-4xl font-thin tracking-tight lg:mt-16
                    lg:text-6xl"
                    >
                        Arimisa Nathalie
                    </motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
                    >
                        Développeuse
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-1 font-light tracking-tighter m-5 sm:m-0">
                        {SECTIONONE_PARAGRAPHE}
                    </motion.p>
                    <motion.div
                    variants={container(1.5)}
                    initial="hidden"
                    animate="visible"
                    >
                        <a 
                        download
                        href={cv}
                        className="flex items-center justify-around border my-3 bg-violet-500 p-2 rounded-md font-bold text-violet-950 border-violet-500 shadow-2xl hover:bg-violet-400 transit hover:border-violet-400"
                        >
                            <div>
                            Telecharger mon CV
                            </div>
                            <div>
                            <BiDownload className="m-1 text-lg"/> 
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <motion.div className="flex justify-center overflow-hidden" 
                whileHover={{scale:1.05,rotate:5}} >
                    <motion.img 
                    initial={{ x: 100, opacity: 0}}
                    animate={{ x:0, opacity: 1}}
                    transition={{duration:1, delay: 1.2}}
                    className="profile transition-transform duration-300" 
                    src={profile} 
                    alt="" 
                    />
                </motion.div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SectionUn
