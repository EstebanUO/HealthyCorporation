import React from 'react';
// import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export const Footer = () => {
    return (

//     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' >
//       <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{backgroundColor: "#83c5eb", borderTop: "solid black"}}>
//         <div className='me-5 d-none d-lg-block'>
//           <span>Mira nuestras redes sociales:</span>

//         <MDBFooter className='text-center' color='balk' style={{ backgroundColor: '#83c5eb',borderTop: 'solid black' }}>
//         <MDBContainer className='p-4'>
//           <section className='mb-4'>
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='facebook-f' />
//             </MDBBtn>
  
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='twitter' />
//             </MDBBtn>
  
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='google' />
//             </MDBBtn>
  
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='instagram' />
//             </MDBBtn>
  
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='linkedin-in' />
//             </MDBBtn>
  
//             <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//               <MDBIcon fab icon='github' />
//             </MDBBtn>
//           </section>
  
//           <section className=''>
//             <form action=''>
//               <MDBRow className='d-flex justify-content-center'>
//                 <MDBCol size="auto">
//                   <p className='text_footer' >
//                     <strong>Suscribete para más </strong>
//                   </p>
//                 </MDBCol>
  
//                 <MDBCol md='5'  start='12' style={{ marginTop: "-1rem", transition: "all 300ms"}}>
//                   <MDBInput contrast type='email' label='' className='mb-4' />
//                 </MDBCol>
  
//                 <MDBCol size="auto">
//                   <MDBBtn outline color='light'  style={{ marginTop: "-6px", transition: "all 300ms"}}>
//                     Subscribe
//                   </MDBBtn>
//                 </MDBCol>
//               </MDBRow>
//             </form>
//           </section>
// {/*   
//           <section className='mb-4'>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
//               voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
//               sequi voluptate quas.
//             </p>
//           </section> */}
  
//           <section className=''>
//             <MDBRow>
//               <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//                 <h5 className='text-uppercase'>Link</h5> 
  
//                 <ul className='list-unstyled mb-0'>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 1
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 2
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 3
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 4
//                     </a>
//                   </li>
//                 </ul>
//               </MDBCol>
  
//               <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//                 <h5 className='text-uppercase'>Links</h5>
  
//                 <ul className='list-unstyled mb-0'>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 1
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 2
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 3
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 4
//                     </a>
//                   </li>
//                 </ul>
//               </MDBCol>
  
//               <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//                 <h5 className='text-uppercase'>Links</h5>
  
//                 <ul className='list-unstyled mb-0'>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 1
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 2
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 3
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 4
//                     </a>
//                   </li>
//                 </ul>
//               </MDBCol>
  
//               <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//                 <h5 className='text-uppercase'>Links</h5>
  
//                 <ul className='list-unstyled mb-0'>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 1
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 2
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 3
//                     </a>
//                   </li>
//                   <li>
//                     <a href='#!' className='text-white'>
//                       Link 4
//                     </a>
//                   </li>
//                 </ul>
//               </MDBCol>
//             </MDBRow>
//           </section>
//         </MDBContainer>
  
//         <div className='text-center p-3' style={{ backgroundColor: 'rgb(83 194 255 / 84%)', borderTop: 'solid black' }}>
//           <a className='text-white' href='/'>Healthy Corporation</a> © 2020 Copyright 

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
          <a href='https://github.com/EstebanUO' target='_blank' className='me-4 text-reset'>
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
              <h6 className='text-uppercase fw-bold mb-4'>Lenguajes</h6>
              <p>
                <a href='#!' className='text-reset'>
                  JavaScript
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Python
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  SQLite
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
        <a className='text-reset fw-bold' href='/'>Healthy Corporation </a>©Copyright 2021-2022.
      </div>
    </MDBFooter>
    )
}