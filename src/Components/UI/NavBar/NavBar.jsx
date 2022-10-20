import { React, useState, useEffect} from 'react'
import { FaUserAlt, FaShoppingCart, FaHeartbeat, FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';

export const NavBar = () => {

    window.onscroll = function () { scrollFunction() };

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

    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems(items);
        }
    }, []);

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
                <div className='navbar2'>
                    <Link to="/lista-deseos" className="listaDeseos"><FaHeartbeat /> Lista de Deseos</Link>
                </div>
                <div className='navbar2'>
                    <Link to='/register' className='acount'><FaUserAlt /> Mi cuenta</Link>
                </div>
                <div className='navbar2'>
                    <Link to='/car' className='car'><FaShoppingCart />0</Link>
                </div>
            </div>
        </div>
    )
}
