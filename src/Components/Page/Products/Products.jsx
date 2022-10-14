import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
// import Slider from '../../UI/js/Slider';
import { CardAllProducts } from '../../UI/CardAllProducts/CardAllProducts';
import { FaArrowDown, FaSlidersH,FaTh,FaThList } from "react-icons/fa";
import { Categories } from '../../UI/Categories/Categories';

export const Products = (props) => {

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} /><br /><br />
      <h2 className='titleCategoria'>Compra por categoría</h2>
      <Categories/>
      <br /><br />
      <div className='container-Orden-Productos'>
          <p>6363 | Productos Encontrados</p> 
          | <FaTh/> | <FaThList/> | 
          <p>Ordenar por:</p>
          <select name="" id="">
            <option value="">Relevancia</option>
            <option value="">Más vendidos</option>
            <option value="">Más recientes</option>
            <option value="">Descuento</option>
            <option value="">Precio más alto</option>
            <option value="">Precio más bajo</option>
          </select>
        </div>
      <div className='containerFilter'>
      
        <div className='containerCategorias'>
          <div className='containerTitle'>
            <h2 className='titleFilter'><FaSlidersH className='iconFilter'/> Filtrar por:</h2>
          </div>
          <div className='containerFiltros'>
            <div className='filterCategoria'>
              <label>Categoría</label>
            </div>
            <hr />
            <div className='filterCategoria'>
              <label>Marca</label>
            </div>
            <hr />
            <label for='priceRange'>Precios</label>
            <br />
            <input type="text" id='priceRange' readOnly/>
            <div id='price-range' className='sliderFilter'></div>
          </div>
        </div>
        
        <CardAllProducts />
      </div>
      
      <Footer />
    </div>
  )
}