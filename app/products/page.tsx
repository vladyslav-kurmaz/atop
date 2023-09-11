'use client';
import Link from 'next/link';
import './Products.scss';
import { Metadata } from 'next';


const data = [
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
]

// export const metadata: Metadata = {
//   title: 'AETD Products', 
// }

export default function Products() {

  const renderProduct = () => {
    return data.map((item, i) => {
      const {title} = item;

      const number = () => {
        if (i < 9) {
          return `0${i + 1}`
        } else {
          return i + 1
        }
      }

      return (
        <li className="products__list-item" key={i}>
          <p className="products__list-item-text">{title}</p>
          <div className="products__list-item-container">
            <span className="products__list-item-container-num">{number()}</span>
            <Link href={`/products/${i}`} className="products__list-item-container-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <mask id="mask0_385_1187" style={{'maskType':'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_385_1187)">
                  <path d="M5.0625 15L4 13.9375L12.4375 5.5H5V4H15V14H13.5V6.5625L5.0625 15Z" fill="white"/>
                </g>
              </svg>
            </Link>
          </div>
        </li>
      )
    })
  }

  return (
    <div className="products">
      <h1 className='products__title'>Our Products</h1>
      <p className="products__text">
        We specialize in the development and production of electronic devices of various complexity, testing equipment for rail transport and aviation industry.
      </p>

      <ul className="products__list">
        {renderProduct()}
      </ul>
    </div>
  )
}