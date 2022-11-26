import React from 'react';
import emailjs from '@emailjs/browser';
import { SlUser} from 'react-icons/sl';
import {TfiEmail} from 'react-icons/tfi';
import {BsTelephone} from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';
import {RiMessage2Line} from 'react-icons/ri';

export const Form = () => {
  

  /*------- Envia informacion al correo ----- */
  const sendEmail =(event) =>{
    event.preventDefault();
    
    emailjs.sendForm('service_6dqf022','template_bb6l1lz',event.target,'mcEONDbylMN22nNiz')
    .then(resposive => console.log(resposive))
    .catch(error => console.log(error))
  }

  /*----------- Reload Contacto ------------ */
  const reloadForms = () =>{
    // console.log("entrando....");
    document.getElementById('reloadForm').reset();
    // console.log("saliendo!!");
  }
  
  return (
    <div className='container_all'>
      <form className="contact" action='' onSubmit={ (e) => {
          sendEmail(e);
          reloadForms();
        }} id="reloadForm">
            <div>
              <div className="container_1">
                
                <label>Nombres</label><br/>
                <div className="bg-input">
                  <i className='icons'><SlUser/></i>
                  <input type="text" className='nombres' name='user-name' placeholder="Digite sus respectivos nombre.." required></input>
                </div>

                <label>Apellidos</label><br/>
                <div className="bg-input">
                  <i className='icons'><SlUser/></i>
                  <input type="text" className='nombres' name='user-surname' placeholder="Digite sus respectivos apellido.." required></input>
                </div>
                
                <label>Correo</label><br/>
                <div className="bg-input">
                  <i className='icons'><TfiEmail/></i>
                  <input type="email" className='nombres'   name='user-email' placeholder="Digite su correo.." required></input>
                </div>
                
                <label>Teléfono </label><br/>
                <div className="bg-input">
                  <i className='icons'><BsTelephone/></i>
                  <input type="number" className='nombres'  name='user-number' placeholder="Digite su numero.."></input>
                </div>
                
                <label>Dirección</label><br/>
                <div className="bg-input">
                  <i className='icons'><FiMapPin/></i>
                  <input type="text" className='nombres' name='user-surname' placeholder="Digite su direccion.."></input>
                </div>

                <label>Asunto</label><br/>
                <div className="bg-input">
                  <i className='icons'><RiMessage2Line/></i>
                  <input type="text"  className='nombres' name='user-asunto' placeholder="Escribe tu asunto aqui.." required></input>
                </div>

                <label>Mensaje</label>
                <br />
                <textarea className='reclamo' name='user-message' placeholder="Escribe tu mensaje...." required></textarea>

                <button className='boton'>Enviar</button>

              </div>
            </div>
      </form>
    </div>
  )
}
