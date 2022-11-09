import React from 'react';
import { Nav } from '../../../UI/Nav/Nav';
import { Link } from "react-router-dom";
import logo from '../../../Image/logo.png'
import { NavBar } from '../../../UI/NavBar/NavBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export const Header = (props) => {
  return (
    <>
        <header className='Up' id='Up'>
          <div className='imgu'>
              <Link to='/'><img src={logo} alt="Logo" /></Link>
              {/* <div className='userIcon'>
                <FontAwesomeIcon icon={faUserCircle} />
              </div> */}
          </div>
        </header>
        <NavBar counter_h={props.counter_h}/>
        <Nav valiLoginAdmin={props.valiLoginAdmin} />
    </>
  )
}
