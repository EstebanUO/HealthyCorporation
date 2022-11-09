import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from 'sweetalert2'
import axios from "axios"

export const CardAllProducts = (props) => {
  const [products, setProducts] = useState([])
  const [products_2, setProducts_2] = useState([])


  let validDatos = (localStorage.getItem("car"))
  // let array = JSON.parse(localStorage.getItem("car"))
  const add = (e) => {


    setProducts_2(products_2 => products_2.concat(e.target.value))
    validDatos === null ? validDatos = [] : validDatos = JSON.parse(validDatos);

    localStorage.setItem("car", JSON.stringify(validDatos.concat(e.target.value)))
    // props.setcounter_h(array)

    Swal.fire({
      icon: 'success',
      title: 'Se ha agregado el producto al carrito',
      showConfirmButton: false,
      timer: 3400,
      timerProgressBar: true,
      html: '<div class="pse_content"> <a class="text_link" href="/car"><button class="confirm">Ver mi carrito</button></a></div>'
    });
  }




  const baseURL = "https://api-products-healthy.herokuapp.com/api/healthyapp";
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);


  // -------------------------------------------------

  const [products_3, setProducts_3] = useState([]);
  // console.log(products_3);
  let validDatos_2 = (localStorage.getItem("product"));
  const add_2 = (e) => {
      setProducts_3(products_3 => products_3.concat(e.target.value)) 
     
      validDatos_2 === null ? validDatos_2=[] : validDatos_2=JSON.parse(validDatos_2)
      localStorage.setItem('product', JSON.stringify(validDatos_2))
      // console.log("bn");
  
      // localStorage.setItem("product", e.target.value)
      JSON.stringify(localStorage.setItem("product", e.target.value))
      
  }

  return (
    <div className='content_all_Product'>
      <div className='card_all_product'>
        {products.map((data) => (
          <div key={data.id} className='column_all_products'>
            <div className='imgProduct_'>
              <Link to="/compra"><img className='imgAllProduct' onClick={(e) => {add_2(e)}} value={data.id}  src={"https://api-products-healthy.herokuapp.com" + data.imagen} alt="Producto imagen" /></Link>
            </div>
            <div className='padding_product'>
              <div>
                <p className='name_Product'>{data.nombre}</p>
              </div>
              <div>
                <p className='price_product'>$ {data.price}</p>
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
              <button onClick={(e) => { add(e) }} className='addProduct_' value={data.id}>
                Agregar <FaShoppingCart />
              </button>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}