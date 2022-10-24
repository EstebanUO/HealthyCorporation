import React from 'react';
import { Link } from "react-router-dom";
// import styled from "styled-components"; 
// import logo from "../../Image/logo.png"
// import { FaBars } from "react-icons/fa";



export const Nav = (props) => {


  return (
    <nav className='nav' id='nav'>
      <div className='content'>
        <Link to='/' className='a'>Inicio</Link>
        <Link to='/products' className='a'>Productos</Link>
        <Link to='/register' className='a'>Mi cuenta</Link>
        <Link to='/Contact' className='a'>Contacto</Link>
        {props.valiLoginAdmin? <Link to='/Contact' className='a'>Administrar productos</Link>:null}
        {props.valiLoginAdmin? <a target="_blank" href='https://apiprojectmain.herokuapp.com/admin/' className='a'>Administrar Usuarios</a>:null}
      </div>
    </nav>
  )
}