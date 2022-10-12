import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
// import Slider from '../../UI/js/Slider';
import { Card } from '../../UI/Card/Card';



export const Products = (props) => {

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} />
      <div className='orden_product'>
        <Card />
      </div>
      <Footer />
    </div>
  )
}