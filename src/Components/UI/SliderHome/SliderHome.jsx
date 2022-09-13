import React from 'react'
import './Slider.css'
import { motion } from 'framer-motion'
import images from '../../../exports/images'

const SliderHome = () => {
  return (
    <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-1323}} >
        {images.map(image => (
            <motion.div className='item'>
                <img className='item-image' src={image} alt="" />
            </motion.div>
        ))}
        </motion.div>
    </motion.div>
  )
}

export default SliderHome