import {React, useState,useEffect} from 'react'
import { FaUserAlt,FaShoppingCart,FaHeartbeat,FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';
// import { MenuBurguer } from '../../UI/MenuBurguer/MenuBurguer'
import styled from 'styled-components';

export const NavBar = () => {


    

    // useEffect(() => {   
    //     console.log(props.counter_h);
    //     console.log(counter);
    //     setCounter(props.counter_h +1)
    // }, [props.counter_h])
    
    /* ------------------- contador -------------------------- */

    const [counter, setCounter] = useState(0);
    const Counter = localStorage.getItem("car");
    // setCounter(Counter.length);
    


    window.onscroll = function() {scrollFunction()};
    /*-------------------------- Funcion del menu ---------------------------- */
    const [clicked, setclicked] = useState(false)

    const handleClick = () => {
        setclicked(!clicked)

    }

    /*---------------------------------- second nav -------------------------------------- */


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
    <Navcontainer>
        <div>
            <div className='navbar' id='navbar'>
                <div>
                    <Link to='/'><img src={logo} alt="logo" id='logo' /></Link>
                </div>
                <div className='navbar2'>
                    <input type="text" placeholder='Buscar...' className='buscar'/><button className='buscar2'><FaSistrix /></button>
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
                {/* <div className='burguer'>
                    <MenuBurguer clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>  */}
            </div>
        </div>
    </Navcontainer>
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
    top: 106px;
    left: -1331px;
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
    top: 74px;
    left: 0;
    width: 38%;
    height: 17rem;
    border-radius: 6% 0 80% 0;
    box-shadow: 5px 5px 5px #90A4AE; 
}
`