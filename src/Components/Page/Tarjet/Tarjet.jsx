import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import cerrar from '../../Image/Icons/cerrar.png';



export const Tarjet = () => {
  return (
    <div>
      <Header /><br /><br />
      <div className='acount_up'>
        <div className="acount_all">
          <div className='all_info'>
            <div className='info'>
              <Link to='/account' className='aa'>Mis datos</Link>
              <Link to='/direction' className='b'>Mis direcciones</Link>
              <Link to='/tarjet' className='select_btn'>Mis tarjetas</Link>
              <Link to='/password' className='d'>Mi contraseña</Link>
              <span className='btnCerrarSesion' role="button"><img src={cerrar} alt="cerrarSesion" className='cerrarSesion'/> Cerrar sesión</span>
            </div>
          </div>

          <div className='acount_content_all'>
            <div className='acount_content_tarjet'>
              <p className='text_check'>Numero de la tarjeta</p>
              <input className='input_acount3' placeholder='5212 **** **** ****' minlength="16" type="text" value="" required />
            </div><br />

            <div className='acount_content_tarjet'>
              <p  className='text_check'>Titular de la tarjeta</p>
              <input className='input_acount3' placeholder='Ingresa tu nombre y apellido' minlength="5" type="text" value="" required />
            </div><br />

            <div className='acount_content_row'>
              <div className='acount_content_tarjet'>
                <p  className='text_check'>Fecha de vencimiento</p>
                <select className='input_acount4' name="mes" required>
                  <option value="">Enero</option>
                  <option value="">Febrero</option>
                  <option value="">Marzo</option>
                  <option value="">Abril</option>
                  <option value="">Mayo</option>
                  <option value="">Junio</option>
                  <option value="">Julio</option>
                  <option value="">Agosto</option>
                  <option value="">Septiembre</option>
                  <option value="">Octubre</option>
                  <option value="">Noviembre</option>
                  <option value="">Diciembre</option>
                </select>
              </div>

              <div className='acount_content_tarjet'>
                <p  className='text_check'>Año</p>
                <select className='input_acount4' name="mes" required>
                  <option value="">2022</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                  <option value="">2026</option>
                  <option value="">2027</option>
                  <option value="">2028</option>
                  <option value="">2029</option>
                  <option value="">2030</option>
                  <option value="">2031</option>
                  <option value="">2032</option>
                  <option value="">2033</option>
                </select>
              </div>
            </div><br />

            <div className='acount_content_tarjet'>
              <p  className='text_check'>CVV</p>
              <input className='input_acount5' placeholder='Ej: 456' type="text" value="" minlength="3" required />
            </div>

            <div className='acount_btn'>
              <button type="submit" className='btn_save' >Guardar</button>
            </div>
          </div>
        </div>
      </div><br /><br />
      <Footer />
    </div>
  )
}
