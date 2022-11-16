import React, { useState } from "react";
import './Slider.css'
import { motion } from 'framer-motion'
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

          {img.map((data) => (
          
            <motion.div key={data.id} className='item'>
              <div className="card">
                <div className="card-img">
                  <img className='item-image' src={"https://api-products-healthy.herokuapp.com"+data.imagen} alt="Imagen producto" />
                </div>
                <div className="card-info">
                  <p className="text-title">{data.nombre}</p>

                  <p className="text-body"><b>Precio:</b> {data.price}</p>
                  <Link to='/compra'><button className="card-button">Ver más</button></Link>
                </div>
              </div>
            </motion.div> 
          ))
          }
        </motion.div>
      </motion.div>
    </>
  )
}

export default SliderHome