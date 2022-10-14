import React from 'react'
import { Link } from "react-router-dom";
import { Footer } from "../Layout/Footer/Footer";
import master from '../../Image/Tarjetas/master2.PNG'
import visa from '../../Image/Tarjetas/visa2.PNG'
import pse from '../../Image/Tarjetas/pse2.PNG'
import swal from 'sweetalert';
import logo2 from '../../Image/logo.png'
import back from '../../Image/back.png';
import './Pago.css'
/* imagenes de las tarjetas */
import tarjeta from '../../Image/Tarjetas/banco.PNG'
import tarjeta1 from '../../Image/Tarjetas/davivienda.PNG'
import tarjeta2 from '../../Image/Tarjetas/bancolombia.PNG'
import tarjeta3 from '../../Image/Tarjetas/bbva.PNG'
import tarjeta4 from '../../Image/Tarjetas/bogota.PNG'
import tarjeta5 from '../../Image/Tarjetas/itau.PNG'
import tarjeta11 from '../../Image/Tarjetas/visa.PNG'
import tarjeta8 from '../../Image/Tarjetas/master.PNG'
import tarjeta9 from '../../Image/Tarjetas/popular.PNG'
/* imagenes de las tarjetas  debito*/
import tarjeta6 from '../../Image/Tarjetas/master_debito.PNG'
import tarjeta7 from '../../Image/Tarjetas/visa_debito.PNG'
/* otros */
import tarjeta10 from '../../Image/Tarjetas/pse.PNG'
import icon_direction from '../../Image/icon_direction.png'
import icon_buy from '../../Image/icon_buy.png'
import icon_regresar from '../../Image/icon_regresar.png'

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

    const onSee2 = () => { document.getElementById("content_det3").style.display = 'flex'};
    const onBlock2 = () => { document.getElementById("content_det3").style.display = 'none' };

    const onSee3 = () => { document.getElementById("content_det").style.display = 'flex' };
    const onBlock3 = () => { document.getElementById("content_det").style.display = 'none' };



    return (
        <>
            <header className='up_check'>
                <div className='imgu2'>
                    <Link to='/'><img src={logo2} alt="Logo" /></Link>
                </div>
            </header>

            <div className='center_'>
                <div className='circles'>
                <img className='icon' src={icon_direction} alt="icon" />
                </div>

                <div className='linea_procesing'>
                </div>
                <div className='circles_'>
                <img className='icon2' src={icon_regresar} alt="icon" />
                </div>
                <div className='linea_procesing2'>
                </div>

                <div className='circles3'>
                <img className='icon' src={icon_buy} alt="" />
                </div>
            </div>

            <div className='nom_check'>
                <p className='text_check_2' >[Nombre] ya casi terminas tu compra!</p>
            </div>

            <div className='check_all'>
                <div className='content_check2' >
                    <nav className='nav_check'><p className='pad_check'>Método de pago</p>
                        <div className='back_up'><Link to="/pago"><img className='img_up2' src={back} alt="atras" /><p className='back'>Atras</p></Link>
                        </div></nav>

                    <div>
                        <div className='content_tarjet_div' onClick={onSee}>
                            <p className='pad_check2'>Tarjeta de Crédito o de Débito</p>
                            <img className='img-tarjet_' src={master} alt="tarjeta imagen" />
                            <img className='img-tarjet_' src={visa} alt="tarjeta imagen" />
                        </div>
                        <div>
                            <div className='acount_content_all2' id='content_det2'>
                                <div className='acount_content_tarjet'>
                                    <p className='text_check'>Numero de la tarjeta</p>
                                    <input className='input_acount3' placeholder='5212 **** **** ****' minlength="16" type="number" required />
                                </div><br />

                                <div className='acount_content_tarjet'>
                                    <p className='text_check'>Titular de la tarjeta</p>
                                    <input className='input_acount3' placeholder='Ingresa tu nombre y apellido' minlength="5" type="text" required />
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
                                    <input className='input_acount5' placeholder='Ej: 456' type="number" minlength="3" required />
                                </div>

                                <div className='acount_btn2'>
                                    <button type="submit" className='btn_save2' onClick={onBlock}>Cancelar</button>
                                    <button type="submit" className='btn_save' onClick={check}>Comprar</button>
                                </div>
                            </div>
                        </div>

                        <div className='content_tarjet_div' onClick={onSee2}>
                            <p className='pad_check2'>PSE</p>
                            <img className='img-tarjet_2' src={pse} alt="tarjeta imagen" />
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
                                    <input type="text" className='textContact' name='user-name' placeholder="Digite su documento" required></input><br /><br />
                                </div><br />


                                <div className='acount_btn2'>
                                    <button type="submit" className='btn_save2' onClick={onBlock2}>Cancelar</button>
                                    <button type="submit" className='btn_save' onClick={check2}>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='methot_buy' onClick={onSee3}>Ver los metodos de pago</p>
                </div>
            </div >


            <div className='content_metodos' id='content_det'>
                    <div className='Trasparent'>
                        <div className='opacidad'>
                            <div className='metodos'>
                                <nav className='medoto_up'>
                                    <p className='text_metodos_nav'>Medios de pago para este producto</p>
                                    <img onClick={onBlock3} className='img_up' src={back} alt="atras" />
                                </nav>

                                <div className='text_metodos'>
                                    <p>Puedes pagar con cualquiera de estos medios. Es rápido, seguro y no tiene costo adicional.</p>
                                    <hr />
                                </div>

                                <div className='text_metodos_'>
                                    <p className='text_metodos_1'><b>Tarjeta de Crédito</b></p>
                                    <p className='text_metodos_2'>Acreditación instantánea.</p>


                                    <div className='trajetas_metodo'>
                                        <img src={tarjeta} alt="imagen_tarjeta" />
                                        <img src={tarjeta1} alt="imagen_tarjeta" />
                                        <img src={tarjeta2} alt="imagen_tarjeta" />
                                        <img src={tarjeta3} alt="imagen_tarjeta" />
                                        <img src={tarjeta4} alt="imagen_tarjeta" />
                                        <img src={tarjeta5} alt="imagen_tarjeta" />
                                        <img src={tarjeta9} alt="imagen_tarjeta" />
                                        <img src={tarjeta8} alt="imagen_tarjeta" />
                                        <img src={tarjeta11} alt="imagen_tarjeta" />
                                    </div>
                                    <hr />
                                </div>


                                <div className='text_metodos_'>
                                    <p className='text_metodos_1'><b>Tarjeta de Débito</b></p>
                                    <p className='text_metodos_2'>Acreditación instantánea.</p>


                                    <div className='trajetas_metodo'>
                                        <img src={tarjeta7} alt="imagen_tarjeta" />
                                        <img src={tarjeta6} alt="imagen_tarjeta" />
                                    </div>
                                    <hr />
                                </div>


                                <div className='text_metodos_'>
                                    <p className='text_metodos_1'><b>Otros medios de pago</b></p>
                                    <p className='text_metodos_1'><b>Transferencia desde tu banco</b></p>
                                    <p className='text_metodos_2'>Acreditación instantánea.</p>


                                    <div className='trajetas_metodo'>
                                        <img src={tarjeta10} alt="imagen_tarjeta" />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <Footer />
        </>
    )
}
