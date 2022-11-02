import React, { useState } from "react";
import './Slider.css'
import { motion } from 'framer-motion'
// import images from '../../../exports/images'
import { Link } from "react-router-dom"
import axios from "axios"



const SliderHome = () => {
  const baseURL = "https://api-products-healthy.herokuapp.com/api/healthyapp";
  const [img, setimg] = useState([])

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setimg(response.data);

    });
  }, []);



  return (
    <>
      <motion.div className='slider-container'>
        <motion.div className='slider' drag='x'
          dragConstraints={{ right: 0, left: -420 }} >

          {img.map(data => {
            <motion.div className='item'>
              <div class="card">
                <div class="card-img">
                  <img className='item-image' src={data.imagen} alt="Imagen producto" />
                </div>
                <div class="card-info">
                  <p class="text-title">{ }</p>

                  <p class="text-body"><b>{ }</b></p>
                  <Link to='/compra'><button class="card-button">Ver más</button></Link>
                </div>
              </div>
            </motion.div>
          })

          }




        </motion.div>
      </motion.div>
    </>
  )
}

export default SliderHome