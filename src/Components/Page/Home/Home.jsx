import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import Slider from '../../UI/SliderHome/SliderHome';



export const Home = () => {
  return (
    <div>
        <Header />
          <div>
              <h1>Productos más vendidos</h1>
              <Slider />
          </div>
        <Footer />
    </div>
  )
}
