import React from 'react';
import { Link } from "react-router-dom";
// // import styled from "styled-components"; 
// import logo from "../../Image/logo.png"
import $ from 'jquery';



export const Nav = () => {


  $(document).ready(function () {
    let up = $('.nav');

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > up) {
        $('.nav').addClass('menu_fixed')
      } else {
        $('.nav').remove('menu_fixed')
      }
    })
  });


  // function nav_top(props) {
  //   return
  //   <>
  //     <div>
  //       <img src={logo} alt="Logo" className='Logo_nav' />
  //     </div>

  //     <div>
  //       <input type="text" value="" placeholder='Que estas buscando' />
  //     </div>

  //     <div className='content'>
  //       <Link to='/' className='a'>Inicio</Link>
  //       <Link to='/products' className='a'>Productos</Link>
  //       <Link to='/register' className='a'>Ingresar</Link>
  //     </div>
  //   </>
  // }

  return (
    <nav className='nav'>

      <div className='content'>
        <Link to='/' className='a'>Inicio</Link>
        <Link to='/products' className='a'>Productos</Link>
        <Link to='/register' className='a'>Ingresar</Link>
      </div>

      
    </nav>
  )
}
