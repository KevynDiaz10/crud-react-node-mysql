import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

import {faFacebook, faGithub, faLinkedin, faTwitter, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white mt-auto'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn

            floating
            className='m-1 border-dark'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
           <FontAwesomeIcon icon={faFacebook}/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 border-dark'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faTwitter}/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 border-dark'
            style={{ backgroundColor: 'red' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faGoogle}/>
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1 border-dark'
            style={{ backgroundColor: '#000000' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faInstagram}/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 border-dark'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 border-dark'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faGithub}/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
      </div>
    </MDBFooter>
  );
}