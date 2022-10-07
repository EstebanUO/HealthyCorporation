import React from 'react';
import img1 from './../../Image/Noticie/talco.jpg'
import bannerCosmeticos from './../../Image/bannerCosmeticos.png'
import img3 from './../../Image/shampoo_producto.jpg'
import img4 from './../../Image/Noticie/shampoo.jpg'
import bannerChampuOlive from './../../Image/bannerChampuOlive.png'
import img6 from './../../Image/Noticie/shampoo3.jpg'

const SliderCopy= () => {
  return (
    <div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active tancition-5s" data-bs-interval="4000">
            <img src={bannerCosmeticos} class="d-block w-100" id='bannerTamaño' alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                {/* <div className='center_home'>
                  <h2 id='home' >Bienvenidos a Healthy Corporation donde los precios se ajustan a ti</h2>
                </div> */}
              </div>
          </div>
          <div class="carousel-item tancition-5s" data-bs-interval="4000">
            <img src={img3} class="d-block w-100" id='bannerTamaño' alt="..."/>
              <div class="carousel-caption d-none d-md-block">

              </div>
          </div>
          <div class="carousel-item tancition-5s" data-bs-interval="4000">
            <img src={img4} class="d-block w-100" id='bannerTamaño' alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                
              </div>
          </div>
          <div class="carousel-item tancition-5s" data-bs-interval="4000">
            <img src={bannerChampuOlive} class="d-block w-100" id='bannerTamaño' alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                
              </div>
          </div>
          <div class="carousel-item tancition-5s" data-bs-interval="4000">
            <img src={img6} class="d-block w-100" id='bannerTamaño' alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                
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

export default SliderCopy;


