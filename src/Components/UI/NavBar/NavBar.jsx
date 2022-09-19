import React from 'react'
import { FaUserAlt,FaShoppingCart,FaMapMarkerAlt,FaHeartbeat,FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const showNavbar = () =>{
        
    }

    const closeNavbar = () =>{
        
    }

    window.addEventListener("scroll", () =>{
        console.log("scrollindo")
    })
   
  return (
    <div>
        <div className='navbar'>
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
