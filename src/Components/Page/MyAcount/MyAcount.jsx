import React from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import { Footer } from '../Layout/Footer/Footer'
import { Header } from '../Layout/Header/Header'
// import { Nav } from '../../UI/Nav/Nav'


export const MyAcount = (props) => {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} />
      {props.alertHome? <Box sx={{ width: '100%', height: "50px" }}><Collapse in={open}><Alert action={<IconButton aria-label="close"color="inherit"size="small"onClick={() => {setOpen(false);props.setalertHome(false)}}><CloseIcon fontSize="inherit" /></IconButton>}sx={{ mb: 2 }}>sesion iniciada correctamente!</Alert></Collapse></Box>:null}
      <div className='acount_up'>
        <div className="acount_all">
          <div className='all_info'>
            <div className='info'>
              <Link to='/account' className='select_btn'>Mis datos</Link>
              <Link to='/direction' className='b'>Mis direcciones</Link>
              <Link to='/tarjet' className='c'>Mis tarjetas</Link>
              <Link to='/password' className='d'>Mi contraseña</Link>
            </div>
          </div>
          <div className='acount_content_all'>
            <div className='acount_content_tarjet'>
              <p  className='text_check'>Nombre</p>
              <input className='input_acount' placeholder='none' type="text" value="" />
            </div><br />
            <div className='acount_content_tarjet'>
              <p  className='text_check'>Correo</p>
              <input className='input_acount' placeholder='none' type="text" value="" />
            </div><br />
            <div className='acount_content_row'>
              <div className='acount_content_tarjet'>
                <p  className='text_check'>Ingresa tu contraseña para guardar los cambios</p>
                <input className='input_acount2' placeholder='************' minlength="8" type="password" value="" required />
              </div>
              <button className='btn_update' disabled><s>Actualizar</s> </button>
            </div><br />
            <div className='acount_btn'>
              <h6>Recuerda mantener actualizados tus datos para tener una mejor experiencia.</h6>
            </div>
          </div>
        </div>
      </div>
      {/* <Nav valiLoginAdmin={props.valiLoginAdmin} />
      <NavCopy /> */}
      <Footer />
    </div>
  )
}
