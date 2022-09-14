import React from 'react';
import img1 from './../../Image/condon_producto.jpg'
import img2 from './../../Image/pastillas_productos.jpg'
import img3 from './../../Image/shampoo_producto.jpg'
import img4 from './../../Image/kotex_producto.jpg'

const Slider = () => {
  return (
    <div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="width carousel-item active tancition-5s" data-bs-interval="4000">
            <img src={img1} class="d-block w-50 margin-left" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Mejores productos</h5>
             
              </div>
          </div>
          <div class="width carousel-item tancition-5s" data-bs-interval="4000">
            <img src={img2} class="d-block w-50 margin-left" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Mejores productos</h5>
          
              </div>
          </div>
          <div class="width carousel-item tancition-5s" data-bs-interval="4000">
            <img src={img3} class="d-block w-50 margin-left" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Mejores productos</h5>

              </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;


