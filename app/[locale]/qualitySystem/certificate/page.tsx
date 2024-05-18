// 'use client'

import CertificatesAndPatents from "@/components/CertificatesAndPatents/CertificatesAndPatents";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Certificates – А.E.T.D",
  description: "Certificates presented by the company А.E.T.D",
};

import "./Certificates.scss";
import initTranslations from "@/app/i18n";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default async function Certificate({ params }: { params: Params }) {
  const { t, resources } = await initTranslations(params.locale, ["qualitySystem"]);
  const certificates = [
    "/certificates/1.webp",
    "/certificates/2.webp",
    "/certificates/3.webp",
    "/certificates/4.webp",
    "/certificates/5.webp",
    "/certificates/6.webp",
    "/certificates/7.webp",
    "/certificates/8.webp",
    "/certificates/9.webp",
  ];

  return (
    // <Suspense fallback={<Preloader/>}>
    <div className="certificate">
      <h1 className="certificate__title">{t("sertificat-title")}</h1>
      <p className="certificate__text">{t("sertificat-desc")}</p>

      <CertificatesAndPatents data={certificates} />
    </div>
    // </Suspense>
  );
}
