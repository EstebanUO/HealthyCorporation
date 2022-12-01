import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
// import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
// import { Nav } from '../../UI/Nav/Nav'
import cerrar from '../../Image/Icons/cerrar.png';
import { NavBar } from '../../UI/NavBar/NavBar';
import axios from "axios"
import Swal from 'sweetalert2';
import './MyAcount.css'
import { SettingsInputCompositeRounded } from '@mui/icons-material';

export const MyAcount = (props) => {

  const [open, setOpen] = React.useState(true);

  // eliminar el user de local storage
  const handleClik = () => {
    localStorage.clear();
    window.location.reload();
  }

  // variables
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user_, setUser_] = useState([]);
  const [encrypted_, setEncrypted_] = useState([]);


  // trae la informacion del usuario
  const idUser = localStorage.getItem("idUser")

  const baseURL = `https://apiprojectmain.herokuapp.com/api/users/${idUser}`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUser_(response.data)
    });
  }, []);

  // encriptar contraseña
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



  (async function () {
    const encriptado = await desencriptar(contraseñaEncriptar,   localStorage.getItem("Password"));
    // console.log(encriptado);
    setEncrypted_(encriptado);
  })();
// console.log(encrypted_);
// console.log(pass);

  // subir los datos 
  const validation = () => {
    if (encrypted_ === pass) {
      axios.put(`https://apiprojectmain.herokuapp.com/api/users/${idUser}`, {
        "name": user,
        "email": email

      }).catch(function (error) {
        // handle error
        console.log(error);

      });
      setUser("");
      setEmail("");

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
    <div><NavBar />
      <Header valiLoginAdmin={props.valiLoginAdmin} />
      {props.alertHome ? <Box sx={{ width: '100%', height: "50px" }}><Collapse in={open}><Alert action={<IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); props.setalertHome(false) }}><CloseIcon fontSize="inherit" /></IconButton>} sx={{ mb: 2 }}>sesion iniciada correctamente!</Alert></Collapse></Box> : null}
      <br /><br />
      <div className='acount_up'>
        <div className="acount_all">
          <div className='all_info'>
            <div className='info'>
              <Link to='/account' className='select_btn'>Mis datos</Link>
              <Link to='/direction' className='b'>Mis direcciones</Link>
              {/* <Link to='/tarjet' className='c'>Mis tarjetas</Link> */}
              <Link to='/password' className='d'>Mi contraseña</Link>
              <span onClick={handleClik} className='btnCerrarSesion' role="button"><img onClick={handleClik} src={cerrar} alt="cerrarSesion" className='cerrarSesion' /> Cerrar sesión</span>
            </div>
          </div>
          <form className='acount_content_all' onSubmit={validation}>
            <div className='acount_content_tarjet'>
              <p className='text_check'>Nombre</p>
              <input className='input_acount' placeholder={user_.name} value={user} onChange={(e) => { setUser(e.target.value) }} type="text" required />
            </div><br />
            <div className='acount_content_tarjet'>
              <p className='text_check'>Correo</p>
              <input className='input_acount' placeholder={user_.email} value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" required />
            </div><br />
            <div className='acount_content_row'>
                <div className='acount_content_tarjet'>
                <p  className='text_check'>Ingresa tu contraseña para guardar los cambios</p>
                <input className='input_acount2' placeholder='************' minLength="8" type="password" required />
                </div> <br/>
            </div>
            <input className='btn_update' value="Actualizar" type="submit" />
            <br />
            <div className='acount_btn_'>
              <h6>Recuerda mantener actualizados tus datos para tener una mejor experiencia.</h6>
            </div>
          </form>
        </div>
      </div><br /><br />
      {/* <Nav valiLoginAdmin={props.valiLoginAdmin} />
      <NavCopy /> */}
      <Footer />
    </div>
  )
}
