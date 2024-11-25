import React from "react";

import { motion } from "motion/react"



function Marquee({imagesurls,direction}) {

    return(

        <div className="flex w-full overflow-hidden  ">
          
          <motion.div 
          initial={{x:direction ==="left" ? "0": "-100%"}} 
          animate={{x:direction ==="left" ? "-100%": "0"}} 
          transition={{ease:"linear",duration:20 , repeat: Infinity}} 
          className="flex flex-shrink-0 gap-28 py-10 pr-40">
          {imagesurls.map( (url,index) => <img  key={index} src= {url} className=""/>)}
          </motion.div> 
          
          
          <motion.div 
          initial={{x:direction ==="left" ? "0": "-100%"}} 
          animate={{x:direction ==="left" ? "-100%": "0"}} 
          transition={{ease:"linear",duration:20 , repeat: Infinity}} 
          className="flex flex-shrink-0 gap-28 py-10 pr-40">
          {imagesurls.map( (url,index) => <img  key={index} src= {url} className=""/>)}
          </motion.div> 
          
        </div>


    )}
//  py-8 gap-20 whitespace-nowrap overflow-hidden

export default Marquee