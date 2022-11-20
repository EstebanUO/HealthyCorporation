import React from 'react';
import { Amount } from '../../UI/Amount/Amount';


export const Car = (props) => {
  return (
    <div>
        <Amount productos={props.productos} valiLoginAdmin={props.valiLoginAdmin}/>
    </div>
  )
}
