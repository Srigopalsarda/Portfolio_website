import React from 'react'
import {motion} from 'framer-motion'
import './App.css'
function Transition(OgComponent) {
  return()=>(
    <>
    <OgComponent/>
     <motion.div 
      className="slide-left-in"
      initial={{scalex:0}}
      animate={{scaleX:0}}
      exit={{scaleX:1}}
      transition={{duration:2,ease:[ 0.6, 0.01, -0.05, 0.9]}}
      /> 
     <motion.div className="slide-left-out" 
     initial={{scaleX:1}}
      animate={{scaleX:0 }}
      exit={{scaleX:0}}
      transition={{duration:2, ease:[ 0.6, 0.01, -0.05, 0.9]}}
      />
    </>
  )
}

export default Transition;
