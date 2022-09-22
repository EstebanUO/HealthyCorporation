import React from 'react'
import { Info } from '../../UI/Info/Info'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import img_right from '../../Image/flecha.png'


export const Tarjet = () => {
  return (
    <div>
      <Header />
      <div className="acount_all">
        <Info />
        <img className='lineal_img2' src={img_right} alt="Imagen derecha" />

        <div className='acount_content_all'>
          <div className='acount_content_tarjet'>
            <p>Numero de la tarjeta</p>
            <input className='input_acount3' placeholder='5212 **** **** ****' minlength="16" type="number" value="" required />
          </div><br />

          <div className='acount_content_tarjet'>
            <p>Titular de la tarjeta</p>
            <input className='input_acount3' placeholder='Ingresa tu nombre y apellido' minlength="5" type="number" value="" required/>
          </div><br />

          <div className='acount_content_row'>
            <div className='acount_content_tarjet'>
              <p>Fecha de vencimiento</p>
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
              <p>Año</p>
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
            <p>CVV</p>
            <input className='input_acount5' placeholder='Ej: 456' type="number" value="" minlength="3" required/>
          </div>

          <div className='acount_btn'>
              <button type="submit" className='btn_save' ><s>Guardar</s></button>
              
            </div>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}
