// 'use client'

import CertificatesAndPatents from "@/components/CertificatesAndPatents/CertificatesAndPatents";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Patents – А.E.T.D",
  description: "Patents presented by the company А.E.T.D",
};

import "./Patents.scss";
import initTranslations from "@/app/i18n";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default async function SystemManage({ params }: { params: Params }) {
  const { t, resources } = await initTranslations(params.locale, ["qualitySystem"]);

  return (
    // <Suspense fallback={<Preloader/>}>
    <div className="patents">
      <h1 className="patents__title">{t("system-title")}</h1>
      <p className="patents__text">{t("system-desc")}</p>

      <CertificatesAndPatents status={true} />
    </div>
    // </Suspense>
  );
}
