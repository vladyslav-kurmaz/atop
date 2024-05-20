import Slider from 'react-slick';
import {Dispatch, SetStateAction} from "react";
import Image from 'next/image';

import './SliderForSertificate.scss';

const SliderGalery = ({data, initialSlide, close}: {data: string[], initialSlide: number, close: Dispatch<SetStateAction<boolean>>}) => {

  const renderSlide = () => {
    return data.map((item, i) => {
      return <div className="galery__image" key={i}>
        <img 
          width={1000} 
          height={1000} 
          src={item} 
          loading='lazy' 
          className="galery__image-picture" 
          alt={`slide ${i}`} key={i} />
      </div>
    })
  }  

  const settings = {
    arrows:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    initialSlide: initialSlide,
    responsive: [
      
    ],
  };

  const closeSlider = () => {
    close(false)
    document.body.style.overflow = '';
  }

  return (
    <div className='galery'>
      <div className="galery__container">
        <span className='galery__close' onClick={() => closeSlider()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <mask id="mask0_652_1294" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
              <rect width="40" height="40" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_652_1294)">
              <path d="M10.4718 31.4722L8.52734 29.5278L18.0551 20L8.52734 10.4722L10.4718 8.52783L19.9996 18.0556L29.5273 8.52783L31.4718 10.4722L21.944 20L31.4718 29.5278L29.5273 31.4722L19.9996 21.9445L10.4718 31.4722Z" fill="#232323"/>
            </g>
        </svg>
        </span>
        <Slider {...settings} >
          {renderSlide()}
        </Slider>
      </div>
    </div>
  )
}

export default SliderGalery;