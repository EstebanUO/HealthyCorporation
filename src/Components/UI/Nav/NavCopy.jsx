import React from 'react';
import { Link } from "react-router-dom";

export const NavCopy = () => {


  return (
    <nav className='nav2'>
      <div className='content3'>
        <Link to='/acount' className='a'>Mis datos</Link>
        <Link to='/direction' className='a'>Mis direcciones</Link>
        <Link to='/tarjet' className='a'>Mis tarjetas</Link>
        <Link to='/password' className='a'>MI contraseña</Link>
      </div>
    </nav>
  )
}