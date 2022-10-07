import React from 'react';
import './Categories.css';
import ofertas from '../../Image/Category/oferta.png';
import belleza from '../../Image/Category/belleza.png';
import bienestar from '../../Image/Category/bienestar.png';
import dermocosméticos from '../../Image/Category/dermocosmeticos.png';
import medicamento from '../../Image/Category/medicamento.png';
import cuidado from '../../Image/Category/cuidado.png';
import sexual from '../../Image/Category/sexual.png';


export const Categories = () => {
    return (
        <div className='all' >
            <div className='contents' >
                <div className='card'>
                    <img src={ofertas} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Ofertas</p>
                </div>
            </div>
            <div className='contents' >
                <div className='card'>
                    <img src={sexual} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Salud Sexual</p>
                </div>
            </div>
            <div className='contents'>
                <div className='card'>
                    <img src={bienestar} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Bienestar</p>
                </div>
            </div>
            <div className='contents'>
                <div className='card'>
                    <img src={cuidado} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Cuidado Personal</p>
                </div>
            </div>
            <div className='contents'>
                <div className='card'>
                    <img src={belleza} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Belleza</p>
                </div>
            </div>
            <div className='contents'>
                <div className='card'>
                    <img src={medicamento} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Medicamentos</p>
                </div>
            </div>
            <div className='contents'>
                <div className='card'>
                    <img src={dermocosméticos} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Dermocosméticos</p>
                </div>
            </div>
        </div>
    )
}
