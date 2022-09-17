import React from 'react';
import { Nav } from '../../../UI/Nav/Nav';
import logo from '../../../Image/logo.png'
import { NavBar } from '../../../UI/NavBar/NavBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <>
        <header className='Up'>
          <div className='imgu'>
              <a href="/"><img src={logo} alt="Logo" /></a>
              {/* <div className='userIcon'>
                <FontAwesomeIcon icon={faUserCircle} />
              </div> */}
          </div>
        </header>
        <NavBar/>
        <Nav />
    </>
  )
}
