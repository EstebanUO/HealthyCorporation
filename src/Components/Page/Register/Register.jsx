import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Register = () => {

  return (
    <div>
        <Header />
          <div className="formulario">
              <div className="welcome-back">
                <div className="message">
                  <h2>Bienvenido a HealthyCorporation</h2>
                  <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
                  <Link to="/login"> 
                    <button className="signUpBtn">Iniciar Sesion</button>
                  </Link>
                </div>
              </div>
            <div>
              <form className="formulario2">
                <h1 className="titleReg">Register</h1>
                <div className="iconos">
                  <div className="border-icon">
                    <FaFacebook/>
                  </div>
                  <div className="border-icon">
                    <FaInstagram/>
                  </div>
                  <div className="border-icon">
                    <FaLinkedin/>
                  </div>
                </div><br />
                <div className="formularioReg">
                  <label for="inputUser" class="labelsReg">User name</label>
                    <input name="name" type="text" class="form-input" placeholder="User name" autocomplete="off" required/>

                  <label for="exampleInputEmail1" class="labelsReg"><br/>Email</label>
                    <input name="correo" type="email" class="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example@" autocomplete="off" required/>

                  <label for="inputPassword" class="labelsReg"><br/>Password</label>
                    <input name="password" type="password" class="form-input" id="inputPassword" placeholder="Password"/>

                  <label for="inputPassword" class="labelsReg"><br/>Confirm password</label>
                    <input name="password" type="password" class="form-input" id="inputPassword" placeholder="Confirm your password"/>
                  <br />
                  <div className="checkTyC">
                    <input type="checkbox"/><p>Haz click aqui para aceptar nuestros<br/><Link to="/termino">terminos y condiciones</Link>.</p>
                  </div>
                  
                  <div className="submitReg">
                    <button type="submit" class="submitReg2">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        <Footer />
    </div>
  )
}