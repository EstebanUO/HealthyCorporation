import React,{useEffect} from 'react'
import AlertTitle from '@mui/material/AlertTitle';
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import { Link } from "react-router-dom"
import Alert from '@mui/material/Alert';
import logofacebook from '../../Image/Icons/facebook.png';
import logoGoogle from '../../Image/Icons/google.png';
import logoTwitter from '../../Image/Icons/twiter.png';
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";

export const Login = (props) => {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    if (props.messagesLogin === "usuario no registrado") {
      
      props.setalertUserLogin(true)
      
    }else if (props.messagesLogin === "Network Error") {
      
      props.setalertConexionLogin(true)
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
              {props.alertUserLogin? <Alert severity="error"><AlertTitle>Error</AlertTitle>Usuario no registrado — <strong>Registrate!</strong></Alert>:null}
              {props.alertConexionLogin? <Alert severity="warning"><AlertTitle>warning</AlertTitle>Sin conexion — <strong>conectate a una red!</strong></Alert>:<p></p>}
              <div className="submitReg">
                <input  type="submit" value={"Iniciar sesion"} class="submitReg2"/>
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