import {React, useState,useEffect} from 'react'
import { FaUserAlt,FaShoppingCart,FaHeartbeat,FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';

export const NavBar = (props) => {


    const [counter, setCounter] = useState()

    useEffect(() => {   
        console.log(props.counter_h);
        console.log(counter);
        setCounter(props.counter_h +1)
    }, [props.counter_h])
    

    


    window.onscroll = function() {scrollFunction()};
    /*-------------------------- Funcion del menu ---------------------------- */
    const [clicked, setclicked] = useState(false)

    const handleClick = () => {
        setclicked(!clicked)

    }

    /*---------------------------------- ? -------------------------------------- */


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
                <Link to='/'><img src={logo} alt="logo" id='logo' /></Link>
            </div>
            {/* <div className='navbar2'>
                <Link to="/" className="ubicacion"><FaMapMarkerAlt/> Ubicación</Link> 
            </div> */}
            <div className='navbar2'>
                <input type="text" placeholder='Buscar...' className='buscar' /><button className='buscar2'><FaSistrix /></button>
            </div>
            <div className="column_nav_content">
                <div className='navbar2'>
                    <Link to="/lista-deseos" onClick={handleClick} className={`links ${clicked ? 'active' : ''}`}><FaHeartbeat /> Lista de Deseos </Link>
                </div>
                <div className='navbar2'>
                    <Link to='/register' onClick={handleClick} className={`links ${clicked ? 'active' : ''}`}><FaUserAlt /> Mi cuenta</Link>
                </div>
                <div className='navbar2'>
                    <Link to='/car' onClick={handleClick} className={`links ${clicked ? 'active' : ''}`}><FaShoppingCart />{counter}</Link>
                </div>
            </div>
        </div>
    </div>
  )
}