import React from 'react'
import styled from 'styled-components'
import { FaUserAlt,FaShoppingCart,FaMapMarkerAlt,FaHeartbeat,FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import { BurguerButton } from '../BuguerButton/BurguerButton';

export const NavBar = () => {


    window.onscroll = function() {scrollFunction()};

    // window.addEventListener("scroll", () =>{
    //     console.log("scrollindo...")
    //     let actual = window.pageYOffset
    //     console.log(actual);
    // })

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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
                            <Link to='/'><img src={logo} alt="logo" id='logo'/></Link>
                        </div>
                        <div className='navbar2'>
                            <Link to="/" className="ubicacion active"><FaMapMarkerAlt/> Ubicación</Link> 
                        </div>
                        <div className='navbar2'>
                            <input type="text" placeholder='Buscar...' className='buscar'/><button className='buscar2'><FaSistrix/></button> 
                        </div>
                        <div className='navbar2'>
                            <Link to="/lista-deseos"className="listaDeseos active"><FaHeartbeat/> Lista de Deseos</Link>
                        </div>
                        <div className='navbar2'>
                            <Link to='/register' className='acount active'><FaUserAlt/> Mi cuenta</Link> 
                        </div>
                        <div className='navbar2'>
                            <Link to='/car' className='car active'><FaShoppingCart/> 0</Link>
                        </div>
                        <div className='burguer'>
                            <BurguerButton/>
                        </div>
                </div>
        </div>
  )
}

const Navcontainer = styled.nav`

`