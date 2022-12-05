import React from 'react'
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Link } from "react-router-dom";
import producto from '../../Image/assects/pax.jpg';
import back from '../../Image/back.png';

import './ListaDeseos.css'

export const ListaDeseos = () => {
  return (
    <div>
      <Header />

      <div className="containerDeseos">
        <nav className='nav_check_'><p className='pad_check_'>Lista de deseos</p>
          <div className='back_up_'><Link to="/"><img className='img_up2' src={back} alt="atras" /><p className='back'>Atras</p></Link>
          </div>
        </nav>
        <br />

        <div className="cardProducts"> <br />
          <div className="descripcionDeseos">
            <h3 className="titleDescripcionDeseos2">NOMBRE DEL PRODUCTO</h3>
            <h3 className="titleDescripcionDeseos2">PRECIO UNITARIO</h3>
            <h3 className="titleDescripcionDeseos2">ESTADO DEL STOCK</h3>
          </div><br />
          <div className="cardProducts_2">
            <div className='prod1'>
              <img src={producto} className="imgProd1" alt="producto" />
              <p className="subtitleDeseos">Pax noche</p>
            </div>
            <div className='priceStock'>
              <p className='precioDeseos'>$5000</p>
              <p className='disponibilidad'>Agotado</p>
            </div>
          </div>
          {/* Esta es una simulacion de como quedaria el producto */}
        </div><br />
      </div>
      <Footer />
    </div>
  )
}