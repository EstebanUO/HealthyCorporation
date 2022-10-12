import React from 'react'
// import { Header } from '../Layout/Header/Header';
import { Link } from "react-router-dom";
import { Footer } from '../Layout/Footer/Footer';
import './buy.css'

// /* imagenes de las tarjetas */
// import tarjeta from '../../Image/Tarjetas/banco.PNG'
// import tarjeta1 from '../../Image/Tarjetas/davivienda.PNG'
// import tarjeta2 from '../../Image/Tarjetas/bancolombia.PNG'
// import tarjeta3 from '../../Image/Tarjetas/bbva.PNG'
// import tarjeta4 from '../../Image/Tarjetas/bogota.PNG'
// import tarjeta5 from '../../Image/Tarjetas/itau.PNG'
// import tarjeta11 from '../../Image/Tarjetas/visa.PNG'
// import tarjeta8 from '../../Image/Tarjetas/master.PNG'
// import tarjeta9 from '../../Image/Tarjetas/popular.PNG'
// /* imagenes de las tarjetas  debito*/
// import tarjeta6 from '../../Image/Tarjetas/master_debito.PNG'
// import tarjeta7 from '../../Image/Tarjetas/visa_debito.PNG'
// /* otros */
// import tarjeta10 from '../../Image/Tarjetas/pse.PNG'
import img from '../../Image/assects/medicasp.jpg';
import img2 from '../../Image/cancelar.gif';
import logo2 from '../../Image/logo.png'
import back from '../../Image/back.png';
// import fondo from '../../Image/fondo_compra.jpg'





export const Buy = () => {

    const onSee = () => { document.getElementById("content_det").style.display = 'flex' };
    const onBlock = () => { document.getElementById("content_det").style.display = 'none' };


    return (

        <>
            <header className='up_check'>
                <div className='imgu2'>
                    <Link to='/'><img src={logo2} alt="Logo" /></Link>
                </div>
            </header>

            <div className='center_2'>
                <div className='circles'>
                    1
                </div>

                <div className='linea_procesing_'>
                </div>
                <div className='circles_2'>
                </div>
                <div className='linea_procesing_'>
                </div>

                <div className='circles2'>
                    2
                </div>
            </div>




            <div className='content_buy'>

                <div className='row_buy'>
                    <div className='imgBuy'>
                        <img className='img_buy' src={img} alt="Imagen compra" />
                    </div>
                    <div className='columm_buy'>
                        <div className='padding_buy'>
                            <div className='up_buy'>
                                <p>Nuevo  |  85 Vendidos</p>
                            </div>
                            <div>
                                <p className='name_buy'>Medicasp</p>
                            </div>
                            <div className='up_buy_3'>
                                <p><b>Descripción:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit.eriam? Ad similique ut vero optio.</p>
                            </div>
                            <div>
                                <p className='price_buy'>$ 40.000</p>
                            </div>
                            <div className='up_buy_'>
                                <p onClick={onSee}>Ver los metodos de pago</p>
                            </div>
                            <div>
                                <p className='name_buy_'>Cantidad: <b>1 Unidad</b> </p>
                            </div>
                            <div className='up_buy_1'>
                                <p>Puedes comprar solo 1 unidad</p>
                            </div>
                            <div className='up_buy_2'>
                                <p>Envio gratis</p>
                            </div>
                            <div className='up_buy_1'>
                                <p>Llega dentro de las 24 horas</p>
                            </div>

                        </div>
                        <div className='addBuy'>
                            <Link to="/pago"><button className='addBuy_'>
                                Comprar ahora
                            </button></Link>
                        </div>
                    </div>
                    <div className='img_up_close' >
                        <Link to="/"><img className='img_up_' src={img2} alt="atras" /></Link>
                    </div>
                </div>
            </div>

          
              
                    {/* <div className='content_metodos' id='content_det'>
                    <div className='Trasparent'>
                        <div className='opacidad'>
                            <div className='metodos'>
                                <nav className='medoto_up'>
                                    <p className='text_metodos_nav'>Medios de pago para este producto</p>
                                    <img onClick={onBlock} className='img_up' src={back} alt="atras" />
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
                    </div> */}
                
          
            <Footer />
        </>
    )
}
