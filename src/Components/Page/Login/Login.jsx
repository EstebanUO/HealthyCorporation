import React from 'react'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import { Link } from "react-router-dom"
import logofacebook from '../../Image/Icons/facebook.png';
import logoGoogle from '../../Image/Icons/google.png';
import logoTwitter from '../../Image/Icons/twiter.png';
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";

export const Login = (props) => {

  const onclick=()=>{
    props.onClick2()
  }


  return (
    <div>
      <Header />
      <div className="formulario">
        <div>
          <form className="formulario3">
            <h1 className="titleReg">Iniciar Sesion</h1>
            <div className="iconos">
              <div className="border-icon">
                <img src={logofacebook} alt="logofacebook" className="iconos" />
              </div>
              <div className="border-icon">
                <img src={logoGoogle} alt="logoGoogle" className="iconos" />
              </div><div className="border-icon">
                <img src={logoTwitter} alt="logoTwitter" className="iconos" />
              </div>
            </div><br />
            <div className="formularioLog">
              <label for="exampleInputEmail1" class="labelsReg"><br />Email</label>
              <input onChange={props.onChangeUserLogin} value={props.userLogin} name="correo" type="email" class="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example@" autocomplete="off" required />

              <label for="inputPassword" class="labelsReg"><br />Password</label>
              <div className='input-password'>
                <input onChange={props.onChangePasswordLogin} value={props.passwordUser} name="password" type={props.shown2 ? 'text' : 'password'} class="form-input" id="inputPassword" placeholder="Password" />
                <button className='button-show' onClick={props.switchShown2}>{props.shown2 ? <BsEyeFill /> : <BsEyeSlashFill />}</button>
              </div>
              <Link to="/" className="forgetPass">¿Haz olvidado tu contraseña?</Link>
              <div className="submitReg">
                <button onClick={props.ClickLogin} type="submit" class="submitReg2">Iniciar Sesion</button>
              </div>
            </div>
          </form>
        </div>
        <div className="welcome-back">
          <div className="message2">
            <h2>Bienvenido a HealthyCorporation</h2>
            <p>Aun no tienes cuenta? por favor registrate aqui</p>
            <Link to="/register" className="links">
              <button onClick={onclick} className="signUpBtn">Registrarse</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}