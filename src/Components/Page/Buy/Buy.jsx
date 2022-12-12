import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';
import { Card } from '../../UI/Card/Card';
import { FaShoppingCart } from "react-icons/fa";
import ReactImageMagnify from 'react-image-magnify';
import back from '../../Image/x.png';
import Swal from 'sweetalert2';
import axios from "axios"
import './buy.css'


export const Buy = (props) => {

    const [counter, setCounter] = useState(6);
    const [amount, setAmount] = useState(1);
    const [valor, setValor] = useState(1);
    const [Id, setId] = useState([])

    const arrs = JSON.parse(localStorage.getItem("list"));
    const [arr, setarr] = useState([])
    const onload = () => {
        if (arrs !== null) {
          setarr(arrs)
        }
    
      }

    /* ------------------------------ add product ---------------------------- */
    const [products_2, setProducts_2] = useState([])

    let validDatos = (localStorage.getItem("car"))
    // let array = JSON.parse(localStorage.getItem("car"))
    const add = (nombre, price, imagen, id) => {
        let data = JSON.parse(validDatos)
        let vali = 0
        if (data !== null) {
            data.map((data) => {
                if (data.ids === id) {
                    vali = 1
                }
            })
        }

        if (vali === 0) {
            var datos = { nombres: nombre, prices: price, imagenes: imagen, ids: id }

            setProducts_2(products_2 => products_2.concat(datos))
            validDatos === null ? validDatos = [] : validDatos = JSON.parse(validDatos);

            localStorage.setItem("car", JSON.stringify(validDatos.concat(datos)))

            // props.setcounter_h(array) 

            Swal.fire({
                icon: 'success',
                title: 'Se ha agregado el producto al carrito',
                showConfirmButton: false,
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                cancelButtonColor: '#d33',
                timer: 7400,
                timerProgressBar: true,
                buttonsStyling: false,
                customClass: {
                    cancelButton: "Cancel_"
                },
                html: '<div class="pse_content"><a class="text_link" href="/car"><button class="confirm">Ver mi carrito</button></a> </div>'
            });

        } else if (vali === 1) {
            Swal.fire({
                icon: 'warning',
                title: 'Producto ya añadido a carrito',
                showConfirmButton: false,
                timer: 1600 
            })
        }
    }



    const sumar = () => {
        setAmount(amount + 1);
        if (amount === Id.cantidad) {
            Swal.fire({
                icon: 'error',
                title: 'Cantidad disponible en este momento solo es ' + Id.cantidad,
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

    const [products_3, setProducts_3] = useState([])
    let validDatos_ = (localStorage.getItem("list"))

    const onHeart = (nombre,price,imagen,id,cantidad) => {
        let data=JSON.parse(validDatos_)
        let vali=0
        if (data!==null) {
          data.map((data) =>{if( data.ids === id){
            vali=1
          }})
        }


        document.querySelector(".material-symbols-outlined").style.color = 'red';
        document.querySelector(".Content_favorite").style.border = ' solid red';
        // document.querySelector(".Content_favorite").style.backgroundColor = '';
        setCounter(counter + 1);

        /* ---------------------- producto ----------------------- */
        if (vali===0) {
        var datos = { nombres: nombre, prices: price, imagenes: imagen, ids: id, cantidades: cantidad }

        setProducts_3(products_3 => products_3.concat(datos))
        validDatos_ === null ? validDatos_ = [] : validDatos_ = JSON.parse(validDatos_);

        localStorage.setItem("list", JSON.stringify(validDatos_.concat(datos)))
        
        }


        if (counter === 7) {
            // document.querySelector(".material-symbols-outlined").style.color = 'gray';
            // document.querySelector(".Content_favorite").style.border = ' solid gray';
            setCounter(counter);


        //     /* ----------------------- eliminar el producto ----------------------- */

        //     const datos_=arr.indexOf(Id)
        //     const filtro = arr.filter((item) => item !== arr[datos_]) 
        //     localStorage.setItem("list", JSON.stringify(filtro))
        //     setarr(filtro) 
        //     window.location.reload()
        }
    };

    /* ------------------------------ product ---------------------------- */

    /* validacion si hay un producto en lista de deseos se quede en rojo y pueda eliminarlo */

    const productId = localStorage.getItem("product")

    /* toma solo un valor el ultimo */
    let num 

    arr.map(function(data) {
       num = data.ids
    });

    window.onload = () => {
        // const productId_2 = localStorage.getItem("product")
        let num_ = parseInt(productId)
        if (num_ === num) {
            console.log("entra");
            document.querySelector(".material-symbols-outlined").style.color = 'red';
            document.querySelector(".Content_favorite").style.border = ' solid red';
            setCounter(counter + 1)
        }
    }

    /* fin de validacion */

    const baseURL = `https://api-products-healthy.herokuapp.com/api/healthyapp/${productId}`;
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setId(response.data);
        });
    }, []);


    /*----------------------------------------------------------------------*/

    const formatoMexico = (number) => {
        const exp = /(\d)(?=(\d{3})+(?!\d))/g;
        const rep = '$1,';
        return number.toString().replace(exp, rep);
      }

    return (
        <>
            <Header valiLoginAdmin={props.valiLoginAdmin} />
            <div className='content_buy'  onLoad={()=>{onload()}}>
                <div className='row_buy'>
                    <div className='imgBuy'>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: '...Cargando',
                                isFluidWidth: false,
                                src: "https://api-products-healthy.herokuapp.com" + Id.imagen,
                                width: 300,
                                height: 200,
                            },
                            largeImage: {
                                src: "https://api-products-healthy.herokuapp.com" + Id.imagen,
                                width: 1000,
                                height: 667,
                            }
                        }} />
                    </div>
                    <div className='columm_buy'>
                        <div className='padding_buy'>
                            <div className='up_buy'>
                                <p>Nuevo  |  85 Vendidos</p>
                            </div>
                            <div>
                                <p className='name_buy'>{Id.nombre}</p>
                            </div>
                            <div className='up_buy_3'>
                            </div>
                            <div className='Content_price'>
                                <p className='price_buy'>$ {Id.price}</p>
                            </div>

                            <div>
                                <p className='name_buy_'>Cantidad disponible: <b>{Id.cantidad}</b>
                                    <div className='product_btn_'>
                                        <div className='product_btn3'>
                                            <button className='btn_res2' onClick={restar}>-</button>
                                            <p className='counter'>{amount}</p>
                                            <button className='btn_sum2' onClick={sumar}>+</button>
                                        </div>
                                    </div></p>
                            </div>
                            <div className='up_buy_1'>
                                <p>Puedes comprar esta unidad</p>
                            </div>
                            <div className='up_buy_2'>
                                <p>Envio gratis</p>
                            </div>
                        </div>
                        <div className='addBuy'>
                            <div className="Content_favorite" onClick={(e) => { onHeart(Id.nombre, Id.price, Id.imagen, Id.id, Id.cantidad) }}>
                                <span className="material-symbols-outlined">
                                    favorite
                                </span>
                                <p className="like">{counter} like</p>
                            </div>
                            <a href="/pago"><button className='addBuy_'>
                                Comprar
                            </button></a>
                            <button className='addBuy_2' onClick={(e) => { add(Id.nombre, Id.price, Id.imagen, Id.id) }} value={Id.id}>
                                Agregar<FaShoppingCart />
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
                    {/* <h1 className='text-descrip'>Características</h1>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul><hr /> */}
                    <h1 className='text-descrip'>Descripción</h1>
                    <p>{Id.descripcion}</p></div>
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
