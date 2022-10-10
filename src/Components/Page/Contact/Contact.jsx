import React from 'react';
import { Header } from '../../Page/Layout/Header/Header';
import { Footer } from '../../Page/Layout/Footer/Footer';
import { Form } from '../../UI/Form/Form';
import image from '../../Image/Noticie/talco2.jpg'

export const Contact = (props) => {
  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin}/>
      <img src={image} alt="imagen contacto" srcset="" className='image_contact' />
      <h2 className='text_product'>Contacta</h2>
      <h2 className='text_product2'>con nosotros</h2>
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
            <h3 className="about_where3">C/ Calderers nº 44, 46 y 48.
              Polígono Industrial El Mar,
              46120 Alboraia (Valencia)
              Tel: 961 853 827 | Fax:  01 234 567 88
              e-mail: healthy_ifo@outlook.com</h3>
          </div>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  )
}
