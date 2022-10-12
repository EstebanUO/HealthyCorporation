import React from 'react';
import medicasp from '../../Image/assects/medicasp.jpg';
import pax from '../../Image/assects/pax.jpg';
import nutribela from '../../Image/assects/nutribela.jpg';
import acetaminofen from '../../Image/assects/acetaminofen.jpg';
import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowDown, FaSlidersH,FaTh,FaThList } from "react-icons/fa";
import swal from 'sweetalert';
import './Card.css'

export const Card = () => {
  const add = () => {
    swal({
      title: "Producto agregado al carrito",
      text: "Se ha añadido correctamente",
      icon: "success",
      button: "Seguir comprando",
    });
  }

  return (
    <div className='content_Product'>
      {/* <h1 className='title-product'>Productos más comprados</h1> */}
      <div className='containerFilter'>
        <div className='containerFiltrado'>
          <div className='titleFiltro'>
            <h4><FaSlidersH/> Filtrar por:</h4>
          </div>
          <div>
            <div role="button" tabIndex="0">
              <div>
                <span>Categoría</span>
                <span>
                  <FaArrowDown />
                </span>
              </div>
              <div>
                <span>Marca</span>
                <span>
                  <FaArrowDown />
                </span>
              </div>
            </div>
            <div className='wrapper'>
              <span>Precios</span><br />
              <div className='price-input'>
                <div className='field'>
                  <span>Min</span>
                  <input type="number" className="input-min" value="2500"/>
                </div>
                <div className='separator'>-</div>
                <div className='field'>
                  <span>Max</span>
                  <input type="number" className="input-min" value="100.000"/>
                </div>
              </div>
              <div className='slider'>
                <div className="progress"></div>
              </div>
              <div className="range-input">
                <input type="range" className='range-min' min="0" max="10000" value="2500"/>
                <input type="range" className='range-max' min="0" max="10000" value="7500"/>
              </div>
            </div>
          </div>
          <div className='containerOrder'>
            <div className='iconsList'>
              <FaTh/> | <FaThList/> |
            </div>
            <p>Ordenar por: </p>
            <select name="" id="">
              <option value="">Relevancia</option>
              <option value="">Más vendidos</option>
              <option value="">Más reciente</option>
              <option value="">Descuento</option>
              <option value="">Precio más alto</option>
              <option value="">Precio más bajo</option>
            </select>
          </div>
        </div>
      </div>
      <div className='card_product'>
        <div className='column_all'>
          <div className='imgProduct_' >
            <Link to="/compra"><img className='imgProduct' src={medicasp} alt="Producto imagen" /></Link>
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
        <div className='column_all'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgProduct2' src={pax} alt="Producto imagen" /></Link>
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
        <div className='column_all'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgProduct' src={nutribela} alt="Producto imagen" /></Link>
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
        <div className='column_all'>
          <div className='imgProduct_' >
          <Link to="/compra"><img className='imgProduct2' src={acetaminofen} alt="Producto imagen" /></Link>
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
      </div><br />
    </div>
  )

}
