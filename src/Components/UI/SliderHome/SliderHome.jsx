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

  // --------------------- compra  ----------------------------

  /*no eliminar este usestate por que se cae la pagina*/
  const [products_3, setProducts_3] = useState([]);
  /*/////////////////////////////////////////////////*/
  let validDatos_2 = (localStorage.getItem("product"));
  const add_2 = (e) => {
      setProducts_3(products_3 => products_3.concat(e.target.value)) 
     
      validDatos_2 === null ? validDatos_2=[] : validDatos_2=JSON.parse(validDatos_2)
      localStorage.setItem('product', JSON.stringify(validDatos_2))

      JSON.stringify(localStorage.setItem("product", e.target.value))
      console.log(e.target.value)
  }

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
                  <Link to='/compra'><button className="card-button"  onClick={(e) => { add_2(e) }} value={data.id}>Ver más</button></Link>
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