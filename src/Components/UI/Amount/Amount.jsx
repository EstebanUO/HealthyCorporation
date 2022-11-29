import React, { useState,  useEffect} from 'react'
import './Amount.css';
import { FaShoppingCart } from "react-icons/fa";
import { Footer } from '../../Page/Layout/Footer/Footer';
import { Link } from 'react-router-dom';
import delect from '../../Image/eliminar.png'
import Swal from 'sweetalert2';
// import logo2 from '../../Image/logo.png'
import back from '../../Image/back.png';
import axios from "axios"
import { Header } from '../../Page/Layout/Header/Header';

export const Amount = (props) => {
    

    const arrs = JSON.parse(localStorage.getItem("car"));
    const [arr, setarr] = useState(arrs)
    const [priceTotal, setpriceTotal] = useState(0)
    let descuento=1000;

    const onload= ()=> {
        let total=0;
        
        
        for(let i = 0; i <= arrs.length-1; i++){
            total+=arrs[i].prices
            console.log(arrs[i].prices);
        } ;  

        setpriceTotal(total)
        
    }

    

    let valor=10;

    const sumar = (e,prices) => {
       const contador= document.getElementById(e.target.value)
       const price = document.getElementById("price"+e.target.value)
       const priceLimpio=parseInt(price.innerHTML.slice(1))
       const valiContador=parseInt(contador.innerHTML);
       const sumas=parseInt(contador.innerHTML)+1;
       contador.textContent=sumas;
       const suma=priceLimpio+prices;
       price.textContent=`$${suma}`
       const restaPrices= priceTotal-priceLimpio 
       setpriceTotal(restaPrices+suma)
       
        
        if (valiContador === valor) {
            Swal.fire({
                icon: 'error',
                title: 'Cantidad disponible en este momento solo es ' + valor,
                showConfirmButton: false,
                timer: 1500
            });
            contador.textContent=10;
            price.textContent="$"+prices*10
            setpriceTotal(restaPrices+(prices*10))
        }
    };
    const restar = (e,prices) => {
        const contador= document.getElementById(e.target.value)
        const price = document.getElementById("price"+e.target.value)
        const priceLimpio=parseInt(price.innerHTML.slice(1))
        const valiContador=parseInt(contador.innerHTML);
        const sumas=parseInt(contador.innerHTML)-1;
        contador.textContent=sumas;
        const resta=priceLimpio-prices;
        price.textContent="$"+(resta)
        const restaPrices= priceTotal-priceLimpio 
        setpriceTotal(restaPrices+resta)
        if (valiContador === 1) {
            contador.textContent=1;
            price.textContent="$"+prices
            setpriceTotal(restaPrices+prices)
        };
    };



    /*----------- eliminar -------------- */

    const delectt = (data) => {
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
            customClass: {
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
                const datos=arr.indexOf(data)
                const filtro = arr.filter((item) => item !== arr[datos]) 
                localStorage.setItem("car", JSON.stringify(filtro))
                setarr(filtro)  
                const price = document.getElementById("price"+data.ids)
                const priceLimpio=parseInt(price.innerHTML.slice(1))
                const newValor=priceTotal-priceLimpio
                setpriceTotal(newValor)

                 
            }
        })
    }
    



    return (
        <>
            <Header  valiLoginAdmin={props.valiLoginAdmin}/>
            
            <div onLoad={()=>{onload()}} className="content_car">
                <nav className='nav_check_'><p className='pad_check_'>Tu carrito de compras</p>
                    <div className='back_up_'><Link to="/products"><img className='img_up2' src={back} alt="atras" /><p className='back'>Atras</p></Link>
                    </div></nav>
                <div   className='product'>
                     {arr.map((data) => (
                        <> <div className="product_all">
                            <div>
                                <img className='product_img'  src={"https://api-products-healthy.herokuapp.com"+data.imagenes} />
                            </div>
                            <div className='product_name'>
                                <p className='error_'>{data.nombres}</p>
                            </div>
                            <div className='product_price'>
                                <p id={"price"+data.ids} className='error'>${data.prices} </p>
                            </div>
                            <div className='product_btn'> 
                                <div className='product_btn2'>
                                    <button value={data.ids} className='btn_sum' onClick={(e)=>restar(e,data.prices)}>-</button>
                                    <p id={data.ids} className='counter'>1</p>
                                    <button value={data.ids} className='btn_res' onClick={(e)=>sumar(e,data.prices)}>+</button>
                                </div>
                            </div>
                            <div className='delect'>
                                <img onClick={()=>delectt(data)} className='delect_producto' src={delect} alt="eiminar producto" />
                            </div>
                        </div> <br /></>
                       ))}   



                </div>


                {/* ---------precios----------- */}
                <div className='amount_calculate'>
                    <div className='amount_content'>
                        <div className="amount_up">
                            <FaShoppingCart />
                            <p className='error'> Calcular tus productos</p>
                        </div>
                        <div className="amount_number">
                            <div className='amount_text'>
                                <p>Sub total: </p>
                                <p id='sub'>$ {priceTotal}</p>
                            </div>
                            <div className='amount_text2'>
                                <p>Descuento: </p>
                                <p>$ {descuento}</p>
                            </div><hr className='lineal' />
                            <div className="amount_total">
                                <p>Total a pagar:</p>
                                <p>$ {priceTotal===0?0:priceTotal-descuento}</p>
                            </div>
                        </div>
                        <div className='amount_btn'>
                            <Link to='/pago'><button className='btn_buy'>Ir a pagar</button></Link>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
