import React from 'react';
import emailjs from '@emailjs/browser';
import { SlUser} from 'react-icons/sl';
import {TfiEmail} from 'react-icons/tfi';
import {BsTelephone} from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';
import {RiMessage2Line} from 'react-icons/ri';

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
                <div className="bg-input">
                  <i className='icons'><SlUser/></i>
                  <input type="text"  name='user-name' placeholder="Digite sus respectivos nombre.."></input>
                </div>

                <label>Apellidos</label><br/>
                <div className="bg-input">
                  <i className='icons'><SlUser/></i>
                  <input type="text" name='user-surname' placeholder="Digite sus respectivos apellido.."></input>
                </div>
                
                <label>Correo</label><br/>
                <div className="bg-input">
                  <i className='icons'><TfiEmail/></i>
                  <input type="email"  name='user-email' placeholder="Digite su correo.."></input>
                </div>
                
               

                <label>Teléfono </label><br/>
                <div className="bg-input">
                  <i className='icons'><BsTelephone/></i>
                  <input type="number"  name='user-number' placeholder="Digite su numero.."></input>
                </div>
                
                <label>Dirección</label><br/>
                <div className="bg-input">
                  <i className='icons'><FiMapPin/></i>
                  <input type="text" name='user-surname' placeholder="Digite su direccion.."></input>
                </div>
               
                <label>Asunto</label><br/>
                <div className="bg-input">
                  <i className='icons'><RiMessage2Line/></i>
                  <input type="text" name='user-surname' placeholder="Escribe tu asunto aqui.."></input>
                </div>

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
