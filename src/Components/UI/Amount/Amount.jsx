import { React, useState } from 'react'
import './Amount.css';
import { FaShoppingCart } from "react-icons/fa";
import { Footer } from '../../Page/Layout/Footer/Footer';
import { Header } from '../../Page/Layout/Header/Header';
import { Link } from 'react-router-dom';
import delect from '../../Image/eliminar.gif'
import img_prueba from '../../Image/assects/pax.jpg'


export const Amount = () => {

    const [counter, setCounter] = useState(1);
    const sumar = () => { setCounter(counter + 1); };
    const restar = () => { setCounter(counter - 1); };

    /*----------- condicion de cantidad, supera el limite -------------- */
    // useEffect(() => {
    //       counter >= 10 ? "no puedes añadir más productos" : "hola";
    //     }, [counter]);


    /*----------- calcular -------------- */
    let total = [];
    let buy = [];

    const calcular = () => {
        let subTotal = counter * 30000
        total.push(subTotal);
        console.log(total);

        let total_all = 12 / 100
        let total_all2 = total_all * total
        buy.push(total_all2);
        console.log(buy);
    }


    /*----------- eliminar -------------- */

    const delectt = () =>{

    }
    

    return (
        <>
            <Header />
            <div className="content_car">
                <div className='product'>
                    <div className="product_all">
                        <div>
                            <img className='product_img' src={img_prueba} alt="imagen prodcuto" />
                        </div>
                        <div className='product_name'>
                            <p className='error'>Pax noche </p>
                        </div>
                        <div className='product_price'>
                            <p className='error'>$ 30000</p>
                        </div>
                        <div className='product_btn'>
                            <div className='product_btn2'>
                                <button className='btn_sum' onClick={restar}>-</button>
                                <p className='counter'>{counter}</p>
                                <button className='btn_res' onClick={sumar}>+</button>
                            </div>
                        </div>
                        <div className='delect'>
                            <img onClick={delectt} className='delect_producto' src={delect} alt="eiminar producto" />
                        </div>
                    </div> <br />



                    {/* prueba al amontonar todad las cards */}
                    

                </div>




                {/* ---------precios----------- */}
                <div className='amount_calculate'>
                    <div className='amount_content'>
                        <div className="amount_up">
                            <FaShoppingCart />
                            <p className='error'> Tu carrito de compras</p>
                        </div>
                        <div className="amount_number">
                            <div className='amount_text'>
                                <p>Sub total: </p>
                                <p id='sub'>$ </p>
                            </div>
                            <div className='amount_text2'>
                                <p>Descuento: </p>
                                <p>% 12</p>
                            </div><hr className='lineal' />
                            <div className="amount_total">
                                <p>Total a pagar:</p>
                                <p>$ </p>
                            </div>
                        </div>
                        <div className='amount_btn'>
                            <Link to='/products'><button className='btn_back'>Segir comprando</button></Link>
                            <button onClick={calcular} className='btn_buy'>Ir a pagar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
