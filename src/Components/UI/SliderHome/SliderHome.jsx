import React from 'react'
import './Slider.css'
import { motion } from 'framer-motion'
import images from '../../../exports/images'
import extra from '../../Image/assects/pax.jpg'

const SliderHome = () => {
  /*
    const Content = document.getElementById('content');
    const btn = document.querySelector('#btn_create');
    const btnCancel = document.querySelector('#cancel');
    
    btnCancel.addEventListener('click', off);
    btn.addEventListener("click", see);
    
    function off(params) {
    Content.style.display = 'none';
    }
    function see() {
    Content.style.display = 'flex';
    }*/

  return (
    <>
      <motion.div className='slider-container'>
        <motion.div className='slider' drag='x'
          dragConstraints={{ right: 0, left: -1323 }} >
          {images.map(image => (
            <motion.div className='item'>

              <img className='item-image' src={image} alt="Imagen producto" />

            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className='all2'>
        <div id="content" >

          <div className='img_send'>
            <img className='img_edit' src={extra} alt="Imagen producto" />
            <div className="btn_send">
              <button type="submit" id="Send" class="create">Comprar</button>
              {/* <button type="submit" id="reser" class="create" disabled>Reservar</button> */}
              <button type="submit" id="cancel" class="create">Añadir al carrito</button>
              <button type="submit" id="cancel" class="create">Cancelar</button>
            </div>
          </div>
          <div className="content_send">
            <label for="product" class="text_send">Nombre del producto</label>
            <p className='text_send2'>Pax noche</p>

            <label for="price" class="text_send">Precio</label>
            <p className='text_send2'>$3000</p>

            <label for="price" class="text_send">Cantidad disponible</label>
            <p className='text_send2'>4</p>

            <label for="price" class="text_send">Descripción</label>
            <p className='text_send2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus harum animi tempore nihil officiis ea hic quod neque ex nisi error, commodi suscipit facilis esse vel dolor, adipisci aliquid.</p>


          </div>


        </div>

      </div>

    </>


  )
}

export default SliderHome