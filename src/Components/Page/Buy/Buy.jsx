import React from 'react'
// import { Header } from '../Layout/Header/Header';
import { Link } from "react-router-dom";
import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';
import './buy.css'
import img from '../../Image/assects/medicasp.jpg';
import back from '../../Image/x.png';
// import fondo from '../../Image/fondo_compra.jpg'





export const Buy = () => {


    return (

        <>
            <Header />
           




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
                            <div className='Content_price'>
                                <p className='price_buy'>$ 40.000</p>
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
                            <button className='addBuy_2'>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                    <div className='img_up_close' >
                        <Link to="/products"><img className='img_up_' src={back} alt="atras" /></Link>
                    </div>
                </div>
            </div>






            <Footer />
        </>
    )
}
