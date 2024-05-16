

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AETD",
};

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
  const { t, resources } = await initTranslations(params.locale, [
    "header",
    "main",
  ]);

  return (
    <div className="mainPage">
      {/* {preloader ? <Preloader/> : null} */}
      {/* close={setPreloader}
    {preloader ? <Preloader /> : null} */}

      {/* {true && <Preloader />} */}

      {/* <Suspense fallback={<Preloader/>}> */}

      <MainComponent params={params} />
      <Experience params={params} />
        <TranslationsProvider
          namespaces={["main"]}
          locale={params?.locale}
          resources={resources}
        >
          <Grow />
        </TranslationsProvider>

      <Direction params={params}/>
      <Enterprice params={params}/>
      <Partners/>
      <Contacts params={params}/>
      {/* </Suspense> */}
    </div>
  );
}

