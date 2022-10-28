import React, { useEffect } from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaUserAlt, FaLock } from "react-icons/fa";

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
  }, [props.confrimPasword, props.passwordRegister]);

  useEffect(() => {
    props.confrimPasword === props.passwordRegister ?
      document.getElementById('txtvalidPassword').textContent = '' :
      document.getElementById('txtvalidPassword').textContent = 'LA CONTRASEÑA NO COINCIDE';
  }, [props.confrimPasword, props.passwordRegister]);

  //envio mensaje 
  useEffect(() => {
    if (props.messages === "Request failed with status code 400") {
      props.setalertUser(true)

    } else if (props.messages === "Network Error") {
      props.setalertConexion(true)
    }
  }, [props.messages]);

  const onclick = () => {
    props.onClick()
  }

  const onSee3 = () => { document.getElementById("content_det").style.display = 'flex' };
  const onBlock3 = () => { document.getElementById("content_det").style.display = 'none' };

  return (
    <div>
      <Header />
      <div className="formulario">
        <div className="welcome-back">
          <div className="message">
            <h2>Bienvenido a HealthyCorporation</h2>
            <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
            <button onClick={onclick} className="signUpBtn"><Link to="/login" className="linkLog">Iniciar Sesion</Link></button>
          </div>
        </div>
        <div>
          <form className="formulario2" onSubmit={props.postApi}>
            <h1 className="titleReg">Registro</h1>
            <div className="formularioReg">
              <p className='pvaliRegister' id='valiExiste'></p>
              <label for="inputUser" class="labelsReg">Nobre de usuario</label>
              <FaUserAlt className='iconUserReg' />
              <input minLength="3" maxLength="20" value={props.usernameRegister} onChange={props.onChangeusernameRegister} name="name" type="text" class="form-input" placeholder="User name" autocomplete="off" required />
              <p className='pvaliRegister' id='txtvalidUsername'></p>
              <div>
                <label for="exampleInputEmail1" class="labelsReg"><br />Correo</label>
                <FaUserAlt className='iconUserEmailReg' />
                <input value={props.emailRegister} onChange={props.onChangeemailRegister} name="correo" type="email" class="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ejemplo@healhty.com" autocomplete="off" required />
              </div>
              <p className='pvaliRegister' id='txtvalidEmail'></p>
              <div>
                <label for="inputPassword" class="labelsReg"><br />Contraseña</label>
                <FaLock className='iconPassReg' />
                <input minLength="8" maxLength="20" value={props.passwordRegister} onChange={props.onChangepasswordRegister} name="password" type="password" class="form-input" placeholder="************" />
              </div>
              <div>
                <label for="inputPassword" class="labelsReg"><br />Confirmar contraseña</label>
                <FaLock className='iconPassReg2' />
                <button className='button-show' onClick={props.switchShown}>{props.shown ? <BsEyeFill /> : <BsEyeSlashFill />}</button>
                <input minLength="8" maxLength="20" value={props.confrimPasword} onChange={props.onChangeconfrimPasword} name="password" type={props.shown ? 'text' : 'password'} class="form-input" placeholder="************" />
              </div><br />
              <p className='pvaliRegister' id='txtvalidPassword'></p>
              <br />
              <div className="checkTyC">
                <input type="checkbox" required /><p>Haz click aqui para aceptar nuestros<br /><b><p className='Terms_and_cont' onClick={onSee3}>Terminos y condiciones.</p></b> </p>
              </div>
              {props.alertUser ? <Alert variant="filled" severity="warning">Usuario o Email ya Registrado!</Alert> : null}
              {props.alertConexion ? <Alert variant="filled" severity="error">Sin Conexión!</Alert> : null}

              <div className="submitReg">
                <input disabled id='buttonRegister' value="Registrarse" type="submit" class="submitReg2" />
              </div>
            </div>
          </form>
        </div>
      </div>



      <div className='content_metodos' id='content_det'>
        <div className='Trasparent'>
          <div className='opacidad'>
            <div className='metodos'>
              <h1 className='titleTyC'>Términos y Condiciones de Uso</h1>

              <h3 className='titleTyC'>Información relevante</h3>

              <p className='parrafo'>Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los
                siguientes Términos y Condiciones que a continuación se redactan.
                El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento.
                Todos los productos  que son ofrecidos por nuestro sitio web estaran sujetas a sus propios Términos y Condiciones.
                En algunos casos, para adquirir un producto, será necesario el registro por
                parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.<br /><br />
                El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos.
                Healthy_Corporation.com no asume la responsabilidad en caso de que entregue dicha clave a terceros.<br /><br />Todas las compras y transacciones que se lleven a cabo por medio de este sitio web,
                están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones
                requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.</p>

              <h3 className='titleTyC'>Licencia</h3>

              <p className='parrafo'>Healthy Corporation  a través de su sitio web concede una licencia para que los usuarios utilicen  los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.</p>

              <h3 className='titleTyC'>Uso no autorizado</h3>

              <p className='parrafo'>En caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y
                ofrecerlos para la redistribución o la reventa de ningún tipo y tambien cabe resaltar que esta pagina tendra restricciones de ingresos de menores de edad solo esta adecuada para personas mayores de 18 años en adelante.</p>

              <h3 className='titleTyC'>Propiedad</h3>

              <p className='parrafo'>Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad  de los proveedores del contenido.
                En caso de que no se especifique lo contrario, nuestros productos se proporcionan  sin ningún tipo de garantía,
                expresa o implícita. En ningún esta compañía será  responsables de ningún daño incluyendo, pero no limitado a,
                daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la
                imposibilidad de utilizar nuestros productos.</p>

              <h3 className='titleTyC'>Privacidad</h3>
              <p className='parrafo'>Healthy_Corporation.com garantiza que la información personal que usted envía cuenta con la seguridad necesaria.
                Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.</p>

              <div className='acep_Terms'>
                <button class="submitReg2" onClick={onBlock3}>Aceptar y continuar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}