import type { Metadata } from "next";
export async function generateMetadata({ params }: { params: any }) {
  return {
    title: params.locale === "en" ? "LLC NVO A.T.O.R." : "ТОВ «НВО «А.Т.О.Р»",
  };
}

import "./mainPage.scss";
import { Suspense, lazy } from "react";
import Preloader from "@/components/Preloader/Preloader";
import MainComponent from "@/components/Main/Main";
import Experience from "@/components/Experience/Experience";
import Grow from "@/components/Grow/Grow";
import Direction from "@/components/Direction/Direction";
import Enterprice from "@/components/Enterprice/Enterprice";
import Partners from "@/components/Partners/Partners";
import Contacts from "@/components/Contacts/Contacts";
import initTranslations from "../i18n";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import TranslationsProvider from "@/components/TranslationProvider/TranslationProvider";

export default async function Home({ params }: { params: Params }) {
  const { t, resources, i18n } = await initTranslations(params.locale, [
    "header",
    "main",
  ]);

  return (
    <div className="mainPage">

      <MainComponent params={params} />
      <Experience params={params} />
      <TranslationsProvider
        namespaces={["main"]}
        locale={params?.locale}
        resources={resources}
      >
        <Grow />
      </TranslationsProvider>

      <Direction params={params} />
      <Enterprice params={params} />

      <TranslationsProvider
        namespaces={["main"]}
        locale={params?.locale}
        resources={resources}
      >
        <Partners />
      </TranslationsProvider>

      <Contacts params={params} />
      {/* </Suspense> */}
    </div>
  );
}
