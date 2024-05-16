'use client'

import {MouseEvent} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

import logo from '../../image/logo.webp';

import './Footer.scss';
import { useTranslation } from 'react-i18next';

// {open}: {open: () => void}

const Footer = () => {
  const {t} = useTranslation(['footer'])
  const pathname = usePathname()

  const showCloseMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('footer__company-title')) {
      const span = target.parentElement?.children[1] as HTMLElement;
      const parentnextSibling = target.parentElement?.nextElementSibling as HTMLElement;
      const parentParent = target.parentElement?.parentElement as HTMLElement;

      if (!parentParent.classList.contains('show')) {
        parentParent.classList.add('show');
        parentnextSibling.classList.add('show');
        span.textContent = '-';
      } else {
        parentnextSibling.classList.remove('show');
        parentParent.classList.remove('show');
        span.textContent = '+';
        
      }
    } else {
      const parentNextElement = target.parentElement?.nextElementSibling as HTMLElement;
      const parentParent = target.parentElement?.parentElement as HTMLElement;

      if (parentNextElement.classList.contains('show') && parentParent.classList.contains('show')) {

        parentNextElement.classList.remove('show');
        parentParent.classList.remove('show');
        target.textContent = '+';
      } 
      else {
        parentNextElement.classList.add('show');
        parentParent.classList.add('show');
        target.textContent = '-';
      }
    } 

  }

  return pathname === '/writeUs' || pathname === "/en/writeUs" ? null :
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <Image
            src={logo}
            alt='logo'
            className="footer__info-img"
          />
          <p className="footer__info-text">{t("title")}</p>
          <Link href={'/writeUs'}
            // onClick={open} 
            className="footer__info-contact">
            {t("write-us")}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask id="mask0_385_95" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_385_95)">
              <path d="M5.0625 15L4 13.9375L12.4375 5.5H5V4H15V14H13.5V6.5625L5.0625 15Z" fill="#232323"/>
              </g>
            </svg>
          </Link>
        </div>

        <div className="footer__container-company">

          <div className="footer__container-title">
            <span className="footer__company-title" onClick={(e) => showCloseMenu(e)}>
            {t("company")}
            </span>
            <span onClick={(e) => showCloseMenu(e)}>+</span>  
          </div>  

          <ul className="footer__company">
            
            <li className="footer__company-item"><Link href="/servicesPage" className="footer__company-item-link">{t("services")}</Link></li>
            <li className="footer__company-item"><Link href="/products/passenger" className="footer__company-item-link">{t("products")}</Link></li>
            <li className="footer__company-item"><Link href="/qualitySystem/certificate" className="footer__company-item-link">{t("quality-system")}</Link></li>
            <li className="footer__company-item"><Link href="/about" className="footer__company-item-link">{t("about")}</Link></li>
            <li className="footer__company-item"><Link href="/#contacts" className="footer__company-item-link">{t("contacts")}</Link></li>
          </ul>
        </div>

        <ul className="footer__social">
          <li className="footer__social-item">{t("social-network")}</li>
          <li className="footer__social-item"><a href="#" target="_blank" className="footer__social-item-link">Facebook</a></li>
          <li className="footer__social-item"><a href="https://www.linkedin.com/company/ator-llc/" target="_blank" className="footer__social-item-link">LinkedIn</a></li>
          {/* <li className="footer__social-item"><a href="#" className="footer__social-item-link">Instagram</a></li>
          <li className="footer__social-item"><a href="#" className="footer__social-item-link">Youtube</a></li> */}
          <li className="footer__social-item">
            <a href="#" className="footer__social-item-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <mask id="mask0_385_117" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_385_117)">
                <path d="M9.16671 16.6667V6.52083L4.50004 11.1875L3.33337 10L10 3.33333L16.6667 10L15.5 11.1875L10.8334 6.52083V16.6667H9.16671Z" fill="white"/>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
}

export default Footer