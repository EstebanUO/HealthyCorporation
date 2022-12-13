import React,{useState} from 'react';
import './Categories.css';
import ofertas from '../../Image/Category/oferta.png';
import belleza from '../../Image/Category/belleza.png';
import bienestar from '../../Image/Category/bienestar.png';
import dermocosméticos from '../../Image/Category/dermocosmeticos.png';
import medicamento from '../../Image/Category/medicamento.png';
import cuidado from '../../Image/Category/cuidado.png';
import sexual from '../../Image/Category/sexual.png';
import Swal from 'sweetalert2'


export const Categories = (props) => {

    const [categoriaSelect, setcategoriaSelect] = useState("")

    const handleOneCheckbox = (e) =>{
        const card=document.querySelector(".card2Select")
        if (card!==null) {
            card.className="card2"
        }

        setcategoriaSelect(e)

        if (e !== categoriaSelect) {

    
          const resultadoCategoria = props.characters.filter((character) => character.categoria === parseInt(e))
          if (resultadoCategoria.length===0) {
            Swal.fire({
                icon: 'warning',
                title: 'No hay productos con esta categoria',
                showConfirmButton: false,
                timer: 1800
            })
          }else if (resultadoCategoria.length!==0) {
            const card=document.getElementById("cate"+e)
            card.className="card2Select"
            
          }
          props.setDatosFiltrados(
          resultadoCategoria
          )
        }else if(e === categoriaSelect){
          const card=document.getElementById("cate"+e)
          card.className="card2"
          props.setDatosFiltrados([])
          setcategoriaSelect("")
        }
      }
      

    return (
        <><div className='all' >
            <div onClick={()=>{handleOneCheckbox(74)}}  className='contents' type='button'>
                <div id='cate74' className='card2'>
                    <img  src={ofertas} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Ofertas</p>
                </div>
            </div>
            <div onClick={()=>{handleOneCheckbox(34)}}  className='contents' type='button' >
                <div id='cate34' className='card2'>
                    <img  src={sexual} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Salud Sexual</p>
                </div>
            </div>
            <div onClick={()=>{handleOneCheckbox(124)}}  className='contents' type='button'>
                <div id='cate124' className='card2'>
                    <img src={bienestar} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Bienestar</p>
                </div>
            </div>
            <div onClick={()=>{handleOneCheckbox(134)}}  className='contents' type='button'>
                <div id='cate134' className='card2'>
                    <img src={cuidado} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Cuidado Personal</p>
                </div>
            </div>
            <div onClick={()=>{handleOneCheckbox(14)}}  className='contents' type='button'>
                <div id='cate14' className='card2'>
                    <img src={belleza} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Belleza</p>
                </div>
            </div>
            <div  onClick={()=>handleOneCheckbox(4)}  className='contents' type='button'>
                <div id='cate4' className='card2'>
                    <img src={medicamento} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Medicamentos</p>
                </div>
            </div>
            <div onClick={()=>{handleOneCheckbox(144)}} className='contents' type='button'>
                <div id='cate144' className='card2'>
                    <img src={dermocosméticos} alt="Prueba de imagen" className='Image-card' />
                    <p className='text-card'>Dermocosméticos</p>
                </div>
            </div>
        </div><br /><br /></>
    )
}