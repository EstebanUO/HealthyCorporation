import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import cerrar from '../../Image/Icons/cerrar.png';
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import axios from "axios"




export const Direction = (props) => { 
  const handleClik = () => {
    localStorage.clear(); 
    window.location.reload();
  }

  const [direction_2, setDirection_2] = useState([])
  // const direction =   localStorage.setItem("direction", direction_2.direccion)
  let idUser = localStorage.getItem("idUser")
  const baseURL = `https://apiprojectmain.herokuapp.com/api/users/${idUser}`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDirection_2(response.data)
      const direction =   localStorage.setItem("direction", response.data.direccion)
    });
  }, []);

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin}/><br /><br />
      <div className='acount_up'>
        <div className="acount_all">
          <div className='all_info'>
            <div className='info'>
              <Link to='/account' className='aa'>Mis datos</Link>
              <Link to='/direction' className='select_btn'>Mis direcciones</Link>
              {/* <Link to='/tarjet' className='c'>Mis tarjetas</Link> */}
              <Link to='/password' className='d'>Mi contraseña</Link>
              <span onClick={handleClik} className='btnCerrarSesion' role="button"><img src={cerrar} alt="cerrarSesion" className='cerrarSesion'/> Cerrar sesión</span>
            </div>
          </div>
          
          <form className='acount_content_all' onSubmit={props.postApiDirection}>
            <div className='acount_content_direction'>
              <p className='text_check'>Dirección</p>
              <input className='input_acount'value={props.direction} onChange={(e)=>{props.setDirection(e.target.value)}}  placeholder={direction_2.direccion}autocomplete="off" type="text"  required />
            </div><br /> 
            <div className='acount_content_row'>
              <div className='acount_content_direction2'>
                <p className='text_check'>Ingresa tu ciudad</p>
                <input className='input_acount2'  value={props.city}  onChange={(e)=>{props.setCity(e.target.value)}}  placeholder={direction_2.ciudad} type="text" autocomplete="off" required/>
              </div>
              <div className='acount_content_direction2'>
                <p className='text_check'>Ingresa tu localidad</p>
                <input className='input_acount2' value={props.location} onChange={(e)=>{props.setLocation(e.target.value)}}  placeholder={direction_2.localidad} type="text" autocomplete="off"  required/>
              </div>
            </div><br />
            <div className='acount_content_row'>
              <div className='acount_content_direction2'>
                <p className='text_check'>Casa | Depto | Oficina </p>
                <input className='input_acount2'  value={props.typeHome}  onChange={(e)=>{props.setTypeHome(e.target.value)}}  placeholder={direction_2.tipoVivienda}type="text" autocomplete="off"required/>
              </div>
              <div className='acount_content_direction2'>
                <p className='text_check'>Nombre de la dirección</p>
                <input className='input_acount2' value={props.details}  onChange={(e)=>{props.setDetails(e.target.value)}}  placeholder={direction_2.detalles} type="text" autocomplete="off" required/>
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
