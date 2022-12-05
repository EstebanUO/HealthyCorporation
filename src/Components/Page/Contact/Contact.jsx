import React from 'react';
import { Header } from '../../Page/Layout/Header/Header';
import { Footer } from '../../Page/Layout/Footer/Footer';
import { Form } from '../../UI/Form/Form';


export const Contact = (props) => {
  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} />
      <div className="info_contact">
        <div className="info_all_">
          <h2 className='text_product_'>Contacta</h2>
          <h2 className='text_product_2'>con nosotros</h2>
          <div className="about_all">
            <div className="about_contact">
              <h2 className="about_contact2">Cuéntanos qué nesecitas</h2>
              <div className="about_contact3">
                <h3 className="about_contact4">Rellena el siguiente formulario y nos pondremos en contacto contigo a la mayor brevedad posible.</h3>
              </div>
            </div>
            <div className="about_where">
              <h2 className="about_where1">Dónde estamos</h2>
              <div className="about_where2">
                <h3 className="about_where3">Barrio puerto espejo | Caminos de cocora |
                  Tel: 3177896243 | Fax:  01 234 567 88 03 | 
                  e-mail: healthyCorporationContact@gmail.com</h3>
              </div>
            </div>
          
          </div>
        </div>
        <Form />
      </div>
      <Footer />
    </div>
  )
}
