import Image from "next/image"
import Link from "next/link"

import metalDew from '@/image/enterprice/metal-develop.png';
import metal from '@/image/enterprice/metal.png';
import wood from '@/image/enterprice/wood.png';
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import initTranslations from "@/app/i18n";

const data = [
  {
    src: metal,
    title: 'enterprice.cart1.title',
    description: 'enterprice.cart1.description',
    link: ''
  },
  {
    src: metalDew,
    title: 'enterprice.cart2.title',
    description: 'enterprice.cart2.description',
    link: ''
  },
  {
    src: wood,
    title: 'enterprice.cart3.title',
    description: 'enterprice.cart3.description',
    link: ''
  },
]

const Enterprice = async ({ params }: { params: Params }) => {
  const { t } = await initTranslations(params.locale, ["main"]);
  return (
    <div className="mainPage__enterprise">
      <h2 className="mainPage__enterprise-title">
        {t("enterprice.title")}
      </h2>

      <ul className="mainPage__enterprise-list">
          
        {data.map(item => (
          <li className="mainPage__enterprise-list-item">
          <Link href={'/servicesPage/11'} className='mainPage__enterprise-list-item-overLink'></Link>
          
          <div className="mainPage__enterprise-list-item-content">
            <div className="mainPage__enterprise-list-item-content-container">
              <h4 className="mainPage__enterprise-list-item-content-container-title">{t(item.title)}
              <Link href="/servicesPage/11" className="mainPage__enterprise-list-item-content-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_385_345)">
                  <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                </g>
              </svg>
            </Link>
              </h4>
              <Link href="/servicesPage/11" className="mainPage__enterprise-list-item-content-container-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <mask id="mask0_385_345" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_385_345)">
                    <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
                  </g>
                </svg>
              </Link>
            </div>
            <p className="mainPage__enterprise-list-item-content-text">
              {t(item.description)} 
            </p>
            
          </div>
          <div className="mainPage__enterprise-list-item-img">
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt='thecond'
              className='mainPage__enterprise-list-item-img-picture'
            />
          </div>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Enterprice;