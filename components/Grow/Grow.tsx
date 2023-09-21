import { useState } from "react";

const Grow = () => {
  const [growStatus, setGrowStatus] = useState(0);

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
    <div className="mainPage__grow">
      <div className="mainPage__grow-container">
        <h2 className="mainPage__grow-container-title">We Grow Together with Our Projects</h2>


        <div className="main__grow-container-slider">
          <div className="mainPage__grow-container-slider-switchers">
            
            <button 
              className="mainPage__grow-container-slider-switchers-prev" 
              name="button for change previous slide"
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
              name="button for change next slide"
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
  )
}

export default Grow;