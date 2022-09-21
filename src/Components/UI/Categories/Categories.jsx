import React from 'react';
import './Categories.css';
import image_1 from '../../Image/Category/oferta.png';
import image_2 from '../../Image/Category/belleza.png';
import image_3 from '../../Image/Category/bienestar.png';
import image_4 from '../../Image/Category/dermocosméticos.png';
import image_5 from '../../Image/Category/medicamento.png';
import image_6 from '../../Image/Category/salud.png';
import image_7 from '../../Image/Category/sexual.png';


export const Categories = () => {
    return (
        <div className='all' >

            <div className='contents' >
 
                <div className='card2'>
                    <img src={image_1} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Ofertas</p>
                </div>

            </div>

            <div className='contents' >

                <div className='card'>
                    <img src={image_7} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Salud Sexual</p>
                </div>

            </div>

            <div className='contents'>

                <div className='card'>
                    <img src={image_3} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Bienestar</p>
                </div>

            </div>

            <div className='contents'>

                <div className='card'>
                    <img src={image_6} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Cuidado Personal</p>
                </div>

            </div>

            <div className='contents'>

                <div className='card'>
                    <img src={image_2} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Belleza</p>
                </div>

            </div>

            <div className='contents'>

                <div className='card'>
                    <img src={image_5} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Medicamentos</p>
                </div>

            </div>

            <div className='contents'>

                <div className='card'>
                    <img src={image_4} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Dermocosméticos</p>
                </div>

            </div>
        </div>
    )
}
