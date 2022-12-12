import React, { useState, useEffect } from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { CardAllProducts } from '../../UI/CardAllProducts/CardAllProducts';
import { FaArrowCircleDown, FaArrowCircleUp, FaSlidersH } from "react-icons/fa";
// import { Character } from '../../UI/Character/Character';
import { Categories } from '../../UI/Categories/Categories'
import Slider from '@mui/material/Slider';

export const Products = (props) => {

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

  /*--------------- Filtro de precios ---------------*/

  const [prizes, setValue] = useState([1, 100000]);
  const [datosFiltrados2, setDatosFiltrados2] = useState([])
  const [datosFiltrados3, setdatosFiltrados3] = useState([])

  let handleChange=()=>{};

  if (datosFiltrados.length === 0) {
    handleChange = (num1, num2) => {

      let numVal1 = num1.target.value[0]
      let numVal2 = num2[1]
  
      const resultadoCategoria2 = characters.filter((datas2) => datas2.price >= numVal1 && datas2.price <= numVal2)
      setDatosFiltrados2(
        resultadoCategoria2
      )
  
      setValue(num2);
    };
  
  }else if (datosFiltrados.length !== 0) {
    handleChange = (num1, num2) => {

      let numVal1 = num1.target.value[0]
      let numVal2 = num2[1]
  
      const resultadoCategoria2 = datosFiltrados.filter((datas2) => datas2.price >= numVal1 && datas2.price <= numVal2)
      setdatosFiltrados3(
        resultadoCategoria2
      )
  
      setValue(num2);
    };
  }
  

  /*----------- Filtro de ordenado por: ------------------*/

  const [ordernado, setordernado] = useState([])

  const handleOnClick = (e) =>{
    let opciones = e.target.value
    // console.log(opciones);
    if (opciones === "relevancia") {
      setordernado([])
    }else if (opciones === "max") {
      const ordenMax = characters.map((datas2) => datas2)
      const ordenReal = ordenMax.sort((a, b) => b.price - a.price)
      setordernado(ordenReal)
    }else if (opciones === "min") {
      const ordenMin = characters.map((datas2) => datas2)
      const ordenReal = ordenMin.sort((a, b) => a.price - b.price )
      setordernado(ordenReal)
    }else if (opciones === "reciente") {
      const ordenRec = characters.map((datas2) => datas2)
      const ordenReal = ordenRec.reverse()
      setordernado(ordenReal)
    }
  }

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} /><br /><br />
      <h2 className='titleCategoria'>Compra por categoría</h2>
      <Categories setcategoriaSeleccionada={setcategoriaSeleccionada} categoriaSeleccionada={categoriaSeleccionada} characters={characters} datosFiltrados={datosFiltrados} setDatosFiltrados={setDatosFiltrados}/>
      <div className='container-Orden-Productos'>
        <div className='navba__'>
          <input type="search" placeholder='Buscar producto' className='buscar' value={texto} onChange={inputLoad} />
        </div>
        <p className='productsEncontrados'>{counterProd} Productos Encontrados |</p>
        <p className='productsEncontrados'>| Ordenar por:</p>
        <div className='content-select'>
          <select name="" id="selectPrecios" onChange={handleOnClick}>
            <option value="relevancia">Relevancia</option>
            <option value="reciente">Más recientes</option>
            <option value="max">Precio más alto</option>
            <option value="min">Precio más bajo</option>
          </select>
        </div>
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
                  <p><input type="checkbox" value={data.id} onChange={handleOneCheckbox} />{data.nombre}</p>
                </div>
                ))}
              </div>
            </div>
            <hr />
            <label className='priceRange'>Precios</label>
            <br />
            <div className="wrapper">
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={prizes}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={1}
                  // step={50000}
                  max={100000}
                />
            </div>
          </div>
        </div>
        <CardAllProducts ordernado={ordernado} datosFiltrados3={datosFiltrados3} datosFiltrados2={datosFiltrados2} texto={texto} datosFiltrados={datosFiltrados}  characters={inputCharacters}/>
        {/* <Character characters={inputCharacters} /> */}
      </div>
      <Footer />
    </div>
  )
}