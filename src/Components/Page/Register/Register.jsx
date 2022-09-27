import React, { useEffect } from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Link } from "react-router-dom";
import logofacebook from '../../Image/Icons/facebook.png';
import logoGoogle from '../../Image/Icons/google.png';
import logoLinkening from '../../Image/Icons/linkedin.png';

export const Register = (props) => {
  //validaciones username
  useEffect(() => {
    props.validUsername.indexOf('`') !== -1 || props.validUsername.indexOf('.') !== -1 || props.validUsername.indexOf('@') !== -1 || props.validUsername.indexOf('!') !== -1 || props.validUsername.indexOf('%') !== -1 || props.validUsername.indexOf('$') !== -1 || /\s/.test(props.validUsername) ?
      document.getElementById('txtvalidUsername').textContent = 'USUARIO INVALIDO: solo letras o numeros, sin espacios minimo 3 caracteres y maximo 20' :
      document.getElementById('txtvalidUsername').textContent = '';
  }, [props.validUsername])

  //validaciones de email
  useEffect(() => {
    props.validemail.indexOf('.') === -1 || props.validemail.indexOf('@') === -1 || /\s/.test(props.validemail) ?
      document.getElementById('txtvalidEmail').textContent = 'Email invalido' :
      document.getElementById('txtvalidEmail').textContent = '';
  }, [props.validemail])

  //validaciones password

  useEffect(() => {
    props.confrimPasword === props.passwordRegister ? document.getElementById('buttonRegister').removeAttribute('disabled') : document.getElementById('buttonRegister').setAttribute('disabled', 'true')
  }, [props.confrimPasword, props.passwordRegister])

  useEffect(() => {
    props.confrimPasword === props.passwordRegister ?
      document.getElementById('txtvalidPassword').textContent = '' :
      document.getElementById('txtvalidPassword').textContent = 'LA CONTRASEÑA NO COINCIDE';
  }, [props.confrimPasword, props.passwordRegister])

  //envio mensaje 
  useEffect(() => {
    if (props.messages === "Request failed with status code 400") {
      document.getElementById('txtvalidUsername').textContent = `usuario ya registrado`
      props.setmessages("")
    } 
  }, [props.messages]);


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
          <form className="formulario2" onSubmit={props.postApi}>
            <h1 className="titleReg">Registro</h1>
            <div className="iconos">
              <div className="border-icon">
                <img src={logofacebook} alt="logofacebook" className="iconos" />
              </div>
              <div className="border-icon">
                <img src={logoGoogle} alt="logoGoogle" className="iconos" />
              </div>
              <div className="border-icon">
                <img src={logoLinkening} alt="logoLinkening" className="iconos" />
              </div>
            </div><br />
            <div className="formularioReg">
              <label for="inputUser" class="labelsReg">User name</label>
              <input minLength="3" maxLength="20" value={props.usernameRegister} onChange={props.onChangeusernameRegister} name="name" type="text" class="form-input" placeholder="User name" autocomplete="off" required />
              <p className='pvaliRegister' id='txtvalidUsername'></p>
              <label for="exampleInputEmail1" class="labelsReg"><br />Email</label>
              <input value={props.emailRegister} onChange={props.onChangeemailRegister} name="correo" type="email" class="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example@" autocomplete="off" required />
              <p className='pvaliRegister' id='txtvalidEmail'></p>
              <label for="inputPassword" class="labelsReg"><br />Password</label>
              <input value={props.passwordRegister} onChange={props.onChangepasswordRegister} name="password" type="password" class="form-input" id="inputPassword" placeholder="Password" />

              <label for="inputPassword" class="labelsReg"><br />Confirm password</label>
              <input value={props.confrimPasword} onChange={props.onChangeconfrimPasword} name="password" type="password" class="form-input" id="inputPassword" placeholder="Confirm your password" />
              <p className='pvaliRegister' id='txtvalidPassword'></p>
              <br />
              <div className="checkTyC">
                <input type="checkbox" required /><p>Haz click aqui para aceptar nuestros<br /><Link to="/terminos">terminos y condiciones</Link>.</p>
              </div>

              <div className="submitReg">
                <input disabled id='buttonRegister' value="registrarse" type="submit" class="submitReg2" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}