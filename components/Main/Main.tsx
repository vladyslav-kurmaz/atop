import Link from "next/link";

const MainComponent = () => {
  return (
    <div className="mainPage__first">
        <img 
          src="/mainImage.webp" 
          alt="main image" 
          property="true" 
          className='mainPage__first-backgroung-img' 
          style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover', width: '100%', height: '100%'}}
          loading="eager"
        
        />

        <div className="mainPage__first-container">
          <h1 className='mainPage__first-title'>We create products for rail transport & underground</h1>

          <p className='mainPage__first-description'>We offer components for major repairs of wagons of different series, electrical equipment, interior elements for passenger cars, control panels and other.</p>

          <Link href={'/products/2'} className='mainPage__first-button'>Read More</Link>
        </div>
      </div>
  )
}

export default MainComponent;