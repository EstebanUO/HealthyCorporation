import React from 'react';
import './Marks.css'

import image_1 from '../../Image/Marks/1.jpg';
import image_2 from '../../Image/Marks/2.jpg';
import image_3 from '../../Image/Marks/3.jpg';
import image_4 from '../../Image/Marks/4.jpg';
import image_5 from '../../Image/Marks/5.jpg';
import image_6 from '../../Image/Marks/6.jpg';
import image_7 from '../../Image/Marks/7.jpg';

export const Marks = () => {
  return (
    <div className='content-marks'>
        <div className="marks">
              <h2 className='text-marks'>Marcas destacadas</h2>
              <div className="content-marks">

                <div className="image-marks">
                  <img className='edit' src={image_1} alt="marca 1" />
                </div>

                <div className="image-marks">
                  <img className='edit1' src={image_2} alt="marca 2" />
                </div>

                <div className="image-marks">
                  <img  className='edit2' src={image_3} alt="marca 3" />
                </div>

                <div className="image-marks">
                  <img className='edit3' src={image_4} alt="marca 4" />
                </div>

                <div className="image-marks">
                  <img className='edit4' src={image_5} alt="marca 5" />
                </div>

                <div className="image-marks">
                  <img className='edit5' src={image_6} alt="marca 6" />
                </div>

                <div className="image-marks">
                  <img className='edit6' src={image_7} alt="marca 7" />
                </div>
              </div>
            </div>
    </div>
  )
}
