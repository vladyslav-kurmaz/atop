'use client';

import ServiceProductSlider from "@/components/ServiceProductSlider/ServiceProductSlider"
import Image from "next/image"
import Link from "next/link";
import './servicesPage.scss';

type Service = {
  src: string,
  title: string,
  description: string
}

const dataServices: Service[] = [
  {src: '/servicesPage/aboutus.webp', title: 'Electrical Application', description: 'Home Electrical equipment kitSTC 3x8 voltage converter APS Energia SA'},
  {src: '/servicesPage/mainImage.webp', title: 'Construction Documentation', description: 'Company combined warehouse design and technological division.'},
  {src: '/servicesPage/aboutus.webp', title: 'Desktop Applications', description: 'One of the areas of software development is the development of software applications.'},
  {src: '/servicesPage/mainImage.webp', title: 'Software Development', description: 'Software that fully meets the requirements of customers and provides qualified assistance at all stages.'},
  {src: '/servicesPage/aboutus.webp', title: 'IT-outsourcing', description: 'Transfer to a specialized company of fullness or private functions related to information technology.'},
  {src: '/servicesPage/mainImage.webp', title: 'Web Development', description: 'Web development of products of any difficulty.'},
  {src: '/servicesPage/aboutus.webp', title: 'Metalworking', description: 'Our production uses zinc plating, chromium plating, cadmium, chemical oxidation'},
  {src: '/servicesPage/mainImage.webp', title: 'Composite Materials', description: 'Molding under pressure of plastic is carried out on thermoplastics machines in a new specially equipped modern building.'},
  {src: '/servicesPage/aboutus.webp', title: 'Appliance Development', description: 'We specialize in the development and manufacture of electronic devices of various complexity, testing equipment for rail transport.'},
  {src: '/servicesPage/mainImage.webp', title: 'Construction Manufacturing', description: 'Section of folding of furniture frames; area of ​​tightening of furniture; assembly area for furniture; assembly of locks.'},
  {src: '/servicesPage/aboutus.webp', title: 'Painting Manufacturing', description: 'Section of folding of furniture frames; area of ​​tightening of furniture; assembly area for furniture; assembly of locks.'},
  {src: '/servicesPage/mainImage.webp', title: 'Legal & Brokerage Services', description: 'We povides quality legal services to organizations that will help management to better focus on important things.'}
]

export default function ServicesPage() {

  const renderService = (data: Service[] ) => {
    return data.map((item, i) => {
      return (
        <li className="service__list-item" key={i}>
          <Image
            src={item.src}
            alt={item.title}  
            width={1000}
            height={1000}
            className="service__list-item-img"
          />
          
          <div className="service__list-item-container">
            <h3 className="service__list-item-title">{item.title}</h3>
            <p className="service__list-item-text">
              {item.description}
            </p>
            <Link href={`/servicesPage/${i}`} className="service__list-item-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <mask id="mask0_450_672" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_450_672)">
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
   <>
    <div className="service">

      <h1 className="service__title">Our Services</h1>
      <p className="service__description">
        We specialize in the development and production of electronic devices of various complexity, testing equipment for rail transport and aviation industry.
      </p>

      <ul className="service__list">
        {renderService(dataServices)}
        {/* <li className="service__list-item">
          <Image
            width={200}
            height={200}
            src={'/servicesPage/aboutus.webp'}
            alt=""
            className="service__list-item-img"  
          />
          
          <div className="service__list-item-container">
            <h3 className="service__list-item-title">Electrical Application</h3>
            <p className="service__list-item-text">
              Home Electrical equipment kitSTC 3x8 voltage converter APS Energia SA
            </p>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <mask id="mask0_450_672" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_450_672)">
                  <path d="M5.0625 15L4 13.9375L12.4375 5.5H5V4H15V14H13.5V6.5625L5.0625 15Z" fill="white"/>
                </g>
              </svg>
            </a>
          </div>
        </li> */}
      </ul>
      {/* <ServiceProductSlider status={false}/> */}
    </div>
   </>
  )
}