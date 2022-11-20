import { React, useState, useEffect } from 'react'
import { FaUserAlt, FaShoppingCart, FaHeartbeat, FaTags } from "react-icons/fa";
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
        if (Counter2 === null) {
            console.log(Counter2)
        } else if (Counter2 != null) {
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
    const [clickMenu, setClickMenu] = useState(false)


    const switchShown2 = () => {
        setClickMenu(!clickMenu)
    };
    const line1__bars = document.querySelector(".line1__bars-menu");
    const line2__bars = document.querySelector(".line2__bars-menu");
    const line3__bars = document.querySelector(".line3__bars-menu");
    const nav2 = document.getElementById("nav2");
    const nav3 = document.getElementById("nav3");
    const nav4 = document.getElementById("nav4");

    // window.onClick = function () {animateBars()}

    function animateBars() {
        switchShown2()
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");

    }

    useEffect(() => {
        if (clickMenu === false) {
            console.log("menu hamburguesa guardado");
            console.log(clickMenu);
            // nav2.classList.toggle("navbar4");
            // nav3.classList.toggle("navbar4");
            // nav4.classList.toggle("navbar4");
        } else if (clickMenu == true) {
            nav2.classList.toggle("navbar2");
            nav3.classList.toggle("navbar2");
            nav4.classList.toggle("navbar2");
            console.log(clickMenu);
        }
    }, [clickMenu])




    /*---------------------------------- second nav -------------------------------------- */

    // window.addEventListener("scroll", () =>{
    //     console.log("scrollindo...")
    //     let actual = window.pageYOffset 
    //     console.log(actual);
    // })

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbar").style.display = "flex";
            document.getElementById("nav").style.display = "none";
            // document.getElementById("search").style.display = "flex";

        } else {
            document.getElementById("navbar").style.display = "none";
            document.getElementById("nav").style.display = "flex";
            // document.getElementById("search").style.display = "none";
        }
    }

  return (
    <div>
        <div className='navbar' id='navbar'>
            <div>
                <Link to='/'><img src={logo} alt="logo" id='logo' /></Link>
            </div>
             <div  className='navbar3'>
                <input type="text" placeholder='Buscar...' className='buscar' /><button className='buscar2'><FaSistrix /></button>
            </div> 
            <div className='bars__menu'onClick={switchShown2}>
                <span className="line1__bars-menu"></span>
                <span className="line2__bars-menu"></span>
                <span className="line3__bars-menu"></span>
            </div>
            {/* <input type="checkbox" id='menu'className='menuInput'/> */}
            <div className="column_nav_content">
                <div id='nav2' className='navbar2'>
                    <Link to="/lista-deseos" onClick={handleClick} className={`links ${clicked ? 'active' : ''}`}><FaHeartbeat /> Lista de Deseos </Link>
                </div>
                <div id='nav3' className='navbar2'>
                    <Link to='/register' onClick={handleClick} className={`links ${clicked ? 'active' : ''}`}><FaUserAlt /> Mi cuenta</Link>
                </div>
                <div id='nav4' className='navbar2'>
                    <Link to='/car' onClick={handleClick} className={`links ${clicked ? 'active' : ''}`}><FaShoppingCart />{counter}</Link>
                </div>
            </div>
        </div>
        </>
    )
}