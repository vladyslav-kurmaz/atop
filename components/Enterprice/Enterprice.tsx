import Image from "next/image"
import Link from "next/link"

import first from '../../image/mainPage/first.webp';
import third from '../../image/mainPage/third.webp';
import fourth from '../../image/mainPage/fourth.webp';

const Enterprice = () => {
  return (
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
  )
}

export default Enterprice;