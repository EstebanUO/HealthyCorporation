import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';

export const Register = () => {
  return (
    <div>
        <Header />
          <div className="formulario">
            <div>
              <h1>Registro</h1>
              <form className="formulario2">
                <div className="formularioReg">
                  <label for="inputUser" class="col-lg-4 control-label">Nombre usuario</label>
                    <input name="name" type="text" class="form-control" placeholder="Usuario"/>

                  <label for="exampleInputEmail1" class="form-label"><br/>Correo electronico</label>
                    <input name="correo" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario@hotmail.com"/>

                  <label for="inputPassword" class="col-lg-2 control-label"><br/>Contraseña</label>
                    <input name="password" type="password" class="form-control" id="inputPassword" placeholder="*******"/>
                  <br />
                  <input type="checkbox"/><p>Al hacer click en registrarse, usted acepta nuestros<br/><a href="#">terminos y condiciones</a>.</p>
                
                  <button type="submit" class="btn btn-primary">Registrarse</button>
                </div>
              </form>
            </div>
          </div>
        <Footer />
    </div>
  )
}