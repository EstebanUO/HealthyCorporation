import React from 'react'
import { Link } from 'react-router-dom'
import cerrar from '../../Image/Icons/cerrar.png';
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'




export const Direction = (props) => { 
  const handleClik = () => {
    localStorage.clear(); 
    window.location.reload();
  }

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin}/><br /><br />
      <div className='acount_up'>
        <div className="acount_all">
          <div className='all_info'>
            <div className='info'>
              <Link to='/account' className='aa'>Mis datos</Link>
              <Link to='/direction' className='select_btn'>Mis direcciones</Link>
              <Link to='/tarjet' className='c'>Mis tarjetas</Link>
              <Link to='/password' className='d'>Mi contraseña</Link>
              <span onClick={handleClik} className='btnCerrarSesion' role="button"><img src={cerrar} alt="cerrarSesion" className='cerrarSesion'/> Cerrar sesión</span>
            </div>
          </div>
          <form className='acount_content_all' onSubmit={props.postApiDirection}>
            <div className='acount_content_direction'>
              <p className='text_check'>Dirección</p>
              <input className='input_acount'value={props.direction} onChange={(e)=>{props.setDirection(e.target.value)}}  placeholder='Ingresa tu direccion de residencia' autocomplete="off" type="text"  required />
            </div><br />
            <div className='acount_content_row'>
              <div className='acount_content_direction2'>
                <p className='text_check'>Ingresa tu ciudad</p>
                <input className='input_acount2' placeholder='Ingresa tu ciudad' type="text" autocomplete="off" value={props.city} required/>
              </div>
              <div className='acount_content_direction2'>
                <p className='text_check'>Ingresa tu localidad</p>
                <input className='input_acount2' placeholder='Ingresa tu localidad' type="text" autocomplete="off" value={props.location} required/>
              </div>
            </div><br />
            <div className='acount_content_row'>
              <div className='acount_content_direction2'>
                <p className='text_check'>Casa | Depto | Oficina </p>
                <input className='input_acount2' placeholder='Ingresa la numeración' type="text" autocomplete="off" value={props.typeHome} required/>
              </div>
              <div className='acount_content_direction2'>
                <p className='text_check'>Nombre de la dirección</p>
                <input className='input_acount2' placeholder='Ej: Departamento' type="text" autocomplete="off" value={props.details} required/>
              </div>
            </div>
            <div className='acount_btn'>
              <input className='btn_save' value="Guardar" type="submit"/>
            </div>
          </form>
        </div>
      </div><br /><br />
      <Footer />
    </div>
  )
}
