import React from 'react'
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Link } from "react-router-dom";
import producto from '../../Image/assects/pax.jpg';

import './ListaDeseos.css'

export const ListaDeseos = () => {
  return (
    <div>
        <Header/>
        <div className="containerDeseos">
          <h1 className="titleDeseos">LISTA DE DESEOS</h1><br />
          <div className="descripcionDeseos">
            <h3 className="titleDescripcionDeseos2">NOMBRE DEL PRODUCTO</h3>
            <h3 className="titleDescripcionDeseos2">PRECIO UNITARIO</h3>
            <h3 className="titleDescripcionDeseos2">ESTADO DEL STOCK</h3>
          </div><br /><br />
            <div className="cardProducts">
              <div className="prod1">
                <div className="prod2">
                  <img src={producto} className="imgProd1" alt="producto"/>  
                  <p className="subtitleDeseos">Pax noche</p>
                </div>
                <p>$5000</p>
                <p>Agotado</p>
              </div>
              {/* Esta es una simulacion de como quedaria el producto */}
            </div><br />
            <Link to="/"><button className="btn btn-primary">Volver a la Tienda</button></Link>
        </div>
        <Footer/>
    </div>
  )
}