import {React, useState} from 'react'
import { FaUserAlt,FaShoppingCart,FaMapMarkerAlt,FaHeartbeat,FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import { MenuBurguer } from '../../UI/MenuBurguer/MenuBurguer'
import styled from 'styled-components';

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

    // const [items, setItems] = useState([]);

    const counter = () =>{
        setSum(sum + 1);
    }

  return (
    <div>
        <div className='navbar' id='navbar'>
            <div>
                <Link to='/'><img src={logo} alt="logo" id='logo'/></Link>
            </div>
            {/* <div className='navbar2'>
                <Link to="/" className="ubicacion"><FaMapMarkerAlt/> Ubicación</Link> 
            </div> */}
            <div className='navbar2'>
                <input type="text" placeholder='Buscar...' className='buscar'/><button className='buscar2'><FaSistrix/></button> 
            </div>
            <div className='navbar2'>
                <Link to="/lista-deseos"className="listaDeseos"><FaHeartbeat/> Lista de Deseos</Link>
            </div>
            <div className='navbar2'>
                <Link to='/register' className='acount'><FaUserAlt/> Mi cuenta</Link> 
            </div>
            <div className='navbar2'>
            <Link to='/car' className='car'><FaShoppingCart/>{sum}</Link>
            </div>
        </div>
    </div>
  )
}


const Navcontainer = styled.div`

.links{
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    @media(max-width: 968px){
        display: none;
    }
}

.links.active{
    display: block;
    position: absolute;
    top: 95px;
    left: -1457px;
    font-size: 1.3rem;
}

.burguer{
    @media(min-width: 968px){
      display: none;
    }
}
`

const BgDiv = styled.div`
position: absolute;
background-color: #44D2F2;
top: -700px;
left: -2000px;
width: 50%;
height:50%;
z-index: -1;

&.active{
    top: 109px;
    left: 0;
    width: 38%;
    height: 17rem;
    border-radius: 0 0 80% 0;
    box-shadow: 5px 5px 5px #90A4AE; 
}
`