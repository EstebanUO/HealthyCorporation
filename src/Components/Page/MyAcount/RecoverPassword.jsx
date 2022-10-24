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
//   const [errorEmail, seterrorEmail] = useState(null)


  /**/ 
  const getApi = (event) => {
    axios.get('https://apiprojectmain.herokuapp.com/api/users') 
      .then(function (response) {
        // handle success
        let validacion=true;
        let usaername=""
        let password=""
        let emailSend=""
        
        response.data.map(data => {

            if (email===data.email) {
                validacion=false;
                usaername=data.name
                password=data.password
                emailSend=data.email
       
            }
            return "termino map";
        });
        
        onsubmit(usaername,password,emailSend,event,validacion)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  /*fin datos de usuario*/
    
    
    

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

    const validateData=()=>{
        // seterrorEmail(null)
        let valid = true

        if(email.indexOf('.') === -1 || email.indexOf('@') === -1 || /\s/.test(email) || email==="" ){
            // seterrorEmail(
                Swal.fire({
                    icon: 'error',
                    title: "¡Debes ingresar un email valido!",
                    showConfirmButton: false,
                    timer: 1500
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
                    timer: 1500
                })
                return console.log("valido")

            }else if(validacion){
                // seterrorEmail("Email no registrado en nuestra base de datos")
                Swal.fire({
                    icon: 'warning',
                    title: "Email no registrado en nuestra base de datos",
                    html: "<p>Por favor verifica si escribistes bien el <b>Email</b></p>",
                    showConfirmButton: false,
                    timer: 2000
                })
                console.log("email no encontrado");
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