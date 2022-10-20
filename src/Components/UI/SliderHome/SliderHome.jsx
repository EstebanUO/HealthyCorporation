import React from 'react'
import './Slider.css'
import { motion } from 'framer-motion'
import images from '../../../exports/images'



const SliderHome = () => {

  return (
    <>
      <motion.div className='slider-container'>
        <motion.div className='slider' drag='x'
          dragConstraints={{ right: 0, left: -700 }} >
          {images.map(image => (
            <motion.div className='item'>

              <div class="card">
                <div class="header">
                  <div class="img-box">
                    <div className='item'>
                    <img className='item-image' src={image} alt="Imagen producto" />
                    </div>
                    
                  </div>
                </div>

                <div class="content">
                  <h3 className='text_card'>[Nombre]</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing it amet it...
                  </p>

                  <a class="btn-link" href='/compra'>Ver mas</a>
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