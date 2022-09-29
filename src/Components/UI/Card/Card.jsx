import React from 'react';
import img from '../../Image/assects/medicasp.jpg';
import img2 from '../../Image/assects/pax.jpg';
import img3 from '../../Image/assects/nutribela.jpg';
import img4 from '../../Image/assects/acetaminofen.jpg';
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
    });
  }

  return (
    <div className='content_Product'>
      <h1 className='title-product'>Productos más comprados</h1>
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




        <div className='column_all'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgProduct2' src={img2} alt="Producto imagen" /></Link>
          </div>
          <div className='padding_product'>
            <div>
              <p className='name_Product'>Pax noche </p>
            </div>

            <div>
              <p className='price_product'>$ 7.000</p>
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
          <button onClick={add} className='addProduct_'>
              <FaShoppingCart /> Aregar al carrito
            </button>
          </div>
        </div>


        <div className='column_all'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgProduct' src={img3} alt="Producto imagen" /></Link>
          </div>
          <div className='padding_product'>
            <div>
              <p className='name_Product'>Nutribela 10</p>
            </div>

            <div>
              <p className='price_product'>$ 17.000</p>
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
          <button onClick={add} className='addProduct_'>
              <FaShoppingCart /> Aregar al carrito
            </button>
          </div>
        </div>



        <div className='column_all'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgProduct2' src={img4} alt="Producto imagen" /></Link>
          </div>
          <div className='padding_product'>
            <div>
              <p className='name_Product'>Acetaminofén  </p>
            </div>

            <div>
              <p className='price_product'>$ 10.000</p>
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
          <button onClick={add} className='addProduct_'>
              <FaShoppingCart /> Aregar al carrito
            </button>
          </div>

        </div>


      </div><br />
    </div>
  )

}
