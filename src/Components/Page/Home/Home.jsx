import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Categories } from '../../UI/Categories/Categories';
import { Marks } from '../../UI/Marks/Marks';
import Slider2 from '../../UI/js/SliderCopy';
import Slider from '../../UI/SliderHome/SliderHome';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import './Home.css';

/* imagenes de prodductos */
import img1 from '../../Image/img_product/bienestar.PNG'
import img2 from '../../Image/img_product/bienestar2.PNG'
import img3 from '../../Image/img_product/bienestar3.PNG'
/* ----------------- */
import img4 from '../../Image/img_product/cuidado.PNG'
import img5 from '../../Image/img_product/cuidado2.PNG'
import img6 from '../../Image/img_product/cuidado3.PNG'
/* ----------------- */
import img7 from '../../Image/img_product/deermatologo.PNG'
import img8 from '../../Image/img_product/deermatologo2.PNG'
import img9 from '../../Image/img_product/deermatologo3.PNG'
/* ----------------- */
import img10 from '../../Image/img_product/salud.PNG'
import img11 from '../../Image/img_product/salud2.PNG'
import img12 from '../../Image/img_product/salud3.PNG'
/* ----------------- */
import img13 from '../../Image/img_product/medicamento1.PNG'
import img14 from '../../Image/img_product/medicamento2.PNG'
import img15 from '../../Image/img_product/medicamento3.PNG'
import flecha from '../../Image/flecha.png'
/* ------------------ */
import medicasp from '../../Image/assects/medicasp.jpg';
import pax from '../../Image/assects/pax.jpg';
import nutribela from '../../Image/assects/nutribela.jpg';
import acetaminofen from '../../Image/assects/acetaminofen.jpg';


export const Home = (props) => {


  const add = () => {
    swal({
      title: "Genial",
      text: "Se a añadido este producto al carrito",
      icon: "success",
      button: "Continuar viendo productos",
    });
  }

  return (
    <div>
      <Header valiLoginAdmin={props.valiLoginAdmin} />
      <div>
        <Slider2 />
        <div>
        <div className="Content_categorias">
          <h1 className='title-home2'>Categorías</h1>
          <Categories />
        </div>
        <div className='products-home'>
          <h1 className='title-home'> Productos más vendidos</h1>
          <Slider />
        </div>
      </div>
      <div>
        <div className='column_all_product'>
          <h1 className='text_all_product'>Bienestar</h1>
          <div className='content_all_product'>
            <img className='select_product1' src={img1} alt="imagen producto" />
            <img className='select_product2' src={img2} alt="imagen producto" />
            <img className='select_product3' src={img3} alt="imagen producto" />
            <Link to="/products"><button className='btn_all'>
              Ver más <img className='flecha' src={flecha} alt="flecha" />
            </button></Link>
          </div>
        </div>
        <div className='column_all_product'>
          <h1 className='text_all_product2'>Cuidado</h1>
          <div className='content_all_product2'>
            <img className='select_product1' src={img4} alt="imagen producto" />
            <img className='select_product2' src={img5} alt="imagen producto" />
            <img className='select_product3' src={img6} alt="imagen producto" />
            <Link to="/products"><button className='btn_all'>
              Ver más <img className='flecha' src={flecha} alt="flecha" />
            </button></Link>
          </div>
        </div>
        <div className='column_all_product'>
          <h1 className='text_all_product'>Dermatología</h1>
          <div className='content_all_product'>
            <img className='select_product1' src={img7} alt="imagen producto" />
            <img className='select_product2' src={img8} alt="imagen producto" />
            <img className='select_product3' src={img9} alt="imagen producto" />
            <Link to="/products"><button className='btn_all'>
              Ver más <img className='flecha' src={flecha} alt="flecha" />
            </button></Link>
          </div>
        </div>
        <div className='column_all_product'>
          <h1 className='text_all_product2'>Salud</h1>
          <div className='content_all_product2'>
            <img className='select_product1' src={img10} alt="imagen producto" />
            <img className='select_product2' src={img11} alt="imagen producto" />
            <img className='select_product3' src={img12} alt="imagen producto" />
            <Link to="/products"><button className='btn_all'>
              Ver más <img className='flecha' src={flecha} alt="flecha" />
            </button></Link>
          </div>
        </div>
        <div className='column_all_product'>
          <h1 className='text_all_product'>Medicamentos</h1>
          <div className='content_all_product'>
            <img className='select_product1' src={img13} alt="imagen producto" />
            <img className='select_product2' src={img14} alt="imagen producto" />
            <img className='select_product3' src={img15} alt="imagen producto" />
            <Link to="/products"><button className='btn_all'>
              Ver más <img className='flecha' src={flecha} alt="flecha" />
            </button></Link>
          </div>
        </div>
      </div>
      <Marks />
      <br /><br />
      <div>
        <div>
          <h1 className='productosVistos'>Otros clientes también vieron</h1><br />
          <div className='card_product'>
            <div className='column_all'>
              <div className='imgProduct_' >
                <Link to="/compra"><img className='imgProduct' src={medicasp} alt="Producto imagen" /></Link>
              </div>
              <div className='padding_product'>
                <div>
                  <p className='name_Product'>Medicasp </p>
                </div>

                <div>
                  <p className='price_product_ofert'>$ 40.000 (Normal)</p>
                  <p className='price_product'>$ 32.000</p>
                </div>
                <div>
                  <p className='name_Product_'>Cantidad disponible:  4</p>
                </div>
                <div className='rowProduct'>
                  <p className='textProduct'>Despacho</p>
                  <p className='textProduct_'>Retiro</p>
                  <p className='textProduct'>Venta directa </p>
                </div>
              </div>
              <div className='addProduct'>
                <button onClick={add} className='addProduct_'>
                  Agregar <FaShoppingCart /> 
                </button>
              </div>
            </div>
            <div className='column_all'>
              <div className='imgProduct_' >
              <Link to="/compra"><img className='imgProduct2' src={pax} alt="Producto imagen" /></Link>
              </div>
              <div className='padding_product'>
                <div>
                  <p className='name_Product'>Pax noche </p>
                </div>

                <div>
                  <p className='price_product_ofert'>$ 7.000 (Normal)</p>
                  <p className='price_product'>$ 4.500</p>
                </div>
                <div>
                  <p className='name_Product_'>Cantidad disponible:  4</p>
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
            <div className='column_all'>
              <div className='imgProduct_' >
              <Link to="/compra"><img className='imgProduct' src={nutribela} alt="Producto imagen" /></Link>
              </div>
              <div className='padding_product'>
                <div>
                  <p className='name_Product'>Nutribela 10</p>
                </div>

                <div>
                  <p className='price_product_ofert'>$ 17.000 (Normal)</p>
                  <p className='price_product'>$ 9.500</p>
                </div>
                <div>
                  <p className='name_Product_'>Cantidad disponible:  4</p>
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
            <div className='column_all'>
              <div className='imgProduct_' >
              <Link to="/compra"><img className='imgProduct2' src={acetaminofen} alt="Producto imagen" /></Link>
              </div>
              <div className='padding_product'>
                <div>
                  <p className='name_Product'>Acetaminofén  </p>
                </div>

                <div>
                  <p className='price_product_ofert'>$ 10.000 (Normal)</p>
                  <p className='price_product'>$ 4.900</p>
                </div>
                <div>
                  <p className='name_Product_'>Cantidad disponible:  4</p>
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
          </div>
        </div>
      </div><br /><br />
      <Footer />
    </div>
    </div>
  )
}
