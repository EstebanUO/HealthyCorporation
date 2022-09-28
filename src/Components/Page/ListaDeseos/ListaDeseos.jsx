import React from 'react'
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Link } from "react-router-dom";

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
          </div>
            <div>
              <p className="subtitleDeseos">TU LISTA DE DESEOS ESTÁ VACÍA</p>
            </div>
            <Link to="/"><button className="btn btn-primary">Volver a la Tienda</button></Link>
        </div>
        <Footer/>
    </div>
  )
}