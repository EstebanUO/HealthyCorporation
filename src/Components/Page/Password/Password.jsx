import React from 'react'
import { Info } from '../../UI/Info/Info'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import img_right from '../../Image/flecha.png'



export const Password = () => {
  return (
    <div>
      <Header />
      <div className="acount_all">
        <Info />
        <img className='lineal_img3' src={img_right} alt="Imagen derecha" />

        <div className='acount_content_all'>
          <div className='acount_content_direction'>

            <div className='acount_content_direction'>
              <p>Contraseña actual</p>
              <input className='input_acount' placeholder='Ingresa tu contraseña actual' minlength="8" type="password" value="" />
            </div><br />

            <div className='acount_content_row'>
              <div className='acount_content_direction2'>
                <p>Nueva contraseña</p>
                <input className='input_acount2' placeholder='Ingresa la nueva contraseña' minlength="8" type="password" value="" />
              </div>
              <div className='acount_content_direction2'>
                <p>Confirmar contraseña</p>
                <input className='input_acount2' placeholder='Ingresa de nuevo la contraseña' minlength="8" type="password" value="" />
              </div>
            </div>
          </div>

          <div className='acount_btn'>
            <button className='btn_save'><s>Guardar</s> </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
