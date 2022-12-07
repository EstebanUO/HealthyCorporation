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
        <div style={{ width: "400px"  }}  className="info_all__">
            
            <div>
              <h2 className='text_product_'>Contacta <h2 className='text_product_2'>con nosotros</h2></h2>
              
            </div>

            <div style={{ width:"1", marginTop:"5rem", padding:"30px", }} >
              <h2 className="about_contact2">Cuéntanos qué nesecitas</h2>
              <h3  className="about_contact4" style={{marginLeft: "1.2rem"}} >Rellena el siguiente formulario y nos pondremos en contacto contigo a la mayor brevedad posible.</h3>

            </div>

            <div style={{ width:"1", padding:"30px", }} >
              <h2 className="about_contact2">Dónde estamos</h2>
              <h3 className="about_where3">Barrio puerto espejo | Caminos de cocora |
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
