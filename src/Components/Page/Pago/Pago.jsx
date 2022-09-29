import React from 'react'
import logo2 from '../../Image/logo.png'
import { Link } from "react-router-dom";
import { Footer } from "../Layout/Footer/Footer";
import master from '../../Image/Tarjetas/master.PNG'
import pse from '../../Image/Tarjetas/pse.PNG'
import swal from 'sweetalert';
import './Pago.css'

export const Pago = () => {
    const check = () => {
        swal({
            title: "¿Estas seguro?",
            text: "Al aceptar se hará la compra sactifactoriamente",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Has comprado el producto perfectamente, te llegará un correo co los datos de la compra", {
                        icon: "success",
                    });
                } else {
                    swal("Esta bien no se hará la compra!");
                }
            });
    }

    const check2 = () => {
        swal({
            title: "¿Estas seguro?",
            text: "Al aceptar se hará la compra sactifactoriamente",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Has comprado el producto perfectamente, redirigiendo", {
                        icon: "success",
                    });
                } else {
                    swal("Esta bien no se hará la compra!");
                }
            });
    }

    const onSee = () => { document.getElementById("content_det2").style.display = 'flex' };
    const onBlock = () => { document.getElementById("content_det2").style.display = 'none' };

    const onSee2 = () => { document.getElementById("content_det3").style.display = 'flex' };
    const onBlock2 = () => { document.getElementById("content_det3").style.display = 'none' };

    return (
        <>
            <header className='up_check'>
                <div className='imgu2'>
                    <Link to='/'><img src={logo2} alt="Logo" /></Link>
                </div>
            </header>

            <div className='nom_check'>
                <p className='text_check2' >[Nombre] ya casi terminas tu compra!</p>
            </div>

            <div className='check_all'>
                <div className='content_check' >
                    <nav className='nav_check'><p className='pad_check'>Método de pago</p></nav>

                    <div>
                        <div className='content_tarjet_div' onClick={onSee}>
                            <p className='pad_check2'>Tarjeta de Credito o de Debito</p>
                            <img className='img-tarjet2' src={master} alt="tarjeta imagen" />
                        </div>
                        <div>
                            <div className='acount_content_all2' id='content_det2'>
                                <div className='acount_content_tarjet'>
                                    <p className='text_check'>Numero de la tarjeta</p>
                                    <input className='input_acount3' placeholder='5212 **** **** ****' minlength="16" type="number" value="" required />
                                </div><br />

                                <div className='acount_content_tarjet'>
                                    <p className='text_check'>Titular de la tarjeta</p>
                                    <input className='input_acount3' placeholder='Ingresa tu nombre y apellido' minlength="5" type="text" value="" required />
                                </div><br />

                                <div className='acount_content_row'>
                                    <div className='acount_content_tarjet'>
                                        <p className='text_check'>Fecha de vencimiento</p>
                                        <select className='input_acount4' name="mes" required>
                                            <option value="">Enero</option>
                                            <option value="">Febrero</option>
                                            <option value="">Marzo</option>
                                            <option value="">Abril</option>
                                            <option value="">Mayo</option>
                                            <option value="">Junio</option>
                                            <option value="">Julio</option>
                                            <option value="">Agosto</option>
                                            <option value="">Septiembre</option>
                                            <option value="">Octubre</option>
                                            <option value="">Noviembre</option>
                                            <option value="">Diciembre</option>
                                        </select>
                                    </div>

                                    <div className='acount_content_tarjet'>
                                        <p className='text_check'>Año</p>
                                        <select className='input_acount4' name="mes" required>
                                            <option value="">2022</option>
                                            <option value="">2023</option>
                                            <option value="">2024</option>
                                            <option value="">2025</option>
                                            <option value="">2026</option>
                                            <option value="">2027</option>
                                            <option value="">2028</option>
                                            <option value="">2029</option>
                                            <option value="">2030</option>
                                            <option value="">2031</option>
                                            <option value="">2032</option>
                                            <option value="">2033</option>
                                        </select>
                                    </div>
                                </div><br />

                                <div className='acount_content_tarjet'>
                                    <p className='text_check'>CVV</p>
                                    <input className='input_acount5' placeholder='Ej: 456' type="number" value="" minlength="3" required />
                                </div>

                                <div className='acount_btn2'>
                                    <button type="submit" className='btn_save2' onClick={onBlock}>Cancelar</button>
                                    <button type="submit" className='btn_save' onClick={check}>Comprar</button>
                                </div>
                            </div>
                        </div>

                        <div className='content_tarjet_div' onClick={onSee2}>
                            <p className='pad_check2'>PSE</p>
                            <img className='img-tarjet' src={pse} alt="tarjeta imagen" />
                        </div>

                        <div>
                            <div className='acount_content_all3' id='content_det3'>
                                <div className='acount_content_tarjet-' >
                                    <p className='text_check'>Banco</p>
                                    <select className='input_check' name="ciudad" required>
                                        <option value="" >Banco</option>
                                        <option value="">Bancolombia</option>
                                        <option value="">Banco agr ario</option>
                                        <option value="">BBVA</option>
                                        <option value="">Colpatria</option>
                                        <option value="">NuBan</option>
                                        <option value="">Caja social</option>
                                        <option value="">Davivienda</option>
                                        <option value="">Banco Popular</option>
                                    </select>
                                </div><br />

                                <div className='acount_content_tarjet-'>
                                    <p className='text_check'>Tipo de documento</p>
                                    <select className='input_check' name="ciudad" required>
                                        <option value="" disabled>Documeto</option>
                                        <option value="">Cédula de ciudadanía</option>
                                        <option value="">Cédula de extranjería</option>
                                        <option value="">Pasaporte</option>

                                    </select>
                                </div><br />

                                <div className='acount_content_tarjet2'>
                                    <p className='text_check'>Número de documento</p>
                                    <input type="text" className='textContact' name='user-name' placeholder="Digite su dirección" required></input><br /><br />
                                </div><br />


                                <div className='acount_btn2'>
                                    <button type="submit" className='btn_save2' onClick={onBlock2}>Cancelar</button>
                                    <button type="submit" className='btn_save' onClick={check}>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
