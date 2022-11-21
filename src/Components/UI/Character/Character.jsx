import React from 'react';
import { CardAllProducts } from '../CardAllProducts/CardAllProducts';



export const Character = ({characters}) => {
  return (
    <div className='search_content'>
        <div className='search_content2'>
            {/* {characters.map((character,key) => <CardAllProducts data={character} key={key}/>)} */}
            <CardAllProducts/>
        </div>
    </div>
  )
}