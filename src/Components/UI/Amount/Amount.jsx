import { React, useState } from 'react'
import './Amount.css';
import { FaShoppingCart } from "react-icons/fa";
import { Footer } from '../../Page/Layout/Footer/Footer';
import { Header } from '../../Page/Layout/Header/Header';
import { Link } from 'react-router-dom';
import delect from '../../Image/eliminar.png'
import img_prueba from '../../Image/assects/pax.jpg'
import Swal from 'sweetalert2';

export const Amount = (props) => {

    const [counter, setCounter] = useState(1);
    const [valor, setValor] = useState(10);

    /* Actualizar la cantidad disponible*/
    // const URl = '';
    // const hola= () => {
    //     setValor
    // }

    const sumar = () => {
        setCounter(counter + 1);
        if (counter === valor) {
            Swal.fire({
                icon: 'error',
                title: 'Cantidad disponible en este momento solo es '+ valor ,
                showConfirmButton: false,
                timer: 1500
            });
            setCounter(counter);
        }
    };
    const restar = () => {
        setCounter(counter - 1);
        if (counter === 1) {
            setCounter(counter)
        };
    };


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
        Swal.fire({
            title: '¿Estas seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '!Si!, quiero eliminarlo',
            cancelButtonText: 'Cancelar',
            buttonsStyling: false,
            customClass:{
                confirmButton: "confirm",
                cancelButton: "Cancel"
            }
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                icon: 'success',
                title: 'Se ha eliminado el producto del carrito',
                showConfirmButton: false,
                timer: 1400
              })
            }
          })
    }
    

    return (
        <>
            <Header valiLoginAdmin={props.valiLoginAdmin}/>
            <div className="content_car">
                <div className='product'>
                    <div className="product_all">
                        <div>
                            <img className='product_img' src={img_prueba} alt="imagen prodcuto" />
                        </div>
                        <div className='product_name'>
                            <p className='error_'>Pax noche </p>
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
                                <p id='sub'>$ 0</p>
                            </div>
                            <div className='amount_text2'>
                                <p>Descuento: </p>
                                <p>% 12</p>
                            </div><hr className='lineal' />
                            <div className="amount_total">
                                <p>Total a pagar:</p>
                                <p>$ 0</p>
                            </div>
                        </div>
                        <div className='amount_btn'>
                            <button onClick={calcular} className='btn_back'>Calcular</button>
                            <Link to='/pago'><button  className='btn_buy'>Ir a pagar</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
