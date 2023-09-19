import Image from "next/image";
import Link from "next/link";
import {Dispatch, SetStateAction} from 'react';

import logo from '../../image/logo.webp';

import './ThankYou.scss';

const ThankYou = ({changeState}: {changeState: Dispatch<SetStateAction<boolean>>}) => {

  const goToMain = () => {
    changeState(false);
    document.body.style.overflow = '';
  }

  return (
    <div className="thankyou">
      <div className="thankyou__container">
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className="thankyou__container-logo"
        />
        <h2 className="thankyou__container-title">Thank you for your interest in our company!</h2>
        <p className="thankyou__container-text">Our manager will contact you soon</p>
        <Link href={'/'}
          onClick={goToMain}
          className="thankyou__container-link">
          Return to the main page
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <mask id="mask0_629_644" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
              <rect width="20" height="20" fill="#FFFFFF"/>
            </mask>
            <g mask="url(#mask0_629_644)">
              <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#FFFFFF"/>
            </g>
          </svg>  
        </Link>
      </div>
    </div>
  )
}

export default ThankYou;