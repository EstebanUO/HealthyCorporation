import React,{useEffect, useRef} from 'react'
import AlertTitle from '@mui/material/AlertTitle';
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import { Link } from "react-router-dom"
import Alert from '@mui/material/Alert';
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";
import { FaUserAlt,FaKey } from "react-icons/fa";
import Logo_move from '../../Image/logo.gif'
// import { Api } from '@mui/icons-material';
// import { get } from 'jquery';
// import { MyAcount } from '../MyAcount/MyAcount';


export const Login = (props) => {

  useEffect(() => {
    if (props.messagesLogin === "usuario no registrado") {
      
      props.setalertUserLogin(true)
      
    }else if (props.messagesLogin === "Network Error") {
      
      props.setalertConexionLogin(true)
    } else if (props.messagesLogin === "contraseña o email incorrectos") {

      props.setalertUserLoginPassword(true)
    }
  }, [props.messagesLogin]);

  const onclick=()=>{
    props.onClick2()
  }
  
  return (
    
    <div>
      
      <Header />
      <div className="formulario">
        <div>
          <form className="formulario3" onSubmit={props.ClickLogin}>
            <h1 className="titleReg">Iniciar Sesion</h1>
            <div className="formularioLog">
              <label className="labelsReg"><br />Correo</label>
              <FaUserAlt className='iconUser'/>
              <input onChange={props.onChangeUserLogin} value={props.userLogin} name="correo" type="email" className="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ejemplo@healthy.com" autoComplete="off" required />
              <label className="labelsReg"><br />Contraseña</label>
              <FaKey className='iconPass'/>
              <div className='input-password'>
                <input onChange={props.onChangePasswordLogin} value={props.passwordUser} name="password" type={props.shown2 ? 'text' : 'password'} className="form-input" id="inputPassword" placeholder="************" />
              </div>
              <button className='button-show2' onClick={props.switchShown2}>{props.shown2 ? <BsEyeFill /> : <BsEyeSlashFill />}</button>
              <p className="forgetPass"><Link to="/recoverPassword" >¿Haz olvidado tu contraseña?</Link></p>
              {props.alertUserLogin? <Alert severity="error"><AlertTitle>Error</AlertTitle>Usuario no registrado — <strong>Registrate!</strong></Alert>:null}
              {props.alertUserLoginPassword? <Alert severity="error"><AlertTitle>Error</AlertTitle>contraseña o email incorrectos — <strong>verifica!</strong></Alert>:null}
              {props.alertConexionLogin? <Alert severity="warning"><AlertTitle>warning</AlertTitle>Sin conexion — <strong>conectate a una red!</strong></Alert>:<p></p>}
              <div className="submitReg">
                <input  type="submit" value={"Iniciar sesion"} className="submitReg2"/>
              </div>
            </div>
          </form>
        </div>
        <div className="welcome-back">
          <div className="message2">
            <h2 className="text_welcome">Bienvenido a HealthyCorporation</h2>
            <p>¿Aun no tienes cuenta? por favor registrate aqui</p>
            <button onClick={onclick} className="signUpBtn"><Link to="/register" className="linkLog">Registrarse</Link></button>
            <br /><div className="img_contact">
              <img className="logito" src={Logo_move} alt="gif_logo" />
            </div>
          </div>
        
        </div>
      </div>
      <Footer />
    </div>
  )
}