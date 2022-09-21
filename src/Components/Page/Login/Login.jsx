<<<<<<< HEAD
=======
import React from 'react'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Login = () => {

      /*validaciones login*/ 



      const [userLogin, setuserLogin] = useState("")

      const [passwordUser, setpasswordUser] = useState("")
  
      const onChangeUserLogin = ({ currentTarget }) => setuserLogin(currentTarget.value);
  
      const onChangePasswordLogin = ({ currentTarget }) => setpasswordUser(currentTarget.value);
    
      /*fin validaciones login*/

  return (
    <div>
        <Header/>
          <div className="formulario">
            <div>
              <form className="formulario3">
                <h1 className="titleReg">Iniciar Sesion</h1>
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
                <div className="formularioLog">
                  <label for="exampleInputEmail1" class="labelsReg"><br/>Email</label>
                    <input onChange={onChangeUserLogin} value={userLogin} name="correo" type="email" class="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example@" autocomplete="off" required/>

                  <label for="inputPassword" class="labelsReg"><br/>Password</label>
                    <input onChange={onChangePasswordLogin} value={passwordUser} name="password" type="password" class="form-input" id="inputPassword" placeholder="Password"/>

                  <Link to="/" className="forgetPass">¿Haz olvidado tu contraseña?</Link>
                  
                  <div className="submitReg">
                    <button type="submit" class="submitReg2">Iniciar Sesion</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="welcome-back">
                  <div className="message2">
                    <h2>Bienvenido a HealthyCorporation</h2>
                    <p>Aun no tienes cuenta? por favor registrate aqui</p>
                    <Link to="/register" className="links"> 
                      <button className="signUpBtn">Registrarse</button>
                    </Link>
                  </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
>>>>>>> main