import React from 'react';
// import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export const Footer = () => {
    return (
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{backgroundColor: "#83c5eb", borderTop: "solid black"}}>
        <div className='me-5 d-none d-lg-block'>
          <span>Mira nuestras redes sociales:</span>
        </div>

        <div >
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='' style={{backgroundColor: "#83c5eb", marginTop: "-3.1rem"}}>
        <MDBContainer className='text-center text-md-start mt-5' >
          <MDBRow className='mt-3' >
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Healthy Corporation
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' >
              <h6 className='text-uppercase fw-bold mb-4'>Lenguages</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Recursos</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Meet
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Jira
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                  Armenia Quindio
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Healthy_Contact@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> <a href='#!' className='text-reset'>
                  Formulario de contacto
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4'style={{backgroundColor: "rgb(74 165 218)", color: "white"}}>
        © 2021 Copyright 
        <a className='text-reset fw-bold' href='https://tiktok.com/'>
          Healthy Corporation
        </a>
      </div>
    </MDBFooter>
    )
}
