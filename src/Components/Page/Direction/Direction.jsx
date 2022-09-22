import React from 'react'
import { Info } from '../../UI/Info/Info'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import img_right from '../../Image/flecha.png'


export const Direction = () => {
  return (
    <div>
      <Header />
      <div className="acount_all">
        <Info />
        <img className='lineal_img4' src={img_right} alt="Imagen derecha" />

        <div className='acount_content_all'>
          <div className='acount_content_direction'>
            <p>Dirección</p>
            <input className='input_acount' placeholder='Ingresa tu direccion de residencia' type="text" value="" />
          </div><br />

          <div className='acount_content_row'>
            <div className='acount_content_direction2'>
              <p>Ingresa tu ciudad</p>
              <input className='input_acount2' placeholder='Ingresa tu ciudad' type="text" value="" />
            </div>
            <div className='acount_content_direction2'>
              <p>Ingresa tu localidad</p>
              <input className='input_acount2' placeholder='Ingresa tu localidad' type="text" value="" />
            </div>
          </div><br />

          <div className='acount_content_row'>
            <div className='acount_content_direction2'>
              <p>Casa / Departamento / Oficina </p>
              <input className='input_acount2' placeholder='Ingresa la numeración' type="number" value="" />
            </div>
            <div className='acount_content_direction2'>
              <p>Nombre de la dirección</p>
              <input className='input_acount2' placeholder='Ej: Departamento' type="text" value="" />
            </div>
          </div>
          
            <div className='acount_btn'>
              <button className='btn_save'><s>Guardar</s></button>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
