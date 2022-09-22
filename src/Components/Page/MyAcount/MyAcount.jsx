import React from 'react'
import { Info } from '../../UI/Info/Info'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import img_right from '../../Image/flecha.png'


export const MyAcount = () => {
  return (
    <div>
      <Header />
      <div className="acount_all">
        <Info />
        <img className='lineal_img' src={img_right} alt="Imagen derecha"  />

        <div className='acount_content_all'>
          <div className='acount_content_direction'>
            <p>Nombre</p>
            <input type="text" value="" placeholder='none' />
          </div>

        </div>
      </div>


      <Footer />
    </div>
  )
}
