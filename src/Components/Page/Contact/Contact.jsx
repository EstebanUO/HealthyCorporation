import React from 'react';
import { Header } from '../../Page/Layout/Header/Header';
import { Footer } from '../../Page/Layout/Footer/Footer';
import { Form } from '../../UI/Form/Form';


export const Contact = (props) => {
  return (
    <>
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} />
      <div className="info_contact">
        <div className="info_all__">
            
            <div>
              <h2 className='text_product_'>Contacta <h2 className='text_product_2'>con nosotros</h2></h2>
              
            </div><br /><br />

            <div className='info_2' >
              <h2 className="about_contact2">Cuéntanos que necesitas</h2>
              <h3  className="about_contact4">Rellena el siguiente formulario y nos pondremos en contacto contigo a la mayor brevedad posible.</h3>

            </div><br /><br />

            <div className='info_2'>
              <h2 className="about_contact2">Dónde estamos</h2>
              <h3 className="about_contact4">Barrio puerto espejo | Caminos de cocora |
                  Tel: 3177896243 | Fax:  01 234 567 88 03 | 
                  e-mail: healthyCorporationContact@gmail.com</h3>
            </div>
        </div>
        <Form />
      </div>
      <Footer />
    </div>
    </>
  )
}
