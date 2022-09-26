import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { FaShoppingCart } from "react-icons/fa";
import Slider from '../../UI/js/Slider';
import img from '../../Image/assects/pax.jpg';
import './Producto.css'


export const Products = (props) => {
  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} />
      <br /><Slider /><br />

<div className='content_Product'>

      <div className='card_product'>
        <div className='column_all'>
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
              <p className='textProduct'>Venta directa </p>
            </div>
          </div>
          <div className='addProduct'>
            <button className='addProduct_'>
              <FaShoppingCart /> Aregar al carrito
            </button>
          </div>

        </div>






        <div className='column_all'>
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

        </div>
      </div><br />







</div>


      <Footer />
    </div>
  )
}