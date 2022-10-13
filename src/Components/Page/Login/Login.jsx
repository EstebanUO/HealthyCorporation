import React,{useEffect} from 'react'
import AlertTitle from '@mui/material/AlertTitle';
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import { Link } from "react-router-dom"
import Alert from '@mui/material/Alert';
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";
import { FaUserAlt,FaKey } from "react-icons/fa";

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
            <div className="formularioLog">
              <label for="exampleInputEmail1" class="labelsReg"><br />Email</label>
              <FaUserAlt className='iconUser'/>
              <input onChange={props.onChangeUserLogin} value={props.userLogin} name="correo" type="email" class="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example@" autocomplete="off" required />
              <label for="inputPassword" class="labelsReg"><br />Password</label>
              <FaKey className='iconPass'/>
              <div className='input-password'>
                <input onChange={props.onChangePasswordLogin} value={props.passwordUser} name="password" type={props.shown2 ? 'text' : 'password'} class="form-input" id="inputPassword" placeholder="Password" />
              </div>
              <button className='button-show2' onClick={props.switchShown2}>{props.shown2 ? <BsEyeFill /> : <BsEyeSlashFill />}</button>
              <p className="forgetPass"><Link to="/recoverPassword" >¿Haz olvidado tu contraseña?</Link></p>
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
            <button onClick={onclick} className="signUpBtn"><Link to="/register" className="linkLog">Registrarse</Link></button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}