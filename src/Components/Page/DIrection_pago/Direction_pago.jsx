import React, { useEffect, useState } from 'react'
import logo2 from '../../Image/logo.png'
import { Link } from "react-router-dom";
import { Footer } from "../Layout/Footer/Footer";
import icon_direction from '../../Image/icon_direction.png'
import icon_buy from '../../Image/icon_buy.png'
import icon_regresar from '../../Image/icon_regresar.png'
import './Direction_pago.css'
import back from '../../Image/back.png';
import axios from "axios"


export const Direction_pago = (props) => {

    // const valiLoginUser = localStorage.getItem("EmailValidUser");
    // const valiEmail = localStorage.getItem("EmalValid");
    const valiLoginName = localStorage.getItem("nameUser");
    


    window.onload=()=>{
        const Directon_ = localStorage.getItem("direction");
        if (Directon_ !== null) {
            document.getElementById("text_check2").style.display = 'none'
            document.getElementById("text_check3").style.display = 'flex'
            document.getElementById("form").style.display = 'none' 
            document.getElementById("form2").style.display = 'flex'
            
        } else if (Directon_ === null) {
            document.getElementById("form").style.display = 'flex'
            document.getElementById("form2").style.display = 'none'
            document.getElementById("text_check2").style.display = 'flex'
            document.getElementById("text_check3").style.display = 'none'

        }
    }
    /*-------------------------- subir direccion --------------------------- */




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
                <p className='text_check2' id='text_check2'><b>¡{valiLoginName}</b> &nbsp;dijita tu dirección para saber en donde te encuentras!</p>
                <p className='text_check2' id='text_check3'><b>¡{valiLoginName}</b> &nbsp;ya tienes una direccion agregada!</p>
            </div>
            <div className='check_all'>
                <div className='content_check'>

                    <nav className='nav_check'><p className='pad_check'>Método de entrega</p>
                        <div className='back_up'><Link to="/compra"><img className='img_up2' src={back} alt="atras" /><p className='back'>Atras</p></Link>
                        </div></nav>


                    <div className='container_check'>
                        <form id='form'>
                            <label className='text_check'>Dirección</label>
                            <input type="text" className='input_check' name='user-name' placeholder="Digite su dirección" required></input><br />
                            <div className='acount_content_tarjet-'>
                                <b><label className='text_check'>Ingresa tu ciudad</label></b>
                                <input className='input_check' name="localidad" placeholder="..."  autocomplete="off" required/>
                            </div><br />
                            <div className='acount_content_tarjet-'>
                                <b><label className='text_check'>Ingresa tu locaidad</label></b>
                                <input className='input_check' name="localidad" placeholder="urbana..."  autocomplete="off" required/>
                            </div><br />
                            <label className='text_check'>Casa | Depto | Oficina</label>
                            <input type="text" className='input_check' name='user-name' placeholder="Digite la numeración"  autocomplete="off"required></input><br />

                            <label className='text_check'>Nombre de dirección</label>
                            <input type="text" className='input_check' name='user-name' placeholder="Ej: Departameto"  autocomplete="off" required></input>
                            <div className='check_btn'>
                                {/* <button className='addProduct_check4' id='addProduct_check4'> Ya tienes una direccion, Seguir con la compra </button> */}
                                <input className='addProduct_check3' id='addProduct_check3' value="Siguiente" type="submit"/>
                            </div>
                        </form>


                    {/* ------------------------------- segundo formulario  ---------------------------------*/}
                        <form id='form2'>
                            <label className='text_check'>Dirección</label>
                            <input type="text" className='input_check' name='user-name' placeholder={direction_2.direccion} ></input><br />

                            <div className='acount_content_tarjet-'>
                                <b><label className='text_check'>Ingresa tu locaidad</label></b>
                                <input className='input_check' name="localidad" placeholder={direction_2.localidad} />

                            </div><br />
                            <label className='text_check'>Casa | Depto | Oficina</label>
                            <input type="text" className='input_check' name='user-name' placeholder={direction_2.tipoVivienda} ></input><br />

                            <label className='text_check'>Nombre de dirección</label>
                            <input type="text" className='input_check' name='user-name' placeholder={direction_2.detalles} ></input>
                            <div className='check_btn'>
                                <Link to='/pago_final'><button className='addProduct_check4' id='addProduct_check4'> Seguir con la compra </button></Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
