import { Link } from "react-router-dom";
import React from 'react';
import img1 from './../../Image/condon_producto.jpg'
import img2 from './../../Image/pastillas_productos.jpg'
import img3 from './../../Image/shampoo_producto.jpg'
import img4 from './../../Image/kotex_producto.jpg'

import styled from "styled-components";

import { ReactComponent as FlechaIzquierda} from './../../Image/iconmonstr-angel-left-thin.svg'
import { ReactComponent as FlechaDerecha} from './../../Image/iconmonstr-angel-right-thin.svg'


export const Slider_Productos = () => {
    return(
      <ContenedorPrincipal>
      <ContenedorSlideMostrar>
          <Slide>
          <Link to='/' className='a'>
          <img src={img1} alt={img1} />
          </Link>
          <TextoSlide>
            <p>Top productos de la semana</p>
          </TextoSlide>
          </Slide>



          <Slide>
          <Link to='/' className='a'>
          <img src={img2} alt={img2} />
          </Link>
          <TextoSlide>
            <p>Top productos de la semana</p>
          </TextoSlide>
          </Slide>


          <Slide>
          <Link to='/' className='a'>
          <img src={img3} alt={img3} />
          </Link>
          <TextoSlide>
            <p>Top productos de la semana</p>
          </TextoSlide>
          </Slide>



          <Slide>
          <Link to='/' className='a'>
          <img src={img4} alt={img4} />
          </Link>
          <TextoSlide>
            <p>Top productos de la semana</p>
          </TextoSlide>
          </Slide>
          </ContenedorSlideMostrar>

          <Controles>
          <Boton> <FlechaIzquierda/> </Boton>
          <Boton derecho> <FlechaDerecha/> </Boton>
          </Controles>
      </ContenedorPrincipal>
    )};
    const ContenedorPrincipal = styled.div`

    position: relative;


    `;
    const ContenedorSlideMostrar = styled.div`
    display: flex;
    flex-wrap: nowrap;
    `;

    const Slide = styled.div`
    min-width: 100%;
    overglow: hidden;
    transition: .3s ease all;
    z-index: 10;
    max-height: 500px;
    position: relative;

    img{
      width: 100%
      vertical-align: top;

    }
    `;

    const TextoSlide = styled.div`
    background: rgba(0,0,0,.5);
    color: #fff;
    width: 100%;
    padding: 10px 60px;
    text-aling: center;
    position: absolute;
    bottom: 0;

    @media screen and (max-width:700px){
      position: relative;
      background: #000;
    }


    `;

    const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
    `;

    const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100px;
    text-align: center;
    position: absolute;
    transition: .3s ease all;

    ${props => props.derecho ? 'right: 0' : 'left: 0'}
    `;
