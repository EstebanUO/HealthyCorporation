import React from 'react'
import logo2 from '../../Image/logo.png'
import { Link } from "react-router-dom";
import { Footer } from "../Layout/Footer/Footer";

import './Direction_pago.css'

export const Direction_pago = () => {
    return (
        <>
            <header className='up_check'>
                <div className='imgu2'>
                    <Link to='/'><img src={logo2} alt="Logo" /></Link>
                </div>
            </header>

            <div className='center_'>
                <div className='circles'>
                    1
                </div>

                <div className='linea_procesing'>
                </div>
                <div className='circles_'>
                </div>
                <div className='linea_procesing_'>
                </div>

                <div className='circles2'>
                    2
                </div>
            </div>

            <div className='nom_check'>
                <p className='text_check2' >[Nombre] Dijita tu dirección para saber en donde te encuentras</p>
            </div>
            <div className='check_all'>
                <div className='content_check'>
                    <nav className='nav_check'><p className='pad_check'>Método de entrega</p></nav>

                    <div className='container_check'>

                        <form action="">
                            <label className='text_check'>Dirección</label><br />
                            <input type="text" className='textContact' name='user-name' placeholder="Digite su dirección" required></input><br /><br />

                            <div className='acount_content_tarjet-'>
                                <b><label className='text_check'>Ingresa tu ciudad</label></b>
                                <select className='input_check' name="ciudad" required>
                                    <option value="" disabled>Ciudad</option>
                                    <option value="">Armenia</option>
                                    {/* <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option> */}
                                </select>
                            </div><br />

                            <div className='acount_content_tarjet-'>
                                <b><label className='text_check'>Ingresa tu locaidad</label></b>
                                <select className='input_check' name="localidad" required>
                                    <option value="" disabled>Localidad</option>
                                    <option value="">Armenia</option>
                                    {/* <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option> */}
                                </select>
                            </div><br />

                            <label className='text_check'>Casa | Depto | Oficina</label>
                            <input type="text" className='textContact' name='user-name' placeholder="Digite la numeración" required></input><br /><br />

                            <label className='text_check'>Nombre de dirección</label>
                            <input type="text" className='textContact' name='user-name' placeholder="Ej: Departameto" required></input>
                        </form><br />
                    </div>

                    <div className='check_btn'>
                        <Link to='/compra'><button className='addProduct_check'>Volver</button></Link>
                        <button className='addProduct_check'>Agregar la dirección automaticamente </button>
                        <Link to='/pago_final'><button className='addProduct_check'>Siguiente</button></Link>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}
