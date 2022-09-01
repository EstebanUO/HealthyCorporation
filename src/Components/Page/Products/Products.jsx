import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import {Slideshow} from '../../UI/js/Slider_Productos'
import styled from 'styled-components';




export const Products = () => {


  //Estos son estilos
  const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-Transform: uppercase;
  margin-borrom: 10pc;
  ;`


  return (
    <div>
        <Header />
        <h1>Productos</h1>
        <main className='main_productos'>
        
        <Titulo>Productos destacados</Titulo>
        <Slideshow />
        

        </main>
        <Footer />
    </div>
  )
}