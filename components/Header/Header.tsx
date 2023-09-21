'use client'

import Link from 'next/link'
import Image from 'next/image';
import {useState, MouseEvent, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { Spiral as Hamburger, Spiral } from 'hamburger-react';

import logoSmall from '../../image/logo.webp'

import './Header.scss';


export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [animationMobileMenu, setAnimationMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

  }, [openMobileMenu])

  const activeLink = (path: string) => {
    let id: string = '';

    const arr = pathname.split('')
    arr.map(item => +item >= 0 ? id += item : null);

    return pathname === path || pathname === `${path}/${id}` ? {color: '#2044A1'} : {};
  }

  const closeModileMenu = (e?: MouseEvent) => {
    if (openMobileMenu) {
      setAnimationMobileMenu(true);
      setTimeout(() => setOpenMobileMenu(false), 300);

    } else {
      setAnimationMobileMenu(false);
      setOpenMobileMenu(true);

    }
    
  }


  return pathname === '/writeUs' ? null :
      <header className="header" 
        // style={openMobileMenu ? {'position': 'fixed'} : {'position': 'static'}}
        >
      <div className='header__desctop'>
        <Link href={'/'} >
          <Image
            src={logoSmall}
            alt='logo'
            className='header__desctop-logo'
          />  
        </Link>

        <div className="header__container">
          <nav className='header__navigation desctop'>
            <ul className="header__list ">
              <li className='header__list-item'>
                <Link 
                  className='header__list-item-link'
                  href={'/servicesPage'} 
                  style={activeLink('/servicesPage')}>Services</Link>                    
              </li>
              <li className='header__list-item'>
                <Link href={'/products'} style={activeLink('/products')}>Products</Link>  
              </li>
              <li className='header__list-item'><Link href={'/qualitySystem'} style={activeLink('/qualitySystem')}>Quality System</Link></li>
              <li className='header__list-item'><Link href={'/about'} style={activeLink('/about')}>About</Link></li>
              <li className='header__list-item'><Link href={'/#contacts'} style={activeLink('/#contacts')}>Contacts</Link></li>
              {/* <li className='header__list-item'>
                <select name="" id="">
                  <option value="uk">UK</option>
                  <option value="EN">EN</option>
                </select>
              </li> */}
            </ul>
          </nav>

          <Link 
            href={'/writeUs'}
            className='header__button button'>
            Write Us
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask id="mask0_346_285" style={{'maskType':'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_346_285)">
              <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="white"/>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      
      <div className='header__mobile'>
        <div className="header__container flex justify-between items-center">
          <nav className='header__navigation mobile'>
            <div className='header__navigation-icon'>
              <Spiral label="Show menu" toggled={openMobileMenu} 
                // toggle={setOpenMobileMenu}
                onToggle={() => closeModileMenu()}
              />
            </div>
            <Link href={'/'} className='header__mobile-logo' onClick={() => closeModileMenu()}>
              <Image
                src={logoSmall}
                alt='logo'
                className='header__desctop-logo'
              />  
            </Link>
          </nav>
          <Link
            href={'/writeUs'}
            // onClick={() => setshowModal(true)} 
            className='header__button button'>
            Write Us
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask id="mask0_346_285" style={{'maskType':'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_346_285)">
              <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="white"/>
              </g>
            </svg>
          </Link>
        </div>

        {
            openMobileMenu ?
            (<ul className="header__list-mobile" style={animationMobileMenu ? {
                  animationName: 'closeMenu',
                  animationDuration: '.3s',
                  animationTimingFunction: 'linear'
                } : {}}>
              <li className='header__list-item'>
                <Link className='header__list-item-link' onClick={() => setOpenMobileMenu(false)} href={'/servicesPage'}>Services</Link>   
              </li>
              <li className='header__list-item'>
                <Link href={'/products'} onClick={() => setOpenMobileMenu(false)}>Products</Link>  
              </li>
              <li className='header__list-item'><Link href={'/qualitySystem'} onClick={() => setOpenMobileMenu(false)}>Quality System</Link></li>
              <li className='header__list-item'><Link href={'/about'} onClick={() => setOpenMobileMenu(false)}>About</Link></li>
              <li className='header__list-item'><Link href={'/#contacts'} onClick={() => setOpenMobileMenu(false)}>Contacts</Link></li>
              {/* <li className='header__list-item'>
                <select name="" id="">
                  <option value="uk">UK</option>
                  <option value="EN">EN</option>
                </select>
              </li> */}
            </ul>)
            :
            null
          }
      </div>

      {/* {
        serviceSub ?
          <ul className="header__submenu"
            // onMouseLeave={(e: MouseEvent) => setServiceSub(false)}
          >
            <li className="header__submenu-item"><Link href={'/servicesPage#developmentOfConstructionDocumentation'}>Development of Construction Documentation</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#softwareDevelopment'}>Software Development</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#metalworking'}>Metalworking</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#productionOfCompositeMaterials'}>Production of Composite Materials</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#applianceDevelopment'}>Appliance Development</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#constructionManufacturing'}>Construction Manufacturing</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#paintingManufacturing'}>Painting Manufacturing</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#legalBrokerageServices'}>Legal & Brokerage Services</Link></li>
          </ul> 
          :
          null
      } */}

      {/* {
        productSub ?
          <ul className="header__submenu big"
            onMouseLeave={(e: MouseEvent) => setProductSub(false)}
          >
            <li className="header__submenu-item"><Link href={'/servicesPage#fittingsForBuildingNewCarsSeries779'}>Fittings for Building New Cars Series 779</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#fittingsForCapitalRestoredRepairCarsSeries47k'}>Fittings for Capital & Restored Repair Cars Series 47k</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#accessoriesforMajorRepairsofCars'}>Accessories for Major Repairs of Cars (open-air cart-cars)</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#electricalApplication'}>Electrical Application</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#sanitaryModule'}></Link>Sanitary Module</li>
            <li className="header__submenu-item"><Link href={'/servicesPage#setOfEcoToiletForPassengeCarsModels'}>Set of Eco Toilet for Passenger Cars Models 61-779, 47K (D)</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#setOfToiletElementsforDieselTrainsandElectricTrains'}>Set of Toilet Elements for Diesel Trains and Electric Trains</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#fittingsForCapitalRecoveryRepairOfUndergroundVehicles'}>Fittings for Capital & Recovery Repair of Underground Vehicles & Cars Series 714/717</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#accessoriesForMajorRepairsOfSubwayCarsOfModels'}>Accessories for Major Repairs of Subway Cars of Models 81-7021, 81-7022, 81-7036, 81-7037</Link></li>
            <li className="header__submenu-item"><Link href={'/servicesPage#trainingComplexForTrainDriver'}>Training Complex for Train Driver</Link></li>
          </ul> 
          :
          null
      } */}
    </header>
    
   
  
}