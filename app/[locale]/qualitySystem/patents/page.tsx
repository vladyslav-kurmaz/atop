// 'use client'

import CertificatesAndPatents from "@/components/CertificatesAndPatents/CertificatesAndPatents";




import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Patents – А.E.T.D',
  description: 'Patents presented by the company А.E.T.D'
}

import './Patents.scss';
import initTranslations from "@/app/i18n";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";




export default async function Patents({ params }: { params: Params }) {
  const { t, resources } = await initTranslations(params.locale, [
    'qualitySystem', 
  ]);
  const patents = [
    "/patents/1.webp",
    "/patents/2.webp",
    "/patents/3.webp",
    "/patents/4.webp",
    "/patents/5.webp",
    "/patents/6.webp",
    "/patents/7.webp",
    "/patents/8.webp",
    "/patents/9.webp",
    "/patents/10.webp",
    "/patents/11.webp",
    "/patents/12.webp",
    "/patents/13.webp",
    "/patents/14.webp",
    "/patents/15.webp",
    "/patents/16.webp",
    "/patents/17.webp",
    "/patents/18.webp",
  ];

  return (
    // <Suspense fallback={<Preloader/>}>
      <div className="patents">
        <h1 className="patents__title">{t('patents-title')}</h1>
        <p className="patents__text">
          {t('patents-desc')}
        </p>

        <CertificatesAndPatents data={patents}/>

      </div>
    // </Suspense>
    
  )
}