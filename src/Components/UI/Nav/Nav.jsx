import React from 'react';
import { Link } from "react-router-dom"

export const Nav = () => {
  return (
    <nav className='nav'>
        <div className='content'>
            <Link to='/' className='a'>Inicio</Link>
            <Link to='/products' className='a'>Productos</Link>
            <Link to='/' className='a'>Ingresar</Link>
            <Link to='/' className='a'>Más</Link>
        </div>
    </nav>
  )
}
