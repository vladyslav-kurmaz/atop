'use client'

import { Suspense, lazy } from "react";

import Preloader from "@/components/Preloader/Preloader";

const ServicesList = lazy(() => import('@/components/ServicesList/ServicesList'));

const ServicesPage = () => {
  return (
    <Suspense fallback={<Preloader/>}>
      <ServicesList/>
    </Suspense>
  )
}

export default ServicesPage;