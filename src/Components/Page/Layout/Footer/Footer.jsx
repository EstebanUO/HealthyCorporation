import React from 'react';
// import { Link } from "react-router-dom";

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';


export const Footer = () => {
    return (
        <MDBFooter className='text-center' color='balk' style={{ backgroundColor: '#83c5eb',borderTop: 'solid black' }}>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
  
          <section className=''>
            <form action=''>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='text_footer' >
                    <strong>Suscribete para más </strong>
                  </p>
                </MDBCol>
  
                <MDBCol md='5'  start='12' style={{ marginTop: "-1rem", transition: "all 300ms"}}>
                  <MDBInput contrast type='email' label='' className='mb-4' />
                </MDBCol>
  
                <MDBCol size="auto">
                  <MDBBtn outline color='light'  style={{ marginTop: "-6px", transition: "all 300ms"}}>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>
{/*   
          <section className='mb-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
              voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
              sequi voluptate quas.
            </p>
          </section> */}
  
          <section className=''>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Link</h5> 
  
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>
  
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>
  
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>
  
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>
  
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>
  
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>
  
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgb(83 194 255 / 84%)', borderTop: 'solid black' }}>
          © 2020 Copyright <a className='text-white' href='https://youtube.com/'>Healthy Corporation</a>
        </div>
      </MDBFooter>
    )
}
