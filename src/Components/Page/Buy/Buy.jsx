import { React, useState } from 'react'
import { Link } from "react-router-dom";
import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';
import { Card } from '../../UI/Card/Card';

import './buy.css'
import img from '../../Image/assects/medicasp.jpg';
import back from '../../Image/x.png';
import Swal from 'sweetalert2';



export const Buy = () => {

    const [counter, setCounter] = useState(6);
    const [amount, setAmount] = useState(1);
    const [valor, setValor] = useState(10);

    /* Actualizar la cantidad disponible*/
    // const URl = '';
    // const hola= () => {
    //     setValor
    // }

    const add = () => {
        Swal.fire({
          icon: 'success',
          title: 'Se ha agregado el producto al carrito',
          showConfirmButton: false,
          timer: 3400,
          timerProgressBar: true,
          html: '<div class="pse_content"> <a class="text_link" href="/car"><button class="confirm">Ver mi carrito</button></a></div>'
        })
      }

    const sumar = () => {
        setAmount(amount + 1);
        if (amount === valor) {
            Swal.fire({
                icon: 'error',
                title: 'Cantidad disponible en este momento solo es '+ valor ,
                showConfirmButton: false,
                timer: 1500
            });
            setAmount(amount);
        }
    };
    const restar = () => {
        setAmount(amount - 1);
        if (amount === 1) {
            setAmount(amount)
        };

    };

    const onHeart = () => {
        document.querySelector(".material-symbols-outlined").style.color = 'red';
        document.querySelector(".Content_favorite").style.border = ' solid red';
        // document.querySelector(".Content_favorite").style.backgroundColor = '';
        setCounter(counter + 1);
    };

    window.onmousemove = function () { see() };

    function see(e) {
      let x, y, y1, y2, x1, x2;
      let fact = 800 / 400;
      let opp = 120;
  
      if (e == null) e = window.event;
      x = e.clientX;
      y = e.clientY;
  
      x1 = - opp + (x) * fact;
      y1 = - opp + (y) * fact;
      x2 = + opp + (x) * fact;
      y2 = + opp + (y) * fact;
  
      (() => {
        document.getElementById('img_2').style.display = "inline";
        document.getElementById('img_2').style.left = (x) * (1 - fact);
        document.getElementById('img_2').style.top = (y) * (1 - fact);
        document.getElementById('img_2').style.clip = "rect(" + y1 + "px," + x2 + "px," + y2 + "px," + x1 + "px)";
      })();
  
    }
    

    return (
        <>
            <Header />
            <div className='content_buy'>
                <div className='row_buy'>
                    <div className='imgBuy'>
                        {/* <img className='img_buy' src={img} alt="Imagen compra" /> */}
                        <img id='img_1' src={img} alt="Imagen compra" style={{ width: 450 }} />
                        <img id='img_2' src={img} alt="Imagen compra" style={{ width: 800 }} />
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
                                <p className='name_buy_'>Cantidad disponible: <b>{valor}</b>
                                    <div className='product_btn_'>
                                        <div className='product_btn3'>
                                            <button className='btn_sum2' onClick={restar}>-</button>
                                            <p className='counter'>{amount}</p>
                                            <button className='btn_res2' onClick={sumar}>+</button>
                                        </div>
                                    </div></p>
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
                            <div className="Content_favorite" onClick={onHeart}>
                                <span className="material-symbols-outlined">
                                    favorite
                                </span>
                                <p className="like">{counter} like</p>
                            </div>
                            <Link to="/pago"><button className='addBuy_'>
                                Comprar ahora
                            </button></Link>
                            <button className='addBuy_2' onClick={add}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                    <div className='img_up_close'>
                        <Link to="/products"><img className='img_up_' src={back} alt="atras" /></Link>
                    </div>
                </div>
            </div>
            <div className='space_of_contents'>
                <hr className='hr2' />
            </div>


            <div className="description_all">
                <div className="content_description">
                    <h1 className='text-descrip'>Características</h1>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul><hr />

                    <h1 className='text-descrip'>Modo de uso</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam, iure quasi alias expedita repellat tenetur, nisi dolore iste, impedit soluta culpa. Amet consequuntur autem tempore explicabo et eos itaque.</p><hr />
                </div>

                <div>
                    <h1 className='text-descrip2'>
                        Otras personas también vieron
                    </h1>
                    <div className='Content-card'>
                        <Card />
                    </div>
                </div>
            </div>

            

            <Footer />
        </>
    )
}
