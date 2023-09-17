"use client"

import Image from 'next/image'
import Link from 'next/link';
import {useState} from 'react';
import Slider from 'react-slick';

import mainImage from '../image/mainPage/mainImage.webp';
import tarmpel from '../image/mainPage/trampel.webp';
import chair from '../image/mainPage/chair.webp';
import first from '../image/mainPage/first.webp';
import thecond from '../image/mainPage/thecond.webp';
import third from '../image/mainPage/third.webp';
import fourth from '../image/mainPage/fourth.webp';
import aps from '../image/mainPage/aps.webp';
import donetck from '../image/mainPage/donetck.webp';
import lviv from '../image/mainPage/lviv1.webp';
import odesa from '../image/mainPage/odesa.webp';
import ukr from '../image/mainPage/ukr.webp';
import contact from '../image/mainPage/contact.webp';

import '../fonts/fonts.css';  
import './mainPage.scss';



export default function Home() {
  const [growStatus, setGrowStatus] = useState(0);
  

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

  const switchSlide = (num: number) => {
    switch(num) {
      case 0:
        return {left: '0px'}
      case 1:
        return {left: '-256px'}
      case 2:
        return {left: '-525px'}
      case 3:
        return {left: '-790px'}
      default: return {left: '0px'}
    }
  }
  

  return (
    <div className='mainPage'>

      <div className="mainPage__first">
          <Image

            src={mainImage}
            alt='main image'
            className='mainPage__first-backgroung-img'
            objectFit='cover'
            layout='fill'
            style={{ position: 'absolute', top: 0, left: 0 }}
            loading='lazy'
            />

        <div className="mainPage__first-container">
          <h1 className='mainPage__first-title'>We create products for rail transport & underground</h1>

          <p className='mainPage__first-description'>We offer components for major repairs of wagons of different series, electrical equipment, interior elements for passenger cars, control panels and other.</p>

          <Link href={'/products/2'} className='mainPage__first-button'>Read More</Link>
        </div>
      </div>

      <div className="mainPage__experience">
        <div className="mainPage__experience-text">

          <div className="mainPage__experience-text-left">
            <h2 className="mainPage__experience-text-left-title">Experience & Departments</h2>
            <p className="mainPage__experience-text-left-description">
              We are an engineering company with extensive experience in developing documentation, manufacturing and aging of interior interiors and exteriors and electrical equipment for passenger cars of the series 61-779, 47K, 47D and 47k as well as the traction rolling stock and motor-vehicle rolling stock.
            </p>
          </div>

          <div className="mainPage__experience-text-right">
            <h3 className="mainPage__experience-text-right-title">The main structural divisions of the enterprise</h3>
            <ul className="mainPage__experience-text-right-list">
              <li className="mainPage__experience-text-right-list-item">
                <span>1.</span>
                <p>Design and Technology Bureau.</p>
              </li>
              <li className="mainPage__experience-text-right-list-item">
                <span>2.</span>
                <p>Department of software development.</p>
              </li>
              <li className="mainPage__experience-text-right-list-item">
                <span>3.</span>
                <p>A production unit, which includes: a batch shop, a welding shop, a frame-folding shop, assembly workshop, an assembly shop for electrical equipment and a workshop for the production of composite materials.</p>
              </li>
              <li className="mainPage__experience-text-right-list-item">
                <span>4.</span>
                <p>Test benches for electrical equipment and toilet systems</p>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="mainPage__experience-image">
          
          <div className="mainPage__experience-image-img">
            <Image
              src={tarmpel}  
              alt='trampel'
              objectFit='contain'
              // layout='fill'
              style={{maxWidth: '656px', maxHeight: '437px', width: '100%', height: '100%', }}
              loading='lazy'
            />
          </div>

          <div className="mainPage__experience-image-img">
            <Image
              src={chair}  
              alt='chair'
              objectFit='contain'
              style={{maxWidth: '656px', maxHeight: '437px', width: '100%', height: '100%'}}
              loading='lazy'
            />
          </div>
        </div>
      </div>

      <div className="mainPage__grow">
        <div className="mainPage__grow-container">
          <h2 className="mainPage__grow-container-title">We Grow Together with Our Projects</h2>


          <div className="main__grow-container-slider">
            <div className="mainPage__grow-container-slider-switchers">
              <button 
                className="mainPage__grow-container-slider-switchers-prev" 
                disabled={growStatus < 1 ? true : false} 
                onClick={() => setGrowStatus(growStatus - 1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_215_4424" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_215_4424)">
                      <path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="#232323"/>
                    </g>
                  </svg>
                </button>
              <button 
                className="mainPage__grow-container-slider-switchers-next" 
                disabled={growStatus > 2 ? true : false} 
                onClick={() => setGrowStatus(growStatus + 1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_215_4436" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_215_4436)">
                      <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#232323"/>
                    </g>
                  </svg>
              </button>
            </div>

            <ul className="mainPage__grow-container-slider-list" style={switchSlide(growStatus)}>
              <li className="mainPage__grow-container-slider-list-item">
                <div className="mainPage__grow-container-slider-list-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M3 9V31L37 9V31L3 9Z" stroke="#2044A1" strokeWidth="3"/>
                  </svg>
                </div>
                <h4 className="mainPage__grow-container-slider-list-item-title">10 years</h4>
                <span className="mainPage__grow-container-list-item-text">Experience in designing and creating products.</span>
              </li>
              <li className="mainPage__grow-container-slider-list-item">
                <div className="mainPage__grow-container-slider-list-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 3L20.0065 19.9843L32.0208 7.97919L20.0157 19.9935L37 20L20.0157 20.0065L32.0208 32.0208L20.0065 20.0157L20 37L19.9935 20.0157L7.97919 32.0208L19.9843 20.0065L3 20L19.9843 19.9935L7.97919 7.97919L19.9935 19.9843L20 3Z" stroke="#2044A1" strokeWidth="3"/>
                  </svg>
                </div>
                <h4 className="mainPage__grow-container-slider-list-item-title">3000m²</h4>
                <span className="mainPage__grow-container-slider-list-item-text">Our production space.</span>
              </li>
              <li className="mainPage__grow-container-slider-list-item">
                <div className="mainPage__grow-container-slider-list-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M30.3101 14.3662C30.3101 20.0913 25.694 24.7324 19.9999 24.7324C14.3057 24.7324 9.68963 20.0913 9.68963 14.3662C9.68963 8.6411 14.3057 4 19.9999 4C25.694 4 30.3101 8.6411 30.3101 14.3662Z" stroke="#2044A1" strokeWidth="3"/>
                    <path d="M30.3104 24.7324H9.68963L7 36H33L30.3104 24.7324Z" stroke="#2044A1" strokeWidth="3"/>
                  </svg>
                </div>
                <h4 className="mainPage__grow-container-slider-list-item-title">110 employees</h4>
                <span className="mainPage__grow-container-slider-list-item-text">We qualitatively perform the assigned tasks.</span>
              </li>
              <li className="mainPage__grow-container-slider-list-item">
                <div className="mainPage__grow-container-slider-list-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                    <path d="M7.98438 17L15.9844 25L35.5156 7M2.48438 2V34H29.4847V2H2.48438Z" stroke="#2044A1" strokeWidth="3"/>
                  </svg>
                </div>
                <h4 className="mainPage__grow-container-slider-list-item-title">60+</h4>
                <span className="mainPage__grow-container-slider-list-item-text">Made sets of interiors for passenger cars.</span>
              </li>
            </ul>
          </div>  
        </div>
      </div>

      <div className="mainPage__direction">
        <h2 className="mainPage__direction-title">Working Directions</h2>
        <ul className="mainPage__direction-list">
          <li className="mainPage__direction-list-item">
            <h3 className="mainPage__direction-list-item-title">Design documentation and engineering development </h3>
            <p className="mainPage__direction-list-item-text">
              We are a production and engineering company with a combined warehouse a design and technological division, which is engaged in the creation of new types products for passenger cars, motorized wagons (diesel trains and electric trains), locomotives, subway cars, specially equipped caravans.
            </p>
            <a href="/servicesPage/1" className="mainPage__direction-list-item-readme">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <mask id="mask0_385_7" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_385_7)">
                <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                </g>
              </svg>
            </a>
          </li>
          <li className="mainPage__direction-list-item">
            <h3 className="mainPage__direction-list-item-title">Composite materials and thermoformed plastic production</h3>
            <p className="mainPage__direction-list-item-text">
              Molding under pressure of plastic is carried out on thermoplastics machines in a new specially equipped modern building. Enterprise has its own equipment, has its own approaches to the manufacture of plastic products, constantly improves the production process.
            </p>
            <Link href="/servicesPage/7" className="mainPage__direction-list-item-readme">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <mask id="mask0_385_7" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_385_7)">
                <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                </g>
              </svg>
            </Link>
          </li>
          <li className="mainPage__direction-list-item">
            <h3 className="mainPage__direction-list-item-title">Metalworking</h3>
            <p className="mainPage__direction-list-item-text">
              We offer full cycle metal processing services. We work on high precision machines. We use your CD or we are developing a project from the very beginning.
            </p>
            <Link href="/servicesPage/6" className="mainPage__direction-list-item-readme">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <mask id="mask0_385_7" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_385_7)">
                <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                </g>
              </svg>
            </Link>
          </li>
          <li className="mainPage__direction-list-item">
            <h3 className="mainPage__direction-list-item-title">IT and web development</h3>
            <p className="mainPage__direction-list-item-text">
              Integrated IT outsourcing and web development services are the most needed and effective solutions for your business
            </p>
            <a href="servicesPage/3" className="mainPage__direction-list-item-readme">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <mask id="mask0_385_7" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_385_7)">
                <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="mainPage__enterprise">
        <h2 className="mainPage__enterprise-title">
          Enterprise Capabilities
        </h2>

        <ul className="mainPage__enterprise-list">
          <li className="mainPage__enterprise-list-item">
            <Link href={'/servicesPage/8'} className='mainPage__enterprise-list-item-overLink'></Link>
            <div className="mainPage__enterprise-list-item-img">
              <Image
                src={first}
                alt='first'
                loading='lazy'
                className='mainPage__enterprise-list-item-img-picture'
              />
            </div>
            <div className="mainPage__enterprise-list-item-content">
              <div className="mainPage__enterprise-list-item-content-container">
                <h4 className="mainPage__enterprise-list-item-content-container-title">Appliance development</h4>
                <Link href="/servicesPage/8" className="mainPage__enterprise-list-item-content-container-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_385_345)">
                      <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                    </g>
                  </svg>
                </Link>
              </div>
              
              <p className="mainPage__enterprise-list-item-content-text">
                We specializes in the development and manufacture of electronic devices of various complexity, testing equipment for rail transport and aviation industry.
              </p>
              <Link href="/servicesPage/8" className="mainPage__enterprise-list-item-content-button">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_385_345)">
                    <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                  </g>
                </svg>
              </Link>
            </div>
          </li>
          <li className="mainPage__enterprise-list-item">
            <Link href={'/servicesPage/11'} className='mainPage__enterprise-list-item-overLink'></Link>
            <div className="mainPage__enterprise-list-item-img">
              <Image
                src={'/servicesPage/legal_and_brokerage_services.webp'}
                width={1000}
                height={1000}
                alt='thecond'
                loading='lazy'
                className='mainPage__enterprise-list-item-img-picture'
              />
            </div>
            <div className="mainPage__enterprise-list-item-content">
              <div className="mainPage__enterprise-list-item-content-container">
                <h4 className="mainPage__enterprise-list-item-content-container-title">Legal & brokerage services</h4>
                <Link href="/servicesPage/11" className="mainPage__enterprise-list-item-content-container-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_385_345)">
                      <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                    </g>
                  </svg>
                </Link>
              </div>
              <p className="mainPage__enterprise-list-item-content-text">
                We povide quality legal services to organizations that will help management to better focus on the peculiarities of registration, development and promotion of business in the market.
              </p>
              <Link href="/servicesPage/11" className="mainPage__enterprise-list-item-content-button">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_385_345)">
                    <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                  </g>
                </svg>
              </Link>
            </div>
          </li>
          <li className="mainPage__enterprise-list-item">
            <Link href={'/servicesPage/9'} className='mainPage__enterprise-list-item-overLink'></Link>
            <div className="mainPage__enterprise-list-item-img">
              <Image
                src={third}
                alt='third'
                loading='lazy'
                className='mainPage__enterprise-list-item-img-picture'
              />
            </div>
            <div className="mainPage__enterprise-list-item-content">
              <div className="mainPage__enterprise-list-item-content-container">
                <h4 className="mainPage__enterprise-list-item-content-container-title">Construction manufacturing</h4>
                <Link href="/servicesPage/9" className="mainPage__enterprise-list-item-content-container-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_385_345)">
                      <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                    </g>
                  </svg>
                </Link>
              </div>
              <p className="mainPage__enterprise-list-item-content-text">
                The production is equipped with all necessary equipment and tool for collecting, packing and shipment of products to the customer.
              </p>
              <Link href="/servicesPage/9" className="mainPage__enterprise-list-item-content-button">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_385_345)">
                    <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                  </g>
                </svg>
              </Link>
            </div>
          </li>
          <li className="mainPage__enterprise-list-item">
            <Link href={'/servicesPage/10'} className='mainPage__enterprise-list-item-overLink'></Link>
            <div className="mainPage__enterprise-list-item-img">
              <Image
                src={fourth}
                alt='fourth'
                loading='lazy'
                className='mainPage__enterprise-list-item-img-picture'
              />
            </div>
            <div className="mainPage__enterprise-list-item-content">
              <div className="mainPage__enterprise-list-item-content-container">
                <h4 className="mainPage__enterprise-list-item-content-container-title">Painting manufacturing</h4>
                <Link href="/servicesPage/10" className="mainPage__enterprise-list-item-content-container-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_385_345)">
                      <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                    </g>
                  </svg>
                </Link>
              </div>
              <p className="mainPage__enterprise-list-item-content-text">
                It offers services for powder painting of metal and metal structures. In our work we use powder paints of well-known and well-proven European manufacturers. With only drawings on hand, we can create and paint for you any product of any shape.
              </p>
              <Link href="/servicesPage/10" className="mainPage__enterprise-list-item-content-button">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_385_345)">
                    <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                  </g>
                </svg>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="mainPage__partners">
        <h3 className='mainPage__partners-title'>Our Partners & Clients</h3>

        <div className="mainPage__partners-container">

          <Slider {...settings}>
              <div className="mainPage__partners-container-list-item">
                <Image
                  src={aps}
                  alt='aps'
                  loading='lazy'
                  className="mainPage__partners-container-list-item-img"
                />
                <h3>APS Energia</h3>
              </div>
              <div className="mainPage__partners-container-list-item">
                <Image
                  src={lviv}
                  alt='aps'
                  loading='lazy'
                  className="mainPage__partners-container-list-item-img"
                />
                <h3>Lviv Railroad</h3>
              </div>
              <div className="mainPage__partners-container-list-item">
                <Image
                  src={donetck}
                  alt='aps'
                  loading='lazy'
                  className="mainPage__partners-container-list-item-img"
                />
                <h3>Donetsk Railroad</h3>
              </div>
              <div className="mainPage__partners-container-list-item">
                <Image
                  src={odesa}
                  alt='aps'
                  loading='lazy'
                  className="mainPage__partners-container-list-item-img"
                />  
                <h3>Odesa Railroad</h3>
              </div>
              <div className="mainPage__partners-container-list-item">
                <Image
                  src={ukr}
                  alt='aps'
                  loading='lazy'
                  className="mainPage__partners-container-list-item-img"
                />
                <h3>Ukrzaliznytsia</h3>
              </div>
          </Slider>
        </div>
      </div>

      <div className="mainPage__contacts" id='contacts'>
        
        <div className="mainPage__contacts-container">
          <h3 className="mainPage__contacts-container-title">Contacts</h3>
          <ul className="mainPage__contacts-container-list">
            <li className="mainPage__contacts-container-list-item">
              <span className="mainPage__contacts-container-list-item-title">Address</span>
              <p className="mainPage__contacts-container-list-item-text">
                Ukraine, Kharkiv 61033 Shevchenko street, 317
              </p>
            </li>
            <li className="mainPage__contacts-container-list-item">
              <span className="mainPage__contacts-container-list-item-title">Write us</span>
              <p className="mainPage__contacts-container-list-item-text">info@ator.com.ua</p>
            </li>
            <li className="mainPage__contacts-container-list-item">
              <span className="mainPage__contacts-container-list-item-title">For all requests</span>
              <p className="mainPage__contacts-container-list-item-text">+38 095-303-2313</p>
            </li>
          </ul>
        </div>
        <Image
          className='mainPage__contacts-img'
          src={contact}
          loading='lazy'
          alt=''/>
      </div>
    </div>
  )
}
