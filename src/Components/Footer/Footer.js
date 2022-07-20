import React from 'react';
import { MDBIcon} from 'mdbreact';
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
        
        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'></h5>
              
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>

                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    
                  </a>
                </li>
              
              </ul>
            </MDBCol>
            
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/about' className='text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Careers
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Policy</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Privacy
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href=''>
          enlightenplus.com
        </a>
      </div>
    </MDBFooter>
  );
}
