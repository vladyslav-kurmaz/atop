import Link from "next/link"

const Direction = () => {
  return (
    <div className="mainPage__direction">
      <h2 className="mainPage__direction-title">Working Directions</h2>
      <ul className="mainPage__direction-list">
        <li className="mainPage__direction-list-item">
          <h3 className="mainPage__direction-list-item-title">Design documentation and engineering development </h3>
          <p className="mainPage__direction-list-item-text">
            We are a production and engineering company with a combined warehouse a design and technological division, which is engaged in the creation of new types products for passenger cars, motorized wagons (diesel trains and electric trains), locomotives, subway cars, specially equipped caravans.
          </p>
          <Link href="/servicesPage/1"  className="mainPage__direction-list-item-readme">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask id="mask0_385_7" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_385_7)">
              <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
              </g>
            </svg>
          </Link>
        </li>
        <li className="mainPage__direction-list-item">
          <h3 className="mainPage__direction-list-item-title">Composite materials and thermoformed plastic production</h3>
          <p className="mainPage__direction-list-item-text">
            Molding under pressure of plastic is carried out on thermoplastics machines in a new specially equipped modern building. Enterprise has its own equipment, has its own approaches to the manufacture of plastic products, constantly improves the production process.
          </p>
          <Link href="/servicesPage/7" className="mainPage__direction-list-item-readme">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask id="mask0_385_7" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_385_7)">
              <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
              </g>
            </svg>
          </Link>
        </li>
        <li className="mainPage__direction-list-item">
          <h3 className="mainPage__direction-list-item-title">Metalworking</h3>
          <p className="mainPage__direction-list-item-text">
            We offer full cycle metal processing services. We work on high precision machines. We use your CD or we are developing a project from the very beginning.
          </p>
          <Link href="/servicesPage/6" className="mainPage__direction-list-item-readme">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask id="mask0_385_7" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_385_7)">
              <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
              </g>
            </svg>
          </Link>
        </li>
        <li className="mainPage__direction-list-item">
          <h3 className="mainPage__direction-list-item-title">IT and web development</h3>
          <p className="mainPage__direction-list-item-text">
            Integrated IT outsourcing and web development services are the most needed and effective solutions for your business
          </p>
          <a href="servicesPage/3" className="mainPage__direction-list-item-readme">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask id="mask0_385_7" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_385_7)">
              <path d="M5.24517 14.7035L4.375 13.8333L12.5753 5.62496H5.12019V4.375H14.7035V13.9583H13.4535V6.50315L5.24517 14.7035Z" fill="#232323"/>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Direction;