import { CONT } from "../constants"
import {motion} from "framer-motion"



const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
        <motion.h2 
         whileInView={{opacity:1, y: 0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:1}}
         className="my-10 text-center text-3xl">
            Contact
        </motion.h2>
        <div className="text-center tracking-tighter">
        {CONT.map((cont, _) => (
           <motion.div
               >
             <motion.p 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1}}
              className="my-4">
                {cont.address}
                
            </motion.p>
            <motion.p 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:1}}
             className="my-4">
                {cont.num}
            </motion.p>
            <motion.p 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1}}
             className="my-4">
                {cont.mail}
            </motion.p>
           </motion.div>
            
             ))}
        </div>
    </div>
  )
}

export default Contact
