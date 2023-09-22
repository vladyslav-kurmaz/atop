import Image from "next/image"
import aboutUs from '../../image/aboutus.webp';

const AboutUs = () => {

  return (
    <>
      <div className="about">
        {/* {preloader ? <Preloader close={setPreloader}/> : null} */}
        <h1 className='about__title'>About ATED</h1>

        <div className="about__container">
          <div className="about__container-info">
            <p className="about__container-info-text">
              We are an engineering company with extensive experience in developing documentation, manufacturing and aging of interior interiors and exteriors and electrical equipment for passenger cars of the series 61-779, 47K, 47D and 47k as well as the traction rolling stock and motor-vehicle rolling stock.
            </p>
            <ul className="about__container-info-list">
              <li className="about__container-info-list-item">
                <h3 className="about__container-info-list-item-title">Flexible & Understanding</h3>
                <p className='about__container-info-list-item-text'>
                  We are all remote with collaboration spaces in NY and Miami. Employees have the autonomy to build their workday, we understand life happens and flexibility is important.
                </p>
              </li>
              <li className="about__container-info-list-item">
                <h3 className="about__container-info-list-item-title">Growth & Development</h3>
                <p className='about__container-info-list-item-text'>
                  We are all remote with collaboration spaces in NY and Miami. Employees have the autonomy to build their workday, we understand life happens and flexibility is important.
                </p>
              </li>
              <li className="about__container-info-list-item">
                <h3 className="about__container-info-list-item-title">Open & Transparent</h3>
                <p className='about__container-info-list-item-text'>
                  We are all remote with collaboration spaces in NY and Miami. Employees have the autonomy to build their workday, we understand life happens and flexibility is important.
                </p>
              </li>
              <li className="about__container-info-list-item">
                <h3 className="about__container-info-list-item-title">Helpful & Supportive</h3>
                <p className='about__container-info-list-item-text'>
                  We are all remote with collaboration spaces in NY and Miami. Employees have the autonomy to build their workday, we understand life happens and flexibility is important.
                </p>
              </li>
            </ul>
          </div>
          <div className="about__container-img">
            <Image
              src={aboutUs}
              alt=''
              className='about__container-img-picture'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;