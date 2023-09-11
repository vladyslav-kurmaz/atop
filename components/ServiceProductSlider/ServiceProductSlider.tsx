import Slider from 'react-slick';
import Link from 'next/link';

import './ServiceProductSlider.scss';

type Title = {
  title: string;
}
const dataProduct: Title[] = [
  {title: 'Set of toilet elements for diesel trains and electric trains'},
  {title: 'Set of Eco Toilet for Passenger Cars Models 61-779, 47K (D)'},
  {title: 'Rail Transport'},
  {title: 'Underground Transport'},
  {title: 'Training Сomplex for Train Driver'},
  {title: 'Sanitary Module'},
  {title: 'Accessories for Major Repairs of Cars (open-air cart-cars)'},
  {title: 'Accessories for Major Repairs of Subway Cars of Models 81-7021, 81-7022, 81-7036, 81-7037'},
  {title: 'Fittings for Capital & Recovery Repair of Underground Vehicles & Cars Series 714/717'},
  {title: 'Fittings for Capital & Restored Repair Cars Series 47k'},
  {title: 'Fittings for Building New Cars Series 779'},
];

const dataService: Title[] = [
  {title: 'Electrical Application'},
  {title: 'Construction Documentation'},
  {title: 'Desktop Applications'},
  {title: 'Software Development'},
  {title: 'IT-outsourcing'},
  {title: 'Web Development'},
  {title: 'Metalworking'},
  {title: 'Composite Materials'},
  {title: 'Appliance Development'},
  {title: 'Construction Manufacturing'},
  {title: 'Painting Manufacturing'},
  {title: 'Legal & Brokerage Services'},
];

const ServiceProductSlider = ({status}: {status: boolean}) => {

  const settings = {
    arrows: true,
    centerPadding: '0px',
    // customPaging: 'padding-right: 50px',
    dots: false, // Показувати точки для навігації
    centerMode: true,
    infinite: true, // Безкінечний слайдер
    speed: 500, // Швидкість переміщення слайдів
    slidesToShow: 2, // Кількість видимих слайдів одночасно
    slidesToScroll: 1, // Кількість слайдів, що переміщуються при натисканні кнопок "Наступний" і "Попередній"
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 600, // Змінити налаштування для планшетів і більших екранів
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  
  const renderProductsOrService = (data: Title[]) => {
    return data.map((item, i) => {
      const {title} = item;
      return (
        <div className="other-item" key={i}>
          <span className="other-item-span">{status? 'Product' : 'Service'}</span>
          <h3 className="other-item-title">{title}</h3>
          <Link href={`/${status ? 'products' : 'servicesPage'}/${i}`} className="other-item-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask id="mask0_450_1520" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
              <rect width="20" height="20" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_450_1520)">
              <path d="M5.0625 15L4 13.9375L12.4375 5.5H5V4H15V14H13.5V6.5625L5.0625 15Z" fill="white"/>
              </g>
            </svg>
          </Link>
        </div>
      )
    })
  }

  return (
    <div className="other">
      <div className="other-container">
        <h3 className="other-container-title">Explore More Products</h3>
        
        <div className="other-slider">
          <Slider {...settings} >
            {renderProductsOrService(status? dataProduct: dataService)}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ServiceProductSlider