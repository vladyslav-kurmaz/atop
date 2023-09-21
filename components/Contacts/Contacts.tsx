import Image from "next/image"
import contact from '../../image/mainPage/contact.webp';

const Contacts = () => {
  return (
    <div className="mainPage__contacts" id='contacts'>
      <div className="mainPage__contacts-container">
        <h3 className="mainPage__contacts-container-title">Contacts</h3>
        <ul className="mainPage__contacts-container-list">
          <li className="mainPage__contacts-container-list-item">
            <span className="mainPage__contacts-container-list-item-title">Address</span>
            <p className="mainPage__contacts-container-list-item-text">
              Ukraine, Kharkiv 61033 Shevchenko street, 317
            </p>
          </li>
          <li className="mainPage__contacts-container-list-item">
            <span className="mainPage__contacts-container-list-item-title">Write us</span>
            <p className="mainPage__contacts-container-list-item-text">info@ator.com.ua</p>
          </li>
          <li className="mainPage__contacts-container-list-item">
            <span className="mainPage__contacts-container-list-item-title">For all requests</span>
            <p className="mainPage__contacts-container-list-item-text">+38 095-303-2313</p>
          </li>
        </ul>
      </div>
      <Image
        className='mainPage__contacts-img'
        src={contact}
        loading='lazy'
        alt=''/>
    </div>
  )
}

export default Contacts;