import React from 'react'
import './Slider.css'
import { motion } from 'framer-motion'
import images from '../../../exports/images'
import { Link } from "react-router-dom"



const SliderHome = () => {

  return (
    <>
      <motion.div className='slider-container'>
        <motion.div className='slider' drag='x'
          dragConstraints={{ right: 0, left: -420 }} >
          {images.map(image => (
            <motion.div className='item'>
              <div class="card">
                <div class="card-img">
                <img className='item-image' src={image} alt="Imagen producto" />
                </div>
                <div class="card-info">
                  <p class="text-title">[Nombre]</p>
                  <p class="text-body">Lorem Ipsum dolor sit amet</p>
                  <Link to='/compra'><button class="card-button">Ver más</button></Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>



    </>


  )
}

export default SliderHome