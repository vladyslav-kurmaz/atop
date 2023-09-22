'use client'

import CertificatesAndPatents from "@/components/CertificatesAndPatents/CertificatesAndPatents";

import { Suspense } from "react";
import Preloader from "@/components/Preloader/Preloader";


import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Patents – А.E.T.D',
  description: 'Patents presented by the company А.E.T.D'
}

import './Patents.scss';




export default function Patents() {
  return (
    <Suspense fallback={<Preloader/>}>
      <div className="patents">
        <h1 className="patents__title">Patents</h1>
        <p className="patents__text">
          One of the directions of the company{`'`}s activity is research and development work on the search for the latest technologies and materials, which are embodied in the design of products. A lot of own developments of A.T.O.R. NGO LLC protected by a number of patents in the field of passenger rail transport.
        </p>

        <CertificatesAndPatents status={true}/>

      </div>
    </Suspense>
    
  )
}