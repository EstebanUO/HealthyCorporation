import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Categories } from '../../UI/Categories/Categories';
import { Marks } from '../../UI/Marks/Marks';
import Slider from '../../UI/SliderHome/SliderHome';
import noticie from '../../Image/Noticie/tos.jpg';
import noticie2 from '../../Image/Noticie/enfermera.png';
import './Home.css';




export const Home = () => {
  return (
    <div>
      <Header />
      <div>
        
        <div>
          <h1 className='title-home2'>Categorias</h1>
          <Categories />
        </div>

        <div className='products-home'>
          <h1 className='title-home'>Productos más vendidos</h1>
          <Slider />
        </div>


        <div>
          <h1 className='title-home3'>Sala de Prensa</h1>

          <div>
            <div className='Noticie'>
              <h2 className='First'>Noticia principal</h2>
              <h2 className='Second'>La viruela símica </h2>
              <div className='Content'>
                <p className='Paragraph'>La viruela símica es una enfermedad causada por el virus de la viruela símica. Se trata de una infección zoonótica vírica, lo que significa que puede propagarse de animales a seres humanos. También puede propagarse de persona a persona.</p>
                <img className='Image-noticie' src={noticie} alt="Imagen prueba" />
              </div>
            </div>

            <div>
              <div>
                <h5 className='Second2'>Sintomas</h5>
                <p className='Paragraph2'>Los síntomas más comunes de la viruela símica son fiebre, cefalea, dolores musculares, dolor de espalda, falta de energía y ganglios linfáticos inflamados. A estos síntomas les sigue o acompaña una erupción que puede durar de dos a tres semanas. La erupción se puede ubicar en la cara, las palmas de las manos, las plantas de los pies, los ojos, la boca, el cuello, la ingle y las regiones genitales o anales del cuerpo. El número de lesiones puede oscilar entre unas pocas y varios miles. Al principio, las lesiones son planas, luego se llenan de líquido y, a continuación, se forman costras, se secan y se desprenden, y por debajo se forma una capa nueva de piel.  </p>
              </div>
            </div>

            <div className='Noticie'>
              <h2 className='Second3'>¿Como se puede contagiar?</h2>
              <div className='Content2'>
                <p className='Paragraph3'>La viruela símica se propaga de persona a persona mediante contacto directo con alguien que tiene una erupción cutánea de viruela símica, en particular mediante contacto cara con cara, piel con piel, boca con boca o boca con piel, incluido el contacto sexual. Todavía estamos aprendiendo sobre la duración de la capacidad infectante de las personas con viruela símica, pero por lo general se consideran infecciosas hasta que todas las lesiones se han cubierto de costras, las costras se han caído y se ha formado una nueva capa de piel debajo. </p>
                <img className='Image-noticie2' src={noticie2} alt="Imagen prueba" />
              </div>
            </div>

            <div >
              <h2 className='First2'>¿Noticia secundaria?</h2>
            </div>

            <Marks />
          </div>








        </div>
      </div>

      <Footer />
    </div>
  )
}
