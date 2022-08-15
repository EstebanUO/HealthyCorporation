import React from 'react';
import { Nav } from '../../../UI/Nav/Nav';
import logo from '../../../Image/logo.png'

export const Header = () => {
  return (
    <>
        <header className='Up'>
            <a href="#"><img src={logo} alt="Logo" /></a>
        </header>
        <Nav />
    </>
  )
}
