'use client';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import {MouseEvent} from 'react';

import SliderGalery from '../SliderForSertificate/SliderForSertificate';

import './CertificatesAndPatents.scss';

const patents = [
  '/patents/1.webp', '/patents/2.webp', '/patents/3.webp', '/patents/4.webp', '/patents/5.webp', '/patents/6.webp', '/patents/7.webp', '/patents/8.webp', '/patents/9.webp', '/patents/10.webp', '/patents/11.webp', '/patents/12.webp', '/patents/13.webp', '/patents/14.webp', '/patents/15.webp', '/patents/16.webp', '/patents/17.webp', '/patents/18.webp' 
];

const certificates = ['/certificates/1.webp', '/certificates/2.webp', '/certificates/3.webp', '/certificates/4.webp', '/certificates/5.webp', '/certificates/6.webp', '/certificates/7.webp']

const CertificatesAndPatents = ({status}: {status: boolean}) => {
  const [initialSlide, setInitialSlide] = useState<null | number>(null);
  const [showSlider, setShowSlider] = useState(false);

  // let initialSlide = 0;

  const data = status ? patents : certificates;

  useEffect(() => {
    if (initialSlide !== null) {
      setShowSlider(() => true);
      document.body.style.overflow = 'hidden';
    }
    
  }, [initialSlide])

  useEffect(() => {
    setShowSlider(() => false);
    document.body.style.overflow = '';
  }, [])

  useEffect(() => {
    !showSlider ? setInitialSlide(null) : initialSlide
  }, [showSlider])

  const renderImage = (data: string[]) => {
    return data.map((item, i) => {
      return <li className="certificateOrPatents__list-item" key={item} data-num={i}>
        <Image
          src={item}
          alt={item}
          width={2000}
          height={2000}
          onClick={(e) => {
            openImage(e);
            
            console.log(initialSlide);
            console.log(showSlider);
            
            
          }}
          className='certificateOrPatents__list-item-img'
        />
      </li>
    })
  }

  const openImage = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.tagName === 'IMG') {
      const num = target.parentElement?.getAttribute('data-num');

      if (num !== null && num !== undefined) {
        setInitialSlide(() => +num);
        // initialSlide = +num;
      }
    } else if (target.tagName === 'LI') {
      const num = target.getAttribute('data-num');

      if (num !== null && num !== undefined) {
        setInitialSlide(() => +num);
        // initialSlide = +num;
      }
    }
  }

  return (
    <>
      {showSlider && initialSlide !== null ? <SliderGalery data={data} initialSlide={initialSlide} close={setShowSlider}/> : null}
      <ul className='certificateOrPatents__list'>
        {renderImage(data)}
      </ul>
    </>
    
  )
}

export default CertificatesAndPatents;