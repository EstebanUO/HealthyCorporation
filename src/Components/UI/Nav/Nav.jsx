import React from 'react';
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className='nav'>
        <div className='content'>
            <Link to='/' className='a'>Inicio</Link>
            <Link to='/products' className='a'>Productos</Link>
            <Link to='/register' className='a'>Ingresar</Link>
            <Link to='/terminos' className='a'>Términos</Link>
            <Link to='/politicas' className='a'>Política</Link>
            <Link to='/contact' className='a'>Contacto</Link>
        </div>
    </nav>
  )
}
