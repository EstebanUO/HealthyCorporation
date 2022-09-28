import React from 'react';
import img from '../../Image/assects/medicasp.jpg';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import swal from 'sweetalert';
import './Card.css'

export const Card = () => {
  const add = () => {
    swal({
    title: "Genial",
    text: "Se a añadido este producto al carrito",
    icon: "success",
    button: "Continuar viendo productos",
  });}

    return (
        <div className='content_Product'>
            <div className='card_product'>
                <div className='column_all'>
                    <div className='imgProduct_' >
                        <Link to="/compra"><img className='imgProduct' src={img} alt="Producto imagen" /></Link>
                    </div>
                    <div className='padding_product'>
                        <div>
                            <p className='name_Product'>Medicasp </p>
                        </div>

                        <div>
                            <p className='price_product'>$ 40.000</p>
                        </div>
                        <div>
                            <p className='name_Product_'>Cantidad disponible:  4</p>
                        </div>
                        <div className='rowProduct'>
                            <p className='textProduct'>Despacho</p>
                            <p className='textProduct_'>Retiro</p>
                            <p className='textProduct'>Venta directa </p>
                        </div>
                    </div>
                    <div className='addProduct'>
                        <button onClick={add} className='addProduct_'>
                            <FaShoppingCart /> Aregar al carrito
                        </button>
                    </div>

                </div>






                {/* <div className='column_all'>
          <div className='imgProduct_' >
            <img className='imgProduct' src={img} alt="Producto imagen" />
          </div>
          <div className='padding_product'>
            <div>
              <p className='name_Product'>Pax noche </p>
            </div>

            <div>
              <p className='price_product'>$ 40.000</p>
            </div>
            <div>
              <p className='name_Product_'>Cantidad disponible:  4</p>
            </div>
            <div className='rowProduct'>
              <p className='textProduct'>Despacho</p>
              <p className='textProduct_'>Retiro</p>
              <p className='textProduct'>Venta directa</p>
            </div>
          </div>
          <div className='addProduct'>
            <button className='addProduct_'>
              <FaShoppingCart /> Aregar al carrito
            </button>
          </div>

        </div> */}
            </div><br />
        </div>
    )

}
