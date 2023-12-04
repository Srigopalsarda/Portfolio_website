import React from 'react'
import {motion} from 'framer-motion'
import './App.css'
function Transition(OgComponent) {
  return()=>(
    <>  
    <OgComponent/>
     <motion.div 
      className="slide-in-entrance"
      initial={{scaleY:0}}
      animate={{scaleY:0}}
      exit={{scaleY:1}}
      transition={{duration:1.6,ease:[ 0.8,0.01, -0.05,0.9]}}
      /> 
     <motion.div className="slide-out-entrance" 
     initial={{scaleY:1}}
      animate={{scaleY:0 }}
      exit={{scaleY:0}}
      transition={{duration:1.6,ease:[ 0.8,0.01, -0.05,0.6]}}
      
      // transition={{duration:3, ease:[ 0.6, 0.01, -0.05, 0.9]}}
      />
    </>
  )
}

export default Transition;
