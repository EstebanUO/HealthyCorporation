  import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import {Slider_Productos} from '../../UI/js/Slider_Productos'
import Slider from '../../UI/js/Slider'


export const Products = (props) => {
  return (
    <div>
        <Header valiLoginAdmin={props.valiLoginAdmin}/>
        <Slider/>
        <h1>Aqui se colocaran una lista larga de productos</h1>
        <Footer />
    </div>
  )
}