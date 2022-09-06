import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import {Slider_Productos} from '../../UI/js/Slider_Productos'

export const Products = () => {
  return (
    <div>
        <Header />
        <h1>Productos</h1>
        <Slider_Productos/>
        <Footer />
    </div>
  )
}