import React from 'react'
import './Slider.css'
import { motion } from 'framer-motion'
import images from '../../../exports/images'



const SliderHome = () => {

  // const onSee = () => {document.getElementById("content_det").style.display = 'flex'};
  // const onBlock = () => {document.getElementById("content_det").style.display = 'none'};


  return (
    <> 
      <motion.div className='slider-container'>
        <motion.div className='slider' drag='x'
          dragConstraints={{ right: 0, left: -900 }} >
          {images.map(image => ( 
            <motion.div  className='item'>
              <div className='link'  >
              <img  className='item-image' src={image} alt="Imagen producto" />
              
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
     
    

    </>


  )
}

export default SliderHome