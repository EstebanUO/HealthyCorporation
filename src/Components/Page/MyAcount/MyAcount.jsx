import React from 'react'
import { Nav } from '../../UI/Nav/Nav'
import { NavCopy } from '../../UI/Nav/NavCopy'
import { Footer } from '../Layout/Footer/Footer'


export const MyAcount = (props) => {
  return (
    <div>
        <Nav valiLoginAdmin={props.valiLoginAdmin}/>
        <NavCopy />
        
        <Footer />
    </div>
  )
}
