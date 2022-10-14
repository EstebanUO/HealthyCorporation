import emailjs from 'emailjs-com'
import React,{useState} from 'react';
import axios from "axios";

function RecoverPassword(props) {

    
  /*validaciones usuario*/
  const [email, setemail] = useState("")
  const [errorEmail, seterrorEmail] = useState(null)

  const [usaername, setusaername] = useState(null)
  const [password, setpassword] = useState(null)
  const [emailSend, setemailSend] = useState(null)
  /**/ 
  const getApi = (event) => {
    axios.get('https://apiprojectmain.herokuapp.com/api/users') 
      .then(function (response) {
        // handle success
        let validacion=true;
        
        response.data.map(data => {

            if (email===data.email) {
                validacion=false;
                setusaername(data.name)
                setpassword(data.password)
                setemailSend(data.email)
       
            }
            return "termino map";
        });
        
        onsubmit(event,validacion)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  /*fin datos de usuario*/
    
    
    

    const sendEmail=()=>{
        var templateParams = {
            to_name: usaername,
            email: emailSend,
            mensaje:'esta es su contraseña: "'+password+'" ,le recomendamos cambiarla desde las configuraciones de su cuenta'

        };

        emailjs.send('service_6h5ywv6', 'template_0sxrbzh', templateParams,'2BG5bdFduzTDB2Jrm')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });

    }

    const validateData=()=>{
        seterrorEmail(null)
        let valid = true

        if(email.indexOf('.') === -1 || email.indexOf('@') === -1 || /\s/.test(email) || email==="" ){
            seterrorEmail("debes ingresar un email valido")
            valid=false
        }

        return valid;
    }

    const onsubmit=(event,validacion)=>{
        if(!validateData()){
            return console.log("invalido");
        }else if(validateData()){
            
            if(!validacion){
                sendEmail()
                setemail("")
                seterrorEmail("le hemos enviamos un correo con su contraseña!")
                return console.log("valido")

            }else if(validacion){
                seterrorEmail("Email no registrado en nuestra base de datos")
                console.log("email no encontrado");
            } 
        }
    }



    return (
        <div>
            {/* no eliminar ni modificar nada de esto, solo estilos */}
            <div>
                <h1>recuperar contraseña</h1>
                <input type="email" placeholder='ingresa tu Email' onChange={(e)=>setemail(e.target.value)} value={email} />
                <button onClick={getApi}>Recuperar contraseña</button>
                <p>{errorEmail}</p>
            </div>
            {/* hasta aca*/}
       
        </div>
    );
}

export default RecoverPassword;