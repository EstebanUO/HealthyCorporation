import React from 'react'
import './Info.css'
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <div className='all_info'>
      <div className='info'>
        <Link to='/acount' className='aa'>Mis datos</Link>
        <Link to='/direction' className='b'>Mis direcciones</Link>
        <Link to='/tarjet' className='c'>Mis tarjetas</Link>
        <Link to='/password' className='d'>Mi contraseña</Link>
      </div>
    </div>
  )
}
