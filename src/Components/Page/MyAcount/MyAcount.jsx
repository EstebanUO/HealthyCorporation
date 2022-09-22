import React from 'react'
import { Info } from '../../UI/Info/Info'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import img_right from '../../Image/flecha.png'
// import { Nav } from '../../UI/Nav/Nav'


export const MyAcount = (props) => {
  return (
    <div>

      <Header valiLoginAdmin={props.valiLoginAdmin}/>

      <div className="acount_all">
        <Info />
        <img className='lineal_img' src={img_right} alt="Imagen derecha" />

        <div className='acount_content_all'>
          <div className='acount_content_tarjet'>
            <p>Nombre</p>
            <input className='input_acount' placeholder='none' type="text" value="" />
          
          </div><br />

          <div className='acount_content_tarjet'>
            <p>Correo</p>
            <input className='input_acount' placeholder='none' type="text" value="" />
          
          </div><br />

        

          <div className='acount_content_row'>
              <div className='acount_content_tarjet'>
                <p>Ingresa tu contraseña para guardar los cambios</p>
                <input className='input_acount2' placeholder='************' minlength="8" type="password" value="" required />
              </div>
              <button className='btn_update' disabled><s>Actualizar</s> </button>
          </div><br />
         
          <div  className='acount_btn'>
            <h6>Recuerda mantener actualizados tus datos para tener una mejor experiencia.</h6>
          </div>
        </div>
      </div>




      {/* <Nav valiLoginAdmin={props.valiLoginAdmin} />
      <NavCopy /> */}

      <Footer />

    </div>
  )
}
