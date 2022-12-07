import React, { useState } from 'react'
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Link } from "react-router-dom";
import back from '../../Image/back.png';
import { AiOutlineExclamationCircle } from "react-icons/ai";


import './ListaDeseos.css'

export const ListaDeseos = () => {

  const arrs = JSON.parse(localStorage.getItem("list"));
  const [arr, setarr] = useState([])

  const onload = () => {
    if (arrs !== null) {
      setarr(arrs)
      document.getElementById("text_list").style.display = 'none'
    }

  }

  // --------------------- compra  ----------------------------

  let validDatos_2 = (localStorage.getItem("product"));
  const add_2 = (e) => {

    validDatos_2 === null ? validDatos_2 = [] : validDatos_2 = JSON.parse(validDatos_2)
    localStorage.setItem('product', JSON.stringify(validDatos_2))

    JSON.stringify(localStorage.setItem("product", e.target.value))
    console.log(e.target.value)
  }

  const formatoMexico = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp, rep);
  }

  return (
    <div>
      <Header />

      <div className="containerDeseos" onLoad={()=>{onload()}}>
        <nav className='nav_check_'><p className='pad_check_'>Lista de deseos</p>
          <div className='back_up_'><Link to="/"><img className='img_up2' src={back} alt="atras" /><p className='back'>Atras</p></Link>
          </div>
        </nav>
        <br />

        <div className="cardProducts">
          <div className="descripcionDeseos">
            <h1 className="titleDescripcionDeseos2">Datos de los productos</h1>
          </div><br />
          <div id="text_list"><AiOutlineExclamationCircle className='icon_warning'/><p>Aun no has marcado productos que te gusten</p></div>
          <>{arr.map((data) => (
          
            <div className="cardProducts_2">
            
            <div className='prod1'>
              <img src={"https://api-products-healthy.herokuapp.com" + data.imagenes} className="imgProd1" alt="producto" />
              <p className="subtitleDeseos">{data.nombres}</p>
            </div>
            <div className='priceStock'>
              <p className='precioDeseos'>$ {formatoMexico (data.prices)}</p>
              <p className='disponibilidad'>Agotado</p>
              <p className='disponibilidad_'>Disponible</p>
              <Link to="/compra"><button className='btn_' onClick={(e) => { add_2(e) }} value={data.ids}>Ver más</button></Link>

            </div>
          </div>
          
          ))}</>
          
          
        </div> <br />
        </div>
      <Footer />
    </div >
  )
}