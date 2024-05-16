"use client"

import React, {lazy, Suspense, useEffect, useState} from 'react';

import Preloader from '@/components/Preloader/Preloader';
import preloaderFunk from '@/utils/preloader';
// import Partners from '@/components/Partners/Partners';

// const MainComponent = lazy(() => import('@/components/Main/Main'));
const Experience = lazy(() => import('@/components/Experience/Experience'));
const Grow = lazy(() => import('@/components/Grow/Grow'));
const Direction = lazy(() => import('@/components/Direction/Direction'));
const Enterprice = lazy(() => import('@/components/Enterprice/Enterprice'));
const Partners = lazy(() => import('@/components/Partners/Partners'));
const Contacts = lazy(() => import('@/components/Contacts/Contacts'));

const MainPage = () => {


  return (
    <div className='mainPage'>
      {/* {preloader ? <Preloader/> : null} */}
      {/* close={setPreloader}
      {preloader ? <Preloader /> : null} */}

        {/* {true && <Preloader />} */}

      <Suspense fallback={<Preloader/>}>

        {/* <MainComponent/> */}
        <Experience/>
        <Grow/>
        <Direction/>
        <Enterprice/>
        <Partners/>
        <Contacts/>
      </Suspense>

      
    </div>
  )
}

export default MainPage;