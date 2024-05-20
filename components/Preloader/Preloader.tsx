import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';

import preloaderFunk from '@/utils/preloader';

import Spiner from '../Spiner/Spiner';
import logo from '../../image/logo.webp';

import './Preloader.scss';


const Preloader = () => {
  
  // const images = document.images;
  // const imagesTotalCount = images.length;
  // const [imagesLoadedCount, setImagesLoadedCount] = useState(0)

  // // let imagesLoadedCount = 0;
  const [persDisplay, setPersDisplay] = useState(0);
  

  useEffect(() => {
    preloaderFunk(setPersDisplay);
  }, [])
  
  // // const persents = ;
  
  // useEffect(() => {
    
  //   for (let i = 0; i < images.length; i++) {
  //     // console.log(1);
      
  //     let imageClone = new Image();
      
  //     // images[0]?.onload = imageLoaded;
  //     imageClone.onload = imageLoaded;
  //     // imageLoaded()
  //     if (imagesLoadedCount < images.length) {
  //       setImagesLoadedCount(imagesLoadedCount + 1);
  //     }

      
  //   // console.log(images.length);
  //   // console.log(imagesLoadedCount);

  //   console.log(persDisplay);
    
    
  //   // console.log(persents);
    
    
  //   setPersDisplay(( (100 / images.length) * imagesLoadedCount) << 0);
      
  //     // console.log(persDisplay);
  //     // imageClone.onerror = imageLoaded;
  //     // imageClone.src = images[i].src;
  //   }
  // }, [images])

  
  

  

  // function imageLoaded() {
  //   // imagesLoadedCount++;
  //   // console.log(images.length);
  //   // console.log(imagesLoadedCount);
  //   const persents = ( (100 / images.length) * imagesLoadedCount) << 0 > 100 ? 100 : ( (100 / images.length) * imagesLoadedCount)
    
    
  //   setPersDisplay(persents);
  //   console.log(persDisplay);
    
  //   // console.log(persDisplay);
    

  //   if (imagesLoadedCount >= imagesTotalCount) {
  //       setTimeout(function() {
  //         // close(false) 
  //           // const preloader = document.querySelector('.preloader') as HTMLElement;
  //           // if (!preloader.classList.contains('done')) {
  //           //     preloader.classList.add('done');
  //           // }
  //       }, 600);
  //   }
  // }

  console.log('preloader');
  

  return (
    <>
      <div className="preloader">
        <img src="/preloader.webp" loading='lazy' alt="preloader gif" className='preloader__background' />
        <div className="preloader__container">
          {/* <Image
            src={logo}
            alt='logo'
            width={1000}
            height={1000}
            className='preloader__container-img'
          />  */}
          <Spiner/>
          <span className='preloader__container-num'>{persDisplay}%</span>
        </div>
        
      </div>
    </>
  )
}

export default Preloader;