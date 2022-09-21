import React from 'react';
import { Link } from "react-router-dom";
// import styled from "styled-components"; 
// import logo from "../../Image/logo.png"
// import { FaBars } from "react-icons/fa";



export const Nav = () => {


  return (
    <nav className='nav' id='nav'>
      <div className='content'>
        <Link to='/' className='a'>Inicio</Link>
        <Link to='/products' className='a'>Productos</Link>
        <Link to='/register' className='a'>Mi cuenta</Link>
        <Link to='/Contact' className='a'>Contacto</Link>
      </div>
    </nav>
  )
}