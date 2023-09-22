import Slider from "react-slick"
import Image from "next/image"

import aps from '../../image/mainPage/aps.webp';
import donetck from '../../image/mainPage/donetck.webp';
import lviv from '../../image/mainPage/lviv1.webp';
import odesa from '../../image/mainPage/odesa.webp';
import ukr from '../../image/mainPage/ukr.webp';

const Partners = () => {

  const settings = {
    arrows: true,
    centerPadding: '0px',
    dots: false,
    centerMode: true,
    infinite: true, 
    speed: 0, 
    slidesToShow: 5, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 4,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 3000
        },
      },
      {
        breakpoint: 1000, 
        settings: {
          slidesToShow: 3,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 3000
        },
      },
      {
        breakpoint: 700, 
        settings: {
          slidesToShow: 2,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 3000
        },
      },
      {
        breakpoint: 500, 
        settings: {
          slidesToShow: 1,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 3000
        },
      },
    ],
  };

  return (
    <div className="mainPage__partners">
      <h3 className='mainPage__partners-title'>Our Partners & Clients</h3>

      <div className="mainPage__partners-container">

        <Slider {...settings}>
            <div className="mainPage__partners-container-list-item">
              <Image
                src={aps}
                alt='aps'
                className="mainPage__partners-container-list-item-img"
              />
              <h3>APS Energia</h3>
            </div>
            <div className="mainPage__partners-container-list-item">
              <Image
                src={lviv}
                alt='aps'
                className="mainPage__partners-container-list-item-img"
              />
              <h3>Lviv Railroad</h3>
            </div>
            <div className="mainPage__partners-container-list-item">
              <Image
                src={donetck}
                alt='aps'
                className="mainPage__partners-container-list-item-img"
              />
              <h3>Donetsk Railroad</h3>
            </div>
            <div className="mainPage__partners-container-list-item">
              <Image
                src={odesa}
                alt='aps'
                className="mainPage__partners-container-list-item-img"
              />  
              <h3>Odesa Railroad</h3>
            </div>
            <div className="mainPage__partners-container-list-item">
              <Image
                src={ukr}
                alt='aps'
                className="mainPage__partners-container-list-item-img"
              />
              <h3>Ukrzaliznytsia</h3>
            </div>
        </Slider>
      </div>
    </div>

  )
}

export default Partners;