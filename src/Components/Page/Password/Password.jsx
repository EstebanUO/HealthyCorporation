import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'




export const Password = () => {
  return (
    <div>
      <Header />
      <div className='acount_up'>
        <div className="acount_all">
          <div className='all_info'>
            <div className='info'>
              <Link to='/acount' className='aa'>Mis datos</Link>
              <Link to='/direction' className='b'>Mis direcciones</Link>
              <Link to='/tarjet' className='c'>Mis tarjetas</Link>
              <Link to='/password' className='select_btn'>Mi contraseña</Link>
            </div>
          </div>


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
      </div>
      <Footer />
    </div>
  )
}
