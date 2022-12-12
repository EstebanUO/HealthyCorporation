import React, { useEffect, useState } from 'react'
import logo2 from '../../Image/logo.png'
import { Link } from "react-router-dom";
import { Footer } from "../Layout/Footer/Footer";
import icon_direction from '../../Image/icon_direction.png'
import icon_buy from '../../Image/icon_buy.png'
import icon_regresar from '../../Image/icon_regresar.png'
import './DIrection_pago_2.css'
import back from '../../Image/back.png';
import axios from "axios"


export const DIrection_pago_2 = (props) => {

    // const valiLoginUser = localStorage.getItem("EmailValidUser");
    // const valiEmail = localStorage.getItem("EmalValid");
    // const valiLoginName = localStorage.getItem("nameUser");


        /* no terminado no detecta cuando no tiene direccion */
    window.onload = () => {
        const Directon_ = localStorage.getItem("direction");
        if (Directon_ !== '') {
            document.getElementById("text_check2").style.display = 'none'
            document.getElementById("text_check3").style.display = 'flex'
            // document.getElementById("form").style.display = 'none'
            document.getElementById("form2").style.display = 'flex'

        } else if (Directon_ === '') {
            document.getElementById("form").style.display = 'flex'
            document.getElementById("form2").style.display = 'none'
            document.getElementById("text_check2").style.display = 'flex' 
            document.getElementById("text_check3").style.display = 'none'

        }
    }
    
    /*-------------------------- subir direccion --------------------------- */

    const [direction, setDirection] = useState("")
    const [location, setLocation] = useState("")
    const [city, setCity] = useState("")
    const [details, setDetails] = useState("")
    const [typeHome, setTypeHome] = useState("")

    const iduser = localStorage.getItem("idUser")

    const postApiDirection = (e) => {
        axios.put(`https://apiprojectmain.herokuapp.com/api/users/${iduser}`, {
            "direccion": direction,
            "localidad": location,
            "ciudad": city,
            "detalles": details,
            "tipoVivienda": typeHome

        }).catch(function (error) {
                // handle error
                console.log(error);
            });
        setDirection("")
        setLocation("")
        setCity("")
        setDetails("")
        setTypeHome("")
    }

    /*-------------------------- direccion api --------------------------- */
    const [direction_2, setDirection_2] = useState([])
    let idUser = localStorage.getItem("idUser")

    const baseURL = `https://apiprojectmain.herokuapp.com/api/users/${idUser}`;
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setDirection_2(response.data)
        });
    }, []);


    return (
        // valiLoginUser && valiEmail !== true ? <Login/> :
        <>
            <header className='up_check'>
                <div className='imgu2'>
                    <Link to='/'><img src={logo2} alt="Logo" /></Link>
                </div>
            </header>
            <div className='center_2'>
                <div className='circles'>
                    <img className='icon' src={icon_direction} alt="icon" />
                </div>

                <div className='linea_procesing_'>
                </div>
                <div className='circles_2'>
                    <img className='icon2' src={icon_regresar} alt="icon" />
                </div>
                <div className='linea_procesing_'>
                </div>

                <div className='circles2'>
                    <img className='icon' src={icon_buy} alt="" />
                </div>
            </div>
            <div className='nom_check'>
                <p className='text_check2' id='text_check2'><b>¡{direction_2.name}</b> &nbsp;dijita tu dirección para saber en donde te encuentras!</p>
                <p className='text_check2' id='text_check3'><b>¡{direction_2.name}</b> &nbsp;ya tienes una dirección agregada!</p>
            </div>
            <div className='check_all'>
                <div className='content_check'>

                    <nav className='nav_check'><p className='pad_check'>Método de entrega</p>
                        <div className='back_up'><Link to="/car"><img className='img_up2' src={back} alt="atras" /><p className='back'>Atras</p></Link>
                        </div></nav>


                    <div className='container_check'>
                        <form id='form' onSubmit={postApiDirection}>
                            <label className='text_check'>Dirección</label>
                            <input type="text" className='input_check' name='user-name' placeholder="Digite su dirección" value={direction} onChange={(e)=>{setDirection(e.target.value)}} autoComplete="off" required></input><br />
                            <div className='acount_content_tarjet-'>
                                <b><label className='text_check'>Ingresa tu ciudad</label></b>
                                <input className='input_check' name="localidad" placeholder="..." value={city} onChange={(e)=>{setCity(e.target.value)}} autoComplete="off" required />
                            </div><br />
                            <div className='acount_content_tarjet-'>
                                <b><label className='text_check'>Ingresa tu locaidad</label></b>
                                <input className='input_check' name="localidad" placeholder="urbana..."  value={location} onChange={(e)=>{setLocation(e.target.value)}} autoComplete="off" required />
                            </div><br />
                            <label className='text_check'>Casa | Depto | Oficina</label>
                            <input type="text" className='input_check' name='user-name' placeholder="Digite la numeración" value={typeHome} onChange={(e)=>{setTypeHome(e.target.value)}} autoComplete="off" required></input><br />

                            <label className='text_check'>Nombre de dirección</label>
                            <input type="text" className='input_check' name='user-name' placeholder="Ej: Departameto" value={details} onChange={(e)=>{setDetails(e.target.value)}} autoComplete="off" required></input>
                            <div className='check_btn'>
                                {/* <button className='addProduct_check4' id='addProduct_check4'> Ya tienes una direccion, Seguir con la compra </button> */}
                                <input className='addProduct_check3' id='addProduct_check3' value="Siguiente" type="submit" />
                            </div>
                        </form>


                        {/* ------------------------------- segundo formulario  ---------------------------------*/}
                        <form id='form2'>
                            <label className='text_check'>Tu Dirección</label>
                            <input type="text" className='input_check' name='user-name' placeholder={direction_2.direccion} ></input><br />

                            <div className='acount_content_tarjet-'>
                                <b><label className='text_check'>Tu locaidad</label></b>
                                <input className='input_check' name="localidad" placeholder={direction_2.localidad} />

                            </div><br />
                            <label className='text_check'>Casa | Depto | Oficina</label>
                            <input type="text" className='input_check' name='user-name' placeholder={direction_2.tipoVivienda} ></input><br />

                            <label className='text_check'>Nombre de tu dirección</label>
                            <input type="text" className='input_check' name='user-name' placeholder={direction_2.detalles} ></input>
                            <div className='check_btn'>
                                <Link to='/pago_final_car'><button className='addProduct_check4' id='addProduct_check4'> Seguir con la compra </button></Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
