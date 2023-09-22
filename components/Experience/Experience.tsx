import Image from "next/image"

import tarmpel from '../../image/mainPage/trampel.webp';
import chair from '../../image/mainPage/chair.webp';

const Experience = () => {
  return (
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
              // layout='fill'
              style={{maxWidth: '656px', maxHeight: '437px', width: '100%', height: '100%', objectFit: 'contain'}}
            />
          </div>

          <div className="mainPage__experience-image-img">
            <Image
              src={chair}  
              alt='chair'
              style={{maxWidth: '656px', maxHeight: '437px', width: '100%', height: '100%', objectFit: 'contain'}}

            />
          </div>
        </div>
      </div>
  )
}

export default Experience;