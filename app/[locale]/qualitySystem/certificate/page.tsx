// 'use client'

import CertificatesAndPatents from "@/components/CertificatesAndPatents/CertificatesAndPatents";


export async function generateMetadata({ params }: { params: any }) {
  return {
    title:
      params.locale === "en"
        ? "Certification of materials and products - A.T.O.R"
        : "Сертифікація матеріалів і продукції – А.Т.О.Р",
  };
}
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
