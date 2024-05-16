import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import {Manrope}
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationProvider/TranslationProvider";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { ChakraProvider } from "@chakra-ui/react";
import { Providers } from "../providers";

// export const metadata: Metadata = {
//   title: 'A.E.T.D.',
//   description: 'Aerospace technologies of equipment and development'
// //   <link rel="preconnect" href="https://fonts.googleapis.com">
// // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// // <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&display=swap" rel="stylesheet"></link>
// }

export async function generateMetadata({ params }: { params: any }) {
  return { title: "ТОВ «НВО «А.Т.О.Р." };
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
  const { t, resources } = await initTranslations(params?.locale, ["header", "footer"]);
  // console.log( await initTranslations(params?.locale, ["header"]));
  // console.log();

  return (
    <html lang="en">
      <body>

        {/* <ChakraProvider> */}
        {/* <Providers> */}
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
          
        {/* </Providers> */}
        {/* </ChakraProvider> */}
      </body>
    </html>
  );
}
