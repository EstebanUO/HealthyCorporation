import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from 'sweetalert2'
import axios from "axios"

export const CardAllProducts = () => {


  const add = () => {
    Swal.fire({
      icon: 'success',
      title: 'Se ha agregado el producto al carrito',
      showConfirmButton: false,
      timer: 3400,
      timerProgressBar: true,
      html: '<div class="pse_content"> <a class="text_link" href="/car"><button class="confirm">Ver mi carrito</button></a></div>'
    });

    (function () {
      axios.get('https://apiprojectmain.herokuapp.com/api/users')
        .then(function (response) {
          localStorage.setItem("car", JSON.stringify(response));
        })
      
    })();
  }
  

  const baseURL = "https://api-products-healthy.herokuapp.com/api/healthyapp";
  const [products, setProducts] = useState([])

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (

    <div className='content_all_Product'>
      <div className='card_all_product'>
        {products.map((data) => (
          <div key={data.id} className='column_all_products'>
            <div className='imgProduct_' >
              <Link to="/compra"><img className='imgAllProduct' src={"https://api-products-healthy.herokuapp.com" + data.imagen} alt="Producto imagen" /></Link>
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
              <button onClick={add} className='addProduct_'>
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