import React from 'react'
import { Link } from 'react-router-dom'

import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'




export const Direction = () => {
  return (
    <div>
      <Header />
      <div className='acount_up'>
        <div className="acount_all">
          <div className='all_info'>
            <div className='info'>
              <Link to='/acount' className='aa'>Mis datos</Link>
              <Link to='/direction' className='select_btn'>Mis direcciones</Link>
              <Link to='/tarjet' className='c'>Mis tarjetas</Link>
              <Link to='/password' className='d'>Mi contraseña</Link>
            </div>
          </div>

          <div className='acount_content_all'>
            <div className='acount_content_direction'>
              <p className='text_check'>Dirección</p>
              <input className='input_acount' placeholder='Ingresa tu direccion de residencia' type="text" value="" />
            </div><br />

            <div className='acount_content_row'>
              <div className='acount_content_direction2'>
                <p className='text_check'>Ingresa tu ciudad</p>
                <input className='input_acount2' placeholder='Ingresa tu ciudad' type="text" value="" />
              </div>
              <div className='acount_content_direction2'>
                <p className='text_check'>Ingresa tu localidad</p>
                <input className='input_acount2' placeholder='Ingresa tu localidad' type="text" value="" />
              </div>
            </div><br />

            <div className='acount_content_row'>
              <div className='acount_content_direction2'>
                <p className='text_check'>Casa | Depto | Oficina </p>
                <input className='input_acount2' placeholder='Ingresa la numeración' type="number" value="" />
              </div>
              <div className='acount_content_direction2'>
                <p className='text_check'>Nombre de la dirección</p>
                <input className='input_acount2' placeholder='Ej: Departamento' type="text" value="" />
              </div>
            </div>

            <div className='acount_btn'>
              <button className='btn_save'>Guardar</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
