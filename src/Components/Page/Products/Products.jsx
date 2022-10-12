import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
// import Slider from '../../UI/js/Slider';
import { Card } from '../../UI/Card/Card';
import { FaArrowDown, FaSlidersH,FaTh,FaThList } from "react-icons/fa";
import { Categories } from '../../UI/Categories/Categories';

export const Products = (props) => {

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} />
      <h2>Compra por categoría</h2>
      <div className='conteinerProducts'>
        <Categories/>
        <div className='containerFilter'>
            <h2 className='titleFilter'><FaSlidersH/>Filtrar por:</h2>
            <div className='filterCategoria'>
              <label>Catergoría</label>
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
        <Card />
      </div>
      
      <Footer />
    </div>
  )
}