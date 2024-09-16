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

import "./Patents.scss";
import initTranslations from "@/app/i18n";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default async function SystemManage({ params }: { params: Params }) {
  const { t, resources } = await initTranslations(params.locale, ["qualitySystem"]);
  const data = [
    "/system/system-1.webp",
    "/system/system-2.webp",
    "/system/system-3.webp",
    "/system/system-4.webp",
    "/system/system-5.webp",
  ];
  return (
    // <Suspense fallback={<Preloader/>}>
    <div className="patents">
      <h1 className="patents__title">{t("system-title")}</h1>
      <p className="patents__text">{t("system-desc")}</p>

      <CertificatesAndPatents data={data}/>
    </div>
    // </Suspense>
  );
}
