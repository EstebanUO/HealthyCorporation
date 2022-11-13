import React, {useState} from 'react';
import medicasp from '../../Image/assects/medicasp.jpg';
// import pax from '../../Image/assects/pax.jpg';
// import nutribela from '../../Image/assects/nutribela.jpg';
// import acetaminofen from '../../Image/assects/acetaminofen.jpg';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from 'sweetalert2'
import './Card.css'

export const Card = () => {

  const add = () => {

    Swal.fire({
      icon: 'success',
      title: 'Se ha agregado el producto al carrito',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      timer: 3400,
      timerProgressBar: true,
      buttonsStyling: false,
      customClass: {
        cancelButton: "Cancel_"
    },
      html: '<div class="pse_content"><a class="text_link" href="/car"><button class="confirm">Ver mi carrito</button></a> </div>'
    });
  }

  // const [products_3, setProducts_3] = useState([]);
  // let validDatos_2 = (localStorage.getItem("product"));
  // const add_2 = (e) => {
  //     setProducts_3(products_3 => products_3.concat(e.target.value)) 
     
  //     validDatos_2 === null ? validDatos_2=[] : validDatos_2=JSON.parse(validDatos_2)
  //     localStorage.setItem('product', JSON.stringify(validDatos_2))

  //     JSON.stringify(localStorage.setItem("product", e.target.value))
  //     console.log(e.target.value)
  // }

  return (
    <div className='content_Product'>
      <div className='card_product'>
        <div className='column_all'>
          <div className='imgProduct_' >
            <img className='imgProduct' src={medicasp} alt="Producto imagen" />
          </div>
          <div className='padding_product'>
            <div>
              <p className='name_Product'>Medicasp </p>
            </div>
            <div>
              <p className='price_product'>$ 40.000</p>
            </div>
            <div>
              <p className='name_Product_'>Cantidad disponible:4</p>
            </div>
            <div className='rowProduct'>
              <p className='textProduct'>Despacho</p>
              <p className='textProduct_'>Retiro</p>
              <p className='textProduct'>Venta directa </p>
            </div>
          </div>
          <div className='addProduct'>
            <button onClick={add}  className='addProduct_' >
              Agregar <FaShoppingCart />
            </button>
            <Link to="/compra"><button  className='addProduct_2' >
              Ver más
            </button></Link>
          </div>
        </div>
      </div><br />
    </div>
  )
}