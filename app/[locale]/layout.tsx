import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationProvider/TranslationProvider";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata({ params }: { params: any }) {
  return {
    title: params.locale === "en" ? "LLC NVO A.T.O.R." : "ТОВ «НВО «А.Т.О.Р.",
  };
}

export default async function RootLayout({
  children,
  modal,
  params,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: Params;
}) {
  const { t, resources } = await initTranslations(params?.locale, [
    "header",
    "footer",
  ]);


  return (
    <html lang="en">
      <body>
        {modal}
        <TranslationsProvider
          namespaces={["header"]}
          locale={params?.locale}
          resources={resources}
        >
          <Header />
        </TranslationsProvider>

        <main>{children}</main>
        <TranslationsProvider
          namespaces={["footer"]}
          locale={params?.locale}
          resources={resources}
        >
          <Footer />
        </TranslationsProvider>

      </body>
    </html>
  );
}
