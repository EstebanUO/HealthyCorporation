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
    <div>
      <form className="formulario" onSubmit={sendEmail}>
            <div>
              <div className="container1">
                <h2>Contact Us</h2>
                <hr />
                <label>Nombres:</label><br/>
                <input type="text" className='text' name='user-name' placeholder="Digite sus respectivos nombre.."></input>
                <hr />

                <label>Apellidos:</label><br/>
                <input type="text" className='text' name='user-surname' placeholder="Digite sus respectivos apellido.."></input>
                <hr />

                <label>Correo:</label><br/>
                <input type="email" className='text' name='user-email' placeholder="Digite su correo.."></input>
                <hr />

                <label>Telefono:</label><br/>
                <input type="number" className='text' name='user-number' placeholder="Digite su numero.."></input>
                <hr />

                <label>Mensaje:</label>
                <br />
                <textarea rows="10" cols="50" name='user-message' placeholder="Escriba tu mensaje...."></textarea>
                <hr />

                <button className='boton'>Enviar</button>

              </div>
            </div>
      </form>
    </div>
  )
}
