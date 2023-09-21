import Link from 'next/link';

import './QualitySystem.scss'; 

export default function QualitySystem() {
  return (
   <>
    <div className='qualitySystem'>
      <div className="qualitySystem__container">
        <div className="qualitySystem__container-info">
          <h1 className="qualitySystem__container-info-title">Quality System</h1>
          <p className="qualitySystem__container-info-text">
            We care about quality and work exclusively within official standards. You can familiarize yourself with our certificates.
          </p>
        </div>
        <a href="#" className="qualitySystem__container-view">View Сertificates</a>
      </div>

      <ul className="qualitySystem__list">
        <li className="qualitySystem__list-item">
          <Link href={'/qualitySystem/certificate'} className='qualitySystem__list-item-link'></Link>
          <span className="qualitySystem__list-item-number">01</span>
          <h3 className="qualitySystem__list-item-title">Certificates</h3>
        </li>
        <li className="qualitySystem__list-item">
          <Link href={'/qualitySystem/patents'} className='qualitySystem__list-item-link'></Link>
          <span className="qualitySystem__list-item-number">02</span>
          <h3 className="qualitySystem__list-item-title">Patents</h3>
        </li>
        {/* <li className="qualitySystem__list-item">
          <span className="qualitySystem__list-item-number">03</span>
          <h3 className="qualitySystem__list-item-title">Responsibility</h3>
        </li>
        <li className="qualitySystem__list-item">
          <span className="qualitySystem__list-item-number">04</span>
          <h3 className="qualitySystem__list-item-title">Modernity</h3>
        </li> */}
      </ul>
    </div>
   </>
  )
}