import {React, useState,useEffect} from 'react'
import { FaUserAlt,FaShoppingCart,FaHeartbeat,FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import './menuHam.css'

export const NavBar = () => {


    

    // useEffect(() => {   
    //     console.log(props.counter_h);
    //     console.log(counter);
    //     setCounter(props.counter_h +1)
    // }, [props.counter_h])
    
    /* ------------------- contador -------------------------- */

    const [counter, setCounter] = useState(0);
    const Counter2 = JSON.parse(localStorage.getItem("car"));
    
    useEffect(() => {
        if (Counter2==null){
            console.log(Counter2)
        } else if(Counter2!=null){
            setCounter(Counter2.length)
            console.log(Counter2.length)
        }
        
    }, [Counter2])
    
    /*-------------------------- Funcion del menu ---------------------------- */
    const [clicked, setclicked] = useState(false)

    const handleClick = () => {
        setclicked(!clicked)
    }

    /*---------------------------------- Menu Hamburguesa -------------------------------------- */
    const line1__bars = document.querySelector(".line1__bars-menu");
    const line2__bars = document.querySelector(".line2__bars-menu");
    const line3__bars = document.querySelector(".line3__bars-menu");

    window.onClick = function () {animateBars()}

    function animateBars(){
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");
    }

    /*---------------------------------- second nav -------------------------------------- */


    // window.addEventListener("scroll", () =>{
    //     console.log("scrollindo...")
    //     let actual = window.pageYOffset 
    //     console.log(actual);
    // })

    window.onscroll = function() {scrollFunction()};

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
                <div class="bars__menu" onClick={animateBars}>
                    <span class="line1__bars-menu"></span>
                    <span class="line2__bars-menu"></span>
                    <span class="line3__bars-menu"></span>
                </div>
            </div>
        </div>
    </div>
  )
}