import emailjs from 'emailjs-com'
import React,{useState} from 'react';

function RecoverPassword(props) {
    const [email, setemail] = useState("")
    const [errorEmail, seterrorEmail] = useState(null)
    

    const sendEmail=(event)=>{
        var templateParams = {
            to_name: 'James',
            email: 'luisfpe19@gmail.com',
            mensaje:'mensaje de prueba'
        };

        emailjs.send('service_ruon4dk', 'template_3ecwdpm', templateParams,'J19FWhSEGpLBBEG2H')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });

    }

    const validateData=()=>{
        seterrorEmail(null)
        let valid = true

        if(email.indexOf('.') === -1 || email.indexOf('@') === -1 || /\s/.test(email) ){
            seterrorEmail("debes ingresar un email valido")
            valid=false
        }

        return valid;
    }

    const onsubmit=(event)=>{
        if(!validateData()){
            return console.log("invalido");
        }else if(validateData()){
            sendEmail(event)
            return console.log("valido")
            
        }

        
    }



    return (
        <div>

            <div>
                <h1>recuperar contraseña</h1>
                <input type="email" placeholder='ingresa tu Email' onChange={(e)=>setemail(e.target.value)} value={email} keyboardType="email-address" />
                <button onClick={onsubmit}>Recuperar contraseña</button>
                <p>{errorEmail}</p>
            </div>
       
        </div>
    );
}

export default RecoverPassword;