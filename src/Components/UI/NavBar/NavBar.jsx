import {React, useState,useEffect} from 'react'
import { FaUserAlt,FaShoppingCart,FaHeartbeat } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
import './menuHam.css'

export const NavBar = (props) => {

    /* ------------------- contador -------------------------- */

    const [counter, setCounter] = useState(0);
    const Counter2 = JSON.parse(localStorage.getItem("car"));

    useEffect(() => {
        if (Counter2 === null) {
            console.log(Counter2)
            
        } else if (Counter2 !== null) {
            
            setCounter(Counter2.length)
            
        }
        
    }, [Counter2])


    /*---------------------------------- Menu Hamburguesa -------------------------------------- */
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }



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
            <div className="column_nav_content">
                <div id='nav2' className='navbar2'>
                    <Link to="/lista-deseos"  className={'links active'}><FaHeartbeat /> Lista de Deseos </Link>
                </div>
                <div id='nav3' className='navbar2'>
                    <Link to='/register'  className={'links active'}><FaUserAlt /> Mi cuenta</Link>
                </div>
                <div id='nav4' className='navbar2'>
                    <Link to='/car'   className={'links active'}><FaShoppingCart />{counter}</Link>
                </div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                <div className={menu_class}>
                    <div id='nav2' className='navbar3'>
                        <Link to="/lista-deseos"  className={'links active'}><FaHeartbeat /> Lista de Deseos </Link>
                    </div>
                    <div id='nav3' className='navbar3'>
                        <Link to='/register'  className={'links active'}><FaUserAlt /> Mi cuenta</Link>
                    </div>
                    <div id='nav4' className='navbar3'>
                        <Link to='/car'   className={'links active'}><FaShoppingCart />{counter}</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}