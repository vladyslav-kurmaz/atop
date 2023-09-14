'use client'
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import './writeUs.scss';

export default function WriteUs({close}: {close: () => void}) {
  const [disabled, setDisabled] = useState(false);
  // const router = useRouter();
  // console.log(router.pathname);
  

  useEffect(() => {
    window.addEventListener('popstate', close);

    return () => {
      window.removeEventListener('popstate', close);
    };
  }, []);

  return (
    <>
      <div className='modal'>
        <form className='modal__form'>
          <div className="modal__form-container">
            <h1 className='modal__form-title'>Hello, ATED!</h1>
            <div className='modal__form-close' onClick={() => {
              
              close()
              
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <mask id="mask0_566_2429" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                  <rect width="40" height="40" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_566_2429)">
                <path d="M10.4718 31.4722L8.52734 29.5278L18.0551 20L8.52734 10.4722L10.4718 8.52783L19.9996 18.0556L29.5273 8.52783L31.4718 10.4722L21.944 20L31.4718 29.5278L29.5273 31.4722L19.9996 21.9445L10.4718 31.4722Z" fill="#929292"/>
                </g>
              </svg>
            </div>
          </div>
          <div className="modal__form-content">
            <label htmlFor="name" className='modal__form-label'>
              <span>Your name</span>
              <input 
                id='name' 
                name='name' 
                type="text" 
                className='modal__form-label-input'
                placeholder='Type your name'/>
            </label>
            <label htmlFor="company" className='modal__form-label'>
              <span>Company or organization name</span>
              <input 
                id='company' 
                name='company' 
                type="text" 
                className='modal__form-label-input'
                placeholder='Type your company or organization name'/>
            </label>
            <label htmlFor="email" className='modal__form-label'>
              <span>Email</span>
              <input 
                id='email' 
                name='email' 
                type="text" 
                className='modal__form-label-input'
                placeholder='example@gmail.com'/>
            </label>
            <label htmlFor="number" className='modal__form-label'>
              <span>Phone number</span>
              <input 
                id='number' 
                name='number' 
                type="tel" 
                className='modal__form-label-input'
                placeholder='Type your phone number'/>
            </label>
            <label htmlFor="country" className='modal__form-label'>
              <span>Your country</span>
              <input 
                id='country' 
                name='country' 
                type="text" 
                className='modal__form-label-input'
                placeholder='Type your country'/>
            </label>
            <label htmlFor="sevices" className='modal__form-label'>
              <span>A product or service that interests you</span>
              <input 
                id='sevices' 
                name='sevices' 
                type="text" 
                className='modal__form-label-input'
                placeholder='Tell us more'/>
            </label>
            <label htmlFor="text" className='modal__form-label'>
              <span>Message</span>
              <textarea 
                id='text' 
                name='message' 
                placeholder='Type your message' 
                className='modal__form-label-input'/>
            </label>
          </div>
          <button className='modal__form-submit' disabled={disabled}>Send Message</button>
        </form>
      </div>
    </>
  )
} 