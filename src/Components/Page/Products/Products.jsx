import React, { useState } from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
// import Slider from '../../UI/js/Slider';
import { CardAllProducts } from '../../UI/CardAllProducts/CardAllProducts';
import { FaArrowCircleDown, FaArrowCircleUp, FaSlidersH, FaTh, FaThList } from "react-icons/fa";
import { Categories } from '../../UI/Categories/Categories';

export const Products = (props) => {

  const [slider1, setSlider1] = useState(30);
  const [slider2, setSlider2] = useState(70);

  window.onload = function () {
    slideOne()
    slideTwo()
  };

  let displayValOne = document.getElementById("range1");
  let displayValTwo = document.getElementById("range2");
  let minGap = 0;
  let sliderMaxValue = document.getElementById("slider-1");

  function slideOne() {
    if (slider1 - slider2 >= minGap) {
      setSlider1(slider2 - minGap)
      fillColor();
    }
    displayValOne.textContent = slider1;
  }

  function slideTwo() {
    if (slider2 - slider1 <= minGap) {
      slider2 = slider1 + minGap;
      fillColor();
    }
    displayValTwo.textContent = slider2;
  }

  function fillColor() {
    const percent1 = slider1 / sliderMaxValue * 100;
    const percent2 = slider2 * 100;
    document.getElementById("slider-track").style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  }

  const [shown, setShown] = useState(false);
  const switchShown = (event) => {
    setShown(!shown)
    filterFunction()
    event.preventDefault()
  };

  const [shown2, setShown2] = useState(false);
  const switchShown2 = (event) => {
    setShown2(!shown2)
    filterFunction2()
    event.preventDefault()
  };

  function filterFunction(){
    if (shown === false) {
      document.querySelector(".subCategorias").style.display = "flex";
    }else if(shown === true){
      document.querySelector(".subCategorias").style.display = "none";
    }
  }

  function filterFunction2(){
    if (shown2 === false) {
      document.querySelector(".subCategorias0").style.display = "flex";
    }else if(shown2 === true){
      document.querySelector(".subCategorias0").style.display = "none";
    }
  }

  const [changeStyle, sethangeStyle] = useState()
  const changeStyle2 = (event) => {
    sethangeStyle(!changeStyle)
    event.preventDefault()
  };

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} /><br /><br />
      <h2 className='titleCategoria'>Compra por categoría</h2>
      <Categories />
      <br /><br />
      <div className='container-Orden-Productos'>
        <p className='productsEncontrados'>6363 | Productos Encontrados</p>|
        <p className='productsEncontrados'>Ordenar por:</p>
        <select name="" id="selectPrecios">
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
            <h2 className='titleFilter'><FaSlidersH className='iconFilter' /> Filtrar por</h2>
          </div>
          <div className='containerFiltros'>
            <div className='filterCategoria'>
              <label onClick={switchShown} className='categIcon' role="button">Categoría  {shown? <FaArrowCircleUp onClick={switchShown} className='iconArrow'/>:<FaArrowCircleDown onClick={switchShown} className='iconArrow'/>}</label>
              <div className='subCategorias' id='subCategorias'>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Medicamentos</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Dolor e inflamación</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Gripa y tos</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Nutrición especializada</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Salud sexual</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Antialergicos y descongestionantes</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Medicamentos con prescripción medica</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Piel</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Rehidratación</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Antiparasitos</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Cuidado intimo</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Nutrición infantil</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Sistema infantil</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Cuidado de la herida</p>
                </div>
                <div className='subCategorias2'>
                  <input type="checkbox" /><p>Vitaminas y minerales</p>
                </div>
              </div>
            </div>
            <hr />
            <div className='filterCategoria'>
              <label onClick={switchShown2} className='categIcon' role="button">Marca{shown2? <FaArrowCircleUp onClick={switchShown2} className='iconArrow'/>:<FaArrowCircleDown onClick={switchShown2} className='iconArrow'/>}</label>
                <div className='subCategorias0'>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Mk</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>La santé</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Genfar</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Coaspharma</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Ag</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Colmed</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Drogam</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Alfasafe</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Noravel</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Vitalis</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Dolex</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Ensure</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Nexcare</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Cureband</p>
                  </div>
                  <div className='subCategorias2'>
                    <input type="checkbox" /><p>Today</p>
                  </div>
                </div>
            </div>
            <hr />
            <label for='priceRange'>Precios</label>
            <br />
            <div class="wrapper">
              <div class="values">
                <span id="range1">
                  0
                </span>
                <span> - </span>
                <span id="range2">
                  100
                </span>
              </div>
              <div class="containerPrices">
                <div class="slider-track" id='slider-track'></div>
                <input type="range" min="0" max="100" value={slider1} id="slider-1" onChange={(e) => {
                  setSlider1(e.target.value)
                  slideOne()
                }} />
                <input type="range" min="0" max="100" value={slider2} id="slider-2" onChange={(e) => {
                  setSlider2(e.target.value)
                  slideTwo()
                }} />
              </div>
            </div>

          </div>
        </div>
        <CardAllProducts />
      </div>
      <Footer />
    </div>
  )
}