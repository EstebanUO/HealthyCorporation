import emailjs from 'emailjs-com'
import React,{useState} from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { FaEnvelope } from "react-icons/fa";

function RecoverPassword(props) {

    
  /*validaciones usuario*/
  const [email, setemail] = useState("")
  const base64ABuffer = buffer => Uint8Array.from(atob(buffer), c => c.charCodeAt(0));
  const LONGITUD_SAL = 16;
  const LONGITUD_VECTOR_INICIALIZACION = LONGITUD_SAL;
  const contraseñaDesencriptar = "lfjdnd193016"
//   const [errorEmail, seterrorEmail] = useState(null)

/*funciones de desencriptado*/
const derivacionDeClaveBasadaEnContraseña = async (contraseña, sal, iteraciones, longitud, hash, algoritmo = 'AES-CBC') => {
    const encoder = new TextEncoder();
    let keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(contraseña),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );
    return await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: encoder.encode(sal),
        iterations: iteraciones,
        hash
      },
      keyMaterial,
      { name: algoritmo, length: longitud },
      false,
      ['encrypt', 'decrypt']
    );
  }

  const desencriptar = async (contraseña, encriptadoEnBase64) => {
    const decoder = new TextDecoder();
    const datosEncriptados = base64ABuffer(encriptadoEnBase64);
    const sal = datosEncriptados.slice(0, LONGITUD_SAL);
    const vectorInicializacion = datosEncriptados.slice(0 + LONGITUD_SAL, LONGITUD_SAL + LONGITUD_VECTOR_INICIALIZACION);
    const clave = await derivacionDeClaveBasadaEnContraseña(contraseña, sal, 100000, 256, 'SHA-256');
    const datosDesencriptadosComoBuffer = await window.crypto.subtle.decrypt(
      { name: "AES-CBC", iv: vectorInicializacion },
      clave,
      datosEncriptados.slice(LONGITUD_SAL + LONGITUD_VECTOR_INICIALIZACION)
    );
    return decoder.decode(datosDesencriptadosComoBuffer);
  }

  /*fin funciones de desencriptado*/


  /**/ 
  const getApi = (event) => {
    axios.get('https://apiprojectmain.herokuapp.com/api/users') 
      .then(function (response) {
        // handle success
        let validacion=true;
        let usaername=""
        let emailSend=""
        
        
        response.data.map(async(data) => {
            

            if (email===data.email) {
                
                validacion=false;
                usaername=data.name
                emailSend=data.email
                console.log("paso");
                onsubmit(usaername,await desencriptar(contraseñaDesencriptar, data.password),emailSend,event,validacion)
       
            }
            
            return "termino map";
        });

        if(!validateData()){
            return console.log("invalido");
        }else if(validateData()){
            
            if(validacion){
                // seterrorEmail("Email no registrado en nuestra base de datos")
                Swal.fire({
                    icon: 'warning',
                    title: "Email no registrado en nuestra base de datos",
                    html: "<p>Por favor verifica si escribistes bien el <b>Email</b></p>",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 5000
                })

            } 
        }
        
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  /*fin datos de usuario*/
    
    
    
    /*envio de emails*/
    const sendEmail=(usaername,password,emailSend)=>{
        var templateParams = {
            to_name: usaername,
            email: emailSend,
            mensaje:'Esta es su contraseña: "'+password+'" ,le recomendamos cambiarla desde las configuraciones de su cuenta'

        };

        emailjs.send('service_6h5ywv6', 'template_0sxrbzh', templateParams,'2BG5bdFduzTDB2Jrm')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });

    }
    /*fin envio de emails */

    const validateData=()=>{
        // seterrorEmail(null)
        let valid = true

        if(email.indexOf('.') === -1 || email.indexOf('@') === -1 || /\s/.test(email) || email==="" ){
            // seterrorEmail(
                Swal.fire({
                    icon: 'error',
                    title: "¡Debes ingresar un email valido!",
                    showConfirmButton: false,
                    timer: 3500,
                    timerProgressBar: true
                })
            valid=false
        }
        return valid;
    }

    const onsubmit=(usaername,password,emailSend,event,validacion)=>{
        if(!validateData()){
            return console.log("invalido");
        }else if(validateData()){
            
            if(!validacion){
                sendEmail(usaername,password,emailSend)
                setemail("")
                // seterrorEmail("le hemos enviamos un correo con su contraseña!")
                Swal.fire({
                    icon: 'success',
                    title: "¡le hemos enviamos un correo con su contraseña!",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 2000
                })
                return console.log("valido")

            } 
        }
    }



    return (
        <div>
            <Header/>
            {/* no eliminar ni modificar nada de esto, solo estilos */}
            <div className='containerForgotPass'>
                <div className='forgotPass'>
                    <span className='recuperarPass'>Recuperar contraseña</span><br />
                    <div className='div-recoverPassword'>
                        <FaEnvelope className='iconEmailRecuperar'/>
                        <input type="email" placeholder='Ingresa tu correo' className='inputRecuperar' onChange={(e)=>setemail(e.target.value)} value={email} /><br/>
                    </div>
                    <br />
                    <button onClick={getApi} className="btnRecuperar">Enviar contraseña</button>
                    {/* <p className='alertError'>{errorEmail}</p> */}
                </div>
            </div>
            {/* hasta aca*/}
            <Footer/>
        </div>
    );
}

export default RecoverPassword;