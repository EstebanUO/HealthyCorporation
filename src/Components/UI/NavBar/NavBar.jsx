import React from 'react'
import { FaUserAlt,FaShoppingCart,FaMapMarkerAlt,FaHeartbeat,FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';

export const NavBar = () => {


    window.onscroll = function() {scrollFunction()};

    window.addEventListener("scroll", () =>{
        console.log("scrollindo")
        let actual = window.pageYOffset
        console.log(actual);
    })

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.display = "flex";
            document.getElementById("nav").style.display = "none";
        } else {
            document.getElementById("navbar").style.display = "none";
            document.getElementById("nav").style.display = "flex";
        }
      }

  return (
    <div>
        <div className='navbar' id='navbar'>
            <div>
                <img src={logo} alt="logo" id='logo'/>
            </div>
            <div className='navbar2'>
                <FaHeartbeat/><p>Lista de Deseos</p>
            </div>
            <div className='navbar2'>
                <FaMapMarkerAlt/><p>Ubicación</p>
            </div>
            <div className='navbar2'>
                <input type="text" placeholder='¿Qué deseas buscar?' className='buscar'/><button className='buscar2'><FaSistrix/></button> 
            </div>
            <div className='navbar2'>
                <FaUserAlt/><Link to='/register' className='cuenta'>Mi cuenta</Link> 
            </div>
            <div className='navbar2'>
                <FaShoppingCart/><p>[cantidad]</p>
            </div>
        </div>
    </div>
  )
}
