import Slider from 'react-slick';
import '@splidejs/react-splide/css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.scss'

const CustomSlider = ({data}: {data: string[]}) => {

  const settings = {
    arrows:true,
    centerPadding: '150px',
    dots: false, // Показувати точки для навігації
    centerMode: true,
    infinite: true, // Безкінечний слайдер
    speed: 500, // Швидкість переміщення слайдів
    slidesToShow: 1, // Кількість видимих слайдів одночасно
    slidesToScroll: 1, // Кількість слайдів, що переміщуються при натисканні кнопок "Наступний" і "Попередній"
    responsive: [
      {
        breakpoint: 1265, // Змінити налаштування для планшетів і більших екранів
        settings: {
          centerPadding: '0px',
        },
      },
    ],
  };

  const renderSlide = () => {
    return data.map((item, i) => {
      return <div className="slider__image">
        <img src={item} alt={`slide ${i}`} key={i } />
      </div>
    })
  }

  return (
    <div className='slider'>
      <Slider {...settings}>
        {renderSlide()}
      </Slider>
    </div>
  )
}

export default CustomSlider;