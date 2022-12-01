import React, { useState, useEffect } from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
// import Slider from '../../UI/js/Slider';
import { CardAllProducts } from '../../UI/CardAllProducts/CardAllProducts';
import { FaArrowCircleDown, FaArrowCircleUp, FaSlidersH } from "react-icons/fa";
// import { Character } from '../../UI/Character/Character';
// import axios from "axios"

export const Products = (props) => {

  const [slider1, setSlider1] = useState(30);
  const [slider2, setSlider2] = useState(70);

  window.onload = function () {
    slideOne()
    slideTwo()
  };

  // let displayValOne = document.getElementById("range1");
  // let displayValTwo = document.getElementById("range2");
  let minGap = 0;
  let sliderMaxValue = document.getElementById("slider-1");

  function slideOne() {
    if (slider1 - slider2 >= minGap) {
      setSlider1(slider2 - minGap)
      fillColor();
    }
    document.getElementById("range1").textContent = slider1;
  }

  function slideTwo() {
    if (slider2 - slider1 <= minGap) {
      slider2 = slider1 - minGap;
      fillColor();
    }
    document.getElementById("range2").textContent = slider2;
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

  function filterFunction() {
    if (shown === false) {
      document.querySelector(".subCategorias").style.display = "flex";
    } else if (shown === true) {
      document.querySelector(".subCategorias").style.display = "none";
    }
  }

  function filterFunction2() {
    if (shown2 === false) {
      document.querySelector(".subCategorias0").style.display = "flex";
    } else if (shown2 === true) {
      document.querySelector(".subCategorias0").style.display = "none";
    }
  }

  const [changeStyle, sethangeStyle] = useState()
  const changeStyle2 = (event) => {
    sethangeStyle(!changeStyle)
    event.preventDefault()
  };

  /*------------------- buscador ----------------------------- */
  const [texto, setTexto] = useState('');
  const inputLoad = (event) => {
    setTexto(event.target.value)
    // console.log(texto);
  }

  const [characters, setCharacters] = useState([])

    /*-------- Cantidad de productos -------*/ 
    const [counterProd, setCounterProd] = useState()
    /*--------------------------------------*/

  useEffect(() => {
    const URL = 'https://api-products-healthy.herokuapp.com/api/healthyapp'

    const asyncFetchData = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      setCharacters(data)
      setCounterProd(data.length)
    }
    asyncFetchData();
  }, [])

  const inputCharacters = characters.filter((character) => character.nombre.toLowerCase().includes(texto.toLowerCase()))

  /*------------------- Categorias ----------------------------- */

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const URL2 = 'https://api-products-healthy.herokuapp.com/api/categorias'

    const asyncFetchData2 = async () => {
      const res = await fetch(URL2)
      const data = await res.json()
      setCategorias(data)
      // console.log(data);
    }
    asyncFetchData2();
  }, [])


  /*------------ Filtro categorias -----------*/

  const [categoriaSeleccionada, setcategoriaSeleccionada] = useState([])
  const [datosFiltrados, setDatosFiltrados] = useState([])

  const handleOneCheckbox = (e) =>{
    setcategoriaSeleccionada({
      ...categoriaSeleccionada,
      [e.target.value]: e.target.checked,
    })
    if (e.target.checked) {

      const resultadoCategoria = characters.filter((character) => character.categoria === parseInt(e.target.value))

      setDatosFiltrados([
        ...datosFiltrados,
        ...resultadoCategoria
      ])
    }else{
      const resultadoCategoria = datosFiltrados.filter(item => item.categoria !== parseInt(e.target.value))

      setDatosFiltrados([...resultadoCategoria])
    }
  }
  // console.log(datosFiltrados)

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} /><br /><br />
      {/* <h2 className='titleCategoria'>Compra por categoría</h2> */}
      {/* <Categories /> */}
      <br /><br />
      <div className='container-Orden-Productos'>
        <div className='navba__'>
          <input type="search" placeholder='Buscar producto' className='buscar' value={texto} onChange={inputLoad} />
        </div>
        <p className='productsEncontrados'>{counterProd} Productos Encontrados</p>
        {/* <p className='productsEncontrados'>Ordenar por:</p>
        <select name="" id="selectPrecios">
          <option value="">Relevancia</option>
          <option value="">Más vendidos</option>
          <option value="">Más recientes</option>
          <option value="">Descuento</option>
          <option value="">Precio más alto</option>
          <option value="">Precio más bajo</option>
        </select> */}
      </div>
      <div className='containerFilter'>
        <div className='containerCategorias'>
          <div className='containerTitle'>
            <h2 className='titleFilter'><FaSlidersH className='iconFilter' /> Filtrar por</h2>
          </div>
          <div className='containerFiltros'>
            <div className='filterCategoria'>
              <label onClick={switchShown} className='categIcon' role="button">Categoría  {shown ? <FaArrowCircleUp onClick={switchShown} className='iconArrow' /> : <FaArrowCircleDown onClick={switchShown} className='iconArrow' />}</label>
              <div className='subCategorias' id='subCategorias'>
                {categorias.map((data, key) => (
                <div className='subCategorias2' key={key}>
                  <p><input type="checkbox" value={data.id} onChange={handleOneCheckbox}/>{data.nombre}</p>
                </div>
                ))}
              </div>
            </div>
            <hr />
            <label className='priceRange'>Precios</label>
            <br />
            <div className="wrapper">
              <div className="values">
                <span id="range1">
                  0
                </span>
                <span> - </span>
                <span id="range2">
                  100
                </span>
              </div>
              <div className="containerPrices">
                <div className="slider-track" id='slider-track'></div>
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
        <CardAllProducts texto={texto} datosFiltrados={datosFiltrados}  characters={inputCharacters}/>
        {/* <Character characters={inputCharacters} /> */}
      </div>
      <Footer />
    </div>
  )
}