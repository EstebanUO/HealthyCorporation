import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Link } from "react-router-dom";
import logofacebook from '../../Image/Icons/facebook.png';
import logoGoogle from '../../Image/Icons/google.png';
import logoLinkening from '../../Image/Icons/linkedin.png';

export const Register = () => {

  return (
    <div>
        <Header />
          <div className="formulario">
              <div className="welcome-back">
                  <div className="message">
                    <h2>Bienvenido a HealthyCorporation</h2>
                    <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
                    <Link to="/login" className="links"> 
                      <button className="signUpBtn">Iniciar Sesion</button>
                    </Link>
                  </div>
              </div>
            <div>
              <form className="formulario2">
                <h1 className="titleReg">Registro</h1>
                <div className="iconos">
                  <div className="border-icon">
                    <img src={logofacebook} alt="logofacebook" className="iconos"/>
                  </div>
                  <div className="border-icon">
                    <img src={logoGoogle} alt="logoGoogle" className="iconos"/>
                  </div>
                  <div className="border-icon">
                    <img src={logoLinkening} alt="logoLinkening" className="iconos"/>
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
                    <input type="checkbox" required/><p>Haz click aqui para aceptar nuestros<br/><Link to="/terminos">terminos y condiciones</Link>.</p>
                  </div>
                  
                  <div className="submitReg">
                    <button type="submit" class="submitReg2">Registrarse</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        <Footer />
    </div>
  )
}