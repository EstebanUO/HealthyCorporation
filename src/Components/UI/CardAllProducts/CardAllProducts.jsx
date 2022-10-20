import React from 'react';
import medicasp from '../../Image/assects/medicasp.jpg';
import pax from '../../Image/assects/pax.jpg';
import nutribela from '../../Image/assects/nutribela.jpg';
import acetaminofen from '../../Image/assects/acetaminofen.jpg';
import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowDown, FaSlidersH,FaTh,FaThList } from "react-icons/fa";
import Swal from 'sweetalert2'

export const CardAllProducts = () => {
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

  return (
    <div className='content_all_Product'>
      {/* <h1 className='title-product'>Productos más comprados</h1> */}
      <div className='card_all_product'>
        <div className='column_all_products'>
          <div className='imgProduct_' >
            <Link to="/compra"><img className='imgAllProduct' src={medicasp} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart />
            </button>
          </div>
        </div>
        <div className='column_all_products'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgAllProduct' src={pax} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart />
            </button>
          </div>
        </div>
        <div className='column_all_products'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgAllProduct' src={nutribela} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart />
            </button>
          </div>
        </div>
        <div className='column_all_products'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgAllProduct' src={acetaminofen} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart /> 
            </button>
          </div>
        </div>
        <div className='column_all_products'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgAllProduct' src={acetaminofen} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart /> 
            </button>
          </div>
        </div>
        <div className='column_all_products'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgAllProduct' src={acetaminofen} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart /> 
            </button>
          </div>
        </div>
        <div className='column_all_products'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgAllProduct' src={acetaminofen} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart /> 
            </button>
          </div>
        </div>
        <div className='column_all_products'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgAllProduct' src={acetaminofen} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart /> 
            </button>
          </div>
        </div>
        <div className='column_all_products'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgAllProduct' src={acetaminofen} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart /> 
            </button>
          </div>
        </div>
        <div className='column_all_products'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgAllProduct' src={acetaminofen} alt="Producto imagen" /></Link>
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
              Agregar <FaShoppingCart /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}