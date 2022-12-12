import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
import cerrar from '../../Image/Icons/cerrar.png';
import axios from "axios"
import Swal from 'sweetalert2'




export const Password = (props) => {

  const [encrypted_, setEncrypted_] = useState("");
  const [passEncripted, setpassEncripted] = useState("");
  const idUser = localStorage.getItem("idUser")
  const [pass, setPass] = useState("");
  const [passNew, setpassNew] = useState("");
  const [passNewConfirm, setpassNewConfirm] = useState("");
  const handleClik = () => {
    localStorage.clear();
    window.location.reload();
  }

    // desencriptar contraseña
    const bufferABase64 = buffer => btoa(String.fromCharCode(...new Uint8Array(buffer)));
    const base64ABuffer = buffer => Uint8Array.from(atob(buffer), c => c.charCodeAt(0));
    const LONGITUD_SAL = 16;
    const LONGITUD_VECTOR_INICIALIZACION = LONGITUD_SAL;
    const contraseñaEncriptar = "lfjdnd193016"
    // const contraseñaDesencriptar = "lfjdnd193016"
  
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

    const encriptar = async (contraseña, textoPlano) => {
      const encoder = new TextEncoder();
      const sal = window.crypto.getRandomValues(new Uint8Array(LONGITUD_SAL));
      const vectorInicializacion = window.crypto.getRandomValues(new Uint8Array(LONGITUD_VECTOR_INICIALIZACION));
      const bufferTextoPlano = encoder.encode(textoPlano);
      const clave = await derivacionDeClaveBasadaEnContraseña(contraseña, sal, 100000, 256, 'SHA-256');
      const encrypted = await window.crypto.subtle.encrypt(
        { name: "AES-CBC", iv: vectorInicializacion },
        clave,
        bufferTextoPlano
      );
      return bufferABase64([
        ...sal,
        ...vectorInicializacion,
        ...new Uint8Array(encrypted)
      ]);
    };

    (async function () {
      const encriptado = await desencriptar(contraseñaEncriptar,   localStorage.getItem("Password"));
      const encriptado2 = await encriptar(contraseñaEncriptar,   passNew);
      // console.log(encriptado);
      setEncrypted_(encriptado);
      setpassEncripted(encriptado2)
    })();

    const validation = () => {
      console.log("entro");
      if (encrypted_ === pass) {

        if (passNew===passNewConfirm) {
          axios.put(`https://apiprojectmain.herokuapp.com/api/users/${idUser}`, {
            "password": passEncripted
    
          }).catch(function (error) {
            // handle error
            Swal.fire({
              icon: 'error',
              title: error.message,
              showConfirmButton: false,
              timer: 1400
          })
            console.log(error);
    
          });
          Swal.fire({
            icon: 'success',
            title: 'Se ha actualizado la contraseña',
            showConfirmButton: false,
            timer: 1400
        })
        localStorage.setItem("Password", passEncripted);
          setPass("")
          setpassNew("")
          setpassNewConfirm("")
        }else if(passNew!==passNewConfirm){
          Swal.fire({
            title: 'las contraseñas no coinciden',
            text: 'Vuelve a intentarlo',
            icon: 'warning',
            showCancelButton: false,
            showConfirmButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            buttonsStyling: false,
          })
        }

  
      } else if (encrypted_ !== pass) {
        Swal.fire({
          title: 'Contraseña incorrecta',
          text: 'Vuelve a intentarlo',
          icon: 'error',
          showCancelButton: false,
          showConfirmButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          buttonsStyling: false,
        })
      }
    }

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} /><br /><br />
      <div className='acount_up'>
        <div className="acount_all">
          <div className='all_info'>
            <div className='info'>
              <Link to='/account' className='aa'>Mis datos</Link>
              <Link to='/direction' className='b'>Mis direcciones</Link>
              {/* <Link to='/tarjet' className='c'>Mis tarjetas</Link> */}
              <Link to='/password' className='select_btn'>Mi contraseña</Link>
              <span onClick={handleClik} className='btnCerrarSesion' role="button"><img src={cerrar} alt="cerrarSesion" className='cerrarSesion' /> Cerrar sesión</span>
            </div>
          </div>
          <div className='acount_content_all'>
            <div className='acount_content_direction'>

              <div className='acount_content_direction'>
                <p className='text_check'>Contraseña actual</p>
                <input value={pass} onChange={(e) => { setPass(e.target.value) }} className='input_acount' placeholder='Ingresa tu contraseña actual' minlength="8" type="password" required />
              </div><br />
              <div className='acount_content_row'>
                <div className='acount_content_direction2'>
                  <p className='text_check'>Nueva contraseña</p>
                  <input value={passNew} onChange={(e) => { setpassNew(e.target.value) }} className='input_acount2' placeholder='Ingresa la nueva contraseña' minlength="8" type="password"  required/>
                </div><br />
                <div className='acount_content_direction2'>
                  <p className='text_check'>Confirmar contraseña</p>
                  <input value={passNewConfirm} onChange={(e) => { setpassNewConfirm(e.target.value) }} className='input_acount2' placeholder='Ingresa de nuevo la contraseña' minlength="8" type="password"  required/>
                </div>
              </div><br />
              <Link  to="/recoverPassword"><p  className='text_check'>¿Se te olvido la contraseña?</p></Link>
            </div>
            <div className='acount_btn'>
             
              <button onClick={(e)=>validation()} className='btn_save'>Guardar</button>
            </div>
          </div>
        </div>
      </div><br /><br />
      <Footer />
    </div>
  )
}
