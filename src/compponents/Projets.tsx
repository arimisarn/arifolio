import { PROJETS } from "../constants"
import {motion} from "framer-motion"



const Projets = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
        <motion.h2
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1}}
            className="my-20 text-center text-3xl">
            Projets
        </motion.h2>
        <div>
            {PROJETS.map((projet, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                     whileInView={{opacity:1, x:0}}
                     initial={{opacity:0, x:-100}}
                     transition={{duration:1}}
                     className="w-full lg:w-1/4">
                        <img 
                        width={150}
                        height={150}
                        src={projet.images}
                        className="mb-6 ml-5 rounded"
                        alt="" />
                    </motion.div>
                    <motion.div 
                     whileInView={{opacity:1, x:0}}
                     initial={{opacity:0, x:100}}
                     transition={{duration:1}}
                     className="m-5 sm:m-0 w-full.lg:w-3/4 max-w-xl">
                        <h6 className="mb-2 font-semibold">
                            {projet.titre}
                        </h6>
                        <p className="mb-4  text-neutral-400">
                            {projet.description}
                        </p>
                        {projet.techno.map((techs, index) => (
                            <span key={index} 
                                className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium
                                text-purple-800"
                                >
                                {techs}
                            </span>
                        ))}
                    </motion.div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Projets
