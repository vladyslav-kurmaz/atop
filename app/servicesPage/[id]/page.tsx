'use client'

import Image from 'next/image';
import {useState} from 'react';
import './servicePage.scss';
import ServiceProductSlider from '@/components/ServiceProductSlider/ServiceProductSlider';

type Props = {
  params: {
    id: string
  }
}

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

export default function ServicePage() {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className="servicePage">
        <Image
          src={'/servicesPage/aboutus.webp'}
          alt=''
          width={7000}
          height={1000}
          className='servicePage__img'
        />

        <div className="servicePage__container">
          <span className='servicePage__container-title'>Services</span>

          <div className="servicePage__container-service">
            <h2 className="servicePage__container-service-title">Development of Construction Documentation</h2>
            <div className="servicePage__container-service-text">
              <p className="servicePage__container-service-text-description">
                We are an production and engineering company with a combined warehouse design and technological division, which is engaged in the creation of new types of products for passenger cars, motorized wagons (diesel trains and electric trains), locomotives , subway cars, specially equipped caravans. Our company carries out the process of modernization of the existing car park, ensuring high technical level, competitive patentability, compliance with modern achievements of science and technology, the requirements of technical aesthetics and the eco-friendly technologies.
              </p>
              <button className='servicePage__container-service-text-read'><span>+</span> Read More</button>
              <ul className='servicePage__container-service-text-list'>
                <li className="servicePage__container-service-text-list-item">
                  The design begins with the development of a design project and a detailed elaboration of each element of the designer with the further implementation of it in three-blended models and drawings.
                </li>
              </ul>
            </div>
          </div>

          <div className="servicePage__container-info">
            <Image
              src={'/productInside.webp'}
              alt=''
              width={2000}
              height={2000}
              className="servicePage__container-info-img"
            />

            <div className="servicePage__container-info-container">
              <div className="servicePage__container-info-container-work">
                <h3 className="servicePage__container-info-container-work-title">We Offer</h3>
                <ul className="servicePage__container-info-container-work-list">
                  <li className="servicePage__container-info-container-work-list-item">
                    <span className="servicePage__container-info-container-work-list-item-num">1.</span>
                    <p className="servicePage__container-info-container-work-list-item-text">
                      Development of Design Documentation
                    </p>
                  </li>
                  <li className="servicePage__container-info-container-work-list-item">
                    <span className="servicePage__container-info-container-work-list-item-num">2.</span>
                    <p className="servicePage__container-info-container-work-list-item-text">
                      Reverse Engineering of Products
                    </p>
                  </li>
                  <li className="servicePage__container-info-container-work-list-item">
                    <span className="servicePage__container-info-container-work-list-item-num">3.</span>
                    <p className="servicePage__container-info-container-work-list-item-text">
                      Development The Design Documentation on The Details Provided by The Sample
                    </p>
                  </li>
                  <li className="servicePage__container-info-container-work-list-item">
                    <span className="servicePage__container-info-container-work-list-item-num">4.</span>
                    <p className="servicePage__container-info-container-work-list-item-text">
                      Development of Documentation for Non-standard Designs, Mechanisms
                    </p>
                  </li>
                </ul>
              </div>

              <div className="servicePage__container-info-container-work">
              <h3 className="servicePage__container-info-container-work-title">How We Work</h3>
                <ul className="servicePage__container-info-container-work-list">
                  <li className="servicePage__container-info-container-work-list-item">
                    <span className="servicePage__container-info-container-work-list-item-num">1.</span>
                    <p className="servicePage__container-info-container-work-list-item-text">
                      Our specialist attends customer to perform all necessary measurements in order to evaluate the fraud.
                    </p>
                  </li>
                  <li className="servicePage__container-info-container-work-list-item">
                    <span className="servicePage__container-info-container-work-list-item-num">2.</span>
                    <p className="servicePage__container-info-container-work-list-item-text">
                      The technical task is developed, with the direct participation of the customer.
                    </p>
                  </li>
                  <li className="servicePage__container-info-container-work-list-item">
                    <span className="servicePage__container-info-container-work-list-item-num">3.</span>
                    <p className="servicePage__container-info-container-work-list-item-text">
                      According to technical task, three-dimensional modeling and drawing of drawings are carried out.
                    </p>
                  </li>
                  <li className="servicePage__container-info-container-work-list-item">
                    <span className="servicePage__container-info-container-work-list-item-num">4.</span>
                    <p className="servicePage__container-info-container-work-list-item-text">
                      At the stage of production, our specialists consult the customer.
                    </p>
                  </li>
                </ul>
              </div>
            </div> 
          </div>
        </div>

        <ServiceProductSlider status={false}/>
      </div>
    </>
  )
}
