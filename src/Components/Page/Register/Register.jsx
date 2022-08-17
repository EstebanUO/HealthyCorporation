import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Link } from "react-router-dom"

export const Register = () => {
  return (
    <div>
        <Header />
          <div className="formulario">
            <div>
              <form className="formulario2">
                <h1 className="titleReg">Register</h1>
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
                    <input type="checkbox"/><p>Haz click aqui para aceptar nuestros<br/><Link to="/terminoS">terminos y condiciones</Link>.</p>
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