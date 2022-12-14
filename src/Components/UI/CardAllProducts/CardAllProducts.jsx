import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// import { MdAttachMoney } from "react-icons/Md";
import Swal from 'sweetalert2'

// import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const CardAllProducts = ({characters,datosFiltrados,texto,datosFiltrados2,datosFiltrados3,ordernado}) => {

  /*no eliminar este usestate por que se cae la pagina*/
  const [products_2, setProducts_2] = useState([])

  /*------------ Filtros categoria y buscador --------------*/
  let datosProductos = characters

  if (texto === '') {
    if (ordernado.length === 0) {
      if (datosFiltrados3.length === 0) {
        if (datosFiltrados.length !== 0) {
          datosProductos =  datosFiltrados
        }else if(datosFiltrados2.length !== 0){
          datosProductos =  datosFiltrados2
        }
      }else if (datosFiltrados3.length !== 0) {
        datosProductos =  datosFiltrados3
      }
    }else if (ordernado.length !== 0) {
      datosProductos = ordernado
    }
  }

  /*-------------------------------------------------------*/

  let validDatos = (localStorage.getItem("car"))

  // let array = JSON.parse(localStorage.getItem("car"))
  
  const add = (nombre,price,imagen,id) => {
    let data=JSON.parse(validDatos)
    let vali=0
    if (data!==null) {
      data.map((data) =>{if( data.ids === id){
        vali=1
      }})
    }

    if (vali===0) {
      var datos={nombres:nombre,prices:price,imagenes:imagen,ids:id}

      setProducts_2(products_2 => products_2.concat(datos))
      validDatos === null ? validDatos = [] : validDatos = JSON.parse(validDatos);
  
      localStorage.setItem("car", JSON.stringify(validDatos.concat(datos)))
  
      // props.setcounter_h(array)
  
      Swal.fire({
        icon: 'success',
        title: 'Se ha agregado el producto al carrito',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        timer: 7400,
        timerProgressBar: true,
        buttonsStyling: false,
        customClass: {
          cancelButton: "Cancel_"
      },
        html: '<div class="pse_content"><a class="text_link" href="/car"><button class="confirm">Ver mi carrito</button></a> </div>'
      });
    }else if(vali===1){
      Swal.fire({
        icon: 'warning',
        title: 'producto ya a??adido a carrito',
        showConfirmButton: false,
        timer: 1600
    })
    }


  }

  // --------------------- compra  ----------------------------

  let validDatos_2 = (localStorage.getItem("product"));
  const add_2 = (e) => {

    validDatos_2 === null ? validDatos_2=[] : validDatos_2=JSON.parse(validDatos_2)
    localStorage.setItem('product', JSON.stringify(validDatos_2))

    JSON.stringify(localStorage.setItem("product", e.target.value))
    console.log(e.target.value)
  }

  const formatoMexico = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
  }

  return (
    <div className='content_all_Product'>
      <div className='card_all_product'>
        {datosProductos.map((data, key) => ( 
          <div className='column_all_products' key={key}>
            <div className='imgProduct_'>
              <img className='imgAllProduct' src={"https://api-products-healthy.herokuapp.com"+data.imagen}  alt="Producto imagen" />
            </div>
            <div className='padding_product'>
              <div>
                <p className='name_Product'>{data.nombre}</p>
              </div>
              <div>
                <p className='price_product'>$ {formatoMexico(data.price)}</p>
              </div>
              <div>
                <p className='name_Product_'>Cantidad disponible: <b>{data.cantidad}</b></p>
              </div>
              <div className='rowProduct'>
                <p className='textProduct'>Despacho</p>
                <p className='textProduct_'>Retiro</p>
                <p className='textProduct'>Venta directa</p>
              </div>
            </div>
            <div className='addProduct'>
              <button onClick={(e) => { add(data.nombre,data.price,data.imagen,data.id) }} className='addProduct_' value={{'id':data.id,'imagen':data.imagen,'price':data.price,'nombre':data.nombre}}>
                Agregar <FaShoppingCart />
              </button>
              <a href="/compra"><button onClick={(e) => { add_2(e) }} className='addProduct_2' value={data.id}>
                Ver m??s
              </button></a>
            </div>
          </div>
        ))
        } 
      </div>
    </div>
  )
}