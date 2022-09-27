import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Categories } from '../../UI/Categories/Categories';
import { Marks } from '../../UI/Marks/Marks';
import Slider2 from '../../UI/js/SliderCopy';
import Slider from '../../UI/SliderHome/SliderHome';
import './Home.css';

/* imagenes de prodductos */
import img1 from '../../Image/img_product/bienestar.PNG'
import img2 from '../../Image/img_product/bienestar2.PNG'
import img3 from '../../Image/img_product/bienestar3.PNG'
/* ----------------- */
import img4 from '../../Image/img_product/cuidado.PNG'
import img5 from '../../Image/img_product/cuidado2.PNG'
import img6 from '../../Image/img_product/cuidado3.PNG'
/* ----------------- */
import img7 from '../../Image/img_product/deermatologo.PNG'
import img8 from '../../Image/img_product/deermatologo2.PNG'
import img9 from '../../Image/img_product/deermatologo3.PNG'
/* ----------------- */
import img10 from '../../Image/img_product/salud.PNG'
import img11 from '../../Image/img_product/salud2.PNG'
import img12 from '../../Image/img_product/salud3.PNG'
/* ----------------- */
import img13 from '../../Image/img_product/medicamento1.PNG'
import img14 from '../../Image/img_product/medicamento2.PNG'
import img15 from '../../Image/img_product/medicamento3.PNG'


export const Home = (props) => {



  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} />
      <div>
        <Slider2 />

        <div>
          <h1 className='title-home2'>Categorias</h1>
          <Categories />
        </div>

        <div className='products-home'>
          <h1 className='title-home'>Productos más vendidos</h1>
          <Slider />
        </div>
      </div>

      <div>

      <div className='column_all_product'>
          <h1 className='text_all_product'>Bienestar</h1>
          <div className='content_all_product'>

            <img className='select_product' src={img1} alt="imagen producto" />
            <img className='select_product' src={img2} alt="imagen producto" />
            <img className='select_product' src={img3} alt="imagen producto" />
            <button className='btn_all'>
              Ver más
            </button>
          </div>
        </div>


        <div className='column_all_product'>
          <h1 className='text_all_product2'>Cuidado</h1>
          <div className='content_all_product2'>

            <img className='select_product' src={img4} alt="imagen producto" />
            <img className='select_product' src={img5} alt="imagen producto" />
            <img className='select_product' src={img6} alt="imagen producto" />
            <button className='btn_all'>
              Ver más
            </button>
          </div>
        </div>

      
        <div className='column_all_product'>
          <h1 className='text_all_product'>Dermatología</h1>
          <div className='content_all_product'>

            <img className='select_product' src={img7} alt="imagen producto" />
            <img className='select_product' src={img8} alt="imagen producto" />
            <img className='select_product' src={img9} alt="imagen producto" />
            <button className='btn_all'>
              Ver más
            </button>
          </div>
        </div>


        <div className='column_all_product'>
          <h1 className='text_all_product2'>Salud</h1>
          <div className='content_all_product2'>

            <img className='select_product' src={img10} alt="imagen producto" />
            <img className='select_product' src={img11} alt="imagen producto" />
            <img className='select_product' src={img12} alt="imagen producto" />
            <button className='btn_all'>
              Ver más
            </button>
          </div>
        </div>

        <div className='column_all_product'>
          <h1 className='text_all_product'>Medicamentos</h1>
          <div className='content_all_product'>

            <img className='select_product' src={img13} alt="imagen producto" />
            <img className='select_product' src={img14} alt="imagen producto" />
            <img className='select_product' src={img15} alt="imagen producto" />
            <button className='btn_all'>
              Ver más
            </button>
          </div>
        </div>
      </div>





      <Marks />
      <Footer />
    </div>
  )
}
