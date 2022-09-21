import React from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {


  const sendEmail =(event) =>{
    event.preventDefault();

    emailjs.sendForm('service_6dqf022','template_bb6l1lz',event.target,'mcEONDbylMN22nNiz')
    .then(resposive => console.log(resposive))
    .catch(error => console.log(error))
  }

  return (
    <div className='container_all'>
      <form className="contact" onSubmit={sendEmail}>
            <div>
              <div className="container1">
               
                <label>Nombres</label><br/>
                <input type="text" className='textContact' name='user-name' placeholder="Digite sus respectivos nombre.."></input>
               

                <label>Apellidos</label><br/>
                <input type="text" className='textContact' name='user-surname' placeholder="Digite sus respectivos apellido.."></input>
               

                <label>Correo</label><br/>
                <input type="email" className='textContact' name='user-email' placeholder="Digite su correo.."></input>
               

                <label>Telefono</label><br/>
                <input type="number" className='textContact' name='user-number' placeholder="Digite su numero.."></input>
               

                <label>Mensaje</label>
                <br />
                <textarea rows="10" cols="50" name='user-message' placeholder="Escriba tu mensaje...."></textarea>
               

                <button className='boton'>Enviar</button>

              </div>
            </div>
      </form>
    </div>
  )
}
